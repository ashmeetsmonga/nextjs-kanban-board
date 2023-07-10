"use client";

import React from "react";
import { useTaskStore } from "../store/useTaskStore";
import Task from "./Task";

interface BoardProps {
	state: string;
}

const Board: React.FC<BoardProps> = ({ state }) => {
	const tasks = useTaskStore((state) => state.tasks);

	return (
		<div className='bg-[#262626] w-1/3 max-w-[400px] min-h-[500px] text-white p-4 rounded'>
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
