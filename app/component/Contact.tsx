'use client';

import { FaLocationArrow } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-[110px] max-[768px]:py-[70px]"
    >
      <div className="mx-auto max-w-[1070px] px-10">
        <div className="flex flex-col">
          {/* Title */}
          <div className="max-[750px]:text-center">
            <p className="mb-[10px] text-[17px] font-bold uppercase text-[#147efb]">
              Contact
            </p>
            <h3 className="text-[25px] text-[#2d2e32]">
              Don&apos;t be shy! Hit me up! 👇
            </h3>
          </div>

          {/* Icons */}
          <div
            className="mt-[60px] flex flex-wrap gap-[80px]
            max-[750px]:flex-col max-[750px]:gap-[40px]
            max-[750px]:items-center max-[750px]:text-center"
          >
            {/* Location */}
            <div
              className="flex items-center gap-[15px]
              max-[750px]:flex-col"
            >
              <span
                className="flex h-[70px] w-[70px] items-center justify-center
                rounded-full bg-white shadow-md"
              >
                <FaLocationArrow size={25} />
              </span>

              <div className="flex flex-col gap-[5px]">
                <h3 className="text-[17px] text-[#2d2e2d]">
                  Location
                </h3>
                <p className="cursor-pointer text-[17px] text-[#767676]">
                  Surat, India
                </p>
              </div>
            </div>

            {/* Mail */}
            <div
              className="flex items-center gap-[15px]
              max-[750px]:flex-col"
            >
              <span
                className="flex h-[70px] w-[70px] items-center justify-center
                rounded-full bg-white shadow-md"
              >
                <HiMail size={25} />
              </span>

              <div className="flex flex-col gap-[5px]">
                <h3 className="text-[17px] text-[#2d2e2d]">
                  Mail
                </h3>
                <p className="cursor-pointer text-[17px] text-[#767676]">
                  sojitrasojitra0@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}