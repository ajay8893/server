const express=require("express");
const app=express();
app.use(express.json());
const AuthRoute=require("./routes/auth");
app.use("/",AuthRoute);

// app.get("/",(req,res)=>{
//     res.send("hellooo");
// })

// app.post("/",(req,res)=>{
//     console.log(req.body);
// })


app.listen(8000,()=>{
    console.log("server connection successful");
})

