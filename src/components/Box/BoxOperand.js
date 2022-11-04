import React, { useEffect, useState } from 'react'
import Operand from '../DragObjects/Operand';
import axios from "axios";
import './Box.css'
const BoxOperand = () => {
    const [variables,setVariables]=useState([]);
    useEffect(()=>{
      async function fetchData(){
        const response= await axios.get("http://localhost:5000/api/variables");
         setVariables(response.data.variables);
      }
      fetchData();
      
    // setVariables((prev)=>data.)
    },[])
  return (
    <div className='box'>
      {variables.map((element,index)=><Operand key={index} data={{name:element.name,value:element.value,type:'operands'}} id={element.name} draggable="true"></Operand>)}
    </div>
  )
}

export default BoxOperand
