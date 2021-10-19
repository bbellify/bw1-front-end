import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import styled from 'styled-components'

//homepage
import HomePage from './components/homepage'
import Classes from './components/classes'
import Login from './components/login'
import Register from './components/register'

const Nav = styled.nav`
  display: flex;
  justify-content: right;
  background-color: lightskyblue;
  border-bottom: 2px solid black;

`




function App() {
  return (
    <div className="App">
      <Nav style={{ 
        display: 'flex',
        justifyContent: 'right' }}>
        <NavLink to={'/'}>Home</NavLink>
      </Nav>      
      
      <Switch>
        <Route exact path={'/'}>
          <HomePage/>
        </Route>

        <Route path={'/classes'}>
          <Classes/>
        </Route>

        <Route path={'/login'}>
          <Login />
        </Route>

        <Route path={'/register'}>
          <Register />
        </Route>
        

        
    </Switch>
    </div>
  );
}

export default App;
