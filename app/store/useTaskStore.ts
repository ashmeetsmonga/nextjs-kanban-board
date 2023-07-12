import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TaskStoreProps {
	tasks: Task[];
	draggedTask: null | string;
	addTask: (title: string, description: string, state: string, color: string) => void;
	deleteTask: (title: string) => void;
	setDraggedTask: (title: string | null) => void;
	moveTask: (title: string | null, state: string) => void;
	editTask: null | Task;
	setEditTask: (title: string) => void;
	updateTask: (title: string, description: string, color: string) => void;
}

export const useTaskStore = create<TaskStoreProps>()(
	persist(
		(set) => ({
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
			editTask: null,
			setEditTask: (title: string) =>
				set((state) => ({ editTask: state.tasks.find((task) => task.title === title) })),
			updateTask: (title: string, description: string, color: string) =>
				set((prevState) => ({
					tasks: prevState.tasks.map((task) =>
						task.title === title ? { ...task, description, color } : task
					),
				})),
		}),
		{
			name: "kanban-board",
		}
	)
);
