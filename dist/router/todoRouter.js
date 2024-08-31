"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = require("../controller/todoController");
const router = (0, express_1.Router)();
router.route("/create-todo").post(todoController_1.createTodo);
router.route("/get-all-todo").get(todoController_1.getTodoAll);
router.route("/get-one-todo/:id").get(todoController_1.getTodo);
router.route("/update-one-todo/:id").patch(todoController_1.updateTodo);
router.route("/delete-one-todo/:id").delete(todoController_1.deleteTodo);
exports.default = router;
