import SectionHeader from "./SectionHeader";

type Testimonial = {
    quote: string;
    name: string;
    role?: string;
    company?: string;
};

const testimonials: Testimonial[] = [
    {
        quote: `“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”`,
        name: "John Doe",
        role: "Founder",
        company: "xyz.com",
    },
    {
        quote: `“Great guy, highly recommended for any COMPLEX Front-end development job! His skills are top-notch and he will be an amazing addition to any team.”`,
        name: "John Doe",
        role: "Founder",
        company: "abc.com",
    },
    {
        quote: `“Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”`,
        name: "John Doe",
        role: "Freelancer",
        company: "",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="bg-gray-50 flex flex-col items-center justify-center py-24 px-6"
        >
            <SectionHeader badgeText="Testimonials" description="Nice things people have said about me:" />

            <div className="w-full max-w-6xl mt-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <article
                            key={i}
                            className="relative bg-white rounded-xl shadow-sm p-8 text-center flex flex-col items-center"
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

                            <blockquote className="text-sm text-gray-600 leading-relaxed mb-6 px-2">
                                {t.quote}
                            </blockquote>

                            <footer className="mt-auto text-center">
                                <p id={`testimonial-${i}-name`} className="font-semibold text-gray-800">
                                    {t.name}
                                </p>
                                <p className="text-xs text-gray-500">
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