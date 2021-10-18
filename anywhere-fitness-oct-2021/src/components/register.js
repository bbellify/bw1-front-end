import React from 'react';
import { useState, useEffect } from 'react';
import * as yup from 'yup';
import registerSchema from '../registerSchema';
  

export default function Register(props) {
   
    // everything from here until message below should maybe be passed as props?

    const initialFormValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        code: ''
    }
    
    const initialFormErrors = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        code: ''
    }
    
    // const [users, setUsers] = useState([]);
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
    
    const formSubmit = () => {
        const newUser = {
            first_name: formValues.first_name.trim(),
            last_name: formValues.last_name.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
            termsOfService: formValues.code,
        }
        // axios.post()
    }
    
    // useEffect(() => {
    //     registerSchema.isValid(formValues)
    //       .then(valid => setDisabled(!valid))
    //   }, [formValues])
   
  
    // end of prop passing - rest stays in Register


    const onSubmit = evt => {
        evt.preventDefault()
        formSubmit()
    }

    const onChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
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
            <label>First Name:
                <input 
                    value={formValues.first_name}
                    name='first_name'
                    type='text'
                    onChange={onChange}
                    />
            </label>

            <label>Last Name:
                <input 
                    value={formValues.last_name}
                    name='last_name'
                    type='text'
                    onChange={onChange}
                    />
            </label>

            <label>Email:
                    <input
                        value={formValues.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
            </label>

            <label>Create password:
                    <input
                        value={formValues.password}
                        name='password'
                        type='text'
                        onChange={onChange}
                    />
            </label>

            <label>Instructor Code:
                    <input
                        value={formValues.code}
                        name='code'
                        type='text'
                        onChange={onChange}
                    />
            </label>
            <button style={{
                width: 'fit-content'
                
            }}>Create Account</button>
        </form>
        
    </div>
    )
}