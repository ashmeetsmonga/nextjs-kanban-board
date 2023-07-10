import React from "react";

interface TaskProps {
	title: string;
	description: string;
	color: string;
}

const Task: React.FC<TaskProps> = ({ title, description, color }) => {
	return (
		<div className={`w-full rounded bg-[${color}] p-4`}>
			<h3 className='font-semibold text-xl'>{title}</h3>
			<p className='font-light'>{description}</p>
		</div>
	);
};

export default Task;
