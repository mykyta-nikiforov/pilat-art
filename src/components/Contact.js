import React from "react";
import styles from "./Contact.module.css"


function Contact() {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.subtitle}>E-mail</div>
            <div className={styles.text}>
                <a href="mailto:andriyartpilat@gmail.com">andriyartpilat@gmail.com</a>
            </div>
            <div className={styles.subtitle} style={{marginTop: '30px'}}>Artist's studio</div>
            <div className={styles.text}>Ukraine, Chernivtsi</div>
        </div>
    )
}

export default Contact