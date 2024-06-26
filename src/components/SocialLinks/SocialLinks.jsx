"use client";

import { useState } from "react";
import Link from "next/link";
import data from "../../../Data.json";
import Image from "next/image";

const SocialLinks = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleIconHover = (index) => {
    setActiveLink(index);
  };

  const { socialData2 } = data;
  // console.log(socialData2);

  return (
    <div className="flex space-x-5">
      {socialData2?.map((item, index) => (
        <div key={index} className="">
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center overflow-hidden rounded-full border border-slate-500 transition-all duration-300 ${
              index === activeLink ? "pr-3" : ""
            }`}
            onMouseEnter={() => handleIconHover(index)}
          >
            <span className="flex justify-center items-center rounded-full w-12 h-12 text-center transition-all duration-400 sm:m-1.5">
              <Image
                src={`${item?.imageUrl}`}
                width={48}
                height={48}
                alt="Hero"
              />
            </span>
            <span
              className={`font-semibold text-black tracking-widest overflow-hidden transition-all duration-500 ${
                index === activeLink ? "max-w-[140px] ml-1" : "max-w-0"
              }`}
            >
              {item?.icon}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
