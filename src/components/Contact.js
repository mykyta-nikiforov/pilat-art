import React, {Component} from "react";
import styles from "./Contact.module.css"
import {withTranslation} from "react-i18next";


class Contact extends Component {
    render() {
        const {t} = this.props;
        return (
            <div className={styles.contactContainer}>
                <div className={styles.subtitle}>E-mail</div>
                <div className={styles.text}>
                    <a href="mailto:andriyartpilat@gmail.com">andriyartpilat@gmail.com</a>
                </div>
                <div className={styles.subtitle} style={{marginTop: '30px'}}>{t("Artist's studio")}</div>
                <div className={styles.text}>{t("Ukraine, Chernivtsi")}</div>
            </div>
        )
    }
}

export default withTranslation()(Contact)