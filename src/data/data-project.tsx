import { Project } from "@/types/project"
import { FaLaravel, FaReact } from "react-icons/fa"
import { IoLogoFirebase } from "react-icons/io5";
import { 
    SiTailwindcss, 
    SiThreedotjs, 
    SiTypescript, 
    SiBlender, 
    SiVite, 
    SiMui,
    SiInertia,
    SiShadcnui,
    SiSwagger
} from "react-icons/si"

export const project: Project[] = [
    {
        id: 1,
        title: "SleepWell",
        description: "An educational platform that aims to raise awareness of the importance of healthy sleep...",
        image: "/assets/sleepwell.png",
        techStack: ['Laravel Inertia', 'Typescript', 'React', 'ShadCN', 'TailwindCSS', 'MYSQL', 'Laravel Sanctum', ],
        link: "#",
        github: '',
        icon: [
        <FaReact key='react' size={20}/>, 
        <SiTailwindcss key='tailwind' size={20}/>,
        <SiThreedotjs key='threejs' size={20}/>,
        <SiBlender key={'blender'} size={20}/>,
        <IoLogoFirebase key={'firebase'} size={20}/>
        ]
    },
    {
        id: 2,
        title: "Mini Finance App [Mobile Version]",
        description: "A mobile finance app designed to help users track income, expenses, and savings in a simple way...",
        image: "/assets/finance.jpg",
        techStack: ['Laravel Inertia', 'Typescript', 'React', 'ShadCN', 'TailwindCSS', 'MYSQL', 'Laravel Sanctum', ],
        link: "#",
        github: '',
        icon: [
        <FaLaravel key='laravel' size={20}/>, 
        <SiTailwindcss key='tailwind' size={20}/>,
        <SiVite key='vite' size={20}/>,

        ]
    },
    {
        id: 3,
        title: "Jejak Pemuda",
        description: "An educational platform to understand and appreciate the struggle of the Youth Pledge in uniting the nation...",
        image: "/assets/jejakpemuda.png",
        techStack: ['Laravel Inertia', 'Typescript', 'React', 'ShadCN', 'TailwindCSS', 'MYSQL', 'Laravel Sanctum', ],
        link: "#",
        github: '',
        icon: [
        <FaReact key='react' size={20}/>, 
        <SiTailwindcss key='tailwind' size={20}/>,
        <SiThreedotjs key='threejs' size={20}/>,
        <SiBlender key={'blender'} size={20}/>,
        <SiMui key={'materialui'} size={20}/>
        ]
    },
    {
        id: 4,
        title: "Talent Force",
        description: "A mobile finance app designed to help users track income, expenses, and savings in a simple way...",
        image: "/assets/indi.jpg",
        techStack: ['Laravel Inertia', 'Typescript', 'React', 'ShadCN', 'TailwindCSS', 'MYSQL', 'Laravel Sanctum', ],
        link: "#",
        github: '',
        icon: [
        <FaReact key='react' size={20}/>, 
        <SiTailwindcss key='tailwind' size={20}/>,
        <SiTypescript key="typescript" size={20}/>,
        <SiInertia key={'inertia'} size={20}/>,
        <FaLaravel key={'laravel'} size={20}/>,
        <SiShadcnui key={'shadcn'} size={20}/>,
        <SiSwagger key={'swagger'} size={20}/>,
        ]
    },
    {
        id: 5,
        title: "Mini Finance App [Mobile Version]",
        description: "A mobile finance app designed to help users track income, expenses, and savings in a simple way...",
        image: "/assets/kanban.jpg",
        techStack: ['Laravel Inertia', 'Typescript', 'React', 'ShadCN', 'TailwindCSS', 'MYSQL', 'Laravel Sanctum', ],
        link: "#",
        github: ''
    },
    {
        id: 6,
        title: "Mini Finance App [Mobile Version]",
        description: "A mobile finance app designed to help users track income, expenses, and savings in a simple way...",
        image: "/assets/ucic.jpg",
        techStack: ['Laravel Inertia', 'Typescript', 'React', 'ShadCN', 'TailwindCSS', 'MYSQL', 'Laravel Sanctum', ],
        link: "#",
        github: ''
    },
]