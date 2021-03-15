import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {StoreType} from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    store: StoreType
}


function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route exact path={'/profile'} render={() => <Profile
                    store={props.store}

                />}/>
                <Route exact path={'/dialogs'} render={() => <DialogsContainer
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
