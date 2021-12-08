import express from "express";
import { getTodos, createTodo } from '../controllers/todo.js';
import todo from '../models/todo.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);


export default router;