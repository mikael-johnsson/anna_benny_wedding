import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Bellota } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({
	variable: "--font-inter",
	weight: ["400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

const bellota = Bellota({
	variable: "--font-bellota",
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Anna & Bennys Bröllop",
	description: "Anna & Bennys Bröllopssida",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={` ${bellota.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<Header />
				{children}
			</body>
		</html>
	);
}
