import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Field required"),
    password: yup.string().required("Field required"),
})