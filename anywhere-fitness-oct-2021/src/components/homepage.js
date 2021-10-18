import React from 'react';
import Login from './login'
import Register from './register'

const HomePage = () => {
    return (
    <div className="home-wrapper">
        <h1>Anywhere Fitness</h1>
        <h2>Fitness Anywhere, Anytime.</h2>

        <Login />
        <Register />
    </div>
    )
}

export default HomePage;