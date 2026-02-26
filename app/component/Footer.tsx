'use client';

import { FaGithubSquare, FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {

  const getcurrentYear = new Date().getFullYear();
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
            Copyright © {getcurrentYear}. All rights are reserved
          </h3>

          <div className=" flex gap-5 max-[900px]:justify-center">
            <a
              href="https://github.com/SojitraJenil"
              target="_blank"
              rel="noreferrer"
              className="text-[#2d2e32] transition hover:text-black"
              aria-label="GitHub"
            >
              <FaGithubSquare size={32} className='text-white' />
            </a>

            <a
              href="https://www.linkedin.com/in/jenil-sojitra-0a18a2250"
              target="_blank"
              rel="noreferrer"
              className="text-[#0a66c2] transition hover:opacity-80"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>

            <a
              href="https://www.instagram.com/jenilll_18?igsh=ZTUybTh6dXNrdGlo"
              target="_blank"
              rel="noreferrer"
              className="text-[#e1306c] transition hover:opacity-80"
            >
              <FaInstagram size={32} />
            </a>

            <a
              href="https://wa.me/919979968463"
              target="_blank"
              rel="noreferrer"
              className="text-[#25D366] transition hover:opacity-80"
            >
              <FaWhatsapp size={32} />
            </a>

            <a
              href="tel:+919979968463"
              className="text-[#147efb] transition hover:opacity-80"
              aria-label="Call"
            >
              <FaPhoneAlt size={25} className='pt-1' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}