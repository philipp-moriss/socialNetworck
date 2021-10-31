import React from 'react';
import './App.css';
import Navbar from "./component/Nav/Nav";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Setings from "./component/Setings/Setings";
import Friends from "./component/Friends/Friends";
import Welcom from "./component/welcom/Welcom";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from './component/Users/UsersContainer';
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from './component/header/HeaderContainer';
import Login from "./component/Login/Login";




export const PATH = {
    PROFILE: '/Profile/:userID?',
    DIALOGS: '/Dialogs',
    NEWS: '/News',
    MUSIC: '/Music',
    SETTINGS: '/Settings',
    FRIENDS: '/Friends',
    WELCOM: '/',
    USERS: '/Users',
    AUTH:'/Login'
}


function App() {




    const componentDialog = () => <DialogsContainer />;
    const componentProfile = () => <ProfileContainer/>;
    const componentUsers = () => <UsersContainer />;

    return (
        <BrowserRouter>
            <div className='app-wpapper'>
                <HeaderContainer />
                <Navbar/>
                <div className={'app-wpapper-content'}>
                    <Switch>
                        <Route exact path={PATH.WELCOM} render={()=><Welcom/>}/>
                        <Route path={PATH.PROFILE} render={componentProfile}/>
                        <Route path={PATH.DIALOGS} render={componentDialog}/>
                        <Route path={PATH.NEWS} render={News}/>
                        <Route path={PATH.MUSIC} render={Music}/>
                        <Route path={PATH.SETTINGS} render={Setings}/>
                        <Route path={PATH.FRIENDS} render={Friends}/>
                        <Route path={PATH.USERS} render={componentUsers}/>
                        <Route path={PATH.AUTH} render={()=><Login/>}/>

                    </Switch>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
