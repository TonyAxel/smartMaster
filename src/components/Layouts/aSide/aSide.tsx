'use client'
import React from 'react';
import styles from './aside.module.scss'
import Link from "next/link";
import {usePathname} from "next/navigation";
import cn from 'classnames'
import {ROUTERS} from "@/Router/Routers";

const ASide = () => {

    const pathname = usePathname()

    return (
        <aside className={styles.aside}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    SmartMaster
                </div>
                <div className={styles.navigation_container}>
                    <nav className={styles.navigation}>
                        <ul>
                            {
                                ROUTERS.map((item) => (
                                    <li key={item.router} className={cn(styles.navigation_elem, {[styles.navigation_elem_active]: pathname === item.router})}>
                                        <Link href={item.router} className={styles.navigation_link}>
                                            <item.icon className={styles.navigation_link_icon}/>
                                            <p className={styles.navigation_link_text}>
                                                {item.name}
                                            </p>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
                <div className={styles.upgrade}>
                    <p className={styles.upgrade_title}>Обновись до премиум с новыми возможностями</p>
                    <button className={styles.upgrade_btn}>
                        Премиум
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default ASide;
