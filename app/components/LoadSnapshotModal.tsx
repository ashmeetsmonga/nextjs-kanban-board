"use client";

import React, { useState } from "react";
import { useModalStore } from "../store/useModalStore";
import { toast } from "react-hot-toast";
import { get } from "idb-keyval";
import { useTaskStore } from "../store/useTaskStore";

const LoadSnapshotModal = () => {
	const isLoadSnapshotModalOpen = useModalStore((state) => state.isLoadSnapshotModalOpen);
	const closeLoadSnapshotModal = useModalStore((state) => state.closeLoadSnapshotModal);
	const setTasks = useTaskStore((state) => state.setTasks);

	const [date, setDate] = useState("");

	const handleLoadSnapshot = () => {
		if (!date) return toast.error("Please select a date");
		const toastID = toast.loading("Loading snapshot");
		const key = date;
		get(key)
			.then((snapshot) => {
				if (!snapshot) return toast.error("No snapshot present for chosen date", { id: toastID });
				setTasks(JSON.parse(snapshot));
				toast.success("Snapshot loaded", { id: toastID });
			})
			.catch(() => toast.error("Error in loading snapshot", { id: toastID }))
			.finally(() => closeLoadSnapshotModal());
	};

	return (
		<>
			{isLoadSnapshotModalOpen && (
				<div className='absolute flex justify-center items-center w-full h-screen top-0 left-0'>
					<div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
					<div className='bg-white flex flex-col gap-5 w-[500px] p-10 rounded z-10'>
						<h1 className='text-3xl'>Load Snapshot</h1>
						<p>A snapshot is the list of current tasks present.</p>
						<p>
							You can load snapshot from any day to get its tasks. Choose the date and click on Load
							Snapshot to load the snapshot
						</p>
						<p className='text-red-500'>
							Make sure to save the current snapshot. Loading any other snapshot would lose the
							current day&apos;s tasks.
						</p>

						<input
							className='bg-gray-200 rounded p-3 outline-none focus:outline-none'
							type='date'
							value={date}
							max={new Date().toISOString().substring(0, 10)}
							onChange={(e) => setDate(e.target.value)}
						/>

						<div className='flex gap-4 mt-5 justify-center'>
							<button
								onClick={handleLoadSnapshot}
								className='bg-[#00A88B] px-4 py-2 text-white rounded'
							>
								Load Snapshot
							</button>
							<button
								onClick={closeLoadSnapshotModal}
								className='bg-[#D93535] px-4 py-2 text-white rounded'
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default LoadSnapshotModal;
