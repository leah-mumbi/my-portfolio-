import SectionHeader from "./SectionHeader";

type Testimonial = {
    quote: string;
    name: string;
    role?: string;
    company?: string;
};

const testimonials: Testimonial[] = [
    {
        quote: `“Leah is an exceptionally dedicated and talented developer. During her internship, she showed strong problem-solving skills and a great eye for clean, responsive design. She was always eager to learn and contributed meaningfully to every task assigned.”`,
        name: "Jackson Githumu",
        role: "Software Engineer Mentor",
        company: "Macrologic Systems & Software Ltd",
    },
    {
        quote: `“Working with Leah on a team project was a pleasure. She consistently brought creative ideas to the table and delivered well-structured, efficient code. Her collaboration skills and professionalism made our development process smooth and enjoyable.”`,
        name: "Marshall Chikanma",
        role: "Fullstack Developer",
        company: "Project Teammate",
    },
    {
        quote: `“Leah has an impressive grasp of modern web technologies. I was particularly impressed by her work on the POS System and ChocoMelt project — her attention to user experience and functionality stood out. She’s definitely a developer to watch.”`,
        name: "Timothy Kiyarie",
        role: "Project Supervisor",
        company: "Mentorship Program",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="bg-gray-50 dark:bg-[#111827] flex flex-col items-center justify-center py-24 px-6"
        >
            <SectionHeader badgeText="Testimonials" description="What people say about me:" />

            <div className="w-full max-w-6xl mt-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <article
                            key={i}
                            className="relative bg-white dark:bg-[#1F2937] rounded-xl shadow-sm p-8 text-center flex flex-col items-center"
                            aria-labelledby={`testimonial-${i}-name`}
                        >
                            {/* Avatar */}
                            <div className="-mt-12 mb-2">
                                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center shadow-inner">
                                    <svg
                                        className="w-7 h-7 text-gray-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2c0 .7.6 1.2 1.2 1.2h16.8c.7 0 1.2-.5 1.2-1.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z" />
                                    </svg>
                                </div>
                            </div>

                            <blockquote className="text-sm text-gray-600 dark:text-[#D1D5DB] leading-relaxed mb-6 px-2">
                                {t.quote}
                            </blockquote>

                            <footer className="mt-auto text-center">
                                <p id={`testimonial-${i}-name`} className="font-semibold text-gray-800 dark:text-[#F9FAFB]">
                                    {t.name}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-[#D1D5DB]">
                                    {t.role}
                                    {t.company ? ` — ${t.company}` : ""}
                                </p>
                            </footer>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
