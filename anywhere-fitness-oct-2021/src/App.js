import './App.css';
import axios from 'axios'
//homepage
import HomePage from './components/homepage'
import Class from './components/class'
import Login from './components/login'
import Register from './components/register'
import Classes from './components/classes'
import ClassForm from './components/classform'


function App() {
  return (
    <div className="App">
      <HomePage/>
      <Class/>
    <Classes/>
    <ClassForm/>

    </div>
  );
}

export default App;
