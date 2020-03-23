import styles from "./NavBar.module.css";
import React from "react";

function NavBar() {
    return(
        <div className={styles.navbar}>
            <a href="/">Gallery</a>
            <a href="/gallery">Archive</a>
            <a href="/blog">Clients</a>
            <a href="/contact">Contact</a>
        </div>
    )
}

export default NavBar