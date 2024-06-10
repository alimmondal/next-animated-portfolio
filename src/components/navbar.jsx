"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { RiPhoneFill } from "react-icons/ri";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState();
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    // { url: "/contact", title: "Contact" },
    { url: "/blog", title: "Blog" },
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
      <div className="hidden md:flex gap-3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex ">
        <Link
          href={"/"}
          className="text-sm bg-[#fca61f] rounded-md p-1 font-semibold flex items-center justify-center logo"
        >
          <span className="text-white mr-1 tracking-widest sm:font-bold">
            Alim
          </span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* SOCIAL/ PHONE */}
      {/* <div className="hidden md:flex gap-2">
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
      </div> */}
      <div className="flex items-center justify-center gap-2">
        <div className="hidden md:flex text-orange-400">
          <RiPhoneFill size={24} />
          <p>
            <a className="text-black" href="tel:+01751337773">
              +8801751337773
            </a>
          </p>
        </div>
        <Link href={"/contact"} className="hidden md:flex md:mr-10 lg:mr-auto">
          <div
            className={styles.center}
            style={{ boxShadow: "0px 20px 24px 3px rgba(251, 161, 40, 0.42)" }}
          >
            <p className={styles.a} title="Contact"></p>
          </div>
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
