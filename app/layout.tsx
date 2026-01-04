import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Dancing_Script, Mali, Pacifico, Patrick_Hand } from "next/font/google";

const dancing = Dancing_Script({
	subsets: ["latin"],
	variable: "--font-dancing",
});
const mali = Mali({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-mali",
});
const pacifico = Pacifico({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-pacifico",
});
const patrick = Patrick_Hand({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-patrick",
});

export const metadata = {
	title: "Studygram Kit",
	description:
		"Template Studygram: nền giấy, highlight pastel, washi tape, sticky note và typography tay.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="vi"
			className={`${dancing.variable} ${mali.variable} ${pacifico.variable} ${patrick.variable}`}
		>
			<body>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
