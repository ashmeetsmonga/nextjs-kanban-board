import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientOnly from "./components/ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Kanban Board",
	description: "Created By Ashmeet Singh Monga",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} overflow-x-hidden`}>
				<ClientOnly>{children}</ClientOnly>
			</body>
		</html>
	);
}
