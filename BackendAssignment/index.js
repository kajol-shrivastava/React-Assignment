const express=require("express")
const mongoose=require("mongoose")
const route = require("./routes/route.js");

const app=express()


app.use(express.json())


// mongoDb connection
mongoose
  .connect(
    "mongodb+srv://kajolshrivastava:mongo%401999@cluster0.hzs17.mongodb.net/studentDatabase",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log(err));

// Initial route
app.use("/", route);

app.listen(5000,function(){
    console.log("server started on port 5000")
})