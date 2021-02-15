// import { create } from 'domain';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const createButton = (option: string) => (
  <button onClick={() => window.alert("that was " + option)}>{option}</button>
)


function buttonBase() {
  const buttonOptions = ["easy", "ok", "difficult", "very difficult"]
  return (
    buttonOptions.map(createButton)
  )
}

function CompileButtons() {
  return (
    <div>
      {buttonBase()}
    </div>
  )
}


ReactDOM.render(<CompileButtons />, document.getElementById("button-base"))