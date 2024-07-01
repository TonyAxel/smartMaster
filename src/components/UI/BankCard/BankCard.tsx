import React from 'react';
import styles from './bankCard.module.scss'
const BankCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.name}>
                <h3>Name Bank</h3>
            </div>
            <div className={styles.number_card}>
                <p>1234 5678 9123 4567</p>
            </div>
            <div className={styles.info}>
                <div>
                    <h6 className={styles.info_title}>card holder</h6>
                    <p className={styles.info_info}>Ivanov Ivan</p>
                </div>
                <div>
                    <h6 className={styles.info_title}>Expire date</h6>
                    <p className={styles.info_info}>06/21</p>
                </div>
            </div>
        </div>
    );
};

export default BankCard;