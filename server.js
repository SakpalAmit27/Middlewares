
const express = require('express')

const app = express(); 

app.use(express.json()); // to get the body requests [ mandotary ]

app.listen(4000); 


app.get('/',(req,res) => {
    res.send(`<h2>Dashboard</h2>`)
})



const userMiddleware = (req,res,next) => {
    if(user !== "amit" && pass !== "admin"){
        res.status(403).json({message : "incorrect input"})
    }else{
        next(); // moving to the endpoint (exec the middleware)
    }
}


const idMiddleware = (req,res,next) => {

    if(!id == 1 || !id == 2){
        res.status(403).json({message : "incorrect id"})
    }else{
        next();
    }

}


app.get('/store', userMiddleware , idMiddleware , (req,res) => {

    res.send("store endpoint")
})