import React, {Component} from "react";
import styles from "./About.module.css"
import {withTranslation} from "react-i18next";

class About extends Component {
    render() {
        const {t} = this.props;
        return (
            <div className={styles.aboutContainer}>
                <p>{t("AboutContent1")}</p>
                <p>{t("AboutContent2")}</p>
                <p>{t("AboutContent3")}</p>
                <p>{t("AboutContent4")}</p>
                <p>{t("AboutContent5")}</p>
                <p>{t("AboutContent6")}</p>
                <p>{t("AboutContent7")}</p>
            </div>
        )
    }
}

export default withTranslation()(About)