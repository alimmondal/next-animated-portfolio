"use client";
import React from "react";
import styles from "../styles/Footer.module.css";
import Wave from "../../public/wave.png";
import Image from "next/image";
import SocialLinks from "./SocialLinks/SocialLinks";
import Link from "next/link";

const Footer = () => {
  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/blog", title: "Blog" },
  ];
  return (
    <div
      className={styles.footer}
      // style={{ backgroundImage: `url(${Wave.src})` }}
    >
      <Image src={Wave} alt="" className="w-full h-full" />

      <div className={styles.fContent}>
        <div className="text-slate-500 flex items-center justify-center gap-2 mt-20 md:mt-40 md:pb-5">
          {/* {links.map((link) => (
            <Link key={link?.title} href={link.url}>
              <p className="text-xl">{link.title}</p>
            </Link>
          ))} */}
          <ul className="flex gap-4 ">
            <li>
              <Link
                href={"/"}
                className="sm:text-[22px] hover:underline hover:sm:text-rose-700 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="sm:text-[22px] hover:underline hover:sm:text-rose-700 "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="sm:text-[22px] hover:underline hover:sm:text-rose-700 "
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href={"/portfolio"}
                className="sm:text-[22px] hover:underline hover:text-rose-700 "
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href={"/blog"}
                className="sm:text-[22px] hover:underline hover:text-rose-700 "
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.fIcons}>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
