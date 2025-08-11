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
    className="relative p-0.5 cursor-pointer w-7 h-7 flex justify-center items-center "
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
    <div className="relative h-full w-full min-h-screen">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row justify-center items-start px-3 md:px-6 gap-12 md:gap-52 pt-12 md:pt-32">
        <div className="flex flex-col font-mono">
          <Navbar />
          <div className="pt-3 md:pt-6">
            <div className="flex gap-5 mb-2 backdrop-blur-5xl bg-white/5 w-52 h-10 items-center mx-auto rounded-md justify-center">
              <a href="https://www.instagram.com/bintang.ydha_" target="_blank" rel="noopener noreferrer">
                <SocialIcon
                  icon={<FaInstagram size={20} className="rounded-md" />}
                  colors={["#f9ce34", "#ee2a7b", "#6228d7"]}
                />
              </a>
              <SocialIcon
                icon={<FaLinkedin size={20} className="rounded-md" />}
                colors={["#0077B5", "#00A0DC", "#0077B5"]}
              />
              <SocialIcon
                icon={<FaTiktok size={20} className="rounded-md" />}
                colors={["#25F4EE", "#FE2C55", "#000000"]}
              />
              <SocialIcon
                icon={<FaGithub size={20} className="rounded-md" />}
                colors={["#333333", "#6e5494", "#333333"]}
              />
            </div>
            <div className="flex flex-col items-center text-center pt-3">
            <h1 className="font-bold text-2xl md:text-4xl mb-0.5">Hii! I'm Bintang Yudha</h1>
            <p className="font-normal text-base md:text-lg mb-1">Student from SMKN 46 Jakarta</p>
            <Typewriter words={["TECH ENTHUSIAST", "AI/ML ENTHUSIAST"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}