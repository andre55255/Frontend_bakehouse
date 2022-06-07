import styles from "../../../styles/form/login/login.module.css";
import Input from "../input";
import { useFormik } from "formik";
import { initialValues, validationSchema, onSubmit } from './config';
import { faEnvelopeOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import Button from "../button";

export default function Login(): JSX.Element {

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    return (
        <div className={styles.container}>
            <form className={styles.form} noValidate onSubmit={formik.handleSubmit}>
                <Input 
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                    icon={faEnvelopeOpen}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helpersText={formik.errors.email}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <Input 
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    icon={faLock}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helpersText={formik.errors.password}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <Button
                    disabled={formik.isSubmitting}
                    type="submit"
                >
                    Entrar
                </Button>
            </form>
        </div>
    );
}
