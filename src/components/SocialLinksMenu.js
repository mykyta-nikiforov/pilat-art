import React from 'react';
import instagramIcon from '../icons/instagram.svg'
import facebookIcon from '../icons/facebook.svg'
import telegramIcon from '../icons/telegram.svg'
import styles from './SocialLinksMenu.module.css'

const links = [
    {
        "icon": facebookIcon,
        "url": "https://www.facebook.com/profile.php?id=100004210171223"
    },
    {
        "icon": instagramIcon,
        "url": "https://www.instagram.com/artpilatandrii"
    },
    {
        "icon": telegramIcon,
        "url": "https://t.me/pilatik_bratik"
    }
];

function SocialLinksMenu() {
    return (
        <div className={styles.SocialLinksMenu}>
            {links.map((item, i) => {
                return(
                    <a href={item.url} target="_blank" key={i}>
                        <img src={item.icon} className={styles.icon}/>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialLinksMenu