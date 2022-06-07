import styles from '../../../styles/typhografy/title/title.module.css';

interface IPropsTitle {
    children: React.ReactNode
}

export default function Title({ children }: IPropsTitle): JSX.Element {
    return (
        <span className={styles.title}>{children}</span>
    );
}