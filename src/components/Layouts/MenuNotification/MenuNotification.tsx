'use client'
import React, {FC} from 'react';
import styles from './menuNotification.module.scss';
import {Close} from "@mui/icons-material";
import cn from 'classnames';
import ListMessage from "@/components/Layouts/MenuNotification/ListMessage/ListMessage";
import ListNotification from "@/components/Layouts/MenuNotification/ListNotification/ListNotification";
interface MenuNotificationProps {
    show: boolean;
    type: 'message' | 'notification',
    toggleClose: () => void
}
const MenuNotification: FC<MenuNotificationProps> = ({show, type, toggleClose}) => {
    const typeNotification = {
        notification: <ListNotification />,
        message: <ListMessage />
    }
    return (
        <aside className={cn(styles.menu_notification, {[styles.menu_notification_active]: show})}>
            <div className={styles.close}>
                <div className={styles.close_close} onClick={toggleClose}>
                    <Close />
                </div>
                {/*<div className={styles.close_icon}>*/}
                {/*    Закрыть все*/}
                {/*</div>*/}
            </div>
            {typeNotification[type]}
        </aside>
    );
};

export default MenuNotification;
