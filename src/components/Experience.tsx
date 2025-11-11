import SectionHeader from "./SectionHeader";

type ExperienceItem = {
    company?: string;
    logo?: React.ReactNode;
    role: string;
    date: string;
    bullets: string[];
};

const experiences: ExperienceItem[] = [
    {
       
        role: "Front-End Web Developer",
        date: "July 2024 - September 2024",
        bullets: [
            "Collaborated with senior developers to design and implement responsive web applications.",
            "Built and maintained websites using HTML, CSS, Bootstrap, JavaScript, and PHP.",
            "Assisted in WordPress development and customizing client sites for better user experience.",
            "Helped train and guide new interns in coding fundamentals and web technologies.",
        ],
    },
    {
      
        role: "Freelance Web Developer",
        date: "October 2024 - Present",
        bullets: [
            "Designed and developed client websites and small business portfolios with focus on SEO and performance.",
            "Implemented responsive design principles to ensure optimal user experience across devices.",
            "Created visually appealing user interfaces using Figma and translated designs into clean, responsive code.",
            "Continuously improving frontend skills and staying updated with the latest web technologies.",
        ],
    },
    {
        
        role: "Front-End Projects & Collaborations",
        date: "2024 - Present",
        bullets: [
            "Built and deployed several personal and academic projects to strengthen frontend expertise.",
            "Projects include: ChocoMelt Adventure!, Community Waste Reporting App, Grocery List App, and Instagram Clone.",
              "Demonstrated strong skills in React, Tailwind CSS, and UI/UX design.",
              "Focus on creating user-friendly, responsive, and high-performing web applications.",
        ],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="bg-gray-50 dark:bg-[#111827] flex flex-col items-center justify-center py-24 px-6"
        >
            <SectionHeader badgeText="Experience" description="Here is a quick summary of my most recent experiences:" />

            <div className="w-full max-w-4xl mt-8 space-y-6 px-4">
                {experiences.map((exp, idx) => (
                    <article
                        key={idx}
                        className="bg-white dark:bg-[#1F2937] rounded-xl shadow-sm p-6 flex flex-col sm:flex-row items-start gap-6"
                        role="group"
                        aria-labelledby={`experience-${idx}-role`}
                    >
                        <div className="shrink-0 w-full sm:w-28 flex items-center justify-center">
                            {/* company logo */}
                            <div className="w-20 h-8">
                                {exp.logo}
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 id={`experience-${idx}-role`} className="text-sm font-semibold text-gray-800 dark:text-[#F9FAFB]">
                                        {exp.role}
                                    </h3>
                                </div>

                                <div className="text-xs text-gray-500 dark:text-[#d1d5db] whitespace-nowrap">
                                    {exp.date}
                                </div>
                            </div>

                            <ul className="mt-3 list-disc list-inside text-sm text-gray-600 dark:text-[#d1d5db] space-y-2">
                                {exp.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}