import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import projects from "@/constants/work";

export default function Work() {
    return (
        <section className="flex flex-col items-center justify-center py-24 px-20" id="work">
            <SectionHeader badgeText="Work" description="Some of the noteworthy projects I have built:" />
            <div className="flex flex-col gap-12">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    )
}
