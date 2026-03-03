'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Waving from '../assets/waving.png';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiMui,
    SiSass,
    SiBootstrap,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiAmazon,
} from 'react-icons/si';
import {
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiGraphql,
} from 'react-icons/si';
import {
    SiVercel,
    SiFirebase,
    SiDocker,
} from 'react-icons/si';
import Profile from '@/app/assets/jenil.jpg';
import { FaGithubSquare, FaLinkedin, FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function Hero() {
    const [showInstagram, setShowInstagram] = useState(false);
    const [showLinkedin, setShowLinkedin] = useState(false);
    const [settingsLoaded, setSettingsLoaded] = useState(false);

    useEffect(() => {
        const fetchSettingsFromFirebase = async () => {
            try {
                const firebaseConfig = {
                    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
                    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
                    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
                    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                } as any;

                const firebaseAppModule: any = await import('firebase/app');
                const databaseModule: any = await import('firebase/database');

                if (!firebaseAppModule.getApps || !firebaseAppModule.getApps().length) {
                    // initializeApp may be exported as initializeApp in older SDKs
                    const init = firebaseAppModule.initializeApp || firebaseAppModule.default?.initializeApp;
                    init(firebaseConfig);
                }

                const db = databaseModule.getDatabase(firebaseAppModule.getApp?.() || undefined);
                const settingsRef = databaseModule.ref(db, 'settings');
                const snap = await databaseModule.get(settingsRef);

                if (snap && snap.exists && snap.exists()) {
                    const data = snap.val();
                    setShowInstagram(!!data.showInstagram);
                    setShowLinkedin(!!data.showLinkedin);
                } else {
                    setShowInstagram(false);
                    setShowLinkedin(false);
                }
            } catch (error) {
                console.error('Failed to fetch settings from Firebase:', error);
                setShowInstagram(false);
                setShowLinkedin(false);
            } finally {
                setSettingsLoaded(true);
            }
        };

        fetchSettingsFromFirebase();
    }, []);

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
                                Front-End Developer
                            </h1>

                            <Image
                                src={Waving}
                                alt="waving"
                                className="absolute right-32 top-24 w-16
                max-[900px]:right-12 max-[500px]:right-8 max-[460px]:right-4
                max-[500px]:top-[4.7rem] max-[500px]:w-14"
                            />

                            <p className="text-[18px] font-medium leading-relaxed text-[#767676]">
                                Hi, I'm Jenil Sojitra. A passionate Front-end Developer
                                based in Surat, India. 📍
                            </p>

                            {/* Social */}
                            <div className="my-10 flex gap-5 max-[900px]:justify-center">
                                <a
                                    href="https://github.com/SojitraJenil"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#2d2e32] transition hover:text-black"
                                    aria-label="GitHub"
                                >
                                    <FaGithubSquare size={32} />
                                </a>

                                {settingsLoaded && (
                                    <>
                                        {showLinkedin && (
                                            <a
                                                href="https://www.linkedin.com/in/jenil-sojitra-0a18a2250"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-[#0a66c2] transition hover:opacity-80"
                                                aria-label="LinkedIn"
                                            >
                                                <FaLinkedin size={32} />
                                            </a>
                                        )}

                                        {showInstagram && (
                                            <a
                                                href="https://www.instagram.com/jenilll_18?igsh=ZTUybTh6dXNrdGlo"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-[#e1306c] transition hover:opacity-80"
                                                aria-label="Instagram"
                                            >
                                                <FaInstagram size={32} />
                                            </a>
                                        )}
                                    </>
                                )}

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
  max-[900px]:static max-[900px]:mt-[25px] max-[900px]:flex-col"
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
                                { icon: SiHtml5, label: 'HTML5', color: 'text-orange-600' },
                                { icon: SiCss3, label: 'CSS3', color: 'text-blue-600' },
                                { icon: SiJavascript, label: 'JavaScript', color: 'text-yellow-400' },
                                { icon: SiTypescript, label: 'TypeScript', color: 'text-blue-500' },
                                { icon: SiReact, label: 'React', color: 'text-cyan-400' },
                                { icon: SiNextdotjs, label: 'Next.js', color: 'text-black' },
                                { icon: SiTailwindcss, label: 'Tailwind CSS', color: 'text-sky-400' },
                                { icon: SiMui, label: 'Material UI', color: 'text-blue-700' },
                                { icon: SiSass, label: 'SCSS', color: 'text-pink-500' },
                                { icon: SiBootstrap, label: 'Bootstrap', color: 'text-purple-600' },

                                // Backend & Full-Stack
                                { icon: SiNodedotjs, label: 'Node.js', color: 'text-green-600' },
                                { icon: SiExpress, label: 'Express.js', color: 'text-gray-700' },
                                { icon: SiMongodb, label: 'MongoDB', color: 'text-green-700' },
                                { icon: SiMysql, label: 'MySQL', color: 'text-blue-600' },
                                { icon: SiAmazon, label: 'AWS', color: 'text-orange-500' },

                                { icon: SiVercel, label: 'Vercel', color: 'text-black' },
                                { icon: SiFirebase, label: 'Firebase', color: 'text-orange-500' },
                                { icon: SiDocker, label: 'Docker', color: 'text-blue-500' },

                            ].map(({ icon: Icon, label, color }, i) => (
                                <li
                                    key={i}
                                    title={label}
                                    className="group flex h-[65px] w-[65px] cursor-pointer items-center justify-center
      rounded-full bg-white shadow-md transition
      hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <Icon
                                        className={`text-[32px] ${color} transition
        group-hover:scale-110`}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}