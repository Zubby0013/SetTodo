import env from "dotenv";
import { connect } from "mongoose";

env.config();

export const dbConfig = async () => {
    try {
        return await connect(process.env.MONGODB_CONNECTION!).then(() => {
            console.log("Connected!!!!")
        }).catch(() => {
            console.error()
        })
    } catch (error: any) {
        return error
    }
}