import React from 'react';
import styles from './App.module.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import NavBar from "./NavBar";
import Gallery from "./Gallery"
import pictures from "../data/pictures"
import SocialLinksMenu from "./SocialLinksMenu";

function App() {
    return (
        <div>
            <NavBar/>
            <div className={styles.view}>
                <Router>
                    <Switch>
                        <Route path={"/"}
                               render={(props) => <Gallery {...props} pictures={pictures}/>}/>
                    </Switch>
                </Router>
            </div>
            <SocialLinksMenu/>
        </div>
    );
}

export default App;
