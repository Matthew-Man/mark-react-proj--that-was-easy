// import { create } from 'domain';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const createButton = (option: string) => (
  <button className={option} onClick={() => window.alert("that was " + option)}>{option}</button>
)


function ButtonBase() {
  const buttonOptions = ["easy", "ok", "difficult", "very difficult"]
  return (
    <div className="button-container">
      {buttonOptions.map(createButton)}
    </div>
  )
}


ReactDOM.render(<ButtonBase />, document.getElementById("button-base"))