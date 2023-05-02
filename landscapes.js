const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/public`));

app.get("/", (req,res)=>{
    // console.log(__dirname);
    res.sendFile(`${__dirname}/landscapes.html`);
});

app.get("/landscapes_main", (req,res)=>{
    // console.log(__dirname);
    res.sendFile(`${__dirname}/landscapes_main.html`);
});

app.get("/login", (req,res)=>{
    res.sendFile(`${__dirname}/landscapes_login.html`)
});

app.get("/signUp",(req,res)=>{
    res.sendFile(`${__dirname}/landscapes_register.html`)
});

app.listen(5000,()=>{
    console.log("server at 5000");
});


