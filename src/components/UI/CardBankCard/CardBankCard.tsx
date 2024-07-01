import React from 'react';
import styles from './cardBankCard.module.scss';
import BankCard from "@/components/UI/BankCard/BankCard";
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
const CardBankCard = () => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title_description}>Cards</h2>
            <div className={styles.info}>
                <div className={styles.list_card}>
                    <div className={styles.list_card_row}><ArrowBackIos className={styles.list_card_row_btn}/></div>
                    <BankCard/>
                    <div className={styles.list_card_row}><ArrowForwardIos className={styles.list_card_row_btn}/></div>
                </div>
                <div className={styles.list_info_money}>
                    <div className={styles.info_money}>
                        <h4 className={styles.title_current_balance}>2850.75 р</h4>
                        <p className={styles.description_title_info_money}>Текущий баланс</p>
                    </div>
                    <div className={styles.info_money}>
                        <h4 className={styles.title_income_balance}>1500.50 р</h4>
                        <p className={styles.description_title_info_money}>Зачисления</p>
                    </div>
                    <div className={styles.info_money}>
                        <h4 className={styles.title_outcome_balance}>350.60 р</h4>
                        <p className={styles.description_title_info_money}>Расход</p>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.progress_limit}>
                    <div className={styles.progress_limit_fill}></div>
                </div>
                <div className={styles.progress_info}>
                    <p className={styles.progress_info_title}>
                        Недельный лимит
                    </p>
                    <p className={styles.progress_info_money}>
                        350.60 р / 3000 р
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardBankCard;