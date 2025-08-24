// import { Card } from "@/components/ui/card";
// import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Card from "./Card";
import React from "react";

interface ContactProps {
    label: string
    icon: React.ReactNode
    link: string
    subLabel?: string
    subIcon?: React.ReactNode
    classname?: string
    children?: React.ReactNode
    // image?: string
}
export default function CardContact({ label, icon, link, classname, subIcon, children, subLabel}: ContactProps) {
    return (
        <a href={link} className={classname} target="_blank">
            <Card>
                <div className="relative flex items-center ">
                    <div className="flex items-center gap-4">
                        {icon}
                        <div className="flex flex-col">
                            <h1 className="font-mono text-xl">{label}</h1>
                            <div className="flex gap-2 items-center">
                                {subIcon}
                                <p>&gt;</p>
                                <p className="text-sm font-sans">{subLabel}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                {children}
                </div>
            </Card>
        </a>
    );
}
