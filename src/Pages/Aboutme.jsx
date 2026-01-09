import { motion } from "framer-motion";
import img from "../assets/aboutme.png";

export default function Aboutme() {
  return (
    <section className="py-10 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">

        {/* LEFT: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={img}
            alt="Swathi Krithambara"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* RIGHT: Text */}
        <motion.div
          className="w-full lg:w-1/2 space-y-3 group cursor-pointer relative overflow-hidden"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {/* Heading */}
         <div className="relative inline-block">
  <motion.h3
    variants={{
      rest: { y: 0 },
      hover: { y: -4 },
    }}
    transition={{ type: "spring", stiffness: 250 }}
    className="text-2xl font-bold aboutme dark:text-white"
  >
    About Me
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
    className="absolute left-0 bottom-0 w-full h-[2px] bg-[#f83600] origin-left"
  />
</div>

<div className="justify-start  text-[#71706E]  ">
          {/* Paragraph */}
          
            A passionate React.js developer dedicated to building engaging and responsive web applications.
            Specializing in modern web technologies, with a focus on user-centered design that enhances
            overall experience. Committed to turning innovative ideas into reality and constantly seeking
            to push the boundaries of frontend development.
          
</div>
          {/* Social Links (appear after hover) */}
          <motion.div
            variants={{
              rest: { opacity: 0, y: 20 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col items-start space-y-3  
             rounded-lg py-4 px-6 shadow-sm"
          >
            <div className="flex flex-row space-x-8 text-[#D38312]">
              <a
                href="www.linkedin.com/in/swathi-d-2397b0156"
                target="_blank"
                rel="noopener noreferrer"
                className="  font-medium transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/swathikrithambara"
                target="_blank"
                rel="noopener noreferrer"
                className=" font-medium transition-colors duration-200"
              >
                GitHub
              </a>
                <a
              href="mailto:swathikrithambara@gmail.com"
              className="  font-medium transition-colors duration-200"
            >
              swathikrithambara@gmail.com
            </a>
            </div>
          
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
