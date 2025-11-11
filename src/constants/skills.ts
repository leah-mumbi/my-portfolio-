import iconJavascript from "@/assets/icons/icon-javscript.svg";
import iconTypescript from "@/assets/icons/icon-typescript.svg";
import iconReact from "@/assets/icons/icon-react.svg";
import iconNodeJS from "@/assets/icons/icon-nodejs.svg";
import iconNextJS from "@/assets/icons/icon-nextjs.svg";
import iconTailwind from "@/assets/icons/icon-tailwindcss.svg";
import iconGit from "@/assets/icons/icon-git.svg";
import iconFigma from "@/assets/icons/icon-figma.svg";
import iconMongoDB from "@/assets/icons/icon-mongodb.svg";
import iconHtml5 from "@/assets/icons/icon-html5.svg";
import iconCss3 from "@/assets/icons/icon-css3.svg";
import iconBootstrap from "@/assets/icons/icon-bootstrap.svg";
import iconphp from "@/assets/icons/icon-php.svg";
import iconmysql from "@/assets/icons/icon-mysql.svg";



type Skill = {
    name: string;
    icon: string;
}

const skills: Skill[] = [
    {
        name: "HTML",
        icon: iconHtml5
    },
    {   
        name: "CSS",
        icon: iconCss3
    },
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
        name: "Bootstrap",
        icon: iconBootstrap
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
        name: "Php",
        icon: iconphp
    },
    {
        name: "MySQL",
        icon: iconmysql
    },
   
    {
        name: "Figma",
        icon: iconFigma
    },
   
    {
        name: "MongoDB",
        icon: iconMongoDB
    },
   
]

export default skills;