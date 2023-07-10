import React from "react";

interface TaskProps {
	title: string;
	description: string;
}

const Task: React.FC<TaskProps> = ({ title, description }) => {
	return (
		<div className='w-full rounded bg-[#D93535] p-4'>
			<h3 className='font-semibold'>{title}</h3>
			<p className='font-extralight'>{description}</p>
		</div>
	);
};

export default Task;
