import Image from "next/image";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className=" min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Header />

     <Hero />

     <About />

     <Portfolio />

     <Contact />

     <Footer />
    </div>
  );
}
