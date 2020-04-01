import styles from "./NavBar.module.css";
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";

class NavBar extends Component {

    changeLanguage = (e) => {
        this.props.i18n.changeLanguage(e.currentTarget.value)
    }

    render() {
        const {t} = this.props;
        return (
            <div className={styles.navbar}>
                <Link to="/" className={styles.name}>{t("Andrii Pilat")}</Link>
                <Link to="/">{t("Gallery")}</Link>
                <Link to="/archive">{t("Archive")}</Link>
                <Link to="/contact">{t("Contact")}</Link>
                {this.getLangBar()}
            </div>
        )
    }

    getLangBar() {
        return <div className={styles.langBar}>
            <input type="radio"
                   name="language"
                   value={'en'}
                   id={'en'}
                   onChange={this.changeLanguage}
                   checked={this.props.i18n.language === 'en'}/>
            <label htmlFor="en">Eng</label>
            {' / '}
            <input type="radio"
                   name="language"
                   value={'uk'}
                   id={'uk'}
                   onChange={this.changeLanguage}
                   checked={this.props.i18n.language === 'uk'}/>
            <label htmlFor="uk">Укр</label>
        </div>;
    }
}

export default withTranslation()(NavBar);