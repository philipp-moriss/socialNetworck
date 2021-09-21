import React from 'react';
import './App.css';
import Header from "./component/header/header";
import Navbar from "./component/Nav/Nav";
import ContentProfile from "./component/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Setings from "./component/Setings/Setings";
import Dialogs from "./component/Dialogs/Dialogs";
import  {stateType} from "./redux/state/state";
import Friends from "./component/Friends/Friends";


type AppPropsDataType = {
    state:stateType;
    addPost:()=>void;
    updateNewPostText:(newText:string)=>void
    addNewMassage:()=>void;
    addNewMessageText:(newText:string)=>void;
}

export const PATH = {
    PROFILE : '/Profile',
    DIALOGS : '/Dialogs',
    NEWS : '/News',
    MUSIC : '/Music',
    SETTINGS : '/Settings',
    FRIENDS : '/Friends',
}



function App(props:AppPropsDataType) {





    const componentDialog = ()=><Dialogs
        state={props.state.messagesPage}
        addNewMassage ={props.addNewMassage}
        addNewMessageText = {props.addNewMessageText}
    />
    const componentProfile = ()=> <ContentProfile
        data={props.state.profilePage}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
    />

    return (
        <BrowserRouter>
            <div className='app-wpapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wpapper-content'}>
                    <Route path={PATH.PROFILE} render={componentProfile}/>
                    <Route path={PATH.DIALOGS} render={componentDialog}/>
                    <Route path={PATH.NEWS} component={News}/>
                    <Route path={PATH.MUSIC} component={Music}/>
                    <Route path={PATH.SETTINGS} component={Setings}/>
                    <Route path={PATH.FRIENDS} component={Friends} />
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
