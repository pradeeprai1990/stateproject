import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [counter,setCouter]=useState(1); 
  let [passwordStatus,setPasswordStatus]=useState(false)
  // let count=1;

  // let chnageCounter=()=>{
  //     counter=counter+1
  //     setCouter(counter)

  //   // count=count+1;
  //   // console.log(count)
  // }


  return (
    <div className="App">
        <h1>  {counter}   </h1>
        <button onClick={()=>setCouter(counter+1)}>Counter</button>

          <br/>

          <input type={ (passwordStatus) ? 'text' : 'password' } /> 
          
          <button onClick={()=>setPasswordStatus(!passwordStatus)}> 
          { (passwordStatus) ? 'hide' : 'show' }
           </button>
           



    </div>
  );
}

export default App;
