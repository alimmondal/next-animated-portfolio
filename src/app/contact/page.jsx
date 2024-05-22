"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
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
        <div className="">
          <p className="text-center pt-20 text-lg md:text-4xl text-neutral-600 font-extrabold">
            GET IN TOUCH
          </p>
          <p className="hidden md:block text-center pb-10 text-neutral-500">
            Get in Touch for Seamless Web Solutions: Reach Out to Our Expert Web
            Developers Today!
          </p>
        </div>

        <div className="h-full flex flex-col lg:flex-row items-center">
          {/* TEXT CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center">
            <div className="text-2xl md:text-6xl">😊</div>
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
            <div className="my-8">
              <p className="">Mobile: +8801751337773</p>
              <p className="">Email: ialim.dev@gmail.com</p>
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
              className="bg-transparent border-b-2 border-b-black outline-none "
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
              className="bg-transparent border-b-2 border-b-black outline-none"
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
    </motion.div>
  );
};

export default ContactPage;
