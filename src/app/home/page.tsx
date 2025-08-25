"use client";

import {
  FaCss3,
  FaGithub,
  FaInstagram,
  FaLaravel,
  FaLinkedin,
  FaReact,
  FaTiktok,
  FaUser,
  FaUserNinja,
  FaUserCircle,
  FaUserFriends,
  FaFolder
} from "react-icons/fa";
import GitHubCalendar from 'react-github-calendar';
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineProject } from "react-icons/ai";
import { BiArchive, BiLogoTypescript, BiMusic } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import Navbar from "../components/Navbar";
import { IoIosArrowForward, IoIosClose, IoIosArrowUp } from "react-icons/io";
import { BsTools } from "react-icons/bs";
import Typewriter from "../components/Typewriter";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Card from "../components/Card";
import { useState } from "react";
import CardProject from "../components/CardProject";
import { project } from "@/data/data-project";
import CardContact from "../components/CardContact";
import AvatarIcon from "../components/AvatarIcon";

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
  const [visibleProjects, setVisibleProjects] = useState(2);
  const [toggleButton, setToggleButton] = useState('projects');

  // const [toggleProjects, setToggleProjects] = useState('projects');

  const toggleView = (view: string) => {
    setToggleButton(view)
  }

  // console.log('saat ini menampilkan : ',toggleButton);

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
                    <BiArchive className="w-10 h-6 opacity-50" />
                  </div>
                  <h1>Archive</h1>
                </div>
                <div className="flex items-center gap-5 mt-5">
                  <a href="#" className="flex flex-col items-center cursor-pointer">
                  <FaFolder size={40} className="text-white/40"/>
                  <div className="flex flex-col items-center">
                  <p className="text-sm">fav-
                    <span>music</span>
                  </p>
                  </div>
                  </a>

                  <a href="#" className="flex flex-col items-center cursor-pointer">
                  <FaFolder size={40} className="text-white/40"/>
                  <div className="flex flex-col items-center">
                  <p className="text-sm">gallery
                  </p>
                  </div>
                  </a>

                  <a href="#" className="flex flex-col items-center cursor-pointer">
                  <FaFolder size={40} className="text-white/40"/>
                  <div className="flex flex-col items-center">
                  <p className="text-sm">bintang
                  </p>
                  </div>
                  </a>

                </div>
              </Card>

            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <GitHubCalendar username="Bibintanggg" />
      </div>

      <div className="pb-20">
        <div className="flex justify-center font-mono pt-10">
          <h1 className="font-bold text-3xl">Showcase</h1>
        </div>

        <div className="flex gap-5 items-center justify-center text-xl mt-4 font-sans">
          <button
            onClick={() => toggleView('projects')}
            className="bg-white/10 cursor-pointer backdrop-blur-2xl 
          rounded-xl w-36 h-10 flex items-center justify-center hover:bg-white/30 transition-all ease-in-out duration-75">
            Projects
          </button>
          <button
            onClick={() => toggleView('experience')}
            className="bg-white/10 cursor-pointer backdrop-blur-2xl 
          rounded-xl w-36 h-10 flex items-center justify-center hover:bg-white/30 transition-all ease-in-out duration-75">
            Experience
          </button>
        </div>

        {toggleButton === 'projects' ? (
          <>

            <div className="flex items-center justify-center mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-10">
                {project.slice(0, visibleProjects).map((data) => (
                  <CardProject key={data.id} project={data}>
                    <div>

                    </div>
                  </CardProject>
                ))}
              </div>
            </div>


            {project.length > 2 && (
              <div className="flex justify-center mt-10">
                {visibleProjects < project.length ? (
                  <motion.button
                    onClick={() => setVisibleProjects(project.length)}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Show More
                    <IoIosArrowForward />
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={() => setVisibleProjects(2)}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Show Less
                    <IoIosArrowUp />
                  </motion.button>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center mt-10">
            <span className="text-gray-400">Experience content coming soon.</span>
          </div>
        )}

        <div className="flex justify-center items-center flex-col mt-20">
          <div className="flex justify-center items-center ">
            <h1 className="font-mono text-3xl">Contact</h1>
          </div>

          <div className="mt-10 flex gap-5">
            <div className='flex flex-col gap-5'>

              <CardContact
                link="https://www.instagram.com/bintang.ydha_/"
                icon={<FaInstagram size={40} />}
                label="Instagram"
                subLabel="@bintang.ydha_"
                subIcon={<FaUser />}
              >
                <div className="mt-5">
                  <Card shiny>
                    <div className="relative flex items-center gap-10">
                      <FaUserCircle size={90} />
                      <div>

                        <div className="flex gap-2 flex-col font-sans">
                          <div className="font-sans text-xl">
                            <h1>bintang.ydha_</h1>
                          </div>

                          <div className="flex items-center gap-4 text-sm">
                            <ul className="flex gap-5">
                              <li>1 Posted</li>
                              <li>440 Followers</li>
                              <li>604 Following</li>
                            </ul>
                          </div>

                          <div className="flex gap-3">
                            <p>beentang</p>
                            <span className="text-white/50">he/him</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

              </CardContact>

              <CardContact
                link="https://www.tiktok.com/@bintangyudha_"
                icon={<FaTiktok size={40} />}
                label="Tiktok"
                subLabel="@bintangyudha_"
                subIcon={<FaUser />}
              >
                <div className="mt-5">
                  <Card shiny>
                    <div className="relative flex items-center gap-5 justify-center">
                      <img src="/assets/bin.jpeg" alt="bin" className="rounded-full w-30 h-30" />
                      <div>

                        <div className="flex gap-2 flex-col font-sans">
                          <div className="font-sans text-xl">
                            <h1 className='font-semibold'>Kanaaell</h1>
                            <p className='text-sm font-lg text-white/40'>@bintangyudha_</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="flex items-center gap-4 text-sm mt-5">
                        <div className="font-sans text-lg font-semibold">
                          <h1>310</h1>
                          <p className="text-sm text-white/40 ">Following</p>
                        </div>
                        <hr className="w-0.5 h-9 bg-white/30 rounded-full" />
                        <div className="font-sans text-lg font-semibold">
                          <h1>839</h1>
                          <p className="text-sm text-white/40 ">Followers</p>
                        </div>
                        <hr className="w-0.5 h-9 bg-white/30 rounded-full" />

                        <div className="font-sans text-lg font-semibold">
                          <h1>42.1K</h1>
                          <p className="text-sm text-white/40 ">Likes</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

              </CardContact>
            </div>

            <CardContact
              link="https://github.com/Bibintanggg"
              icon={<FaGithub size={40} />}
              label="Github"
              subLabel="Bibintanggg"
              subIcon={<FaUser />}
            >

              <div className="mt-5">
                <Card shiny>
                  <div className="flex flex-col ">
                    <img src="/assets/gitimg.jpg" alt="bin" className="rounded-full w-50 h-50" />
                  </div>

                  <div className="flex flex-col text-xl font-sans">
                    <div className="mt-5">
                      <div className="flex flex-col">
                        <h1 className="font-medium">Bintang Yudha</h1>

                        <div className="flex gap-2 items-center">
                          <p className="font-thin">Bibintanggg</p>
                          <hr className="w-0.5 h-0.5 rounded-full bg-white" />
                          <span className='font-thin'>he/him</span>
                        </div>

                        <div className="text-base mt-3 text-medium">
                          <h1>Mau jadi fullstack katanya</h1>
                          <div className="text-center">
                            <button className="mt-5 w-full h-8 rounded-md backdrop-blur-2xl bg-white/10 border 
                            border-white/10">
                              Follow guys
                            </button>
                          </div>
                        </div>

                        <div className="text-sm flex items-center mt-5 gap-2">
                          <FaUserFriends opacity={5} />
                          <p>
                            7
                            <span className="text-white/70"> Followers</span>
                          </p>
                          <br className="w-0.5 h-0.5 bg-white" />
                          <p>
                            6
                            <span className="text-white/70"> Following</span>
                          </p>
                        </div>

                        <div className="text-sm flex items-center mt-3 gap-2">
                          <CiLocationOn opacity={5} />
                          <p>
                            Jakarta Timur
                            <span className="text-white/70"> - Indonesia</span>
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </Card>
              </div>

            </CardContact>

          </div>
        </div>
      </div>

    </div>
  );
}