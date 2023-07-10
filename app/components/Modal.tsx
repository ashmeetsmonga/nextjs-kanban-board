"use client";

import React, { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import { BiCheck } from "react-icons/bi";

const Modal = () => {
	const isModalOpen = useTaskStore((state) => state.isModalOpen);
	const addTask = useTaskStore((state) => state.addTask);
	const closeModal = useTaskStore((state) => state.closeModal);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [state, setState] = useState("todo");
	const [color, setColor] = useState("#D93535");

	return (
		<>
			{isModalOpen && (
				<div className='absolute flex justify-center items-center w-full h-screen top-0 left-0'>
					<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
					<div className='bg-white flex flex-col gap-5 w-[500px] p-10 rounded z-10'>
						<h1 className='font-bold text-3xl'>Add New Task</h1>
						<input
							className='bg-gray-200 rounded p-3 outline-none focus:outline-none'
							placeholder='Title'
							type='text'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<input
							className='bg-gray-200 rounded p-3 outline-none focus:outline-none'
							placeholder='Description'
							type='text'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>

						<div>
							<h2 className='mb-2'>Select State</h2>
							<div className='flex gap-2'>
								<button
									onClick={() => setState("todo")}
									className={`px-4 py-2 rounded ${
										state === "todo" ? "bg-[#D93535] text-white" : "bg-gray-200"
									} `}
								>
									Todo
								</button>
								<button
									onClick={() => setState("in progress")}
									className={`px-4 py-2 rounded ${
										state === "in progress" ? "bg-[#6A6DCD] text-white" : "bg-gray-200"
									} `}
								>
									In Progress
								</button>
								<button
									onClick={() => setState("completed")}
									className={`px-4 py-2 rounded ${
										state === "completed" ? "bg-[#00A88B] text-white" : "bg-gray-200"
									} `}
								>
									Completed
								</button>
							</div>
						</div>
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
						<button
							onClick={() => {
								addTask(title, description, state, color);
								closeModal();
							}}
							className='bg-[#307FE2] px-4 py-2 mt-5 text-white rounded font-semibold'
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
