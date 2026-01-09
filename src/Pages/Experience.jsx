// components/EducationTimeline.jsx
import React from "react";
import { motion } from "framer-motion";

const education=[{
    id:1,x:300,y:200,title:"Front end Reactjs Developer",year:"2025-",school:"Ekaksha Technologies"},
     {id:2,x:300,y:200,title:"Html Developer",year:"2023",school:"SilverHost,Pattambi"},
      {id:3,x:300,y:200,title:"Digital cum Marketing",year:"2023-25",school:"Chathahmkulam Builders,Palakkad"},
]

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 mt-12">
      <div className="relative mb-5 text-center">
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
              className="text-2xl font-bold "
            >
             Experience
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
      </div>
      

      <div className="relative ">
        {/* Vertical center line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-200" />

        <ul className="space-y-8">
         
           {education.map((e,index)=>{
           
          
            const left = index%2===0 ?"md:pr-8":"";
            
            return (
              <li key={index} className={`relative md:flex md:items-center ${left}`}>
                          
                {/* Node + year */}
                <div className="hidden sm:block md:absolute md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 bg-white border-2 border-orange-400 rounded-full ">
                  <span className="sr-only">{e.year}</span>
                </div>

                {/* Content box */}
                <div className={`md:w-1/2 mt-8 md:mt-0 ${left ? "md:pr-12 md:text-right":"md:pl-12 md:text-left md:ml-auto"}`}>
                  <div className="bg-[#FFEFBA] p-4 rounded-md shadow-sm">
                    <div className="text-sm text-[#fe8c00]">{e.year}</div>
                    <h3 className="text-lg font-semibold text-[black]">{e.title}</h3>
                    <div className="text-sm text-[#C5796D]">{e.school}</div>
                    <p className="text-sm text-gray-600 mt-1">{e.details}</p>
                  </div>
                </div>
              </li>
              
            );
          })}
        </ul>
      </div>
    </section>
  );
}
