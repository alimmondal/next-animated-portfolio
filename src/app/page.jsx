"use client";
import { motion } from "framer-motion";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import styles from "../styles/Intro.module.css";
import Footer from "../components/Footer";
import Link from "next/link";

const Homepage = () => {
  // const { push } = useRouter();
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-b from-blue-100 to-red-100">
        {/* IMAGE CONTAINER */}
        <div className="h-[40%] lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero1.png"
            alt=""
            fill
            className="object-contain sm:pt-10"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-[60%] lg:h-full lg:w-1/2 flex flex-col gap-4 md:gap-8 items-start justify-center">
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

          <div className="w-full flex gap-4">
            <Link href={"/portfolio"}>
              <button className={`py-3 px-5 tracking-widest ${styles.a}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                View my portfolio
              </button>
            </Link>
            <Link href={"/contact"} className="">
              <button
                className="tracking-widest py-[6px] px-4 transition-all duration-500 button flex sm:hidden"
                // style={{
                //   boxShadow: "0px 20px 24px 3px rgba(251, 161, 40, 0.42)",
                // }}
              >
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </motion.div>
  );
};

export default Homepage;
