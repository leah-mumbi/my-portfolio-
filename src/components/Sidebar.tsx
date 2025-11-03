import { MoonStar, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const { theme, setTheme } = useTheme();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        onClose();
        setTimeout(() => {
            window.location.href = href || "#";
        }, 300);
    };

    return (
        <div
            className={`fixed top-0 left-0 h-screen w-[280px] sm:w-80 bg-white dark:bg-[#030712]
        p-6 transition-transform duration-300 z-9999 shadow-xl
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            id="sidebar"
        >
            <nav>
                <h3 className="text-2xl font-bold dark:text-white mb-3">
                    &lt;SS/&gt;
                </h3>
                <ul className="space-y-4">
                    <li>
                        <a
                            href="#about"
                            onClick={handleLinkClick}
                            className="text-[#4B5563] dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#work"
                            onClick={handleLinkClick}
                            className="text-[#4B5563] dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Work
                        </a>
                    </li>
                    <li>
                        <a
                            href="#testimonials"
                            onClick={handleLinkClick}
                            className="text-[#4B5563] dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={handleLinkClick}
                            className="text-[#4B5563] dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <hr />
                    </li>
                    <li className="flex items-center justify-between">
                        <span className="text-[#4B5563] dark:text-gray-300">Switch Theme</span>
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
                    </li>
                    <Button variant="default" size="lg" className="w-full">
                        Download CV
                    </Button>
                </ul>
            </nav>
        </div>
    );
}
