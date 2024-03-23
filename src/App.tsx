import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from './components/Profile/Profile';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";

function App() {
    return (
        <Router>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <main className={'main'}>
                    <div className={'mainWrapper'}>
                        <Switch>
                            <Route exact={true} path="/profile"><Profile/></Route>
                            <Route exact={true} path="/dialogs"><Dialogs/></Route>
                            <Route path="/news"><News/></Route>
                            <Route path="/music"><Music/></Route>
                            <Route path="/settings"><Settings/></Route>
                        </Switch>
                    </div>
                </main>
            </div>
        </Router>
    );
}

export default App;

