import React, {useState} from 'react';
import styles from './message.module.scss'
import {Close} from "@mui/icons-material";
import Image from "next/image";
import Indicator from "@/components/Layouts/Indicator/Indicator";
const Message = () => {
    const [isNew, setIsNew] = useState(true)
    return (
        <div className={styles.message} onMouseMove={() => {
            setIsNew(false)
        }}>
            <div>
                <Image className={styles.avatar_image} src={'/userImage.jpg'} width={40} height={40}
                       alt={'avatar'}/>
            </div>
            <div>
                <h3 className={styles.name}>Tony Axel</h3>
                <p className={styles.description}>
                    Новое сообщение
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

export default Message;
