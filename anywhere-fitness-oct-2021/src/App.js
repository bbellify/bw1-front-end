import './App.css';
import axios from 'axios'
//homepage
import HomePage from './components/homepage'
import Class from './components/class'
import Classes from './components/classes'
import Login from './components/login'
import Register from './components/register'
import ClassForm from './components/classform'

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Class/>
    {/* <Classes/> */}
    {/* <ClassForm/> */}
    {/* <Login/>
    <Register/> */}


    </div>
  );
}

export default App;
