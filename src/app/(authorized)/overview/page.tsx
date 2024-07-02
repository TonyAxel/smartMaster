import styles from './page.module.scss'
import CardBankCard from "@/components/UI/CardBankCard/CardBankCard";
import ListGoals from "@/components/UI/ListGoals/ListGoals";
export default function Overview() {
    return (
        <main className={styles.page}>
            <div>
                <CardBankCard/>
            </div>
            <div>
                <ListGoals/>
            </div>
        </main>
    );
}