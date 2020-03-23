import React from 'react';
import styles from './App.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavBar from "./NavBar";
import Gallery from "./Gallery"

function App() {
    return (
        <div className={styles.App}>
            <h1 className={styles.title}>Andrii Pilat</h1>
            <NavBar/>
            <section className={styles.view}>
                <Router>
                    <Route path={"/"} component={Gallery}/>
                </Router>
            </section>
        </div>
    );
}

export default App;
