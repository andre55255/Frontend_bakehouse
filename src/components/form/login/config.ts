import * as yup from "yup";

interface IFormData {
    email?: string,
    password?: string
}

const initialValues: IFormData = {
    email: '',
    password: ''
}

const validationSchema = yup.object().shape({
    email: yup.string()
              .trim()
              .required('Campo obrigatório')
              .email('Email inválido'),
    password: yup.string()
                 .trim()
                 .required('Campo obrigatório')
});

const onSubmit = (values: IFormData) => {
    alert(JSON.stringify(values, null, 2));
}

export {
    initialValues,
    validationSchema,
    onSubmit
}