'use client';

import Image from 'next/image';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import Waving from '../assets/waving.png';
import Html from '@/app/assets/html.svg';
import ReactIcon from '@/app/assets/react.svg';
import Bootstrap from '@/app/assets/Bootstrap_logo.png';
import Scss from '@/app/assets/scss.svg';
import JavaScript from '@/app/assets/javascript.svg';
import MaterialUi from '@/app/assets/mui.png';
import Css from '@/app/assets/css.svg';
import Profile from '@/app/assets/jenil.jpg';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen w-full flex-col bg-[#f9f9f9] 
      max-[900px]:py-[110px]"
        >
            <div className="mx-auto max-w-[1070px] px-10 max-[460px]:px-[17px]">
                <div
                    className="relative flex h-[44rem] items-center justify-center gap-[10rem]
          max-[900px]:h-auto max-[900px]:flex-col max-[900px]:gap-8 max-[900px]:text-center"
                >
                    {/* Main */}
                    <div
                        className="flex items-center justify-center gap-24
            max-[900px]:flex-col-reverse max-[900px]:gap-8"
                    >
                        {/* Text */}
                        <div className="relative flex max-w-[500px] flex-col">
                            <h1 className="my-8 text-[55px] font-bold leading-tight text-[#2d2e32] max-[600px]:text-[40px]">
                                Front-End React Developer
                            </h1>

                            <Image
                                src={Waving}
                                alt="waving"
                                className="absolute right-32 top-24 w-16
                max-[900px]:right-12 max-[500px]:right-8 max-[460px]:right-4
                max-[500px]:top-[4.7rem] max-[500px]:w-14"
                            />

                            <p className="text-[18px] font-medium leading-relaxed text-[#767676]">
                                Hi, I'm Jenil Sojitra. A passionate Front-end React Developer
                                based in Surat, India. 📍
                            </p>

                            {/* Social */}
                            <div className="my-10 flex gap-5 max-[900px]:justify-center">
                                <a
                                    href="https://github.com/jeminkukadiya09"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="transition hover:text-[#702cf6]"
                                >
                                    <FaGithubSquare size={32} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jeminkukadiya/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="transition hover:text-[#702cf6]"
                                >
                                    <FaLinkedin size={32} />
                                </a>
                            </div>
                        </div>

                        {/* Image */}

                        
           <div
  className="relative h-[22rem] w-[22rem] morph
  border-[3px] border-[#2d2e32]
  max-[600px]:h-[17rem] max-[600px]:w-[17rem]"
  style={{
    backgroundImage: `url(${Profile.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
/>
                    </div>

                    {/* Skills */}
                    <div
                        className="absolute bottom-0 left-0 flex items-center text-[17px] text-[#767676]
            max-[900px]:static max-[900px]:flex-col"
                    >
                        <p
                            className="mr-[70px] border-r-2 border-[#2d2e3280] pr-5 font-semibold text-[#2d2e32]
              max-[900px]:mr-0 max-[900px]:mb-12 max-[900px]:border-r-0
              max-[900px]:border-b-2 max-[900px]:pb-4"
                        >
                            Tech Stack
                        </p>

                        <ul className="flex flex-wrap gap-6 max-[900px]:justify-center">
                            {[
                                Html,
                                Css,
                                JavaScript,
                                ReactIcon,
                                MaterialUi,
                                Scss,
                                Bootstrap,
                            ].map((icon, i) => (
                                <li
                                    key={i}
                                    className="flex h-[65px] w-[65px] cursor-pointer items-center justify-center
                  rounded-full bg-white shadow-md"
                                >
                                    <Image src={icon} alt="tech" className="w-[34px]" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}