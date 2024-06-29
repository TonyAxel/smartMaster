import React from 'react';
import styles from './listNotification.module.scss'
import {Notification} from "@/components/Layouts/MenuNotification/Notification/Notification";
export const ListNotification = () => {
    return (
        <div className={styles.list_notification}>
            <Notification/>
        </div>
    );
};
