import React from 'react';
import './App.css';
import Header from "./component/header/header";
import Navbar from "./component/Nav/Nav";
import ContentProfile from "./component/Profile/Profile";

function App() {
    return (
        <div className='app-wpapper'>
                <Header/>
                <Navbar/>
                <ContentProfile/>
        </div>
    );
}


export default App;
