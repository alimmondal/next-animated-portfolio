"use client";

import React, { useEffect } from "react";
import data from "../../../../Data.json";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";
import styles from "../../../styles/PortfolioDetail.module.css";
import AOS from "aos";
import { Button } from "flowbite-react";

const PortfolioDetail = ({ params }) => {
  const { id } = params;
  const { items } = data;

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 3000,
      easing: "ease",
    });
  });

  // Convert id to number if it's not already
  const itemId = Number(id);

  // Find the item with the matching id
  const item = items.find((item) => item.id === itemId);
  // console.log(item);

  // Check if the item is found
  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="h-[100vh] bg-gradient-to-b from-blue-100 to-red-100 md:pb-10 ">
      {/* <h1 className="text-2xl sm:text-4xl text-center py-3 sm:py-10">
        Project Detail
      </h1> */}
      <div className="h-screen flex flex-col gap-2 md:gap-8 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-b from-blue-100 to-red-100 md:pb-10 lg:pb-0 ">
        {/* IMAGE CONTAINER */}
        <div
          className={`h-1/4 md:h-full lg:w-1/2 mx-auto self-center ${styles.p}`}
          data-aos="fade"
        >
          <div className={styles.pBrowser}>
            <div className={styles.pCircle}></div>
            <div className={styles.pCircle}></div>
            <div className={styles.pCircle}></div>
          </div>
          <Image
            src={item.image}
            width="400"
            height="400"
            alt="portfolio"
            className={`object-cover ${styles.pImg}`}
          />
        </div>
        {/* Text Container */}
        <div className="h-3/4 lg:h-full lg:w-1/2 flex flex-col items-start justify-center gap-2 md:gap-8">
          <h1 className="text-2xl sm:text-4xl">Type: {item?.title}</h1>
          <h1 className="text-">
            <span className="font-semibold">Overview:</span> {item?.desc}
          </h1>

          <p className="font-bold animateText">Features:</p>
          <ul className="list-disc pl-5">
            {item.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h1 className="text-xs">
            <span className="font-semibold">Tech-stack:</span> {item.techStack}
          </h1>
          <div className="text-xl text-sky-500 flex gap-2">
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <Button gradientDuoTone="purpleToBlue" outline>
                Live demo
              </Button>
            </Link>
            <Button outline gradientDuoTone="purpleToPink">
              <Link
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github link
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-[-1rem] sm:mt-[-5rem] md:mt-[-7rem] lg:mt-[-14rem]">
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioDetail;
