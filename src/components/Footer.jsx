import React from "react";
import styles from "../styles/Footer.module.css";
import Wave from "../../public/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image
        src={Wave}
        alt=""
        // style={{ width: "100%" }}
        className="fill object-contain"
      />
      <div className={styles.fContent}>
        <span>ialim.dev@gmail.com</span>
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
