import React from 'react';
import styles from './App.module.css';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import NavBar from "./NavBar";
import Gallery from "./Gallery"
import pictures from "../data/pictures"

function App() {
    return (
        <div className={styles.App}>
            <NavBar/>
            <div className={styles.view}>
                <Router>
                    <Route path={"/"}
                           render={(props) => <Gallery {...props} pictures={pictures}/>}/>
                </Router>
            </div>
        </div>
    );
}

export default App;
