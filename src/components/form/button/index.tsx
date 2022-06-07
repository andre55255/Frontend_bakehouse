import styles from '../../../styles/form/button/button.module.css';

interface IPropsBtn {
    type: "button" | "reset" | "submit"
    disabled: boolean,
    children: React.ReactNode
}

export default function Button(props: IPropsBtn): JSX.Element {
    return (
        <button 
            className={styles.btn}
            disabled={props.disabled}
            type={props.type}
        >
            {props.children}
        </button>
    );
}