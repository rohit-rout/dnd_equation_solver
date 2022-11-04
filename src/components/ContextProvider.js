import React,{useContext,createContext, useState} from 'react'
const Context=createContext();
const NodeContext=createContext();
export const RHSData=()=>{
  return useContext(Context);
 }
 export  const NodeData=()=>{
  return useContext(NodeContext);
 }
const ContextProvider = ({children}) => {
  const [RHS, setRHS]=useState({})
  const [nodes,setNodes]=useState([]);

  return (
    <div>
        <Context.Provider value={{RHS,setRHS}}>
          <NodeContext.Provider value={{nodes,setNodes}}>
          {children}
          </NodeContext.Provider>
        </Context.Provider>
      
    </div>
  )
}
export default ContextProvider;
