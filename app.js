import express from "express";

const app = express()

app.get("/",(req,res)=>{
    res.send("Your Are On Right Path... keep working!");
})

app.get("/json",(req,res)=>{
    res.json({
        name:"Ajay",
        age:20,
        marks:99
    })
})

export {app}
