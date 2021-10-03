import React from 'react';
import './App.css';
import Header from "./component/header/header";
import Navbar from "./component/Nav/Nav";
import ContentProfile from "./component/Profile/Profile";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Setings from "./component/Setings/Setings";
import Friends from "./component/Friends/Friends";
import Welcom from "./component/welcom/Welcom";
import DialogsContainer from "./component/Dialogs/DialogsContainer";




export const PATH = {
    PROFILE: '/Profile',
    DIALOGS: '/Dialogs',
    NEWS: '/News',
    MUSIC: '/Music',
    SETTINGS: '/Settings',
    FRIENDS: '/Friends',
}


function App() {




    const componentDialog = () => <DialogsContainer/>
    const componentProfile = () => <ContentProfile/>

    return (
        <BrowserRouter>
            <div className='app-wpapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wpapper-content'}>
                    <Switch>
                        <Route exact path={'/'} render={()=><Welcom/>}/>
                        <Route path={PATH.PROFILE} render={componentProfile}/>
                        <Route path={PATH.DIALOGS} render={componentDialog}/>
                        <Route path={PATH.NEWS} component={News}/>
                        <Route path={PATH.MUSIC} component={Music}/>
                        <Route path={PATH.SETTINGS} component={Setings}/>
                        <Route path={PATH.FRIENDS} component={Friends}/>

                    </Switch>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
