import React from 'react';

const Login = () => {


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
            <button onSubmit={onSubmit}>Log In</button>
        </form>

    </div>
    )
}

export default Login;