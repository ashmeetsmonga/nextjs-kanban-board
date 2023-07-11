import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TaskStoreProps {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	tasks: Task[];
	draggedTask: null | string;
	addTask: (title: string, description: string, state: string, color: string) => void;
	deleteTask: (title: string) => void;
	setDraggedTask: (title: string | null) => void;
	moveTask: (title: string | null, state: string) => void;
}

export const useTaskStore = create<TaskStoreProps>()(
	persist(
		(set) => ({
			isModalOpen: false,
			openModal: () => set((prevState) => ({ ...prevState, isModalOpen: true })),
			closeModal: () => set((prevState) => ({ ...prevState, isModalOpen: false })),
			tasks: [],
			draggedTask: null,
			addTask: (title: string, description: string, state: string, color: string) =>
				set((prevState) => ({ tasks: [...prevState.tasks, { title, description, state, color }] })),
			deleteTask: (title: string) =>
				set((state) => ({ tasks: state.tasks.filter((task) => task.title !== title) })),
			setDraggedTask: (title: string | null) => set((state) => ({ draggedTask: title })),
			moveTask: (title: string | null, state: string) =>
				set((prevState) => ({
					tasks: prevState.tasks.map((task) =>
						task.title === title ? { ...task, title, state } : task
					),
				})),
		}),
		{
			name: "kanban-board",
		}
	)
);
