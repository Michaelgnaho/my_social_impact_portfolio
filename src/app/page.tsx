import Image from "next/image";
import Hero from "../sections/Hero";
import AboutIntro from "../sections/AboutIntro";
import FeaturedPoems from "../sections/FeaturedPoems";
import Cta from "../sections/Cta";


export default function Home() {
  return (
    <div className="mt-0" >
      <main >
       {/* <Hero */}
       <Hero/>
       <AboutIntro/>
       <FeaturedPoems/>
       <Cta/>
      </main>
    </div>
  );
}
