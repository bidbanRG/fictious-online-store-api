import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import MongoDBConnection from "./mongodb_connection/index.js" 
import Router from "./routes/route.js";

const PORT = process.env.PORT || 8000;

dotenv.config()
const app = express();

app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api/",Router)

app.listen(PORT,() => {
    console.log(`server is running successfully on http://localhost:${PORT}`)
})
MongoDBConnection();