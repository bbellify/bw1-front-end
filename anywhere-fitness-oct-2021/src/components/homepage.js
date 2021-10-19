import React from 'react';
import { NavLink } from 'react-router-dom';


const HomePage = () => {
    return (
    <div className="home-wrapper">
        <h1>Anywhere Fitness</h1>
        <h2>Fitness Anywhere, Anytime.</h2>
        <NavLink to={'/login'}>Log In</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
        <NavLink to={`/classes`}>Add Class</NavLink>
    </div>
    )
}

export default HomePage;