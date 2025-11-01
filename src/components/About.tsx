import SectionHeader from "./SectionHeader";
import leah from "../assets/leah.jpg";

export default function About() {
    return (
        <section className="bg-gray-50 flex flex-col items-center justify-center py-24" id="about">
            <SectionHeader badgeText="About"/>

            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full mt-12">
        
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={leah}
            alt="Leah"
            className="w-351 h-200 object-cover rounded-lg shadow-lg"
          />
        </div>

        
        <div className="w-full md:w-1/2 md:pl-12 space-y-6 text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900">
            Curious about me? Here you have it:
          </h2>

          <p>
            I’m a passionate front-end web developer who enjoys building clean,
            responsive, and user-friendly websites. I love turning design ideas
            into real, interactive digital experiences.
          </p>

          <p>
            I began my journey as a developer a few years ago and have since
            continued to grow by learning modern tools like React, TailwindCSS,
            and TypeScript. My goal is to keep improving and contributing to
            projects that make a real impact.
          </p>

          <p>
            When I’m not coding, I enjoy learning new technologies, exploring
            creative design, and helping others grow in tech. You can also find
            me on{" "}
            <a
              href="https://github.com/leah-mumbi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/leah-mumbi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
          <p>Finally, some quick bits about me.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Diploma in Information Technology</li>
            <li>Web Developer</li>
            <li>Avid learner</li>
            <li>Based in Nairobi, Kenya</li>
          </ul>
          <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello!
            I promise I don't bite 😉</p>
        </div>
      </div>
        </section>
    )
}