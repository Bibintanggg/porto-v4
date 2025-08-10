"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
    <motion.nav
        initial={false}
        animate={{
            width: isScrolled ? "40%" : "90%",
            borderRadius: isScrolled ? 9999 : 12, 
            paddingLeft: isScrolled ? 32 : 40,
            paddingRight: isScrolled ? 32 : 40,
            backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
            borderColor: isScrolled ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
        }}
        transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
        }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md shadow-lg py-5"
    >
        <ul className="flex gap-8 justify-center text-white text-sm font-medium tracking-wide">
            {["home", "about", "projects", "contact"].map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.05 }}>
                    <a 
                        href={`#${item}`} 
                        className="hover:text-blue-400 transition-colors duration-200"
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                </motion.li>
            ))}
        </ul>
    </motion.nav>
);
}