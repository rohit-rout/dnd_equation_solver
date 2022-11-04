import React,{useContext} from 'react'
import './Box.css'
import Operator from '../DragObjects/Operator';
import { NodeData, RHSData} from '../ContextProvider';
import Button from '@mui/material/Button';
const BoxOperator = () => {
    const operators=['+','-','/','*'];
    const comparision_operator=['>','<'];
    const {RHS,setRHS}=RHSData();
   const {nodes,setNodes} =NodeData();
    const handleClick=()=>{
     const num=(prompt("Enter your number"));
     setRHS({...RHS,number:num})
     
    }
    const handleClear=()=>{
      setNodes([]);
    }

    return (
      <div className='box box_operator'>
        <div className='operators_div'>
        {operators.map((name,index)=><Operator key={index} data={{name,type:'operators'}} draggable="true"></Operator>)}
        </div>
        <div className='sign_comparision'>
          {comparision_operator.map((name,index)=><Operator key={index} data={{name,type:'operators'}} draggable="true"></Operator>)}
        </div>
        <Button color="secondary" variant='outlined' onClick={handleClick} sx={{marginLeft:"2rem"}}>
            RHS Integer
        </Button>
        <Button color="error" variant='outlined' onClick={handleClear } sx={{marginLeft:"2rem"}}>
            Clear
        </Button>
      </div>
    )

}

export default BoxOperator
