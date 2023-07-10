import React from "react";

interface BoardProps {
	state: string;
}

const Board: React.FC<BoardProps> = ({ state }) => {
	return (
		<div className='bg-[#262626] w-1/3 max-w-[400px] min-h-[500px] text-white p-4 rounded'>
			<h2 className='text-2xl text-white font-bold'>{state}</h2>
		</div>
	);
};

export default Board;
