"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const todoRouter_1 = __importDefault(require("./router/todoRouter"));
const mainApp = (app) => {
    app.use("/", todoRouter_1.default);
    try {
        app.get("/", (req, res) => {
            try {
                res.status(200).json({
                    status: 200,
                    message: "welcome to my simple API server"
                });
            }
            catch (error) {
                res.status(404).json({
                    status: 404,
                    message: error.message
                });
            }
        });
    }
    catch (error) {
        return error;
    }
};
exports.mainApp = mainApp;
