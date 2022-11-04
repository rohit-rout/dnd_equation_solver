import React from "react";
import Board from "./components/Board";
import BoxOperand from "./components/Box/BoxOperand";
import BoxOperator from "./components/Box/BoxOperator";
import { NodeData, RHSData } from './components/ContextProvider'
import './App.css'
import axios  from "axios";
import Button from '@mui/material/Button';
const App = () => {
  const {nodes} =NodeData();
  const {RHS}= RHSData();

  async function evaluate(expression){

    const {data}=await axios.post('http://localhost:5000/api/calculate',{expression})
    const res= data.result;

    if(res==="wrong expression" || !("sign" in RHS) || !("number" in RHS) )
    {alert("wrong expression");return }
    console.log(res);

    if(RHS.sign==='<' && res<RHS.number )
    alert(`your LHS results to ${res} therefore this expression is true`);
    else if(RHS.sign==='>' && res>RHS.number)
    alert(`your LHS results to ${res} therefore this expression is true`);
    else
    alert(`your LHS results to ${res} therefore this expression is false`);

  }
  const handleClick=()=>{
   let expression= nodes.map((node,index)=>{
    return node.type==='operands'?node.value:node.name;
   })
   expression=expression.toString();
   
  evaluate(expression);
  
    
   
   
  }
  return (
    <div className="app">

        <BoxOperand />
        <BoxOperator />
        <Board id="board_1" />
        <Button color="primary" variant="contained" sx={{marginLeft:"2rem"}} onClick={handleClick}>Calculate</Button>
      
    </div>
  );
};

export default App;
