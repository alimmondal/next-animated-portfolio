"use client";
// import {
//   faCss3Alt,
//   faHtml5,
//   faReact,
//   faWordpress,
// } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/AboutIcon.module.scss";
import {
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";

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
          <FaReact />
        </div>
        <div className={styles.face4}>
          <SiPostgresql />
        </div>
        <div className={styles.face5}>
          <SiNextdotjs />
        </div>
        <div className={styles.face6}>
          <FaNodeJs />
        </div>
      </div>
    </div>
  );
};

export default AboutIcon;
