import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
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
              <button onClick={incValue}><AddIcon style={{fontSize:"20px"}}/></button>
              <button onClick={decValue}><RemoveIcon style={{fontSize:"20px"}}/></button>
            </div>
        </div>

      </div>
    </>   
  );
}
export default App;
