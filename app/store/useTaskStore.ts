import { create } from "zustand";

interface TaskStoreProps {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	tasks: Task[];
	addTask: (title: string, description: string, state: string) => void;
}

export const useTaskStore = create<TaskStoreProps>((set) => ({
	isModalOpen: false,
	openModal: () => set((prevState) => ({ ...prevState, isModalOpen: true })),
	closeModal: () => set((prevState) => ({ ...prevState, isModalOpen: false })),
	tasks: [{ title: "Test Title", description: "Test Description", state: "completed" }],
	addTask: (title: string, description: string, state: string) =>
		set((prevState) => ({ tasks: [...prevState.tasks, { title, description, state }] })),
}));
