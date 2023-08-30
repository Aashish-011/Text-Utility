import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() {
  const[mode,setMode] = useState("info");
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'info'){
      setMode('dark');
      document.body.style.backgroundColor = '#424141';
      showAlert("Dark mode enabled","dark");
    }else{
      setMode('info');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","danger");
    }
  }
  return (
  <>
<Router>
<Navbar title="Text-Utility" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container">
  
   <Routes>
                <Route exact path='/' element={<TextForm heading="Text-Utility | Text To Speech, Word and Character Counter, LowerCase to Uppercase, Uppercase to LowerCase, Remove Extra Spaces" showAlert={showAlert} mode={mode}/>}></Route>
                <Route exact path='/about' element={<About mode={mode}/>}></Route>
        </Routes>
</div>
</Router>
  </>
  );
}

export default App;
