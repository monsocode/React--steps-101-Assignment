import React from 'react'
import { useState } from 'react';
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  // const step = 3
  const [step, setStep] = useState(1);
  const [display, setDisplay] = useState(true);


  // const whatever = useState(1);
  // console.log(whatever);
  const previousButtonHandler = function () {
    
    if (step > 1) { setStep(step - 1) }

  }

  const nextButtonHandler = function () {
    
    if (step < 3) { setStep(step + 1) }
  }

  const displayButtonHandler = function (){
    // if(display){useState(true)}else{useState(false)}
    setDisplay(!display)
  }

  return (
    <div>
      <button className="close" onClick={displayButtonHandler}>&times;</button>
      {display ? <div className="steps">
        {/* <Test firstName="jane" lastName="josh"/>
        <Test firstName="elo"/>
        <Test firstName="monsur"/> */}
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`} >1</div>
          <div className={`${step >= 2 ? "active" : ""}`} >2</div>
          <div className={`${step >= 3 ? "active" : ""}`} >3</div>
        </div>
        <p className="message">
          Step {step}: {messages[step - 1]}
        </p>
        <div className="buttons">
          <button className="btn" onClick={previousButtonHandler}>Previous</button>
          <button className="btn" onClick={nextButtonHandler}>Next</button>
        </div>
      </div> : null}
    </div>

  );
};



export default App;