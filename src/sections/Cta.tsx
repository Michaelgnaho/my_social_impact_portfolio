'use client';

import Link from 'next/link';
import { Calendar, Mic2, Users } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="relative bg-linear-to-br from-orange-500 via-orange-600 to-orange-700 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Looking for a powerful voice for your next event?
        </h2>

        {/* Persuasive Copy */}
        <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
          From keynote speeches to spoken word performances, I bring authenticity, 
          passion, and purpose to every stage. Let's create an unforgettable experience 
          that inspires action and sparks meaningful conversation.
        </p>

        {/* Features List */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-10 text-white">
          <div className="flex items-center gap-2">
            <Mic2 className="w-5 h-5" strokeWidth={2} />
            <span className="font-medium">Keynote Speaking</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" strokeWidth={2} />
            <span className="font-medium">Poetry Performances</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" strokeWidth={2} />
            <span className="font-medium">Workshops</span>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-orange-600 font-bold text-lg rounded-lg hover:bg-neutral-50 shadow-xl"
          >
            <Calendar className="w-5 h-5 mr-2" strokeWidth={2.5} />
            Book Michael
          </Link>
        </div>

        {/* Supporting Text */}
        <p className="text-sm text-white/80 mt-6">
          Available for conferences, universities, corporate events, and community gatherings
        </p>
      </div>
    </section>
  );
}