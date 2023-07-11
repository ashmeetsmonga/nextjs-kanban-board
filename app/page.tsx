"use client";

import Board from "./components/Board";
import Modal from "./components/Modal";
import { useTaskStore } from "./store/useTaskStore";

export default function Home() {
	const openModal = useTaskStore((state) => state.openModal);

	return (
		<main className='relative flex w-screen min-h-screen flex-col items-center p-16 bg-black'>
			<h1 className='text-6xl text-white font-bold'>Kanban Board</h1>
			<div className='flex gap-8 w-full justify-center mt-10'>
				<Board state='todo' />
				<Board state='in progress' />
				<Board state='completed' />
			</div>
			<button
				onClick={openModal}
				className='absolute top-5 right-5 bg-[#262626] py-4 px-6 rounded-full text-4xl text-white'
			>
				+
			</button>
			<Modal />
		</main>
	);
}
