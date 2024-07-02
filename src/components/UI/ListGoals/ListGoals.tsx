import React from 'react';
import styles from './listGoals.module.scss'
import {Add} from "@mui/icons-material";
import Goal from "@/components/UI/Goal/Goal";
const ListGoals = () => {
    return (
        <div className={styles.list_goals}>
            <div className={styles.header}>
                <div>
                    <h3 className={styles.title}>Цели</h3>
                </div>
                <button className={styles.add_btn}>
                    <Add/>
                </button>
            </div>
            <div className={styles.list}>
                <Goal/>
                <Goal/>
                <Goal/>
                <Goal/>
                <Goal/>
            </div>
        </div>
    );
};

export default ListGoals;
