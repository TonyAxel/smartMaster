import React, {FC, HTMLAttributes} from 'react';
import styles from './indicator.module.scss'
const Indicator:FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div {...props} className={props.className + " " + styles.indicator}>
            
        </div>
    );
};

export default Indicator;
