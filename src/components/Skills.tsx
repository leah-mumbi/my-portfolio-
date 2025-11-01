import { Badge } from "./ui/badge";
import skills from "@/constants/skills";

export default function Skills() {
    return (
        <section className="flex flex-col items-center justify-center" id="skills">
            <Badge variant="secondary">Skills</Badge>
            <p className="mt-4">The skills, tools and technologies I am really good at:</p>
            <div className="mt-12">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-x-24 gap-y-12 ">
                    {skills.map((skill) => (
                        <li key={skill.name} className="flex flex-col items-center gap-2">
                            <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
                            <span className="text-sm">{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}