const express=require("express");
const routes=require('./routes');
const cors=require("cors");
const connectDatabase=require('./database');
const bodyParser=require('body-parser');
const app=express();
connectDatabase().then(()=>console.log("you are connected to your database")).catch((err)=>console.log(err));
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    Accept : "application/json, text/plain", 
    // Content-Type : 'application/json;charset=UTF-8'
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api',routes);


app.listen(5000,()=>{
    console.log('your server in running on prot 5000');
})