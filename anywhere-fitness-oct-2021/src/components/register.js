import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import styled from 'styled-components'
import registerSchema from '../validation/registerSchema';
import { BASE_URL } from '../constants';

const RegisterCard = styled.div`
    background-color: lightgray;
    width: 60%;
    margin-top:2%;
    border: 1px solid grey;
    border-radius: 20px;
    padding: 2% 0;
    line-height: 1.5;
    
`

export default function Register(props) {
   
    // everything from here until message below should maybe be passed as props?

    const { push } = useHistory()

    const initialFormValues = {
        name: '',
        username: '',
        email: '',
        password: '',
        isInstructor: false,
    }
    
    const initialFormErrors = {
        name: '',
        username: '',
        email: '',
        password: '',
        isInstructor: ''
    }
    

    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(true)
    
    const validate = (name,value) => {
        yup.reach(registerSchema, name)
          .validate(value)
          .then(() => setFormErrors({...formErrors, [name]: ''}))
          .catch((err) => setFormErrors({...formErrors, [name]: err.errors[0]}))
    }
    
    const inputChange = (name, value) => {
        validate(name, value);
        setFormValues({ ...formValues, [name]: value })
    }
    
    // API post - probably need to add to post?
    const formSubmit = () => {
        

        const newAccount = {
            name: formValues.name.trim(),
            username: formValues.username.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
            isInstructor: formValues.isInstructor,
        }
        axios.post(`${BASE_URL}/api/auth/register`, newAccount)
            .then(res => {
                console.log(newAccount);
                console.log(res)
                push('/login')
            })
            .catch(err => {
                console.log(newAccount)
                console.error(err)
            })
            .finally(
                setFormValues(initialFormValues))
    }
    
    useEffect(() => {
        registerSchema.isValid(formValues)
          .then(valid => setDisabled(!valid))
      }, [formValues])
   
  
    // end of prop passing - rest stays in Register


    const onSubmit = evt => {
        evt.preventDefault()
        formSubmit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        inputChange(name, valueToUse)
    }


    return (
    <div className='wrapper' style={{display:'flex', justifyContent:'center'}}>
        <RegisterCard>
            <form onSubmit={onSubmit}
                style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center' 
                }}>
                <h2>Create a New Account</h2>
                <label>Name:
                    <input 
                        value={formValues.name}
                        name='name'
                        type='text'
                        onChange={onChange}
                        placeholder='Enter your name here'
                        />
                </label>
                <label>Username:
                    <input 
                        value={formValues.username}
                        name='username'
                        type='text'
                        onChange={onChange}
                        placeholder='Enter your username here'
                        />
                </label>

                <label>Email:
                        <input
                            value={formValues.email}
                            onChange={onChange}
                            name='email'
                            type='text'
                            placeholder='Enter your email here'
                        />
                </label>

                <label>Create password:
                        <input
                            value={formValues.password}
                            name='password'
                            type='text'
                            onChange={onChange}
                            placeholder='Create a password here'
                        />
                </label>

                <label>Check if you are creating an instructor account:
                    <input
                        type='checkbox'
                        name='isInstructor'
                        value={true}
                        onChange={onChange}
                        checked={formValues.isInstructor === true}
                    />
                </label>

                <div className='errors'>
                    <p>{formErrors.name}</p>
                    <p>{formErrors.username}</p>
                    <p>{formErrors.email}</p>
                    <p>{formErrors.password}</p>
                </div>
                <button disabled={disabled} style={{ width: 'fit-content' }}>Create Account</button>
            </form>
            
        </RegisterCard>
    </div>
    )
}