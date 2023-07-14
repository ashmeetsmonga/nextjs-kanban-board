import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import ToasterProvider from "./providers/ToasterProvider";
import LoadSnapshotModal from "./components/LoadSnapshotModal";
import Modal from "./components/Modal";
import EditModal from "./components/EditModal";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Kanban Board",
	description: "Created By Ashmeet Singh Monga",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} overflow-x-hidden`}>
				<ClientOnly>
					<ToasterProvider />
					{children}
					<Modal />
					<EditModal />
					<LoadSnapshotModal />
				</ClientOnly>
			</body>
		</html>
	);
}
