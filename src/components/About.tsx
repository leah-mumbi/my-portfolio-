import SectionHeader from "./SectionHeader";
import leah from "../assets/leah.jpg";

export default function About() {
  return (
    <section className="bg-gray-50 flex flex-col items-center justify-center py-24" id="about">
      <SectionHeader badgeText="About me" />

      <div className="flex flex-col md:flex-row items-start max-w-6xl w-full mt-12 px-6 md:px-0 gap-10">
        {/* Image column */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
          {/* left vertical bar */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute -left-6 top-12 w-3 h-48 bg-gray-100 rounded-sm"
          />
          {/* bottom horizontal bar */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute -left-6 bottom-6 w-40 h-3 bg-gray-100 rounded-sm"
          />

          <div className="relative z-10">
            <img
              src={leah}
              alt="Leah"
              className="w-64 md:w-80 lg:w-96 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Content column */}
        <div className="w-full md:w-1/2 md:pl-12 space-y-6 text-gray-700">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Curious about me? Here you have it:
          </h2>

          <div className="prose prose-sm md:prose-base max-w-none text-gray-600">
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

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 list-disc list-inside text-gray-700">
              <li>B.E. in Computer Engineering</li>
              <li>Avid learner</li>
              <li>Full time freelancer</li>
              <li>Aspiring indie hacker</li>
            </ul>

            <p>
              One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😊
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}