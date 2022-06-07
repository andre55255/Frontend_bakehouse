import { ChangeEventHandler } from "react";
import styles from "../../../styles/form/input/input.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IPropsInput {
    type: string;
    name: string;
    onChange: ChangeEventHandler;
    value: string | number | undefined;
    error: any;
    helpersText: string | undefined;
    placeholder?: string;
    icon: IconProp;
}

export default function Input(props: IPropsInput): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <FontAwesomeIcon className={styles.icon} icon={props.icon} />
                <input
                    id={props.name}
                    name={props.name}
                    autoComplete="off"
                    onChange={props.onChange}
                    value={props.value}
                    placeholder={props.placeholder}
                    type={props.type}
                    className={styles.inputField}
                />
            </div>
            <div className={styles.containerHelpers}>
                {Boolean(props.helpersText) ? (
                    <small className={styles.helpersText}>
                        {props.helpersText}
                    </small>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
