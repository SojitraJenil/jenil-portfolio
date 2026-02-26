'use client';

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-[#2d2e32] py-[50px]"
    >
      <div className="mx-auto max-w-[1070px] px-10">
        <div
          className="flex items-center justify-between
          max-[550px]:flex-wrap max-[550px]:gap-8
          max-[550px]:justify-center max-[550px]:text-center"
        >
          {/* Text */}
          <h3 className="text-[17px] text-white">
            Copyright © 2023. All rights are reserved
          </h3>

          {/* Social Icons */}
          <div className="flex gap-[20px]">
            <a
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/jeminkukadiya09"
              className="text-white transition hover:opacity-80"
            >
              <FaGithubSquare size={45} />
            </a>

            <a
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/jeminkukadiya/"
              className="text-white transition hover:opacity-80"
            >
              <FaLinkedin size={45} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}