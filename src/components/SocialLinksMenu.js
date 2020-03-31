import React from 'react';
import instagramIcon from '../icons/instagram.svg'
import facebookIcon from '../icons/facebook.svg'
import telegramIcon from '../icons/telegram.svg'
import styles from './SocialLinksMenu.module.css'

const links = [
    {
        "name": "Facebook",
        "icon": facebookIcon,
        "url": "https://www.facebook.com/profile.php?id=100004210171223"
    },
    {
        "name": "Instagram",
        "icon": instagramIcon,
        "url": "https://www.instagram.com/artpilatandrii"
    },
    {
        "name": "Telegram",
        "icon": telegramIcon,
        "url": "https://t.me/pilatik_bratik"
    }
];

function SocialLinksMenu() {
    return (
        <div className={styles.SocialLinksMenu}>
            {links.map((item, i) => {
                return(
                    <a href={item.url} target={"_blank"} rel={"noreferrer"} key={i}>
                        <img src={item.icon} className={styles.icon} alt={item.name}/>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialLinksMenu