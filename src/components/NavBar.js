import styles from "./NavBar.module.css";
import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
    return(
        <div className={styles.navbar}>
            <Link to="/" className={styles.name}>Andrii Pilat</Link>
            <Link to="/">Gallery</Link>
            <Link to="/archive">Archive</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default NavBar