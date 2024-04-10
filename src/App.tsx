import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Pages/Dialogs/Dialogs";
import {Profile} from './components/Pages/Profile/Profile';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import {News} from "./components/Pages/News/News";
import {Settings} from "./components/Pages/Settings/Settings";
import {Music} from "./components/Pages/Music/Music";
import {StateType} from "./redux/state";


type AppPropsType = {
    state: StateType
    dispatch: any
    store: any
}

function App(props: AppPropsType) {
    return (
        <Router>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <main className={'main'}>
                    <div className={'mainWrapper'}>
                        <Switch>
                            <Route path="/profile">
                                <Profile
                                    profilePage={props.state.profilePage}
                                    dispatch={props.dispatch}
                                />
                            </Route>
                            <Route path="/dialogs">
                                <Dialogs store={props.store}/>
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

