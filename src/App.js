import React,{useState} from 'react';
import './App.css';

function App() {

  let [val,changeValue]=useState(0);

  const incValue=()=>{
    changeValue(++val);
  }

  const decValue=()=>{
    if(val>0)
    { 
    changeValue(--val);
    }
    else{
      alert("you reach the limit");
    }
    
  }

  return (
    <>
      <div id="main">
        <div id="box">
            <br></br>
            <h1>{val}</h1>
            <div id="btns">
              <button onClick={incValue}>Incre</button>
              <button onClick={decValue}>Decre</button>
            </div>
        </div>

      </div>
    </>   
  );
}
export default App;
