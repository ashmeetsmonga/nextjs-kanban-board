"use client";

import React, { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import Task from "./Task";

interface BoardProps {
	state: string;
}

const Board: React.FC<BoardProps> = ({ state }) => {
	const tasks = useTaskStore((state) => state.tasks);
	const draggedTask = useTaskStore((state) => state.draggedTask);
	const setDraggedTask = useTaskStore((state) => state.setDraggedTask);
	const moveTask = useTaskStore((state) => state.moveTask);

	const [drop, setDrop] = useState(false);

	const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDrop(true);
	};

	const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		moveTask(draggedTask, state);
		setDraggedTask(null);
		setDrop(false);
	};

	const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDrop(false);
	};

	return (
		<div
			onDragOver={onDragOver}
			onDrop={onDrop}
			onDragLeave={onDragLeave}
			className={`bg-[#262626] w-1/3 max-w-[400px] min-h-[200px] text-white p-4 rounded ${
				drop ? "border-2 border-gray-300 border-dashed" : "border-2 border-transparent"
			}`}
		>
			<h2 className='text-2xl text-white font-bold capitalize'>{state}</h2>
			<div className='w-full flex flex-col gap-2 mt-5'>
				{tasks
					.filter((task) => task.state === state)
					.map((task, idx) => (
						<Task key={idx} title={task.title} description={task.description} color={task.color} />
					))}
			</div>
		</div>
	);
};

export default Board;
