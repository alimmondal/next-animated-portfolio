import React from "react";
import styles from "../styles/Footer.module.css";
import Wave from "../../public/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Image from "next/image";
import Navbar from "./navbar";

const Footer = () => {
  return (
    <div
      className={styles.footer}
      // style={{ backgroundImage: `url(${Wave.src})` }}
    >
      <Image src={Wave} alt="" className="w-full h-full" />

      <div className={styles.fContent}>
        <span>ialim.dev@gmail.com</span>
        <div className="flex gap-4">
          <span className="">Home</span>
          <span className="">Home</span>
          <span className="">Home</span>
          <span className="">Home</span>
        </div>
        <div className={styles.fIcons}>
          <Insta color="black" size={"3rem"} />
          <Facebook color="black" size={"3rem"} />
          <Gitub color="black" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
