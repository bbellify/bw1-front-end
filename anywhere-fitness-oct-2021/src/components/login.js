import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import loginSchema from '../validation/loginSchema';
import styled from 'styled-components'
import { BASE_URL } from '../constants';


const SubmitButton = styled.button`
    width: fit-content;
`

const Login = () => {

    // pass with props?

    const initialFormValues = {
        username: '',
        password: '',
    }
    
    const initialFormErrors = {
        username: '',
        password: '',
    }

    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [ disabled, setDisabled ] = useState(true);

    const validate = (name,value) => {
        yup.reach(loginSchema, name)
          .validate(value)
          .then(() => setFormErrors({...formErrors, [name]: ''}))
          .catch((err) => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }

    const inputChange = (name, value) => {
        validate(name, value);
        setFormValues({ ...formValues, [name]: value })
    }

    // API post - probably need to add to post
    const formSubmit = () => {
        const newLogin = {
            username: formValues.username.trim(),
            password: formValues.password.trim(),
        }
        axios.post(`${BASE_URL}/api/auth/login`, newLogin)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
            .finally(setFormValues(initialFormValues))
    }

    useEffect(() => {
        loginSchema.isValid(formValues)
          .then(valid => setDisabled(!valid))
      }, [formValues])

    //   end of prop passing - rest can stay here

    const onSubmit = evt => {
        evt.preventDefault()
        formSubmit();
    }

    const onChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    }


    return (
    <div>
        <h3>Login:</h3>
        <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <label>Username:
                <input 
                    name='username'
                    type='text'
                    onChange={onChange}
                    placeholder='Username'
                    value={formValues.username}
                />
            </label>
            <label>Password:
                <input 
                    name='password'
                    type='password'
                    onChange={onChange}
                    placeholder='Password'
                    value={formValues.password}
                />
            </label>
            <SubmitButton disabled={disabled} onSubmit={onSubmit}>Log In</SubmitButton>
        </form>

    </div>
    )
}

export default Login;