'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RiMenu3Line } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-[200] w-full bg-white shadow-md">
        <div className="flex items-center justify-between px-10 py-6 text-[17px]">
          <h3 className="text-[#2d2e32] font-semibold">Jenil Sojitra</h3>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex gap-8 font-semibold">
            <li><Link href="/#home" className="hover:text-[#702cf6]">Home</Link></li>
            <li><Link href="/#about" className="hover:text-[#702cf6]">About</Link></li>
            <li><Link href="/#portfolio" className="hover:text-[#702cf6]">Project</Link></li>
            <li><Link href="/#contact" className="hover:text-[#702cf6]">Contact</Link></li>
          </ul>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setOpen(true)}
            className="sm:hidden"
            aria-label="Open Menu"
          >
            <RiMenu3Line size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Offcanvas */}
      <div
        className={`fixed inset-0 z-[300] bg-white transition-transform duration-300 
        ${open ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)} aria-label="Close Menu">
            <IoClose size={28} />
          </button>
        </div>

        <ul className="flex flex-col items-center gap-6 text-lg font-medium">
          {['home', 'about', 'portfolio', 'contact'].map((item) => (
            <li key={item} onClick={() => setOpen(false)}>
              <Link href={`/#${item}`} className="hover:text-[#702cf6]">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}