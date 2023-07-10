import { create } from "zustand";

interface TaskStoreProps {
	tasks: Task[];
}

export const TaskStore = create<TaskStoreProps>((set) => ({
	tasks: [{ title: "Test Title", description: "Test Description", state: "todo" }],
}));
