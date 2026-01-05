'use client';

import Image from 'next/image';
import { BookOpen, Leaf, Scale } from 'lucide-react';

export default function AboutIntro() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            {/* Section Title */}
            <div className="mb-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-3">
                About Me
              </h2>
              <div className="w-16 h-1 bg-linear-to-r from-orange-500 to-orange-600"></div>
            </div>

            {/* Introduction Paragraphs */}
            <div className="space-y-5 mb-12">
              <p className="text-lg text-neutral-700 leading-relaxed">
                I am a spoken word poet and Global Youth Ambassador at Theirworld, 
                using the transformative power of words to challenge systems and 
                amplify the voices of young people worldwide.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                Through poetry, keynote speeches, and grassroots organizing, I advocate 
                for education equity, climate justice, and youth empowerment—bridging 
                art and activism to create meaningful change.
              </p>
            </div>

            {/* Values with Icons */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Core Advocacy Areas
              </h3>
              
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-2.5 rounded-lg bg-orange-50">
                  <BookOpen className="w-6 h-6 text-orange-600" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Education</h4>
                  <p className="text-neutral-600">
                    Fighting for universal access to quality education and breaking 
                    barriers to learning worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 p-2.5 rounded-lg bg-orange-50">
                  <Leaf className="w-6 h-6 text-orange-600" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Climate Action</h4>
                  <p className="text-neutral-600">
                    Demanding urgent climate action and environmental justice for 
                    present and future generations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 p-2.5 rounded-lg bg-orange-50">
                  <Scale className="w-6 h-6 text-orange-600" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Justice</h4>
                  <p className="text-neutral-600">
                    Championing social justice and empowering youth to become 
                    leaders of change in their communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Space */}
          <div className="relative lg:h-150">
            <div className="relative h-full aspect-3/4 lg:aspect-auto rounded-lg overflow-hidden bg-neutral-100">
              {/* Image placeholder - replace with actual image path */}
              <Image
                src="/images/about-image.jpg"
                alt="Global Youth Ambassador and Spoken Word Poet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Orange accent decoration */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-orange-500 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}