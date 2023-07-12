import { create } from "zustand";

interface ModalStoreProps {
	isModalOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	isEditModalOpen: boolean;
	openEditModal: () => void;
	closeEditModal: () => void;
}

export const useModalStore = create<ModalStoreProps>((set) => ({
	isModalOpen: false,
	openModal: () => set((prevState) => ({ isModalOpen: true })),
	closeModal: () => set((prevState) => ({ isModalOpen: false })),
	isEditModalOpen: false,
	openEditModal: () => set((prevState) => ({ isEditModalOpen: true })),
	closeEditModal: () => set((prevState) => ({ isEditModalOpen: false })),
}));
