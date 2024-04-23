import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from './components/Pages/Profile/Profile';
import {BrowserRouter as Router, Redirect, Route, Switch,} from "react-router-dom";
import {News} from "./components/Pages/News/News";
import {Settings} from "./components/Pages/Settings/Settings";
import {Music} from "./components/Pages/Music/Music";
import {DialogsContainer} from "./components/Pages/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Pages/Users/UsersContainer";


function App() {
    return (
        <Router>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <main className={'main'}>
                    <div className={'mainWrapper'}>
                        <Switch>
                            <Route exact path="/project_social_network">
                                <Redirect to="/users"/>
                            </Route>
                            <Route path="/profile">
                                <Profile/>
                            </Route>
                            <Route path="/dialogs">
                                <DialogsContainer/>
                            </Route>
                            <Route path="/users">
                                <UsersContainer/>
                            </Route>
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

