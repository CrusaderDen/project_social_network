import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, StateType} from "./redux/state";
import {addPost} from "./redux/state";


// function saveData(state: StateType) {
//     localStorage.setItem('storage', JSON.stringify(state))
//     let storageState = localStorage.getItem('storage')
//     if (storageState) {
//         return JSON.parse(storageState)
//     }
//
// }

export function saveData(state: StateType) {
    localStorage.setItem('storage', JSON.stringify(state));
}

function loadData(): StateType | null {
    const storageState = localStorage.getItem('storage');
    return storageState ? JSON.parse(storageState) : null;
}

// Загрузка состояния из локального хранилища при первой загрузке
const initialState = loadData() || state;

export function rerenderApplication() {
    // let parseStorageState = saveData(state)
    // console.log(parseStorageState)
    ReactDOM.render(
        <App state={initialState} addPost={addPost}/>,
        document.getElementById('root')
    );
}

rerenderApplication()