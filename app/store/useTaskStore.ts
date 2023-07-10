import { create } from "zustand";

interface TaskStoreProps {
	tasks: Task[];
}

export const useTaskStore = create<TaskStoreProps>((set) => ({
	tasks: [{ title: "Test Title", description: "Test Description", state: "completed" }],
}));
