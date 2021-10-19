import * as yup from 'yup';


const registerSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Please add your first name'),
    username: yup
        .string()
        .trim()
        .required('Please create a username'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Please add your email'),
    password: yup
        .string()
        .required('Please create a password')
        .min(6, 'Password must be at least 6 characters long'),
    instructor: yup
        .boolean()
        .oneOf(['true', 'false']),
    code: yup
        .string()
        .trim()

})

export default registerSchema