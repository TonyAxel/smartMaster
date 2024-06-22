'use client'
import React, {FC} from 'react';
import styles from './menuNotification.module.scss';
import ListNotification from "@/components/Layouts/MenuNotification/ListNotification/ListNotification";
import {Close} from "@mui/icons-material";
import cn from 'classnames';
interface MenuNotificationProps {
    show: boolean;
}
const MenuNotification: FC<MenuNotificationProps> = ({show}) => {
    return (
        <aside className={cn(styles.menu_notification, {[styles.menu_notification_active]: show})}>
            <div className={styles.close}>
                <div className={styles.close_icon}>
                    Закрыть все
                </div>
            </div>
            <ListNotification/>
        </aside>
    );
};

export default MenuNotification;
