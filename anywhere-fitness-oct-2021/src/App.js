import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import './App.css';

//homepage
import HomePage from './components/homepage'

import Classes from './components/classes'


function App() {
  return (
    <div className="App">
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
