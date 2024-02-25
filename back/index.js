import express from "express";
import router from "./route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(router)
    
const port = 3000;

app.listen(3000, () =>{
    console.log('Example app listening at http://localhost:'+ port);
})