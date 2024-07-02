import React from 'react';
import styles from './goal.module.scss'
import {Brush} from "@mui/icons-material";

const Goal = () => {
    return (
        <div className={styles.goal}>
            <div className={styles.info}>
                <p className={styles.price}>550 Р</p>
                <p className={styles.date}>12/12/20</p>
            </div>
            <div>
                <Brush className={styles.icon}/>
                <h5 className={styles.title}>На ремонт телевизора 225</h5>
            </div>
        </div>
    );
};

export default Goal;
