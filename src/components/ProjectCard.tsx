import { SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "./ui/badge";


export default function ProjectCard({id, title, description, stack, imageUrl, projectUrl}: {id: number, title: string, description: string, stack: string[], imageUrl: string, projectUrl: string}) {
    return (
        <div className={`lg:w-6xl lg:h-[480px] md:w-[784px] md:h-[360px] w-xl h-[772px] shadow-lg rounded-lg dark:rounded-lg flex ${id % 2 !== 0 ? "lg:flex-row md:flex-row flex-col" : "lg:flex-row-reverse md:flex-row-reverse flex-col"}`}>
            <div className="bg-gray-50 dark:bg-[#374151] w-xl h-[480px] p-12">
                <img src={imageUrl} alt="Fiskil Project Mockup" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className=" w-xl h-[480px] p-12 flex flex-col dark:bg-[#1F2937] justify-start items-start gap-6">
                <h2 className="font-semibold text-2xl dark:text-[#F9FAFB]">{title}</h2>
                <p className="dark:text-[#D1D5DB]">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {stack.map((tech) => (
                        <Badge key={tech} variant={"secondary"}>{tech}</Badge>
                    ))}
                </div>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600">
                    <SquareArrowOutUpRight/>
                </a>
            </div>
        </div>
    )
}