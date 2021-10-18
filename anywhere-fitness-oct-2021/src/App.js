import './App.css';
//homepage
import HomePage from './components/homepage'
import Class from './components/class'
import Classes from './components/classes'
import Login from './components/login'
import Register from './components/register'

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Class/>
    <Classes/>
    <Login/>
    <Register/>


    </div>
  );
}

export default App;
