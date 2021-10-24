import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from 'react-redux';
import {initializeApp} from "./redux/app-reducer";
import { compose } from 'redux';
import { AppStateType } from './redux/redux-store';
import Preloader from './common/Preloader/Preloader';


type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}

type AppComponentPropsType = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<AppComponentPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        } 
          return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer />} />
                    <Route path={'/dialogs'} render={() => <DialogsContainer />} />
                    <Route path={'/users'} render={() => <UsersContainer />} />
                    <Route path={'/login'} render={() => <Login />} />
                    {/*<Route path ={'/news'} component={News}/>
                    <Route path ={'/music'} component={Music}/>
                    <Route path ={'/settings'} component={Settings}/>*/}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
