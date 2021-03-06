import * as yup from 'yup';


const loginSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Please enter your username'),
    password: yup
        .string()
        .trim()
        .required('Please enter your password'),

})

export default loginSchema