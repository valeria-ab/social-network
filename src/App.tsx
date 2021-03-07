import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionTypes, StatePropsType, StoreType} from './redux/state';

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionTypes) => void
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route exact path={'/profile'} render={() => <Profile
                    dispatch={props.dispatch}
                    profilePage={props.store.getState().profilePage}
                />}/>
                <Route exact path={'/dialogs'} render={() => <Dialogs
                    store={props.store}
                />}
                />
                {/* <Route path ={'/news'} component={News}/>
                    <Route path ={'/music'} component={Music}/>
                    <Route path ={'/settings'} component={Settings}/>*/}
            </div>
        </div>
    );
}

export default App;
