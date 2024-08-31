import { Request, Response } from "express";
import todoModel from "../model/todoModel";

export const createTodo = async (req: Request, res: Response) => {
    try {
        const { title, description, projectName } = req.body;
        const todo = await todoModel.create({ title, description, projectName });
        res.status(201).json({
            status: 201,
            data: todo,
            message: "Project created successfully"
        })
    } catch (error: any) {
        res.status(404).json({
            status: 404,
            message: error.message
        })
    }
}


export const getTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const todo = await todoModel.findById(id);
        res.status(201).json({
            status: 201,
            data: todo,
            message: "find one Project successfully"
        })
    } catch (error: any) {
        res.status(404).json({
            status: 404,
            message: error.message
        })
    }
}

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const todo = await todoModel.findById(id);
        if (todo) {
            const updatedTodo = await todoModel.findByIdAndUpdate(id, {
                title, description
            },
                { new: true }
            );
            res.status(201).json({
                status: 201,
                data: updatedTodo,
                message: "find one and update Project successfully"
            })
        } else {

            res.status(404).json({
                status: 404,
                message: "find one and update Project not successfully"
            })
        }
    } catch (error: any) {
        res.status(404).json({
            status: 404,
            message: error.message
        })
    }
}

export const getTodoAll = async (req: Request, res: Response) => {
    try {
        const todo = await todoModel.find();
        res.status(201).json({
            status: 201,
            data: todo,
            message: "find one Project successfully"
        })
    } catch (error: any) {
        res.status(404).json({
            status: 404,
            message: error.message
        })
    }
}


export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const todo = await todoModel.findByIdAndDelete(id);
        res.status(201).json({
            status: 201,
            data: todo,
            message: "find one Project successfully"
        })
    } catch (error: any) {
        res.status(404).json({
            status: 404,
            message: error.message
        })
    }
}