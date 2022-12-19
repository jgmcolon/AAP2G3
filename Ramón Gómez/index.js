const express = require("express");
const app = express();


app.get("/", (request, response)=>{
    console.log(__dirname);
    response.sendFile(__dirname+"/views/index.html")
})

app.listen(3000, ()=>{
    console.log("Server Starts at Port No: 3000");
})