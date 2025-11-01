import image from "@/assets/fiskil.png";

type Project = {
    id: number;
    title: string;
    description: string;
    stack: string[];
    imageUrl: string;
    projectUrl: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Fiskil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        stack: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Node.js",
            "Figma",
            "Git",
            "Cypress",
            "Storybook"
        ],
        imageUrl: image,
        projectUrl: "https://fiskil.com"
    },
    {
        id: 2,
        title: "Fiskil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        stack: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Node.js",
            "Figma",
            "Git",
            "Cypress",
            "Storybook"
        ],
        imageUrl: image,
        projectUrl: "https://fiskil.com"
    },{
        id: 3,
        title: "Fiskil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        stack: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Node.js",
            "Figma",
            "Git",
            "Cypress",
            "Storybook"
        ],
        imageUrl: image,
        projectUrl: "https://fiskil.com"
    }
]

export default projects