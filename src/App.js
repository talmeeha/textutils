import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NewText from './components/NewText';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const showAlert =  (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( ()=>{
      setAlert(null);
    },1500);
  }
 const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark')
     document.body.style.backgroundColor = '#042743'
     document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
     document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
    <div className="container "></div>
    <Navbar title = "TextUtils" mode = {mode} toggleMode ={toggleMode}/>
    <Alert alert = {alert}/>
      {/* <Routes> */}
        
        {/* <Route exact path="/about" element={<About/>}></Route> */}
        {/* <Route exact path="/" element={<NewText showAlert = {showAlert} heading = "Enter text to analyze"/>}></Route> */}
        <NewText showAlert = {showAlert} heading = "Enter text to analyze"/>
      {/* </Routes> */}
{/*       
    </BrowserRouter> */}
   
    </>
    
  );
}

export default App;
