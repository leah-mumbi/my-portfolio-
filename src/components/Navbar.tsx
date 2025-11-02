import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";

export default function Navbar() {
    const { theme, setTheme } = useTheme();

    return (
        <header className="top-0 left-0 w-full p-4 bg-white dark:bg-[#030712] transition-colors duration-300">
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold dark:text-white">&lt;SS/&gt;</h3>
                <div className="flex items-center gap-6">
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
                    {theme === 'dark' ? (
                        <Sun 
                            className="cursor-pointer text-gray-300 hover:text-white transition-colors" 
                            onClick={() => setTheme('light')}
                        />
                    ) : (
                        <Moon 
                            className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors" 
                            onClick={() => setTheme('dark')}
                        />
                    )}
                    <Button variant="default" size="sm">Download CV</Button>
                </div>
            </div>
        </header>
    );
}
