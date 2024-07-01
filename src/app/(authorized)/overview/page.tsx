import styles from './page.module.scss'
import CardBankCard from "@/components/UI/CardBankCard/CardBankCard";
export default function Overview() {
    return (
        <main className={styles.page}>
            <div>
                <CardBankCard/>
            </div>
        </main>
    );
}