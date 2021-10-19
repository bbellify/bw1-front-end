import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import registerSchema from '../validation/registerSchema';
  

export default function Register(props) {
   
    // everything from here until message below should maybe be passed as props?

    const initialFormValues = {
        name: '',
        username: '',
        email: '',
        password: '',
        instructor: false,
        code: ''
    }
    
    const initialFormErrors = {
        name: '',
        username: '',
        email: '',
        password: '',
        instructor: '',
        code: ''
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
            instructor: formValues.instructor,
            code: formValues.code.trim(),
        }
        axios.post('https://fitness-4-you.herokuapp.com/api/auth/register', newAccount)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
            .finally(setFormValues(initialFormValues))
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
        const valueToUse = type === 'radio' ? checked : value;
        inputChange(name, valueToUse)
    }


    return (

    <div>
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

            <h4>Are you an instructor?</h4>
                <label>Yes
                    <input
                        value='true'
                        checked={formValues.instructor === true}
                        name='instructor'
                        type='radio'
                        onChange={onChange}
                    />
                </label>    
                <label>No
                    <input
                        value='false'
                        checked={formValues.instructor === false}
                        name='instructor'
                        type='radio'
                        onChange={onChange}
                    />
                </label>

                {formValues.instructor && 
                <label>Authorization code:
                    <input
                        value={formValues.code}
                        name='code'
                        type='text'
                        onChange={onChange}
                    />
                    </label>}
            <div className='errors'>
                <p>{formErrors.name}</p>
                <p>{formErrors.username}</p>
                <p>{formErrors.email}</p>
                <p>{formErrors.password}</p>
                <p>{formErrors.code}</p>
            </div>
            <button disabled={disabled} style={{ width: 'fit-content' }}>Create Account</button>
        </form>
        
    </div>
    )
}