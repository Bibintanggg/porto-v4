"use client";

import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Typewriter from "../components/Typewriter";
import { motion } from "framer-motion";
import Image from "next/image";

const SocialIcon = ({
  icon,
  colors,
}: {
  icon: React.ReactNode;
  colors: string[];
}) => (
  <motion.div
    className="relative p-0.5 cursor-pointer w-10 h-10 flex justify-center items-center"
    whileHover="hover"
    initial="initial"
  >
    <motion.div
      className="absolute inset-0 rounded-md backdrop-blur-md bg-white/30"
      variants={{
        initial: { opacity: 0 },
        hover: {
          opacity: 1,
          transition: { duration: 0.2 },
        },
      }}
    />

    <motion.div
      className="absolute inset-0 rounded-md"
      variants={{
        initial: {
          opacity: 0,
          background: "transparent",
        },
        hover: {
          opacity: 1,
          background: `linear-gradient(45deg, ${colors.join(", ")})`,
          transition: {
            delay: 0.2,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          },
        },
      }}
    />

    <motion.div
      className="relative z-10"
      variants={{
        hover: {
          scale: 1.1,
          transition: { duration: 0.3 },
        },
      }}
    >
      {icon}
    </motion.div>
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-start px-3 md:px-6 gap-50 md:gap-52 pt-12 md:pt-32 ">
      <div className="flex flex-col font-mono">
        <Navbar />
        <div className="pt-3 md:pt-6">
          <div className="flex gap-5 mb-2">
            <a href="https://www.instagram.com/bintang.ydha_" target="_blank">
            <SocialIcon
              icon={<FaInstagram size={23} className="rounded-md " />}
              colors={["#f9ce34", "#ee2a7b", "#6228d7"]}
              />
              </a>
            <SocialIcon
              icon={<FaLinkedin size={23} className="rounded-md " />}
              colors={["#0077B5", "#00A0DC", "#0077B5"]}
            />
            <SocialIcon
              icon={<FaTiktok size={23} className="rounded-md " />}
              colors={["#25F4EE", "#FE2C55", "#000000"]}
            />
            <SocialIcon
              icon={<FaGithub size={23} className="rounded-md " />}
              colors={["#333333", "#6e5494", "#333333"]}
            />
          </div>
          <h1 className="font-bold text-xl md:text-2xl mb-0.5">Hii! I'm Bintang Yudha</h1>
          <p className="font-normal text-base md:text-lg mb-1">Student from SMKN 46 Jakarta</p>
          <Typewriter words={["TECH ENTHUSIAST", "AI/ML ENTHUSIAST"]} />
        </div>
      </div>

      <div className="flex justify-center items-start w-full md:w-auto mt-4 md:mt-0">
        <Image
          src="/assets/bintangImg.jpeg"
          width={220}
          height={220}
          alt="foto bintang"
          className="rounded-xl w-[180px] h-[180px] md:w-[220px] md:h-[220px] object-cover"
          priority
        />
      </div>
    </div>
  );
}
