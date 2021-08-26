import React from 'react';
import './App.css';
import Header from "./component/header/header";
import Navbar from "./component/Nav/Nav";
import ContentProfile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Setings from "./component/Setings/Setings";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wpapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wpapper-content'}>
                    <Route path={'/Profile'} component={ContentProfile}/>
                    <Route path={'/Dialogs'} component={Dialogs}/>
                    <Route path={'/News'} component={News}/>
                    <Route path={'/Music'} component={Music}/>
                    <Route path={'/Setings'} component={Setings}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
