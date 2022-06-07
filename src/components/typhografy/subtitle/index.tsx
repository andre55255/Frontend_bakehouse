import styles from '../../../styles/typhografy/subtitle/subtitle.module.css';

interface IPropsSubTitle {
    children: React.ReactNode
}

export default function Subtitle({ children }: IPropsSubTitle): JSX.Element {
    return (
        <span className={styles.subtitle}>{children}</span>
    );
}