import React from "react";
import { motion } from "framer-motion";

export default function Contactme() {
  return (
    <div className="relative w-full py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="relative bg-white/70 backdrop-blur-lg  dark:bg-transparent text-center  dark:backdrop-blur-0  dark:shadow-none rounded-2xl shadow-xl px-10 py-12">

          {/* Animated Heading Wrapper */}
          <motion.div
            className="relative inline-block"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.h3
              variants={{
                rest: { y: 0 },
                hover: { y: -4 },
              }}
              transition={{ type: "spring", stiffness: 250 }}
              className="text-2xl font-bold contact-heading"
            >
              Contact me
            </motion.h3>

            {/* Underline animation */}
            <motion.div
              variants={{
                rest: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{
                duration: 0.4,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#f83600] origin-left"
            />
          </motion.div>

          {/* Form */}
          <div className="flex flex-col gap-6 mt-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-700 placeholder-gray-400 shadow-inner outline-none border border-[#f09819] focus:ring-2 focus:ring-[#f09819]/60 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-700 placeholder-gray-400 shadow-inner outline-none border border-[#f09819] focus:ring-2 focus:ring-[#f09819]/60 transition"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-white/80 text-gray-700 placeholder-gray-400 shadow-inner outline-none border border-[#f09819] focus:ring-2 focus:ring-[#f09819]/60 transition resize-none"
            />

            <button className="self-start mt-4 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-br from-[#ed8f03] to-[#dc281e]/70 shadow-md hover:shadow-lg hover:-translate-y-[1px] transition-all duration-300">
              Send Message
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
