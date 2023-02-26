import React, { useState } from 'react'
import Image from 'next/image'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '../UI';

import styles from '../../../styles/Navbar.module.scss';

type Props = {
    click: () => void;
}

const Navbar = ({ click }: Props) => {

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.nav_container}>
                    <div className={styles.nav_logo}>
                        <MenuIcon onClick={click} />
                        <Image
                            src={"/logo.svg"}
                            alt="Lendsqr"
                            priority
                            width={114}
                            height={30}
                        />
                    </div>
                    <div className={styles.nav_search}>
                        <div className={styles.nav_input}>
                            <input type="text" placeholder='Search for Anything' />
                            <button><SearchIcon /></button>
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
                                <div className={showDropdown ? styles.angle_down : undefined}>
                                    <ArrowRightIcon onClick={() => setShowDropdown(!showDropdown)} />
                                </div>
                            </div>
                            <div className={[styles.dropdown, showDropdown && styles.show_dropdown].join(" ")}>
                                <ul>
                                    <li>Profile</li>
                                    <li>Events</li>
                                    <li>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mb_search}>
                    <div className={styles.nav_input}>
                        <input type="text" placeholder='Search for Anything' />
                        <button><SearchIcon /></button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar