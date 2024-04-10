import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/state";
import React from "react";
import './index.css'

export function rerenderApplication(state: any) {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>,
        document.getElementById('root')
    );
}

rerenderApplication(store.getState())


store.subscribe(rerenderApplication)