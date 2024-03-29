import express from 'express';
import { createNewTask, deleteTask, getAllTasks, updateTask } from '../controllers/tasksControllers.js';

const router = express();

router.get('/tasks', getAllTasks);
router.post('/tasks', createNewTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;