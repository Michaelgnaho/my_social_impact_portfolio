"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, Calendar } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Hero() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: false,
      containScroll: false,
    },
    [
      Autoplay({
        delay: 5000, // time between slides
        stopOnInteraction: false,
        stopOnMouseEnter: true, // pause when user hovers
      }),
    ]
  );

  const images = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
    "/images/hero-4.jpg",
  ];

  return (
    <section className="relative h-screen min-h-[750px] w-full overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 " ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <Image
                src={src}
                alt={`Hero background ${index + 1}`}
                fill
                priority={index === 0}
                className="object-fit object-center"
                quality={85}
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10">
              Global Youth Ambassador & Spoken Word Poet
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-8 mx-auto" />

            <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-6">
              Amplifying voices for education, climate, and justice.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed mb-12 max-w-2xl mx-auto">
              From international stages to community gatherings, I harness the
              power of spoken word poetry to inspire action, challenge systems,
              and advocate for the voices of young people worldwide. Through
              keynote addresses, performances, and workshops, I bridge art and
              activism to create lasting impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/performances"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-neutral-900 transition-colors duration-300"
              >
                <Play size={20} className="mr-2" />
                Watch Performances
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg rounded-lg hover:from-orange-600 hover:to-orange-700 shadow-lg transition-all duration-300"
              >
                <Calendar size={20} className="mr-2" />
                Book Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Simple dot indicators (cleaner look) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-400 ${
              // You can add active state tracking if desired
              "bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
