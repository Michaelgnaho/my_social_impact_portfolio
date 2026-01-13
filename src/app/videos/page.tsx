"use client";

import { Play, Video, Film, Sparkles, Calendar, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedContent from "../../components/AnimatedContent";

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

        <div className="relative z-10 w-full px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Icon */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.8}
              threshold={0.2}
            >
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-8 shadow-2xl">
                <Video className="w-16 h-16 text-white" />
              </div>
            </AnimatedContent>

            {/* Badge */}
            <AnimatedContent
              distance={60}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              threshold={0.2}
              delay={0.2}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-50 border-2 border-orange-200 rounded-full mb-8">
                <Sparkles className="w-5 h-5 text-orange-600" />
                <span className="text-orange-600 font-semibold tracking-wide">
                  Coming Soon
                </span>
              </div>
            </AnimatedContent>

            {/* Main Heading */}
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              threshold={0.2}
              delay={0.3}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
                Videos Are
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                  Coming Soon
                </span>
              </h1>
            </AnimatedContent>

            {/* Description */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              threshold={0.2}
              delay={0.5}
            >
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                Get ready to experience powerful spoken word performances,
                inspiring keynote speeches, and behind-the-scenes moments that
                capture the impact of poetry and advocacy.
              </p>
            </AnimatedContent>

            {/* Features Grid */}
            <AnimatedContent
              distance={60}
              direction="vertical"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              threshold={0.2}
              delay={0.7}
            >
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Play className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Performance Videos
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Watch powerful spoken word performances from stages
                    worldwide
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Film className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Keynote Speeches
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Inspiring talks on youth leadership and social impact
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Sparkles className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Behind The Scenes
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Exclusive glimpses into advocacy work and community impact
                  </p>
                </div>
              </div>
            </AnimatedContent>

            {/* CTA Buttons */}
            <AnimatedContent
              distance={60}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.9}
              threshold={0.2}
              delay={0.9}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/performances"
                  className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3"
                >
                  <span>Explore Performances</span>
                  <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-white text-orange-600 text-lg font-bold rounded-full border-2 border-orange-500 hover:bg-orange-50 transition-all duration-300 inline-flex items-center gap-3"
                >
                  <Bell className="w-5 h-5" />
                  <span>Get Notified</span>
                </Link>
              </div>
            </AnimatedContent>

            {/* Timeline Hint */}
            <AnimatedContent
              distance={40}
              direction="vertical"
              reverse={false}
              duration={0.7}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              threshold={0.2}
              delay={1.1}
            >
              <div className="mt-16 inline-flex items-center gap-3 text-gray-500">
                <Calendar className="w-5 h-5" />
                <p className="text-sm">
                  Video gallery launching soon • Stay tuned for updates
                </p>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What to Expect
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto"></div>
            </div>
          </AnimatedContent>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={true}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.95}
              threshold={0.3}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-200 to-orange-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/tedx1.jpg"
                    alt="MAG Performance Preview"
                    fill
                    className="object-cover"
                  />
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-10 h-10 text-orange-600 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>

            {/* Content */}
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              threshold={0.3}
              delay={0.2}
            >
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Poetry That Moves Nations
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From TEDx stages to government ceremonies, from youth summits
                  to community gatherings—experience the performances that have
                  inspired thousands across Nigeria and beyond.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Full-length performance recordings
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Keynote speeches and panel discussions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Documentary-style advocacy features
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Community impact stories and testimonials
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={0.95}
          threshold={0.2}
        >
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              In the Meantime...
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Explore past performances, read about advocacy work, or get in
              touch to bring poetry to your next event.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/performances"
                className="px-10 py-5 bg-white text-orange-600 text-lg font-bold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
              >
                View Performance Gallery
              </Link>
              <Link
                href="/impact"
                className="px-10 py-5 bg-orange-600 text-white text-lg font-bold rounded-full hover:bg-orange-700 transition-all duration-300 border-2 border-white"
              >
                See Impact Work
              </Link>
            </div>
          </div>
        </AnimatedContent>
      </section>
    </main>
  );
}
