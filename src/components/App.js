import React from 'react';
import styles from './App.module.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import NavBar from "./NavBar";
import Gallery from "./Gallery"
import Contact from "./Contact"
import gallery from "../data/gallery"
import archive from "../data/archive"
import SocialLinksMenu from "./SocialLinksMenu";
import About from "./About";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <NavBar/>
                    <div className={styles.view}>
                        <Switch>
                            <Route exact path="/"
                                   render={(props) => <Gallery {...props} pictures={gallery}/>}/>
                            <Route exact path="/archive"
                                   render={(props) => <Gallery {...props} pictures={archive}/>}/>
                            <Route exact path="/about"
                                   component={About}/>
                            <Route exact path="/contact"
                                   component={Contact}/>
                        </Switch>
                    </div>
                </div>
            </Router>
            <SocialLinksMenu/>
        </div>
    );
}

export default App;
