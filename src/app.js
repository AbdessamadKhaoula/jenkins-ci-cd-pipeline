const express = require("express"); 
const app = express(); // Initializing Express App

// Sending Hello World when anyone browse your webpage

app.get("/*", (req, res)=>{
        res.send('Hello World This is an Express App '); 
});

app.listen(3000, ()=> console.log("App Listening on port 3000"));