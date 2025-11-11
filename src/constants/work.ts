import netflixImg from "@/assets/netflix.png";
import chocomeltImg from "@/assets/chocomelt.png";
import groceryImg from "@/assets/grocery.png";
import posImg from "@/assets/pos.png";

type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  imageUrl: string;
  projectUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "ChocoMelt Adventure",
    description:
      "A gamified web app for a margarine brand designed for children aged 6–12 to promote healthy eating and engagement through fun, interactive challenges. Built with HTML, CSS, Bootstrap, and JavaScript.",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "Figma"],
    imageUrl: chocomeltImg,
    projectUrl: "https://leah-mumbi.github.io/chocomelt-adventure/", // update if hosted elsewhere
  },
  {
    id: 2,
    title: "Grocery List App",
    description:
      "A responsive web app for managing shopping lists efficiently. Users can add, edit, and delete grocery items with smooth local storage support.",
    stack: ["HTML", "CSS", "JavaScript"],
    imageUrl: groceryImg,
    projectUrl: "https://leah-mumbi.github.io/grocery-list-app/", // update link
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A Netflix-inspired movie streaming interface built with React. Features movie listings, categories, and a clean, responsive design.",
    stack: ["React", "CSS", "JavaScript", "API Integration"],
    imageUrl: netflixImg,
    projectUrl: "https://leah-mumbi.github.io/netflix-clone/", // update link
  },
  {
    id: 4,
    title: "POS System",
    description:
      "A Point of Sale (POS) system developed using PHP and MySQL for managing sales, inventory, and customer records efficiently with a Bootstrap-powered dashboard.",
    stack: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript"],
    imageUrl: posImg,
    projectUrl: "https://github.com/leah-mumbi/pos-system", // your repo link
  },
];

export default projects;
