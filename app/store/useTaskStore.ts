import { create } from "zustand";

interface TaskStoreProps {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	tasks: Task[];
	addTask: (title: string, description: string, state: string, color: string) => void;
}

export const useTaskStore = create<TaskStoreProps>((set) => ({
	isModalOpen: false,
	openModal: () => set((prevState) => ({ ...prevState, isModalOpen: true })),
	closeModal: () => set((prevState) => ({ ...prevState, isModalOpen: false })),
	tasks: [],
	addTask: (title: string, description: string, state: string, color: string) =>
		set((prevState) => ({ tasks: [...prevState.tasks, { title, description, state, color }] })),
}));
