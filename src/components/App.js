import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [change, setchange] = useState('');
  function changedata(){
    let c="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
    setchange(c);
  }
  return (
    <div id="main">
      <button id="click" onClick={changedata}>Click</button>
      <p id="para">{change}</p>
    </div>
  );
}


export default App;
