"use client";

import { slideInFromLeft, fadeIn } from "@/utils/motion"; // Zorg ervoor dat je fadeIn definieert in je motion utils
import { motion } from "framer-motion";
import Image from "next/image";

const HeroContent = () => {
  return (
      <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-row items-center px-5 lg:px-10 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 items-center justify-start text-center xl:text-start">

          <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
          <span>
            Welkom
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
            </span>
          </span>
          </motion.div>

          <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg text-gray-400 my-5 max-w-[600px] text-center xl:text-start"
          >
            Mijn naam is Ariola Jashari, een 22-jarige full stack developer uit Antwerpen. Lees mijn portfolio voor meer info over mijn skills
          </motion.p>

          <motion.div
              variants={fadeIn(1.2)}
              className="mt-20 flex justify-center items-center"
          >
            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Image
                  src="/cow-spot.png"
                  alt="Developer Illustration"
                  width={300}
                  height={300}
                  className="rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
  );
};
export default HeroContent;
