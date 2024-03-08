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

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
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
          className="text-sm bg-sky-500 rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Alim</span>
          <span className="w-12 h-8 rounded bg-white text-sky-500 flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex gap-2">
        <Link
          href={"https://github.com/alimmondal"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub size={24} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/alim-mondol/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={24} className="text-sky-500" />
        </Link>
        <Link
          href={"https://www.facebook.com/profile.php?id=100022439445805"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} className="text-sky-700" />
        </Link>

        {/* <Link href={"#"} target="_blank" rel="noopener noreferrer">
          <AiFillInstagram size={24} className="text-rose-700" />
        </Link> */}

        {/* <Link href={"#"} target="_blank" rel="noopener noreferrer">
          <FaDiscord size={24} />
        </Link> */}
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
            className="w-10 h-1 bg-sky-500 rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-sky-500 rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-sky-500 rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-sky-500 text-white flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
