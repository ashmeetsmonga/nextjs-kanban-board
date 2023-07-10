"use client";

import React, { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

const Modal = () => {
	const isModalOpen = useTaskStore((state) => state.isModalOpen);
	const addTask = useTaskStore((state) => state.addTask);
	const closeModal = useTaskStore((state) => state.closeModal);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [state, setState] = useState("");

	return (
		<>
			{isModalOpen && (
				<div className='absolute flex justify-center items-center w-full h-screen top-0 left-0'>
					<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
					<div className='bg-white flex flex-col gap-4 w-1/2 max-w-[400px] p-4 rounded z-10'>
						<h1 className='font-bold text-xl'>Add New Task</h1>
						<input
							className='bg-gray-200 font-semibold rounded p-3 focus:outline-none'
							placeholder='Title'
							type='text'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<input
							className='bg-gray-200 rounded p-3 focus:outline-none'
							placeholder='Description'
							type='text'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
						<input
							className='bg-gray-200 rounded p-3 focus:outline-none'
							placeholder='State'
							type='text'
							value={state}
							onChange={(e) => setState(e.target.value)}
						/>
						<button
							onClick={() => {
								addTask(title, description, state);
								closeModal();
							}}
							className='bg-[#307FE2] px-4 py-2 text-white rounded font-semibold'
						>
							Add
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
