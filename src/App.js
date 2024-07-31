import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  const intputref =useRef(null);
  const intputrefe =useRef(null);

  function handleclick()
  {
    // console.log(intputref.current.value);
     intputref.current.focus();
  }

  function handleclicke()
  {
    
     intputrefe.current.focus();
  }

  function handlechange()
  {
    intputrefe.current.value="sathis";
  }
  
  return (
    <div className="App" >
     <input type='text' ref={intputref} ></input>
     <input type='text' ref={intputrefe}></input>
     <button onClick={handleclick}>click</button>
     <button onClick={handleclicke}>clicke</button>
     <button onClick={handlechange}>change</button>
    </div>
  );
}

export default App;
