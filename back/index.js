import express from "express";
import router from "./route.js";

const app = express();
app
    .use(router)
    
const port = 3000;

app.listen(3000, () =>{
    console.log('Example app listening at http://localhost:'+ port);
})