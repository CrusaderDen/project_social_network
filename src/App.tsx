import React from 'react';
import './App.css';
import logo from './assets/logo.svg'

function App() {
    return (
        <div className={'app-wrapper'}>
            <header>
                <h1>Social Network by Crusader & Dimi4: OPENING SOON!!!!</h1>
            </header>
            <aside>
                <img src={logo} alt="crusader's social network"/>
                <nav>
                    <ul>
                        <li>Profile</li>
                        <li>Messages</li>
                        <li>News</li>
                        <li>Music</li>
                    </ul>
                    <ul>
                        <li>Settings</li>
                    </ul>
                </nav>

            </aside>
            <main>
                <div className="main-wrapper">
                    Main content
                </div>
            </main>
        </div>
    );
}

export default App;


