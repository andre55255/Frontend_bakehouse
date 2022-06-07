import CardLogin from "../components/card/cardLogin";
import styles from "../styles/pages/login/login.module.css";

export default function LoginPage(): JSX.Element {
    return (
        <div className={styles.container}>
            <CardLogin />
        </div>
    );
}