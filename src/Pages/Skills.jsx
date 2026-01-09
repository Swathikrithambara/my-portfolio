import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend Technologies",
    items: ["HTML5", "CSS3", "JavaScript (ES6)"],
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Bootstrap", "Tailwind CSS"],
    color: "from-indigo-400 to-[#757519]",
  },
  {
    title: "Backend & Databases",
    items: ["Firebase (Firestore)", "MySQL (Basic)"],
    color: "from-emerald-400 to-[#2c3e50]",
  },
  {
    title: "Tools & Platforms",
    items: ["GitHub", "WordPress", "Canva","vercel"],
    color: "from-slate-400 to-gray-600",
  },
];

export default function Skills() {
  return (
    <div className="py-16 max-w-6xl mx-auto px-6">
      {/* Section Heading */}
      <div className="relative text-center mb-12">
        <motion.div initial="rest" whileHover="hover" animate="rest" className="relative inline-block ">
          <motion.h3
            variants={{
              rest: { y: 0 },
              hover: { y: -4 },
            }}
            transition={{ type: "spring", stiffness: 250 }}
            className="text-2xl font-bold skills dark:text-white"
          >
            Technical Knowledge
          </motion.h3>

          <motion.div
            variants={{
              rest: { scaleX: 0 },
              hover: { scaleX: 1 },
            }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="absolute left-0 bottom-0 w-full h-[2px] bg-[#f83600] origin-left"
          />
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`rounded-xl p-6 text-white bg-gradient-to-br ${skill.color} shadow-lg`}
          >
            <h4 className="font-semibold text-lg mb-4">
              {skill.title}
            </h4>

            <ul className="space-y-2 text-sm">
              {skill.items.map((item, i) => (
                <li
                  key={i}
                  className="bg-white/15 rounded-md px-3 py-1 text-center"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
