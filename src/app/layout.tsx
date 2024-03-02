import type { Metadata } from "next";
// import { Montserrat } from "next/font/google";
import { classNames } from "@/functions/classNames";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

// const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Tirpok - Portfolio",
  description:
    "My current Front End portfolio in NextJS/Typescript/TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans bg-black">
        <NavBar />
        <div className="flex flex-col flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
