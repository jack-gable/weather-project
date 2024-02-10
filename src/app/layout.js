"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import { twMerge } from "tailwind-merge";
import WeatherProvider from "@/WeatherProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	const queryClient = new QueryClient();
	return (
		<html lang="en">
			<QueryClientProvider client={queryClient}>
				<WeatherProvider>
					<body className={twMerge(inter.className, "bg-gray-100")}>
						<Navbar />
						{children}
					</body>
				</WeatherProvider>
			</QueryClientProvider>
		</html>
	);
}
