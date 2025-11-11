import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import profile from "../assets/profile.jpg";

export default function Hero() {
    return (
        <section
            id="home"
            className="flex flex-col-reverse md:flex-row items-center justify-between py-20 pt-28 px-8 md:px-20 bg-white dark:bg-[#030712]"
        >
            {/* Left - text */}
            <div className="flex-1 max-w-2xl mt-8 md:mt-0">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-[#F9FAFB] leading-tight">
                    Hi, I’m <span className="text-gray-900 dark:text-[#F9FAFB]">Leah</span>{" "}
                    <span aria-hidden="true">👋</span>
                </h1>

                <p className="mt-4 text-gray-600  dark:text-[#D1D5DB] text-sm md:text-base max-w-2xl">
                  I’m a passionate front-end web developer dedicated to building elegant, responsive, and user-friendly web experiences.
                   I enjoy transforming creative concepts into interactive and visually engaging digital solutions that make an impact.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3">
                    <div className="flex items-center text-gray-700 dark:text-[#D1D5DB]">
                        <MdLocationOn className="text-blue-600 mr-2 text-xl" aria-hidden="true" />
                        <span className="text-sm">Nairobi, Kenya</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-700 dark:text-[#D1D5DB]">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2" aria-hidden="true" />
                        <span>Available for new projects</span>
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-4 text-gray-600 dark:text-[#D1D5DB] text-xl">
                    <a
                        href="https://github.com/leah-mumbi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/leah-mumbi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                        aria-label="Twitter"
                    >
                        <FaTwitter />
                    </a>
                </div>
            </div>

            {/* Right - profile with layered background */}
            <div className="w-72 md:w-80 lg:w-96 flex-shrink-0 mb-6 md:mb-0">
                <div className="relative w-full h-full">
                    {/* Back layer */}
                    <div
                        className="absolute -right-6 top-6 w-64 h-64 md:w-72 md:h-72 bg-gray-100 rounded-md shadow-sm"
                        aria-hidden="true"
                    />
                    {/* Middle layer (subtle) */}
                    <div
                        className="absolute -right-2 top-2 w-64 h-64 md:w-72 md:h-72 bg-gray-50 rounded-md"
                        aria-hidden="true"
                    />
                    {/* Image */}
                    <div className="relative z-20 w-64 h-64 md:w-72 md:h-72 mx-auto">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-md border-8 border-white shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}