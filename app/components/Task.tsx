"use client";

import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useModalStore } from "../store/useModalStore";
import { useTaskStore } from "../store/useTaskStore";
import { TbPointFilled } from "react-icons/tb";

interface TaskProps {
	title: string;
	description: string;
	color: string;
}

const Task: React.FC<TaskProps> = ({ title, description, color }) => {
	const deleteTask = useTaskStore((state) => state.deleteTask);
	const setDraggedTask = useTaskStore((state) => state.setDraggedTask);
	const setEditTask = useTaskStore((state) => state.setEditTask);
	const openEditModal = useModalStore((state) => state.openEditModal);

	const handleEdit = () => {
		setEditTask(title);
		openEditModal();
	};

	return (
		<div
			draggable
			onDragStart={() => setDraggedTask(title)}
			className={`w-full flex flex-col gap-1 rounded bg-[${color}] p-4 cursor-move shadow hover:shadow-lg hover:scale-105 transition-all`}
		>
			<h3 className='font-semibold text-xl'>{title}</h3>

			<div className='flex flex-col gap-0.5 mt-1'>
				{description &&
					description.split("\n").map((desc, idx) => (
						<p key={idx} className='flex gap-0.5 font-light text-sm'>
							<TbPointFilled className='mt-1 flex-shrink-0' />
							{desc}
						</p>
					))}
			</div>

			<div className='flex gap-1 mt-1 ml-auto'>
				<AiFillEdit onClick={handleEdit} className='cursor-pointer' size={25} />
				<AiFillDelete onClick={() => deleteTask(title)} className='cursor-pointer' size={25} />
			</div>
		</div>
	);
};

export default Task;
