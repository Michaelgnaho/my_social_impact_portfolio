'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Play, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/images/hero-1.jpg',
    '/images/hero-2.jpg',
    '/images/hero-3.jpg',
    '/images/hero-4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen min-h-150 w-full overflow-hidden pb-5">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${
              index === currentSlide ? 'block' : 'hidden'
            }`}
          >
            <Image
              src={image}
              alt={`Hero background ${index + 1}`}
              fill
              priority={index === 0}
              className="object-fill object-center"
              quality={90}
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10">
              Global Youth Ambassador & Spoken Word Poet
            </h1>
            
            <div className="w-24 h-1 bg-linear-to-r from-orange-500 to-orange-600 mb-8 mx-auto"></div>

            <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-6">
              Amplifying voices for education, climate, and justice.
            </p>

            {/* Mission Statement */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed mb-12 max-w-2xl mx-auto">
              From international stages to community gatherings, I harness the power of 
              spoken word poetry to inspire action, challenge systems, and advocate for 
              the voices of young people worldwide. Through keynote addresses, performances, 
              and workshops, I bridge art and activism to create lasting impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/performances"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-neutral-900 transition-colors"
              >
                <Play size={20} className="mr-2" />
                Watch Performances
              </Link>
              
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold mt-10 text-lg rounded-lg hover:from-orange-600 hover:to-orange-700 shadow-lg transition-all"
              >
                <Calendar size={20} className="mr-2" />
                Book Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide
                ? 'bg-orange-500'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}