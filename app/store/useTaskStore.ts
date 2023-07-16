import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

interface TaskStoreProps {
	tasks: Task[];
	draggedTask: null | string;
	setTasks: (tasks: Task[]) => void;
	addTask: (title: string, description: string, state: string, color: string) => void;
	deleteTask: (title: string) => void;
	setDraggedTask: (title: string | null) => void;
	moveTask: (id: string, state: string) => void;
	editTask: null | Task;
	setEditTask: (title: string) => void;
	updateTask: (title: string, description: string, color: string) => void;
}

export const useTaskStore = create<TaskStoreProps>()(
	persist(
		(set) => ({
			tasks: [],
			draggedTask: null,
			setTasks: (tasks: Task[]) => set({ tasks }),
			addTask: (title: string, description: string, state: string, color: string) =>
				set((prevState) => ({
					tasks: [...prevState.tasks, { id: uuidv4(), title, description, state, color }],
				})),
			deleteTask: (title: string) =>
				set((state) => ({ tasks: state.tasks.filter((task) => task.title !== title) })),
			setDraggedTask: (title: string | null) => set(() => ({ draggedTask: title })),
			moveTask: (id: string, state: string) =>
				set((prevState) => ({
					tasks: prevState.tasks.map((task) => (task.id === id ? { ...task, state } : task)),
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
