import { SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "./ui/badge";


export default function ProjectCard({id, title, description, stack, imageUrl, projectUrl}: {id: number, title: string, description: string, stack: string[], imageUrl: string, projectUrl: string}) {
    return (
        <div className={`lg:w-full md:w-full w-[383px] max-w-full shadow-lg dark:shadow-gray-900 dark:shadow-2xl rounded-lg flex flex-col lg:h-[480px] md:h-[360px] ${id % 2 !== 0 ? "lg:flex-row md:flex-row" : "lg:flex-row-reverse md:flex-row-reverse"}`}>
            <div className="bg-gray-50 dark:bg-[#374151] w-full h-[300px] md:h-[360px] lg:h-[480px] lg:w-1/2 p-4 md:p-8 lg:p-12">
                <img src={imageUrl} alt={`${title} Project Preview`} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="w-full lg:w-1/2 h-auto lg:h-[480px] p-4 md:p-8 lg:p-12 flex flex-col dark:bg-[#1F2937] justify-start items-start gap-4 md:gap-6">
                <h2 className="font-semibold text-xl md:text-2xl dark:text-[#F9FAFB]">{title}</h2>
                <p className="text-sm md:text-base dark:text-[#D1D5DB]">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {stack.map((tech) => (
                        <Badge key={tech} variant={"secondary"} className="text-sm">{tech}</Badge>
                    ))}
                </div>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600">
                    <SquareArrowOutUpRight/>
                </a>
            </div>
        </div>
    )
}