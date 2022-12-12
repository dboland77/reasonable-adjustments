import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {getDefaultHome} from "./src/backend/routes/disabilities.routes.mjs"
import dotenv from 'dotenv'

const app = express();

dotenv.config()

const PORT = process.env.SERVER_PORT || 8888;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(cors());

app.use("/", getDefaultHome);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
