import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../Components/ParticleBackground";
import headerimg from '../assets/headerimg.png'
import resume from "../assets/s_resume.pdf"


export default function Home() {
  const roles = useMemo(() => ["Web developer", "Software developer"], []);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((y) => y + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex > 0) {
        setSubIndex((y) => y - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <div className="relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 mx-auto">
      <div className="flex flex-col justify-center text-start ">
        <div className="w-full lg:px-24 mx-auto py-4 gap-6 max-w-[48rem] px-6 ">
          <motion.div
            className="mb-3 text-2xl sm:text-2xl md:text-3xl font-semibold text-[#dc281e]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>{roles[index].substring(0, subIndex)}</span>
            <span
              className="inline-block w-[2px] ml-1 bg-black animate-pulse align-start"
              style={{ height: "1em" }}
            ></span>
          </motion.div>
          <div className="justify-start text-start gap-6 text-[#71706E]">
            <h3>Hello! I am Swathi</h3>
            <p className="leading-loose">a React.js Developer crafting cutting-edge digital solutions that fuse creativity, precision,
               and technology to deliver seamless, engaging user experiences.</p>
               
            {/* <button className="border border-[#ed8f03] px-3 py-3 rounded text-[#FFEFBA] bg-gradient-to-br from-[#ed8f03] to-[#dc281e]/70">My Resume</button> */}
                    <a
  href={resume}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex mt-2 border border-[#ed8f03] px-4 py-3 rounded text-[#FFEFBA] bg-gradient-to-br from-[#ed8f03] to-[#dc281e]/70"
>Resume</a>                                                                                                                                                                                                                                                                                                        
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center ">
  <img src={headerimg} alt="" className="w-full max-w-md mx-auto" />  
      </div>

      <ParticleBackground />
      
    </div>
  );
}
