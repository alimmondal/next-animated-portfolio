"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../../components/Footer";
import heart from "../../../public/heartemoji.png";
import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import AOS from "aos";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 3000,
      easing: "ease",
    });
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="">
        <div className="pb-[14rem] bg-gradient-to-b from-blue-100 to-red-100">
          <div className="">
            <p className="text-center pt-20 text-lg md:text-4xl text-neutral-600 font-extrabold">
              GET IN TOUCH
            </p>
            <p className="hidden md:block text-center pb-10 text-neutral-500">
              Get in Touch for Seamless Web Solutions: Reach Out to Our Expert
              Web Developers Today!
            </p>
          </div>

          <div className="h-full flex flex-col lg:flex-row items-center">
            {/* TEXT CONTAINER */}
            <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center">
              <div className="text-2xl md:text-6xl">
                <Image
                  src={heart}
                  width={100}
                  height={100}
                  alt="heart"
                  className="object-cover"
                  data-aos="zoom-in-down"
                />
              </div>
              <div>
                {text.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                    className="text-2xl md:text-6xl"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              <div className="my-8 flex flex-col items-start justify-start gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                    <FaPhoneVolume className=" text-white " />
                  </div>
                  <div className="">
                    <p className="">
                      <span className="text-blue-500 font-bold italic hidden md:block">
                        Phone:
                      </span>{" "}
                      +8801751337773
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                    <FaMailBulk className=" text-white font-bold" />
                  </div>
                  <div className="">
                    <p className="">
                      <span className="text-blue-500 font-bold italic hidden md:block">
                        Email:
                      </span>{" "}
                      italimbd@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM CONTAINER */}
            <form
              onSubmit={sendEmail}
              ref={form}
              className="md:w-fit h-fit bg-red-50 rounded-xl md:text-xl flex flex-col gap-8 justify-center p-10 md:p-40 "
            >
              {/* <span>Dear Alim,</span> */}
              <textarea
                rows={2}
                className="bg-transparent border-b-2 border-t-0 border-l-0 border-r-0 border-b-black outline-none "
                name="user_message"
                placeholder="Write your message"
                required
              />
              {/* <span>My mail address is:</span> */}
              <input
                name="user_email"
                placeholder="Your mail"
                type="text"
                required
                className="bg-transparent border-b-2 border-b-black border-t-0 border-l-0 border-r-0 outline-none "
              />
              {/* <span>Regards</span> */}
              <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
                Send
              </button>
              {success && (
                <span className="text-green-600 font-semibold">
                  Your message has been sent successfully!
                </span>
              )}
              {error && (
                <span className="text-red-600 font-semibold">
                  Something went wrong!
                </span>
              )}
            </form>
          </div>
        </div>

        <div className="sm:mt-[-5rem] md:mt-[-7rem] lg:mt-[-14rem]">
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
