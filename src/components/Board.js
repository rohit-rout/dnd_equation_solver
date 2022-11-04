
import React from 'react'
import Operand from './DragObjects/Operand';
import Operator from './DragObjects/Operator';
import "./Board.css";
import { NodeData, RHSData } from './ContextProvider';


const Board = (props) => {
    const {RHS,setRHS}= RHSData();
    const {nodes,setNodes}= NodeData();
    const removeElement=(X)=>{
     setNodes((prev)=>{
      return prev.filter((data)=>X!==data.X)
     })
    }
    const removeRHS=(name)=>{
      const copy={...RHS};
      delete copy[name];
      setRHS({...copy});
    }
    const drop=(e)=>{
        e.preventDefault();
        console.log(e);


      let data=e.dataTransfer.getData('drag_value');
       data= JSON.parse(data);
       data.X=e.pageX;
       console.log(data);
       let arr=[...nodes];
        let isPushed=0;
        for(let i=0;i<arr.length;i++){
          if(arr[i].X>=data.X){
            arr.splice(i,0,data);
            isPushed=1;
            break;
          }
        }
        if(!isPushed)
        arr.push(data);
       
      
      //  console.log(data);
       if(data.name==='<' || data.name==='>')
       { setRHS({...RHS,sign:data.name});}
       else
       setNodes([...arr]);
 
    }
    const dragOver=(e)=>{
        e.preventDefault();
        // console.log(e)
     
    }
  return (
    <div className="board"
    id={props.id}
    onDrop={drop}
     onDragOver={dragOver}
    >
    
        {nodes.map((node,index)=> 
        node.type==='operands'
        ?<Operand key={index} id={index} remove={removeElement} data={node}></Operand> 
        :<Operator key={index} id= {index}  remove ={removeElement} data={node}></Operator>
        )}
        {RHS.sign && <Operator id="sign" remove ={removeRHS} data={{name:RHS.sign}} ></Operator>}
        {RHS.number && <Operand id ="number" remove={removeRHS} data={{name:RHS.number}} ></Operand>}

    </div>
  )
}

export default Board
