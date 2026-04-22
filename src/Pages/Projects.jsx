import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/crypto.png"
import project4 from '../assets/Travwell.png'


export default function Projects() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="relative mb-12 text-center">
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
              className="text-2xl font-bold projects dark:text-white"
            >
              projects
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
          <p className="mt-3 text-[#71706E]">
            A few things I’ve built with passion and precision.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project Card */}
          <div className="group  backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="h-60 rounded-xl bg-gradient-to-br from-[#000000] to-[#f11712]/60 mb-5 flex items-center justify-center">
              <img src={project1} alt="" />
            </div>
            <a
              href="https://interior-design-beryl-theta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#dc281e] hover:text-[#f09819] transition"
            >
              View Project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Project Card */}
          <div className="group  backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="h-60 rounded-xl bg-gradient-to-br from-[#000000] to-[#434343]/60 mb-5 flex items-center justify-center">
              <img src={project2} alt="" />
            </div>
            <a
              href="https://github.com/swathikrithambara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#dc281e] hover:text-[#f09819] transition"
            >
              View Project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>




          {/* Project Card */}
          <div className="group  backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="h-60 rounded-xl bg-gradient-to-br from-[#fd746c] to-[#C02425] mb-5 flex items-center justify-center">
              <img src={project3} alt="" />
            </div>
            <a
              href="https://github.com/swathikrithambara "
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#dc281e] hover:text-[#f09819] transition"
            >
              View Project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>

          </div>

        </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project Card */}
          <div className="group  backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className="h-60 rounded-xl bg-gradient-to-br from-[#000000] to-[#f11712]/60 mb-5 flex items-center justify-center">
              <img src={project4} alt="" />
            </div>
            <a
              href="https://github.com/Swathikrithambara/Travwell"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#dc281e] hover:text-[#f09819] transition"
            >
              View Project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Project Card */}
          




          {/* Project Card */}
          

        </div>
      </div>
    </section>
  );
}
