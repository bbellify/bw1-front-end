import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
//homepage
import HomePage from './components/homepage'

import Classes from './components/classes'

function App() {
  return (
    <div className="App">
      <nav style={{ 
        display: 'flex',
        justifyContent: 'space-evenly' }}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/classes'}>Classes</NavLink>
      </nav>      
      <Switch>
        <Route exact path={'/'}>
          <HomePage/>
        </Route>

        <Route path={'/classes'}>
          <Classes/>
        </Route>

    </Switch>
    </div>
  );
}

export default App;
