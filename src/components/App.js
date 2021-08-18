import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [change, setchange] = useState(true);
  function changedata(){
    let c=change;
    if(c){
      c=false;
    }
    else{
      c=true;
    }
    setchange(c);
  }
  return (
    <div id="main">
      <button id="click" onClick={changedata}>Click</button>
      {change ? null : (
				<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)}
    </div>
  );
}


export default App;
