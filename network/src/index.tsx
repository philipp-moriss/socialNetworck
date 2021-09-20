import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state/state";

export function rerenderEntireTree() {
    ReactDOM.render(
        <React.StrictMode>
            <App
                addNewMassage={store.addNewMassage.bind(store)}
                state={store.getState()} addPost={store.addPost.bind(store)}
                updateNewPostText={store.addNewPostText.bind(store)}
                addNewMessageText={store.addNewMessageText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
