import { Inter } from "next/font/google";
import TransitionProvider from "../components/transitionProvider";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "alim",
  description: "web developer MERN stack developer PERN stack developer full stack developer nextjs developer, reactjs developer frontend developer backend developer nodejs developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-blue-100 to-red-100`}>
         
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
