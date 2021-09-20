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


type AppPropsDataType = {
    state:stateType;
    addPost:()=>void;
    updateNewPostText:(newText:string)=>void
    addNewMassage:()=>void;
    addNewMessageText:(newText:string)=>void;
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
                    <Route path={'/Profile'} render={componentProfile}/>
                    <Route path={'/Dialogs'} render={componentDialog}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/Setings'} component={Setings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
