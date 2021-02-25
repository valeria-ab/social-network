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
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

function App(props: AppPropsType) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path ={'/profile'} render={() => <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route exact path ={'/dialogs'} render={() => <Dialogs messagesPage={props.state.messagesPage}/>}
                    />
                   {/* <Route path ={'/news'} component={News}/>
                    <Route path ={'/music'} component={Music}/>
                    <Route path ={'/settings'} component={Settings}/>*/}
                </div>
            </div>
    );
}

export default App;
