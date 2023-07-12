"use client";

import React, { useEffect, useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import { BiCheck } from "react-icons/bi";
import { useModalStore } from "../store/useModalStore";

const Modal = () => {
	const isEditModalOpen = useModalStore((state) => state.isEditModalOpen);
	const closeEditModal = useModalStore((state) => state.closeEditModal);
	const editTask = useTaskStore((state) => state.editTask);
	const updateTask = useTaskStore((state) => state.updateTask);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [color, setColor] = useState("");

	useEffect(() => {
		setTitle(editTask?.title as string);
		setDescription(editTask?.description as string);
		setColor(editTask?.color as string);
	}, [editTask]);

	const handleAddTask = () => {
		updateTask(title, description, color);
		closeEditModal();
	};

	return (
		<>
			{isEditModalOpen && (
				<div className='absolute flex justify-center items-center w-full h-screen top-0 left-0'>
					<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
					<div className='bg-white flex flex-col gap-5 w-[500px] p-10 rounded z-10'>
						<h1 className='font-bold text-3xl'>Edit Task</h1>
						<input
							className='bg-gray-300 rounded p-3 outline-none focus:outline-none disabled:text-gray-500'
							placeholder='Title'
							type='text'
							disabled
							value={title}
						/>
						<input
							className='bg-gray-200 rounded p-3 outline-none focus:outline-none'
							placeholder='Description'
							type='text'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
						<div>
							<h2 className='mb-2'>Select Color</h2>
							<div className='flex gap-2'>
								<button
									onClick={() => setColor("#D93535")}
									className='flex justify-center items-center w-8 h-8 bg-[#D93535] rounded-full'
								>
									{color === "#D93535" && <BiCheck size={25} color='white' />}
								</button>
								<button
									onClick={() => setColor("#00A88B")}
									className='flex justify-center items-center w-8 h-8 bg-[#00A88B] rounded-full'
								>
									{color === "#00A88B" && <BiCheck size={25} color='white' />}
								</button>
								<button
									onClick={() => setColor("#6A6DCD")}
									className='flex justify-center items-center w-8 h-8 bg-[#6A6DCD] rounded-full'
								>
									{color === "#6A6DCD" && <BiCheck size={25} color='white' />}
								</button>
								<button
									onClick={() => setColor("#307FE2")}
									className='flex justify-center items-center w-8 h-8 bg-[#307FE2] rounded-full'
								>
									{color === "#307FE2" && <BiCheck size={25} color='white' />}
								</button>
							</div>
						</div>
						<div className='flex gap-4 mt-5 justify-center'>
							<button
								onClick={handleAddTask}
								className='bg-[#307FE2] px-4 py-2 text-white rounded font-semibold'
							>
								Add
							</button>
							<button
								onClick={closeEditModal}
								className='bg-[#D93535] px-4 py-2 text-white rounded font-semibold'
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
