"use client";

import React, { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import { BiCheck } from "react-icons/bi";
import { useModalStore } from "../store/useModalStore";
import { toast } from "react-hot-toast";

const Modal = () => {
	const isModalOpen = useModalStore((state) => state.isModalOpen);
	const closeModal = useModalStore((state) => state.closeModal);
	const addTask = useTaskStore((state) => state.addTask);
	const tasks = useTaskStore((state) => state.tasks);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [state, setState] = useState("todo");
	const [color, setColor] = useState("#D93535");

	const handleAddTask = () => {
		const taskTitleIndex = tasks.findIndex((task) => task.title === title);
		if (taskTitleIndex !== -1) return toast.error("Task title already present");
		addTask(title, description, state, color);
		setTitle("");
		setDescription("");
		setState("todo");
		setColor("#D93535");
		closeModal();
	};

	return (
		<>
			{isModalOpen && (
				<div className='absolute flex justify-center items-center w-full h-screen top-0 left-0'>
					<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
					<div className='bg-white flex flex-col gap-5 w-[500px] p-10 rounded z-10'>
						<h1 className='text-3xl'>Add New Task</h1>
						<input
							className='bg-gray-200 rounded p-3 outline-none focus:outline-none'
							placeholder='Title * (Cannot be same as of other tasks)'
							type='text'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<textarea
							className='bg-gray-200 rounded p-3 outline-none focus:outline-none'
							placeholder='Description'
							rows={5}
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
									onClick={() => setState("waiting")}
									className={`px-4 py-2 rounded ${
										state === "waiting" ? "bg-[#307FE2] text-white" : "bg-gray-200"
									} `}
								>
									Waiting
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
						<div className='flex gap-4 mt-5 justify-center'>
							<button
								disabled={title.length === 0}
								onClick={handleAddTask}
								className='bg-[#307FE2] px-4 py-2 text-white rounded disabled:opacity-50'
							>
								Add
							</button>
							<button onClick={closeModal} className='bg-[#D93535] px-4 py-2 text-white rounded'>
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
