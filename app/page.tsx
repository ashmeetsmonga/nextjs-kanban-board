"use client";

import Board from "./components/Board";
import { AiFillGithub } from "react-icons/ai";
import { set } from "idb-keyval";

import { useModalStore } from "./store/useModalStore";
import { useTaskStore } from "./store/useTaskStore";
import { toast } from "react-hot-toast";
import moment from "moment";

export default function Home() {
	const openModal = useModalStore((state) => state.openModal);
	const openLoadSnapshotModal = useModalStore((state) => state.openLoadSnapshotModal);
	const tasks = useTaskStore((state) => state.tasks);

	const saveSnapshot = () => {
		let toastID = toast.loading("Saving snapshot");
		const key = moment().format("DD-MM-YYYY");
		set(key, JSON.stringify(tasks))
			.then(() => toast.success("Snapshot saved", { id: toastID }))
			.catch(() => toast.error("Error in saving snapshot", { id: toastID }));
	};

	return (
		<main className='relative flex w-screen min-h-screen flex-col items-center px-10 py-10 bg-black'>
			<div className='w-full flex justify-between self-start'>
				<h1 className='text-6xl text-white font-semibold'>Kanban Board</h1>
				<div className='flex gap-4'>
					<button
						onClick={openModal}
						className='bg-[#262626] py-2 px-5 flex justify-center items-center rounded-full text-3xl text-white'
					>
						+
					</button>
					<button onClick={saveSnapshot} className='bg-[#262626] px-4 py-2 text-white rounded-xl'>
						Save Snapshot
					</button>
					<button
						onClick={openLoadSnapshotModal}
						className='bg-[#262626] px-4 py-2 text-white rounded-xl'
					>
						Load Snapshot
					</button>
				</div>
			</div>
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
		</main>
	);
}
