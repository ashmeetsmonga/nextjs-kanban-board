"use client";

import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useTaskStore } from "../store/useTaskStore";

interface TaskProps {
	title: string;
	description: string;
	color: string;
}

const Task: React.FC<TaskProps> = ({ title, description, color }) => {
	const deleteTask = useTaskStore((state) => state.deleteTask);

	return (
		<div className={`w-full flex flex-col gap-1 rounded bg-[${color}] p-4`}>
			<h3 className='font-semibold text-xl'>{title}</h3>
			<p className='font-light'>{description}</p>

			<AiFillDelete
				onClick={() => deleteTask(title)}
				className='ml-auto cursor-pointer'
				size={25}
			/>
		</div>
	);
};

export default Task;
