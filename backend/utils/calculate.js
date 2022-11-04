
const express=require("express");



const prefixd=['1','+','2'];

function simplify(val1, val2,operator){
    switch(operator){
     case '+': return val1+val2;
     case '-': return val1-val2;
     case '/': return val1/val2;
     case '*': return val1*val2;
     default: return 0;
    }
 }
function checkAssociativity(opertor1,opertor2){
    const associativity={'/':1,'*':2,'+':3,'-':4};
    if(associativity[opertor1]<associativity[opertor2])
    return true;
    
    return false;

}
function isOperand(character){
   if(character!=='+' && character!=='/' && character!=='*' && character!=='-')
   return true;

   return false;
}
function checkValid(prefix){
   if(!isOperand(prefix[0]) || !isOperand(prefix[prefix.length-1]))
   return false;
  for(let i=1;i<prefix.length;i++){
   if(isOperand(prefix[i]) && isOperand(prefix[i-1]))
   return false;
  }
  return true;
}
 const prefixToResult=(prefix)=>{
 let stack_operator=[],stack_operand=[];
 let  ok=1;
 if(!(checkValid(prefix)))
 return "wrong expression";

 for(let i=0;i<prefix.length;i++){
    
//    console.log(prefix[i]);
    if(isOperand(prefix[i]))
    stack_operand.push(prefix[i]-'0');
    else{
            
            while(stack_operator.length && checkAssociativity(stack_operator[stack_operator.length-1],prefix[i])){
                if(stack_operand.length<2)
                {ok=0; break;}
                let val2=stack_operand.pop();
                let val1=stack_operand.pop();
                let operator=stack_operator.pop();
                if(operator=='/' && val2==0)
                {ok=0;  break;}
                stack_operand.push(simplify(val1,val2,operator));
   
            }
            stack_operator.push(prefix[i]);
        
    }
    if(!ok)
    break;

 }


 while(stack_operator.length &&  ok){
    if(stack_operand.length<2)
       {ok=0; break;}
    let val2=stack_operand.pop();
    let val1=stack_operand.pop();
    let operator=stack_operator.pop();
    if(operator=='/' && val2==0)
    {ok=0;  break;}
    stack_operand.push(simplify(val1,val2,operator));
 }
 
 if(!ok)
 return "wrong expression"
 
 return stack_operand.pop();
 

}

// prefixToResult(prefix)
module.exports=prefixToResult;

