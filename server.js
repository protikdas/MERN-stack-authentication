import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

/* <-----ENVIRONMENT SETTINGS-----> */
dotenv.config();

/* <-----PORT SETTINGS-----> */
const PORT = process.env.PORT || 5000;

/* <----------EXPRESS SETTINGS----------> */
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* <------------EXPRESS ROUTES------------> */
import auth from "./server-src/routes/auth";

/* <----------EXPRESS SERVER----------> */
app.use("/api/auth", auth);

/* <------------MONGOOSE SETTINGS------------> */
mongoose.connect(process.env.MONGODB_URL);

/* <------------SERVER LISTEN------------> */
app.listen(PORT, () => console.log("Server started on port " + PORT));
