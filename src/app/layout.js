import { Inter } from "next/font/google";
import TransitionProvider from "../components/transitionProvider";
import "./globals.css";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dev-Alim",
  description: "MERN stack developer PERN stack developer full stack developer nextjs developer, reactjs developer frontend developer backend developer nodejs developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
