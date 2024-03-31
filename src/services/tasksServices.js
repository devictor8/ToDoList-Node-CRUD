import { prisma } from '../db/prismaConnection.js';

export const findTasks = async () => {
	try {
		const data = await prisma.task.findMany({
			orderBy: {
				id: 'asc'
			}
		});
		return data;
	} catch (error) {
		console.error('Error connecting to the db: ', error);
		throw error;
	}
};

export const createTask = async ({ title }) => {
	try {
		const data = await prisma.task.create({
			data: {
				title,
				status: 'pendente'
			}
		});
		return data;
	} catch (error) {
		console.error('Error creating task: ', error);
		throw error;
	}
};

export const update = async (id, { title, status }) => {
	try {
		await prisma.task.update({
			where: { id: parseInt(id) },
			data: {
				title,
				status
			}
		});

	} catch (error) {
		console.log('Error updating user: ', error);
		throw error;
	}
};

export const destroy = async (id) => {
	try {
		await prisma.task.delete({
			where: {
				id: parseInt(id)
			}
		});
	} catch (error) {
		console.error('Error deleting task: ', error);
		throw error;
	}
};
