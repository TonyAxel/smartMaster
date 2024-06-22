import React, {FC} from 'react';
import styles from './headerAuthorized.module.scss'
import {EmailOutlined, NotificationsNoneOutlined} from "@mui/icons-material";
import Image from "next/image";
import Indicator from "@/components/Layouts/Indicator/Indicator";
const HeaderAuthorized: FC<{name: string, description?: string}> = ({name}) => {
    return (
        <header className={styles.header}>
            <div className={styles.info_page}>
                <h2 className={styles.title}>{name}</h2>
            </div>
            <div className={styles.info_user}>
                <div className={styles.notifications}>
                    <div className={styles.message}>
                        <EmailOutlined/>
                        <Indicator className={styles.indicator}/>
                    </div>
                    <div className={styles.notification}>
                        <NotificationsNoneOutlined/>
                        <Indicator className={styles.indicator}/>
                    </div>
                </div>
                <div className={styles.avatar}>
                    <Image className={styles.avatar_image} src={'/userImage.jpg'} width={40} height={40} alt={'avatar'}/>
                </div>
            </div>
        </header>
    );
};

export default HeaderAuthorized;
