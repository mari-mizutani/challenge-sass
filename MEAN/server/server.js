import Express from "express";

const app =Express();
const port = 3000;

//GET, PUT, POST, DELETE

app.get("/",(req,res)=>{
    res.json(
        {
            "statuscode":200,
            "statusmessage":"SUCCESS"
        }
    )
})
app.listen(port,()=>
console.log("Listening on port" + port));