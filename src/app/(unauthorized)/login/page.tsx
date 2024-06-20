'use client'
import React, {useState} from 'react';
import styles from './login.module.scss'
import {Visibility, VisibilityOff} from "@mui/icons-material";
export default function Login() {
    const [show, setShow] = useState(false)
    return (
        <main className="page">
            <div className={styles.form}>
                <h2 className={styles.header}>Вход</h2>
                <form action="">
                    <div className="grid">
                        <label htmlFor="email">Почта</label>
                        <input type="email" id="email" className={styles.field} placeholder="Почта"/>
                    </div>
                    <div className="grid mt-4">
                        <label htmlFor="password">Пароль</label>
                        <div className="flex items-center relative">
                            <input type={show ? 'text' : 'password'} id="password" className={styles.field_password} placeholder="Пароль"/>
                            <div className="absolute right-2 bg-white px-1">
                                {
                                    show ? <VisibilityOff onClick={() => setShow(!show)} /> : <Visibility onClick={() => setShow(!show)} />
                                }
                            </div>
                        </div>
                    </div>
                    <button type="submit" className={styles.btn}>Войти</button>
                </form>
            </div>
        </main>
    );
}
