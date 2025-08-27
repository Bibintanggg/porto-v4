'use client'

import { motion } from "framer-motion"
import React from "react"

interface TransitionsProps {
    children: React.ReactNode
}

export default function Transitions({
    children
}: TransitionsProps) {
    const variants = {
    hidden: { opacity: 0, x: 0, y: 0, filter: "blur(10px)"},
    enter: { opacity: 1, x: 0, y: -50, filter: "blur(0px)" },
    exit: { opacity: 0, x: 0, y: -100, filter: "blur(10px)" },
  };
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{ ease: "easeInOut", duration: 0.75,   }}
            className="overflow-y-hidden"
        >
            {children}
        </motion.div>
    )
}