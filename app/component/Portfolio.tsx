'use client';

import Image from 'next/image';
import { FaGithubSquare } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import DisneyImage from '@/app/assets/disney.png';
import BuildImage from '@/app/assets/letsbuild.png';
import Decrypton from '@/app/assets/decrypton.png';
import GymApp from '@/app/assets/gymapp.png';

const projects = [
  {
    title: 'EVERYDAY GYM',
    image: GymApp,
    desc:
      'A gym website is a comprehensive resource for fitness information, different exercises with GIFs, and exercise-related YouTube videos.',
    stack: ['React', 'Material UI'],
    code: 'https://github.com/jeminkukadiya09/everyday_gym',
    live: 'https://everydaygym.netlify.app/',
    reverse: false,
  },
  {
    title: 'Lets Build',
    image: BuildImage,
    desc:
      'A scalable platform for contractors & self-workers to collaborate and build better products. Light, fast, and responsive.',
    stack: ['React', 'SCSS'],
    code: 'https://github.com/jeminkukadiya09/let-s-build/tree/jemin_dev',
    live: 'https://buildwebapp.netlify.app/',
    reverse: true,
  },
  {
    title: 'Disney Clone',
    image: DisneyImage,
    desc:
      'A Disney Hotstar clone that allows users to browse movies category-wise with Google Firebase authentication.',
    stack: ['React', 'CSS'],
    code: 'https://github.com/jeminkukadiya09/Disney-clone/tree/jemin_dev',
    live: 'https://disneyplus-clone-cc688.web.app/home',
    reverse: false,
  },
  {
    title: 'Decryptor',
    image: Decrypton,
    desc:
      'Decryptor is a crypto app that allows users to search real-time cryptocurrency data.',
    stack: ['React', 'SCSS'],
    code: 'https://github.com/jeminkukadiya09/Decrtptor/tree/jemin_dev',
    live: 'https://decryptor-crypto.netlify.app/',
    reverse: true,
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