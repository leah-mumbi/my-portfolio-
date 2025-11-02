import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <header className="top-0 left-0 w-full p-4">
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">&lt;SS/&gt;</h3>
                <div className="flex items-center gap-6">
                    <ul className="flex gap-6 items-center text-gray-600 font-inter-medium">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#work">Work</a>
                        </li>
                        <li>
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li className="text-gray-100">|</li>
                    </ul>
                    <Button variant="default" size="sm">Download CV</Button>
                </div>
            </div>
        </header>
    );
}
