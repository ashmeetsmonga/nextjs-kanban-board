"use client";

import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useModalStore } from "../store/useModalStore";
import { useTaskStore } from "../store/useTaskStore";
import { TbPointFilled } from "react-icons/tb";

interface TaskProps {
	task: Task;
}

const Task: React.FC<TaskProps> = ({ task }) => {
	const deleteTask = useTaskStore((state) => state.deleteTask);
	const setDraggedTask = useTaskStore((state) => state.setDraggedTask);
	const setEditTask = useTaskStore((state) => state.setEditTask);
	const openEditModal = useModalStore((state) => state.openEditModal);

	const handleEdit = () => {
		setEditTask(task.title);
		openEditModal();
	};

	return (
		<div
			draggable
			onDragStart={() => setDraggedTask(task.id)}
			className={`w-full flex flex-col gap-1 rounded bg-[${task.color}] p-4 cursor-move shadow hover:shadow-lg hover:scale-105 transition-all`}
		>
			<h3 className='font-semibold text-xl'>{task.title}</h3>

			<div className='flex flex-col gap-0.5 mt-1'>
				{task.description &&
					task.description.split("\n").map((desc, idx) => (
						<p key={idx} className='flex gap-0.5 font-light text-sm'>
							<TbPointFilled className='mt-1 flex-shrink-0' />
							{desc}
						</p>
					))}
			</div>

			<div className='flex gap-1 mt-1 ml-auto'>
				<AiFillEdit onClick={handleEdit} className='cursor-pointer' size={25} />
				<AiFillDelete onClick={() => deleteTask(task.title)} className='cursor-pointer' size={25} />
			</div>
		</div>
	);
};

export default Task;
