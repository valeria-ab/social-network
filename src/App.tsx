import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {StatePropsType} from './redux/state';

type AppPropsType ={
    state: StatePropsType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path ={'/profile'} render={() => <Profile profilePage={props.state.profilePage} />}/>
                    <Route exact path ={'/dialogs'} render={() => <Dialogs messagesPage={props.state.messagesPage}/>}
                    />
                   {/* <Route path ={'/news'} component={News}/>
                    <Route path ={'/music'} component={Music}/>
                    <Route path ={'/settings'} component={Settings}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
