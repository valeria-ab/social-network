import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './common/Preloader/Preloader';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/app-reducer";
import { AppStateType } from './redux/redux-store';


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
