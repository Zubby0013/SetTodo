import env from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import { mainApp } from "./mainApp";
env.config()

const port = parseInt(process.env.PORT!);
const app: Application = express();

app.use(cors());
app.use(express.json());
mainApp(app)

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

process.on("uncaughtException", () => {
    console.log("uncaughtException")
    server.on("connect", () => {
        process.exit(1);
    })
})

process.on("unhandledRejection", (err: Error) => {
    console.log("Unhandled rejection:", err.message)
    server.close(() => {
        process.exit(1);
    });
})