"use client";
import { motion } from "framer-motion";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import styles from "../styles/Intro.module.css";
import Footer from "../components/Footer";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Homepage = () => {
  // const { push } = useRouter();
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 3000,
      easing: "ease",
    });
  }, []);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-screen flex flex-col gap-2 md:gap-4 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-b from-blue-100 to-red-100 pb-24 md:pb-10 lg:pb-0">
        {/* IMAGE CONTAINER */}
        <div
          className="h-1/2 lg:h-full lg:w-1/2 relative "
          data-aos="fade-right"
        >
          <Image src="/hero1.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 md:gap-8 items-start justify-center">
          <div className="text-start">
            <p className="md:text-xl">Hy! </p>
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

          <div className="flex gap-4">
            <Link href={"/portfolio"}>
              <button className={`${styles.a}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                View portfolio
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="category category1">Contact</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:mt-[-5rem] md:mt-[-7rem] lg:mt-[-14rem]">
        <Footer />
      </div>
    </motion.div>
  );
};

export default Homepage;
