import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import {getDefaultHome, 
    getDisabilities, 
    postRegistration,
    postLogin
} from "./src/backend/routes/disabilities.routes.mjs"
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

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('tiny'));
    }

app.route("/").get(getDefaultHome);
app.route("/disabilities").get(getDisabilities);
app.route("/register").post(postRegistration)
app.route("/login").post(postLogin)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
