"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../styles/Intro.module.css";

const Homepage = () => {
  const { push } = useRouter();
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero1.png"
            alt=""
            fill
            className="object-contain pt-10"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 md:gap-8 items-start justify-center">
          <div className="text-start">
            <p className="md:text-xl">Hi, </p>
            <p className="md:text-xl mb-4">I&apos;m Alim. I&apos;m a</p>
            <div className={styles.iTitle}>
              <div className={styles.iTitleWrapper}>
                <div className={styles.iTitleItem}>Full Stack Developer,</div>
                <div className={styles.iTitleItem}>MERN Stack Developer,</div>
                <div className={styles.iTitleItem}>PERN Stack Developer,</div>
                <div className={styles.iTitleItem}>UI/UX Designer,</div>
              </div>
            </div>
          </div>

          <p className="md:text-xl text-justify">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect
            commitment to excellence.
          </p>
          <div className="w-full flex gap-4">
            <button
              onClick={() => push("/portfolio")}
              className="p-2 md:p-3 rounded-lg ring-1 ring-sky-500 bg-sky-500 text-white"
            >
              View My Work
            </button>
            <button
              onClick={() => push("/contact")}
              className="p-2 md:p-3 rounded-lg ring-1 ring-sky-500"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
