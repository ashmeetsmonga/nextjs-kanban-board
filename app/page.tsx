import Image from "next/image";
import Board from "./components/Board";

export default function Home() {
	return (
		<main className='flex w-screen min-h-screen flex-col items-center p-24 bg-black'>
			<h1 className='text-6xl text-white font-bold'>Kanban Board</h1>
			<div className='flex gap-8 w-full justify-center mt-10'>
				<Board state='todo' />
				<Board state='in progress' />
				<Board state='completed' />
			</div>
		</main>
	);
}
