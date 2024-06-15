"use client";
import React from "react";
import styles from "../styles/Footer.module.css";
import Wave from "../../public/wave.png";
import Image from "next/image";
import SocialLinks from "./SocialLinks/SocialLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className={styles.footer}
      // style={{ backgroundImage: `url(${Wave.src})` }}
    >
      <Image src={Wave} alt="" className="w-full h-full" />

      <div className={styles.fContent}>
        <div className="text-black flex items-center justify-center gap-2 mt-20 md:mt-40 md:pb-5">
          <ul className="flex gap-4 ">
            <li>
              <Link
                href={"/"}
                className="sm:text-[25px] hover:underline hover:sm:text-rose-700 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="sm:text-[25px] hover:underline hover:sm:text-rose-700 "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="sm:text-[25px] hover:underline hover:sm:text-rose-700 "
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href={"/portfolio"}
                className="sm:text-[25px] hover:underline hover:text-rose-700 "
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href={"/blog"}
                className="sm:text-[25px] hover:underline hover:text-rose-700 "
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
