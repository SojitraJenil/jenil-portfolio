'use client';

import Image from 'next/image';
import { FaGithubSquare } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import Fitnessscreen from '@/app/assets/Fitness_screen.png';
import Ecommerce from '@/app/assets/E-commerce-screencapture.png';
import RealTImechat from '@/app/assets/chat-app-screenshot.png';
import DisneyImage from '@/app/assets/disney.png';
import BuildImage from '@/app/assets/letsbuild.png';
import Decrypton from '@/app/assets/decrypton.png';
import GymApp from '@/app/assets/gymapp.png';

const projects = [
 {
  title: 'Daily Expense Tracker',
  image: Fitnessscreen,
  desc:
    'A full-stack expense tracking application that allows users to manage daily income and expenses with real-time calculations, category-wise analytics, and responsive charts.',
  stack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
  code: 'https://github.com/SojitraJenil/daily-expense-user',
  live: 'https://expense-daily.vercel.app/',
  reverse: false,
},
{
  title: 'E-Commerce Platform (User + Admin)',
  image: Ecommerce,
  desc:
    'A complete full-stack e-commerce solution with a user storefront and an admin dashboard. Features include product management, authentication, order tracking, and role-based access control.',
  stack: ['Next.js', 'React', 'Node.js', 'MongoDB'],
  code: 'https://github.com/SojitraJenil/ECommerce-front-back',
  live: 'https://e-com-jenil.vercel.app/',
  reverse: true,
},
{
  title: 'Real-Time Chat Application',
  image: GymApp,
  desc:
    'A real-time chat application built with Socket.io enabling instant messaging, live updates, and seamless user interaction with a modern responsive UI.',
  stack: ['Next.js', 'Socket.io', 'Node.js', 'MongoDB'],
  code: 'https://github.com/SojitraJenil/chat-app-user',
  live: 'https://chat-app-jenil.vercel.app',
  reverse: false,
},
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#f9f9f9] py-[150px] max-[768px]:py-[70px]"
    >
      <div className="mx-auto max-w-[1070px] px-10">
        <div className="flex flex-col max-[600px]:text-center">
          <p className="mb-[10px] text-[17px] font-bold uppercase text-[#147efb]">
            Portfolio
          </p>
          <h3 className="mb-[60px] text-[25px] text-[#2d2e32]">
            Each project is a unique piece of development 🧩
          </h3>

          <div className="grid gap-[50px]">
            {projects.map((proj, i) => (
              <div
                key={i}
                className={`group flex h-[400px] gap-[80px] rounded-[17px] bg-white p-5 shadow-md
                max-[1020px]:h-auto max-[1020px]:flex-col max-[1020px]:gap-[30px]
                ${proj.reverse ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Image */}
                <div
                  className="h-auto w-[530px] overflow-hidden rounded-[17px] bg-black/20 shadow
                  max-[650px]:w-full"
                >
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    className="w-full translate-y-0 transition-transform duration-[10000ms] ease-in-out
                    group-hover:translate-y-[-83%]"
                  />
                </div>

                {/* Text */}
                <div
                  className="flex w-[300px] flex-col items-center justify-center text-center
                  max-[1020px]:mx-auto"
                >
                  <h3 className="mb-5 text-[17px] uppercase text-[#2d2e32]">
                    {proj.title}
                  </h3>

                  <p className="text-[17px] font-medium text-[#767676]">
                    {proj.desc}
                  </p>

                  {/* Stack */}
                  <div className="mt-4 flex gap-[10px]">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-white px-[13px] py-[10px]
                        text-sm font-semibold shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-[30px] flex w-full justify-evenly gap-[10px]">
                    <a
                      href={proj.code}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-[5px] text-[17px] font-medium text-[#2d2e32]
                      transition hover:text-[#702cf6]"
                    >
                      Code <FaGithubSquare size={25} />
                    </a>

                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-[5px] text-[17px] font-medium text-[#2d2e32]
                      transition hover:text-[#702cf6]"
                    >
                      Live Demo <FiExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}