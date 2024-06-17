"use client";

import { Socials } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const line = lineRef.current;
      if (line) {
        line.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
      <div className="w-full h-[65px] fixed top-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%_200%] animate-gradient shadow-lg z-50 px-10 flex items-center justify-between">
        <div className="w-full h-full flex items-center justify-between relative">
          <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="font-bold ml-[10px] hidden md:block text-white"
            >
              Ariola
            </motion.div>
          </a>

          <div className="w-fit -mr-4 h-full flex items-center justify-between">
            <div className="flex items-center justify-between w-full h-auto border gap-x-20 border-transparent bg-transparent mr-[15px] px-[20px] py-[10px] rounded-full text-white">
              <motion.a
                  href="#home"
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer relative"
              >
                Home
              </motion.a>
              <motion.a
                  href="#skills"
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer relative"
              >
                Skills
              </motion.a>
              <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer relative"
              >
                Projects
              </motion.a>
            </div>
          </div>

          <div className="flex flex-row gap-5">
            {Socials.map((social) => (
                <motion.a
                    key={social.name}
                    //href={social.link}
                    whileHover={{ scale: 1.2 }}
                    className="text-white"
                >
                  <Image src={social.src} alt={social.name} width={24} height={24} />
                </motion.a>
            ))}
          </div>
        </div>

        <div
            ref={lineRef}
            className="absolute w-4 h-4 bg-white rounded-full pointer-events-none z-50"
            style={{ transition: "transform 0.05s linear" }}
        />
      </div>
  );
};

export default Navbar;
