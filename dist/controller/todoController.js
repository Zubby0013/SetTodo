"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.getTodoAll = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, projectName } = req.body;
        const todo = yield todoModel_1.default.create({ title, description, projectName });
        res.status(201).json({
            status: 201,
            data: todo,
            message: "Project created successfully"
        });
    }
    catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message
        });
    }
});
exports.createTodo = createTodo;
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield todoModel_1.default.findById(id);
        res.status(201).json({
            status: 201,
            data: todo,
            message: "find one Project successfully"
        });
    }
    catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message
        });
    }
});
exports.getTodo = getTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const todo = yield todoModel_1.default.findById(id);
        if (todo) {
            const updatedTodo = yield todoModel_1.default.findByIdAndUpdate(id, {
                title, description
            }, { new: true });
            res.status(201).json({
                status: 201,
                data: updatedTodo,
                message: "find one and update Project successfully"
            });
        }
        else {
            res.status(404).json({
                status: 404,
                message: "find one and update Project not successfully"
            });
        }
    }
    catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message
        });
    }
});
exports.updateTodo = updateTodo;
const getTodoAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield todoModel_1.default.find();
        res.status(201).json({
            status: 201,
            data: todo,
            message: "find one Project successfully"
        });
    }
    catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message
        });
    }
});
exports.getTodoAll = getTodoAll;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield todoModel_1.default.findByIdAndDelete(id);
        res.status(201).json({
            status: 201,
            data: todo,
            message: "find one Project successfully"
        });
    }
    catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message
        });
    }
});
exports.deleteTodo = deleteTodo;
