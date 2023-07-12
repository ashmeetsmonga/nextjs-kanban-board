"use client";

import Board from "./components/Board";
import Modal from "./components/Modal";
import EditModal from "./components/EditModal";
import { AiFillGithub } from "react-icons/ai";

import { useModalStore } from "./store/useModalStore";

export default function Home() {
	const openModal = useModalStore((state) => state.openModal);

	return (
		<main className='relative flex w-screen min-h-screen flex-col items-center px-10 py-10 bg-black'>
			<h1 className='text-6xl text-white self-start font-bold'>Kanban Board</h1>
			<div className='self-start flex gap-2 items-center'>
				<p className='text-white'>Created by Ashmeet Singh Monga</p>
				<a href='https://www.github.com/ashmeetsmonga' target='_blank'>
					<AiFillGithub className='text-white' size={20} />
				</a>
			</div>
			<div className='flex gap-4 w-full justify-center items-start mt-10'>
				<Board state='todo' />
				<Board state='waiting' />
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
			<EditModal />
		</main>
	);
}
