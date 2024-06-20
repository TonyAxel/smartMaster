import React, {FC} from 'react';
import styles from './headerAuthorized.module.scss'
const HeaderAuthorized: FC<{name: string, description: string}> = ({name, description}) => {
    return (
        <header className={styles.header}>
            <div>
                <h2 className={styles.title}>{name}</h2>
                <p className={styles.description}>{description}</p>
            </div>
            <div>

            </div>
            <div >
                <div>
                    Avatar
                </div>
            </div>
        </header>
    );
};

export default HeaderAuthorized;
