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
        company: "Upwork",
        logo: (
            <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
                <rect width="72" height="24" rx="4" fill="transparent" />
                <circle cx="12" cy="12" r="10" fill="#00A884" />
                <text x="12" y="16" fontSize="12" fontWeight="700" fill="white" textAnchor="middle" fontFamily="Inter, Arial, sans-serif">U</text>
            </svg>
        ),
        role: "Sr. Frontend Developer",
        date: "Nov 2021 - Present",
        bullets: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Ut pretium arcu et massa semper, id fringilla leo semper.",
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ],
    },
    {
        company: "Upwork",
        logo: (
            <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
                <rect width="72" height="24" rx="4" fill="transparent" />
                <circle cx="12" cy="12" r="10" fill="#00A884" />
                <text x="12" y="16" fontSize="12" fontWeight="700" fill="white" textAnchor="middle" fontFamily="Inter, Arial, sans-serif">U</text>
            </svg>
        ),
        role: "Team Lead",
        date: "Jul 2017 - Oct 2021",
        bullets: [
            "Sed quis justo ac magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Ut pretium arcu et massa semper, id fringilla leo semper.",
            "Sed quis justo ac magna.",
        ],
    },
    {
        company: "Upwork",
        logo: (
            <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
                <rect width="72" height="24" rx="4" fill="transparent" />
                <circle cx="12" cy="12" r="10" fill="#00A884" />
                <text x="12" y="16" fontSize="12" fontWeight="700" fill="white" textAnchor="middle" fontFamily="Inter, Arial, sans-serif">U</text>
            </svg>
        ),
        role: "Full Stack Developer",
        date: "Dec 2015 - May 2017",
        bullets: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
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