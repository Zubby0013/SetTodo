import { Document } from "mongoose";

export interface iProps {
    title: string,
    projectName: string,
    description: string
}

export interface iPropsData extends iProps, Document { };