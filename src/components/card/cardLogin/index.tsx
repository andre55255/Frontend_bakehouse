import styles from "../../../styles/card/cardLogin/cardLogin.module.css";
import Subtitle from "../../typhografy/subtitle";
import Title from "../../typhografy/title";
import FormLogin from "../../form/login";
import Image from "next/image";

export default function CardLogin(): JSX.Element {
    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <Title>Eaí parça!</Title>
                <Subtitle>Acesse sua conta, chega mais</Subtitle>
                <FormLogin />
            </div>
            <div className={styles.right}>
                <Image 
                    src="/images/logoProfileWithoutName.png"
                    width="100%"
                    height="100%"
                    alt="Logo"
                />
                <span>Bem vindo!</span>
                <p>
                    Este é o sistema de gestão Bakehouse, criado com a ideia de
                    facilitar a gestão de seu negócio. Qualquer dúvida entre em
                    contato com o Suporte.
                </p>
            </div>
        </div>
    );
}
