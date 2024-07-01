'use client'
import React, {useState} from 'react';
import styles from './notification.module.scss'
import {Close, StarBorder} from "@mui/icons-material";
import Indicator from "@/components/Layouts/Indicator/Indicator";
const Notification = () => {
    const [isNew, setIsNew] = useState(true)
    return (
        <div className={styles.notification} onMouseMove={() => {
            setIsNew(false)
        }}>
            <div className={styles.icon}>
                <StarBorder/>
            </div>
            <div>
                <p className={styles.description}>
                    Tony Axel добавил ваш проект в избранное
                </p>
            </div>
            {
                isNew &&
                <Indicator className={styles.indicator}/>
            }
            <div className={styles.close}>
                <Close className="text-lg"/>
            </div>
        </div>
    );
};

export default Notification;