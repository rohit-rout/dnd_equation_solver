import React from 'react'
import "./drags.css"
import ClearIcon from '@mui/icons-material/Clear';
const Operator = (props) => {
    const dragStart=(e)=>{

        e.dataTransfer.setData('drag_value',JSON.stringify(props.data));  
    }
    
    const dragOver=e=>{
      
        e.stopPropagation();
        
    }
  return (
    <div className="operator"
    draggable={props.draggable}
    onDragOver={dragOver}
    onDragStart={dragStart}
    id={props.id}
    >
       {props.remove && <ClearIcon sx={{position: 'absolute' ,top:1 , right:1, color:'grey',fontSize:'medium'}} onClick={()=>props.remove(props.data.X)} ></ClearIcon>}
      <h1>{props.data.name}</h1>
    </div>
  )
}

export default Operator
