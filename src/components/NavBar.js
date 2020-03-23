import styles from "./NavBar.module.css";
import React from "react";

function NavBar() {
    return(
        <div className={styles.navbar}>
            <a href="/" className={styles.name}>Andrii Pilat</a>
            <a href="/">Gallery</a>
            <a href="/gallery">Archive</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
        </div>
    )
}

export default NavBar