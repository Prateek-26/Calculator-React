import React, { useState } from "react";

const nums = [7,8,9,4,5,6,1,2,3];
function App() {

  const [calc, setCalc] = useState(""); //will hold the evaluation string
  const [result, setResult] = useState("");
  const [decimal, setDecimal] = useState(false);

  const ops = ['/', '*', '+', '-', '.'];

  function updateCalc(value){
    // if(decimal===false)
    // setDecimal(true)
    if((ops.includes(value) && calc === '')||(ops.includes(value) && ops.includes(calc.slice(-1)))){
      return;
    }
    // valid decimal
    if(value==='.' && decimal===false){
      setDecimal(true);
    }
    else if(value==="." && decimal===true){
      return;
    }
    else if(ops.includes(value) && value !== '.'){
      setDecimal(false);
    }
    setCalc(calc + value);
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }

  function calculate(){
    setCalc(eval(calc).toString());
  }

  function deleteLast(){
    if(calc === ''){
      return;
    }
    const value = calc.slice(0,-1);
    setCalc(value);
  }


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : '' } &nbsp;
          {calc || '0'}
        </div>
        <div className="operators">
          <button onClick={()=>updateCalc('/')}>/</button>
          <button onClick={()=>updateCalc('*')}>*</button>
          <button onClick={()=>updateCalc('+')}>+</button>
          <button onClick={()=>updateCalc('-')}>-</button>
          <button onClick={deleteLast}>DEL</button>
          </div>
          <div className="digits">
            {nums.map((element)=>(
              <button  onClick={()=>updateCalc(element.toString())}>{element}</button>
            ))}
          <button onClick={()=>updateCalc('0')}>0</button>
          <button onClick={()=>updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
          </div>
      </div>
    </div>
  );
}
export default App;
