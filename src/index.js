import express from "express";
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

// app.get("/", ()=>{
//     response.send
// })

app.listen(PORT, ()=>{
    console.log(`Backend Running on PORT : ${PORT}`)
})