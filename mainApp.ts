import { Application, Request, Response } from "express";
import todo from "./router/todoRouter"

export const mainApp = (app: Application) => {
    app.use("/", todo)
    try {
        app.get("/", (req: Request, res: Response) => {
            try {
                res.status(200).json({
                    status: 200,
                    message: "welcome to my simple API server"
                });
            } catch (error: any) {
                res.status(404).json({
                    status: 404,
                    message: error.message
                })
            }
        })
    } catch (error: any) {
        return error
    }
};