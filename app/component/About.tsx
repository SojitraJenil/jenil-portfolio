'use client';

import Image from 'next/image';
import AboutImg from '@/app/assets/about-img.webp';
import WorkingEmoji from '@/app/assets/working-emoji.png';
import Text2 from '@/app/assets/text2.svg';

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-[150px] max-[768px]:py-[70px]"
    >
      <div className="mx-auto max-w-[1070px] px-10 max-[425px]:px-5">
        <div
          className="grid items-center grid-cols-2
          max-[1020px]:grid-cols-1 max-[1020px]:text-center"
        >
          {/* Image Side */}
          <div className="relative flex justify-center">
            {/* Working Emoji */}
            <Image
              src={WorkingEmoji}
              alt="emoji"
              className="absolute bottom-[35px] right-[98px] z-10 w-[60px]
              max-[1020px]:bottom-[57px] max-[1020px]:right-[245px]
              max-[768px]:hidden"
            />

            {/* Main Image */}
            <Image
              src={AboutImg}
              alt="about"
              className="h-[350px] w-[410px] rounded-[17px]
              max-[1020px]:mb-[35px] max-[1020px]:h-auto max-[1020px]:w-[90%]"
            />

            {/* Rotating Text Circle */}
            <span
              className="absolute bottom-[-33px] right-[33px] flex h-[190px] w-[190px]
              items-center justify-center rounded-full bg-white
              max-[1020px]:bottom-[-3px] max-[1020px]:right-[190px]
              max-[1020px]:h-[170px] max-[1020px]:w-[170px]
              max-[768px]:hidden"
            >
              <Image
                src={Text2}
                alt="text"
                className="w-[190px] animate-rotate
                max-[1020px]:w-[170px] max-[425px]:w-[120px]"
              />
            </span>
          </div>

          {/* Text Side */}
          <div
            className="pr-[15px]
            max-[1020px]:mx-auto max-[1020px]:max-w-[540px]"
          >
            <h4 className="mb-[10px] text-[17px] font-bold uppercase text-[#177efb]">
              About Me
            </h4>

            <h3 className="mb-5 text-[25px] leading-[1.4] text-[#2d2e32]">
              A dedicated Front-end Developer <br />
              based in Surat, India 📍
            </h3>

            <p className="text-[17px] font-medium leading-[1.5] text-[#767676] max-[425px]:text-[15px]">
              As a Junior Front-End Developer, I possess an impressive arsenal of
              skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
              in designing and maintaining responsive websites that offer a
              smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}