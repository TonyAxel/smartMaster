import React from 'react';
import styles from './header.module.scss'
import Link from "next/link";
import Image from "next/image";
export const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Image src="/vercel.svg" alt="logo" className={styles.logo} width={100} height={100} placeholder={"blur"} blurDataURL={"/vercel.svg"} />
            </div>
            <div>

            </div>
            <div >
                <div>
                    <Link href="/login" className={styles.link}>Вход</Link>
                </div>
            </div>
        </header>
    );
};

