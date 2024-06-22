'use client'
import React, {FC, useState} from 'react';
import styles from './headerAuthorized.module.scss'
import {EmailOutlined, NotificationsNoneOutlined} from "@mui/icons-material";
import Image from "next/image";
import Indicator from "@/components/Layouts/Indicator/Indicator";
import MenuNotification from "@/components/Layouts/MenuNotification/MenuNotification";
const HeaderAuthorized: FC<{name: string, description?: string}> = ({name}) => {
    const [notification, setNotification] = useState(false)

    return (
        <>
            <header className={styles.header}>
                <div className={styles.info_page}>
                    <h2 className={styles.title}>{name}</h2>
                </div>
                <div className={styles.info_user}>
                    <div className={styles.notifications}>
                        <div className={styles.message}>
                            <EmailOutlined/>
                            <Indicator className={styles.indicator}/>
                        </div>
                        <div className={styles.notification} onClick={() => setNotification((value) => !value)}>
                            <NotificationsNoneOutlined/>
                            <Indicator className={styles.indicator}/>
                        </div>
                    </div>
                    <div className={styles.avatar}>
                        <Image className={styles.avatar_image} src={'/userImage.jpg'} width={40} height={40}
                               alt={'avatar'}/>
                    </div>
                </div>
            </header>
            <MenuNotification show={notification} />
        </>
    );
};

export default HeaderAuthorized;
