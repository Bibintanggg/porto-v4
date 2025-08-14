"use client";

import { FaCss3, FaGithub, FaInstagram, FaLaravel, FaLinkedin, FaReact, FaTiktok, FaUserNinja } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { BiLogoTypescript, BiMusic } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import Navbar from "../components/Navbar";
import { IoIosArrowForward, IoIosClose } from "react-icons/io";
import { BsTools } from "react-icons/bs";
import Typewriter from "../components/Typewriter";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Card from "../components/Card";
import { useState } from "react";

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
  const [showDetailedAbout, setShowDetailedAbout] = useState(false);

  return (
    <div className="relative h-full w-full min-h-[200vh] overflow-x-hidden">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="relative z-10 min-h-screen flex flex-col md:flex-row justify-center items-center px-3 md:px-6 
      gap-12 md:gap-52">
        <div className="flex flex-col font-mono">
          <Navbar />
          <div className="pt-3 md:pt-6 flex flex-col justify-center">
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

      <div className="flex flex-col justify-center items-center">
        <h1 className="font-mono text-3xl font-bold mb-4">ABOUT ME</h1>

        <div className="flex gap-2">
          <Card className="w-62 h-[408px] overflow-hidden rounded-md">
            <div className="relative w-full h-full">
              <Image
                src="/assets/bintangImg.jpeg"
                alt="bintang img"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Card>

          <div className="flex flex-col gap-2 font-mono">
            <div className="flex gap-2">
              {!showDetailedAbout && (
                <Card shiny className="w-96 h-[200px]">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl">
                      <FaUserNinja className="w-10 h-6 opacity-50" />
                    </div>
                    <h1>About Me</h1>
                  </div>

                  <div className="w-full">
                    <p className="text-sm mt-2">
                      Hello.. Im Bintang Yudha Putra Purnomo, im from Jakarta and currently
                      studying at SMKN 46 Jakarta. Im a student with passionate ...
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div></div>
                    <button 
                      onClick={() => setShowDetailedAbout(true)}
                      className="flex items-center gap-1 hover:text-blue-400 transition-colors"
                    >
                      More Details
                      <IoIosArrowForward className="text-sm" />
                    </button>
                  </div>
                </Card>
              )}
              <div>
              <AnimatePresence>
                {showDetailedAbout && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card shiny className="w-[600px] h-[400px] p-6 relative">
                      <button 
                        onClick={() => setShowDetailedAbout(false)}
                        className="absolute top-4 right-4 p-1 hover:text-blue-400 transition-colors"
                      >
                        <IoIosClose size={24} />
                      </button>
                      
                      <div className="flex items-center gap-6 mb-6">
                        <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl">
                          <FaUserNinja className="w-10 h-6 opacity-50" />
                        </div>
                        <h1 className="text-xl font-bold">About Me</h1>
                      </div>

                      <div className="text-sm space-y-4 overflow-y-auto h-[280px] pr-4 thin-scrollbar">
                        <p>
                          Hello! I'm Bintang Yudha Putra Purnomo, a passionate technology enthusiast from Jakarta, Indonesia. 
                          Currently, I'm pursuing my education at SMKN 46 Jakarta, where I'm developing my skills in software development.
                        </p>
                        
                        <p>
                          My journey in technology began when I was first introduced to programming in school. Since then, 
                          I've developed a strong passion for web development.
                        </p>
                        
                        <h2 className="font-bold mt-4 text-blue-400">Technical Skills</h2>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Frontend Development: React, TypeScript, Tailwind CSS, NextJS</li>
                          <li>Backend Development: Laravel</li>
                          <li>AI/ML: Basic understanding of machine learning concepts</li>
                          <li>Tools: Git, VS Code, Figma</li>
                        </ul>
                        
                        <h2 className="font-bold mt-4 text-blue-400">Hobbies & Interests</h2>
                        <p>
                          When I'm not coding, I enjoy listening to music (check my favorites below!), playing games, 
                          and keeping up with the latest tech trends. I'm particularly interested in how AI is shaping 
                          our future and love exploring new technologies.
                        </p>

                        <h2 className="font-bold mt-4 text-blue-400">Experience</h2>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Intern at Indi Tekno Kreasi International - FULLSTACK DEV</li>
                        </ul>
                      </div>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

                <div>
                  {!showDetailedAbout && (
                    <Card shiny className="w-[208px] h-[200px] p-4 flex flex-col gap-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl border border-gray-700">
                        <BsTools className="w-5 h-5 opacity-70 text-gray-300" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-200">STACK</h3>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl hover:bg-blue-500/10 transition-colors border border-gray-700">
                        <FaReact className="w-6 h-6 text-blue-400" />
                      </div>

                      <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl hover:bg-blue-600/10 transition-colors border border-gray-700">
                        <BiLogoTypescript className="w-6 h-6 text-blue-600" />
                      </div>

                      <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl hover:bg-cyan-500/10 transition-colors border border-gray-700">
                        <SiTailwindcss className="w-6 h-6 text-cyan-400" />
                      </div>

                      <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl hover:bg-cyan-500/10 transition-colors border border-gray-700">
                        <FaCss3 className="w-6 h-6 text-cyan-400" />
                      </div>

                      <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl hover:bg-red-500/10 transition-colors border border-gray-700">
                        <FaLaravel className="w-6 h-6 text-red-500" />
                      </div>
                    </div>
                  </Card>
                  )}

                </div>
              </div>

            </div>

            <div className="flex gap-2">
              <Card shiny className="w-[240px] h-[200px]">
                <div className="flex justify-end items-center gap-5 ">
                  <h1>Highlight</h1>
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl">
                    <AiOutlineProject className="w-10 h-6 opacity-50" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-center h-full text-6xl font-bold gap-10">
                    <h1>5+</h1>
                    <h2>3+</h2>
                  </div>

                  <div className="text-sm gap-5 flex justify-center mt-5">
                    <a href="" className="w-24 bg-white/10 justify-center flex rounded-xl h-5">Projects</a>
                    <a href="" className="w-28 bg-white/10 justify-center flex rounded-xl h-5">Experience</a>
                  </div>
                </div>
              </Card>

              <Card shiny className="w-[350px] h-[200px] overflow-y-auto thin-scrollbar">
                <div className="flex gap-2 items-center">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl">
                    <BiMusic className="w-10 h-6 opacity-50" />
                  </div>
                  <h1>My Favorite Music</h1>
                </div>
                <div className="flex items-center justify-center flex-col gap-2 mt-5">
                  <iframe data-testid="embed-iframe"
                    src="https://open.spotify.com/embed/track/1g7pFO1WtclKCuIQiS8sNM?utm_source=generator"
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    className="rounded-md"
                    loading="lazy"></iframe>

                  <iframe data-testid="embed-iframe"
                    className="rounded-md"
                    src="https://open.spotify.com/embed/track/5wTVNpi5WDByxBgKgUE6MU?utm_source=generator"
                    width="100%" height="80"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>

                <a href='' className="flex justify-end items-center gap-2 mt-5">
                  <h1>More Details</h1>
                  <IoIosArrowForward />
                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center font-mono pt-10">
          <h1 className="font-bold text-3xl">Projects</h1>
        </div>
      </div>


    </div>
  );
}