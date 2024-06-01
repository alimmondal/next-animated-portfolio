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
        <div className="text-slate-500 flex items-center justify-center gap-2 text-md hover:text-red-700">
          {links.map((link) => (
            <Link key={link?.title} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className={styles.fIcons}>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
