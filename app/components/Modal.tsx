"use client";

import React from "react";
import { useTaskStore } from "../store/useTaskStore";

const Modal = () => {
	const isModalOpen = useTaskStore((state) => state.isModalOpen);

	return (
		<>
			{isModalOpen && (
				<div className='absolute flex justify-center items-center w-full h-screen top-0 left-0'>
					<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
					<div className='bg-white w-1/2 max-w-[400px] p-4 rounded z-10'>Add Task</div>
				</div>
			)}
		</>
	);
};

export default Modal;
