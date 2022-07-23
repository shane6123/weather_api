const path = require("path")
const express =require("express")
const app =  express()
port = 3000
const hbs  = require("hbs")
app.use(express.static(path.join(__dirname,"../public")))
app.set("views",path.join(__dirname,"../template/views"))
app.set("view engine","hbs");
hbs.registerPartials(path.join(__dirname,"../template/partials"))

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404")
})
app.listen(port,()=>{
    console.log(`server is run on port ${port}`);
})