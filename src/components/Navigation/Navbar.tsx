import React from 'react'
import Image from 'next/image'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '../UI';

import styles from '../../../styles/Navbar.module.scss';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.nav_logo}>
                    <Image
                        src={"/logo.svg"}
                        alt="Lendsqr"
                        width={114}
                        height={30}
                    />
                </div>
                <div className={styles.nav_search}>
                    <div className={styles.nav_input}>
                        <input type="text" /><button></button>
                    </div>
                </div>
                <div className={styles.nav_links}>
                    <div className={styles.links}>
                        <p>Docs</p>
                        <span><NotificationsOutlinedIcon /></span>
                    </div>
                    <div className={styles.nav_dropdown}>
                        <Avatar 
                            image={"/avatar.png"}
                            name='Adedeji Kolawole'
                        />
                        <div className={styles.nav_dropdown_text}>
                            <span>Adedeji</span>
                            <ArrowDropDownIcon />
                        </div>
                        <div className={[styles.dropdown,].join(" ")}>
                            <ul>
                                <li>Profile</li>
                                <li>Events</li>
                                <li>Logout</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.menu_btn}>
                        <MenuIcon />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar