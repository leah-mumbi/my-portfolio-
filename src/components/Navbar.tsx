import { Menu, MoonStar, Sun, X } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
            sidebar.style.transform = isOpen ? 'translateX(-100%)' : 'translateX(0)';
            setIsOpen(!isOpen);
        }
    };

    const closeSidebar = () => {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
            sidebar.style.transform = 'translateX(-100%)';
            setIsOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full p-4 bg-white dark:bg-[#030712] transition-colors duration-300 z-40">
            <div className="flex justify-between items-center relative">
                {/* Option A: Plain text name */}
                <h3 className="text-2xl font-bold dark:text-white">Leah Mumbi</h3>

                {/* Option B: small logo image (uncomment to use)
                <img src="/logo-small.png" alt="Leah logo" className="h-8 w-auto" />
                */}
                <div className="gap-6 hidden md:flex md:items-center">
                    <ul className="flex gap-6 items-center text-gray-600 dark:text-gray-300 font-inter-medium">
                        <li>
                            <a href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
                        </li>
                        <li>
                            <a href="#work" className="hover:text-gray-900 dark:hover:text-white transition-colors">Work</a>
                        </li>
                        <li>
                            <a href="#testimonials" className="hover:text-gray-900 dark:hover:text-white transition-colors">Testimonials</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
                        </li>
                        <li className="text-gray-300 dark:text-gray-600">|</li>
                    </ul>
                    {theme === "dark" ? (
                        <Sun
                            className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                            onClick={() => setTheme("light")}
                        />
                    ) : (
                        <MoonStar
                            className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors"
                            onClick={() => setTheme("dark")}
                        />
                    )}
                    {/* ✅ Instant Download CV Button */}
                    <a
                        href="https://drive.google.com/file/d/1kEhXVsOvGA5Lq5mPZkbxM0QUX_SRg84g/view?ths=true"
                        download="Leah_Mumbi_CV.pdf"
                    >
                        <Button variant="default" size="sm">
                            Download CV
                        </Button>
                    </a>
                </div>
                <div className="md:hidden">
                    {isOpen ? (
                        <X className="cursor-pointer text-gray-600 dark:text-gray-300" onClick={toggleSidebar} />
                    ) : (
                        <Menu className="cursor-pointer text-gray-600 dark:text-gray-300" onClick={toggleSidebar} />
                    )}
                </div>
            </div>
            <Sidebar isOpen={isOpen} onClose={closeSidebar} />
        </header>
    );
}
