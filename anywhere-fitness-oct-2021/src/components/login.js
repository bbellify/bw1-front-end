import React from 'react';
import { useState, useEffect } from 'react'
import loginSchema from '../validation/loginSchema';

const Login = () => {

    const [ disabled, setDisabled ] = useState(true);


    const onSubmit = evt => {
        evt.preventDefault()
    }


    return (
    <div className="class-wrapper">
        <h3>Login:</h3>
        <form>
            <label>Username:
                <input 
                    placeholder='Username'
                />
            </label>
            <label>Password:
                <input 
                    placeholder='Password'
                />
            </label>
            <button disabled={disabled} onSubmit={onSubmit}>Log In</button>
        </form>

    </div>
    )
}

export default Login;