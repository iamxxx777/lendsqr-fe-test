import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { sidebarData } from './SidebarData';

import styles from "@/styles/Sidebar.module.scss"

type SidebarItem = {
    title: string;
    type: string;
    path: string;
    icon?: any;
    src?: string;
    cName?: string
}

const Sidebar = () => {

    const { pathname, push } = useRouter();

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_wrapper}>
                <div className={styles.sidebar_img}>
                    <Image
                        src={"/logo.svg"}
                        alt="Lendsqr"
                        width={114}
                        height={30}
                    />
                </div>
                <div className={styles.org_switch}>
                    <BusinessCenterIcon />
                    <span>Switch Organization</span>
                    <KeyboardArrowDownIcon />
                </div>
                <ul className={styles.links}>
                    {sidebarData.map((item: SidebarItem) => (
                        <li key={item.title} className={[styles.link_wrapper, pathname.includes(item.path) && styles.link_active].join(" ")}>
                            {item.type === "text" ? (
                                <div className={styles.link_type_text}>
                                    <p>{item.title}</p>
                                </div>
                            ) : (
                                <Link href={item.path} passHref>
                                    <div className={styles.link_type_link}>
                                        {item.icon
                                            ? <div className={styles.link_icon_div}>{<item.icon className={styles.link_icon} />}</div>
                                            :
                                            <Image
                                                src={item.src || "/badge-percent.svg"}
                                                alt={item.title}
                                                width={18}
                                                height={18}
                                            />
                                        }
                                        <span>{item.title}</span>
                                    </div>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <div className={styles.logout}>
                    <button>
                        <LogoutOutlinedIcon />
                        <span>Logout</span>
                    </button>
                    <p>v1.2.0</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar