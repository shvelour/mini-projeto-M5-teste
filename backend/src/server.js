import express from "express";
import cors from "cors"
import { moviesRouter } from "./routes/MoviesRouter.js";
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(moviesRouter);

app.listen(port, () => {
    console.log("Server run🚀");
});