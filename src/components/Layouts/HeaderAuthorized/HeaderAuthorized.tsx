'use client'
import React, {FC, useState} from 'react';
import styles from './headerAuthorized.module.scss'
import {EmailOutlined, NotificationsNoneOutlined} from "@mui/icons-material";
import Image from "next/image";
import Indicator from "@/components/Layouts/Indicator/Indicator";
import MenuNotification from "@/components/Layouts/MenuNotification/MenuNotification";
const HeaderAuthorized: FC<{name: string, description?: string}> = ({name}) => {
    const [notification, setNotification] = useState(false)
    const [messages, setMessages] = useState(false)
    const [typeNotification, setTypeNotification] = useState<'message' | 'notification'>('message')

    const toggleNotification = () => {
        setMessages(false)
        setNotification((notification) => !notification)
        setTypeNotification("notification")
    }

    const toggleMessage = () => {
        setNotification(false)
        setMessages((messages) => !messages)
        setTypeNotification("message")
    }

    const toggleClose = () => {
        setMessages(false)
        setNotification(false)
    }
    const toggleCloseOutside = () => {
        setNotification(false)
        setMessages(false)
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.info_page}>
                    <h2 className={styles.title}>{name}</h2>
                </div>
                <div className={styles.info_user}>
                    <div className={styles.notifications}>
                        <div className={styles.message} onClick={() => toggleMessage()}>
                            <EmailOutlined/>
                            <Indicator className={styles.indicator}/>
                        </div>
                        <div className={styles.notification} onClick={() => toggleNotification()}>
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
            <MenuNotification toggleClose={toggleClose} show={notification} type={typeNotification}/>
            <MenuNotification toggleClose={toggleClose} show={messages} type={typeNotification}/>
            {
                notification || messages &&
                <div className={styles.menu_notification_outside} onClick={() => toggleCloseOutside()}></div>
            }
        </>
    );
};

export default HeaderAuthorized;