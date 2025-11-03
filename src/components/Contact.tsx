import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiCopy } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState<{ [k: string]: boolean }>({});

  const handleCopy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied((s) => ({ ...s, [key]: true }));
      setTimeout(() => setCopied((s) => ({ ...s, [key]: false })), 1800);
    } catch {
      // ignore
    }
  };

  const email = "reachsagarshah@gmail.com";
  const phone = "+91 8980500565";

  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-[#030712] flex flex-col items-center justify-center py-24 px-6 sm:px-20"
    >
      <SectionHeader
        badgeText="Get in touch"
        description="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
      />

      <div className="w-full max-w-3xl mt-8 text-center">
        <div className="py-8 px-6 grid gap-6">
          {/* Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-center gap-4">
            <div className="p-3 rounded-md bg-gray-100 text-gray-700">
              <HiOutlineMail className="w-5 h-5" aria-hidden="true" />
            </div>

            <div className="text-left">
              <button
                onClick={() => handleCopy("email", email)}
                className="text-lg font-medium text-gray-800 dark:text-[#F9FAFB] hover:underline"
                aria-label="Copy email"
              >
                {email}
              </button>
            </div>

            <div className="flex items-center gap-2 justify-end">
              <button
                onClick={() => handleCopy("email", email)}
                className="p-2 rounded-md text-gray-500 dark:text-[#F9FAFB] hover:bg-gray-100"
                aria-label="Copy email to clipboard"
                title="Copy email"
              >
                <FiCopy />
              </button>
              {copied.email && (
                <span className="text-sm text-green-600">Copied</span>
              )}
            </div>
          </div>

          {/* Phone row */}
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-center gap-4">
            <div className="p-3 rounded-md bg-gray-100 text-gray-700">
              <FiPhone className="w-5 h-5" aria-hidden="true" />
            </div>

            <div className="text-left">
              <button
                onClick={() => handleCopy("phone", phone)}
                className="text-lg font-medium text-gray-800 dark:text-[#F9FAFB] hover:underline"
                aria-label="Copy phone"
              >
                {phone}
              </button>
            </div>

            <div className="flex items-center gap-2 justify-end">
              <button
                onClick={() => handleCopy("phone", phone)}
                className="p-2 rounded-md text-gray-500 dark:text-[#F9FAFB] hover:bg-gray-100"
                aria-label="Copy phone to clipboard"
                title="Copy phone"
              >
                <FiCopy />
              </button>
              {copied.phone && (
                <span className="text-sm text-green-600">Copied</span>
              )}
            </div>
          </div>

          <p className="text-sm text-gray-500">
            You may also find me on these platforms!
          </p>

          <div className="flex items-center justify-center gap-6 text-gray-600 text-xl">
            <a
              href="https://github.com/leah-mumbi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-900"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/leah-mumbi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}