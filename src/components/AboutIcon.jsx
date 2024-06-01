"use client";

import styles from "../styles/AboutIcon.module.scss";
import { SiNextdotjs, SiPostgresql, SiRedux } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";

const AboutIcon = () => {
  return (
    <div className={styles.stageCubeCont}>
      <div className={styles.cubespinner}>
        <div className={styles.face1}>
          <FaReact />
        </div>
        <div className={styles.face2}>
          <SiNextdotjs />
        </div>
        <div className={styles.face3}>
          <FaNodeJs />
        </div>
        <div className={styles.face4}>
          <SiPostgresql />
        </div>
        <div className={styles.face5}>
          <SiNextdotjs />
        </div>
        <div className={styles.face6}>
          <SiRedux />
        </div>
      </div>
    </div>
  );
};

export default AboutIcon;
