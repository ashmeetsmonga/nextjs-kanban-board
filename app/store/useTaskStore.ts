import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

interface TaskStoreProps {
	tasks: Task[];
	draggedTask: null | string;
	setTasks: (tasks: Task[]) => void;
	addTask: (title: string, description: string, state: string, color: string) => void;
	deleteTask: (id: string) => void;
	setDraggedTask: (title: string | null) => void;
	moveTask: (id: string | null, state: string) => void;
	editTask: null | Task;
	setEditTask: (id: string) => void;
	updateTask: (id: string, title: string, description: string, color: string) => void;
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
			deleteTask: (id: string) =>
				set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
			setDraggedTask: (title: string | null) => set(() => ({ draggedTask: title })),
			moveTask: (id: string | null, state: string) =>
				set((prevState) => ({
					tasks: prevState.tasks.map((task) => (id && task.id === id ? { ...task, state } : task)),
				})),
			editTask: null,
			setEditTask: (id: string) =>
				set((state) => ({ editTask: state.tasks.find((task) => task.id === id) })),
			updateTask: (id: string, _title: string, description: string, color: string) =>
				set((prevState) => ({
					tasks: prevState.tasks.map((task) =>
						task.id === id ? { ...task, description, color } : task
					),
				})),
		}),
		{
			name: "kanban-board",
		}
	)
);
