import { Router } from "express";
import { createTodo, deleteTodo, getTodo, getTodoAll, updateTodo } from "../controller/todoController";

const router: Router = Router();

router.route("/create-todo").post(createTodo);
router.route("/get-all-todo").get(getTodoAll);
router.route("/get-one-todo/:id").get(getTodo);
router.route("/update-one-todo/:id").patch(updateTodo);
router.route("/delete-one-todo/:id").delete(deleteTodo);

export default router;