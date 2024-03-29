import { findTasks, createTask, update, destroy } from '../services/tasksServices.js';

export const getAllTasks = async (req, res) => {
	const tasks = await findTasks();
	res.status(200).json(tasks);
};

export const createNewTask = async (req, res) => {
	const { id } = await createTask(req.body);
	res.status(201).json(id);
};

export const updateTask = async (req, res) => {
	const { id } = req.params;
	await update(id, req.body);
	res.status(204).json();
};

export const deleteTask = async (req, res) => {
	const { id } = req.params;
	await destroy(id);
	res.status(204).json();
};
