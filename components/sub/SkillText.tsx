"use client";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import Head from "next/head";

const SkillText = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Lobster&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
            >

            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft(0.5)}
                whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
                className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] cursor-pointer"
            >
                SKILLS
            </motion.div>
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1], color: ["#FFFFFF", "#b49bff", "#FFFFFF"] }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className="text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
                style={{ fontFamily: 'Lobster, cursive' }}
            >
                Dit zijn al mijn skills op een rijtje
            </motion.div>
        </div>
    );
};

export default SkillText;
