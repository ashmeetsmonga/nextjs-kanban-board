import { create } from "zustand";

interface TaskStoreProps {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	tasks: Task[];
	addTask: (title: string, description: string, state: string, color: string) => void;
	deleteTask: (title: string) => void;
}

export const useTaskStore = create<TaskStoreProps>((set) => ({
	isModalOpen: false,
	openModal: () => set((prevState) => ({ ...prevState, isModalOpen: true })),
	closeModal: () => set((prevState) => ({ ...prevState, isModalOpen: false })),
	tasks: [],
	addTask: (title: string, description: string, state: string, color: string) =>
		set((prevState) => ({ tasks: [...prevState.tasks, { title, description, state, color }] })),
	deleteTask: (title: string) =>
		set((state) => ({ tasks: state.tasks.filter((task) => task.title !== title) })),
}));
