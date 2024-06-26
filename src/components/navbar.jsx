"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "./navLink";
import { RiPhoneFill } from "react-icons/ri";
import styles from "../styles/Navbar.module.css";
import { usePathname, useRouter } from "next/navigation";
import { FaBackward } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState();

  const [showBackButton, setShowBackButton] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if the current route is the contact page
    setShowBackButton(pathname === "/contact");
  }, [pathname]);
  // console.log("router", router);

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
          <span className="w-12 h-8 flex items-center justify-center text-white mr-1 tracking-widest sm:font-bold">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="object-cover"
            />
          </span>
          <span className="w-12 h-8 rounded bg-white text-black tracking-widest flex items-center justify-center">
            {/* <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="object-cover"
            /> */}
            Alim
          </span>
        </Link>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="hidden md:flex text-orange-400">
          <RiPhoneFill size={24} />
          <p>
            <a className="text-black" href="tel:+01751337773">
              +8801751337773
            </a>
          </p>
        </div>

        {showBackButton ? (
          <button
            onClick={() => router.back()}
            className="hidden md:flex md:pr-20"
          >
            <div className="bg-orange-400 px-2 py-1 hover:bg-white hover:border hover:border-orange-400 transition-all duration-1000 ">
              <div className="flex items-center gap-2 text-white hover:text-black">
                <FaBackward /> <p>Back</p>
              </div>
            </div>
          </button>
        ) : (
          <Link href={"/contact"} className="hidden md:flex md:pr-28 ">
            <div className="absolute top-[2rem]">
              <p className={styles.a} title="Contact"></p>
            </div>
          </Link>
        )}
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
            <Link href={"/contact"}>
              <button>Contact</button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
