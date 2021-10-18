import * as yup from 'yup';


const registerSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('Please add your first name'),
    last_name: yup
        .string()
        .trim()
        .required('Please add your last name'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Please add your email'),
    password: yup
        .string()
        .required('Please create a password')
        .min(6, 'Password must be at least 6 characters long'),
    code: yup
    ,

})

export default registerSchema