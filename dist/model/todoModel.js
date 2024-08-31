"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todoModel = new mongoose_1.Schema({
    title: {
        type: String,
    },
    projectName: {
        type: String,
    },
    description: {
        type: String,
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("todos", todoModel);
