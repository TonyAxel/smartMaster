import React from 'react';
import styles from './listNotification.module.scss';
import Notification from "@/components/Layouts/MenuNotification/Notification/Notification/Notification";
const ListNotification = () => {
    return (
        <div className={styles.list_notification}>
            <Notification/>
        </div>
    );
};

export default ListNotification;
