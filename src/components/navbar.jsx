"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaDiscord, FaFacebook } from "react-icons/fa";
import NavLink from "./navLikn";

const Navbar = () => {
  const [open, setOpen] = useState();
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LINKS */}
      <div className="hidden md:flex gap-4">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex ">
        <Link
          href={"/"}
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Alim</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex gap-2">
        <Link href={"#"}>
          <AiOutlineGithub size={24} />
        </Link>
        <Link href={"#"}>
          <FaFacebook size={24} className="text-sky-700" />
        </Link>
        <Link href={"#"}>
          <AiFillInstagram size={24} className="text-rose-700" />
        </Link>
        <Link href={"#"}>
          <AiFillLinkedin size={24} className="text-sky-500" />
        </Link>
        <Link href={"#"}>
          <FaDiscord size={24} />
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden z-50">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}

        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
