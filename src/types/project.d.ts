import React from "react"

export interface Project {
    id: number,
    title: string,
    description: string,
    techStack?: string[],
    link: string,
    github: string,
    image: string
    icon?: React.ReactNode[]
}