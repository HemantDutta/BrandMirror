import express from "express";
import cors from 'cors';
import puppeteer from "puppeteer";

//Port Number
const port = 5000;

//Express App
const app = express();
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Index Page Listener
app.get("/", (req,res)=>{
   res.send(`<h1>Brand Mirror Server</h1>`);
});



//Server Listener
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${5000}`);
});