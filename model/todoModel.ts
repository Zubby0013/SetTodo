import { Schema, model } from "mongoose";
import { iPropsData } from "../utils/interface";

const todoModel = new Schema<iPropsData>(
    {
        title: {
            type: String,
        },
        projectName: {
            type: String,
        },
        description: {
            type: String,
        }
    },
    { timestamps: true }
);

export default model<iPropsData>("todos", todoModel);