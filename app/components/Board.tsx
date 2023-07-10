import React from "react";
import Task from "./Task";

interface BoardProps {
	state: string;
}

const Board: React.FC<BoardProps> = ({ state }) => {
	return (
		<div className='bg-[#262626] w-1/3 max-w-[400px] min-h-[500px] text-white p-4 rounded'>
			<h2 className='text-2xl text-white font-bold'>{state}</h2>
			<div className='w-full flex flex-col gap-2 mt-5'>
				<Task title='Test Title' description='Test Description' />
				<Task title='Test Title' description='Test Description' />
			</div>
		</div>
	);
};

export default Board;
