import React from 'react';
import styles from './listMessage.module.scss'
import {Message} from "@mui/icons-material";
const ListMessage = () => {
    return (
        <div className={styles.list_message}>
            <Message/>
        </div>
    );
};

export default ListMessage;
