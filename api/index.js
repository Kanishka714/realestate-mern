import express from "express";
import mongoose from "mongoose";

mongoose.connect
("mongodb+srv://kanishka:dilshan@mern-estate-c.vsxarxn.mongodb.net/mern-estate-c?retryWrites=true&w=majority&appName=mern-estate-c")
.then (()=> {
    console.log("Database connected");   {/*to check whether database is connected or not*/}
}).catch((err) => {
    console.log(err);
})

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});