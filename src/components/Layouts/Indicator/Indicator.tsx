import React, {FC, HTMLAttributes} from 'react';
import styles from './indicator.module.scss'
export const Indicator:FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div {...props} className={props.className + " " + styles.indicator}>
        </div>
    );
};
