import iconJavascript from "@/assets/icons/icon-javscript.svg";
import iconTypescript from "@/assets/icons/icon-typescript.svg";
import iconReact from "@/assets/icons/icon-react.svg";
import iconNodeJS from "@/assets/icons/icon-nodejs.svg";
import iconNextJS from "@/assets/icons/icon-nextjs.svg";
import iconTailwind from "@/assets/icons/icon-tailwindcss.svg";
import iconGit from "@/assets/icons/icon-git.svg";
import iconPostgres from "@/assets/icons/icon-postgresql.svg";
import iconSASS from "@/assets/icons/icon-sass.svg";
import iconCypress from "@/assets/icons/icon-cypress.svg";
import iconFigma from "@/assets/icons/icon-figma.svg";
import iconSocket from "@/assets/icons/icon-socket.svg";
import iconStoryBook from "@/assets/icons/icon-storybook.svg";
import iconExpressJS from "@/assets/icons/icon-express.svg";
import iconMongoDB from "@/assets/icons/icon-mongodb.svg";
import iconNestJS from "@/assets/icons/icon-nest.svg";



type Skill = {
    name: string;
    icon: string;
}

const skills: Skill[] = [
    {
        name: "JavaScript",
        icon: iconJavascript
    },
    {
        name: "TypeScript",
        icon: iconTypescript
    },
    {
        name: "React",
        icon: iconReact
    },
    {
        name: "Node.js",
        icon: iconNodeJS
    },
    {
        name: "Next.js",
        icon: iconNextJS
    },
    {
        name: "Tailwind CSS",
        icon: iconTailwind
    },
    {
        name: "Git",
        icon: iconGit
    },
    {
        name: "PostgreSQL",
        icon: iconPostgres
    },
    {
        name: "Sass",
        icon: iconSASS
    },
    {
        name: "Cypress",
        icon: iconCypress
    },
    {
        name: "Figma",
        icon: iconFigma
    },
    {
        name: "Socket",
        icon: iconSocket
    },
    {
        name: "Storybook",
        icon: iconStoryBook
    },
    {
        name: "Express.js",
        icon: iconExpressJS
    },
    {
        name: "MongoDB",
        icon: iconMongoDB
    },
    {
        name: "Nest.js",
        icon: iconNestJS
    }
]

export default skills;