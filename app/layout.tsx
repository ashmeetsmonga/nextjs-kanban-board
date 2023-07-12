import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ClientOnly from "./components/ClientOnly";

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
				<ClientOnly>{children}</ClientOnly>
			</body>
		</html>
	);
}
