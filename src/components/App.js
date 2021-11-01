import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import NavBar from "./NavBar";
import Gallery from "./Gallery"
import Contact from "./Contact"
import SocialLinksMenu from "./SocialLinksMenu";
import About from "./About";

const archiveJsonUrl = 'https://firebasestorage.googleapis.com/v0/b/andriipilat-43e8e.appspot.com/o/archive.json?alt=media';
const galleryJsonUrl = 'https://firebasestorage.googleapis.com/v0/b/andriipilat-43e8e.appspot.com/o/gallery.json?alt=media';

function App() {
    const [archive, setArchive] = useState(null);
    const [gallery, setGallery] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await fetch(archiveJsonUrl);
            const gson = await response.json();
            setArchive(gson);
        })();
    }, []);
    useEffect(() => {
        (async () => {
            const response = await fetch(galleryJsonUrl);
            const gson = await response.json();
            setGallery(gson);
        })();
    }, [])


    return (
        gallery && archive && <div>
            <Router>
                <div>
                    <NavBar/>
                    <div className={styles.view}>
                        <Switch>
                            <Route
                                   key={"gallery"} exact path="/"
                                   render={(props) => <Gallery {...props} pictures={gallery} sale/>}/>
                            <Route
                                key={"archive"} exact path="/archive"
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
