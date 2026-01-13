"use client";

import { Mic, Award, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedContent from "../components/AnimatedContent";

export default function PerformanceSection() {
  const featuredPerformances = [
    {
      type: "championship",
      icon: <Sparkles className="w-6 h-6" />,
      badge: "WINNER",
      title: "Quramo Word Slam 2025",
      description:
        "Emerged victorious at one of Nigeria's most prestigious spoken word competitions, delivering performances that captivated audiences with raw emotion and social consciousness.",
      image: "/images/quramo.jpg",
      year: "2025",
    },
    {
      type: "laureate",
      icon: <Award className="w-6 h-6" />,
      badge: "POET LAUREATE",
      title: "2024 International Youth Day Seminar",
      description:
        "Served as Poet Laureate for Lagos State Government's flagship youth empowerment event, celebrating youth potential and social development.",
      image: "/images/youthday.jpg",
      year: "August 2024",
    },
    {
      type: "conference",
      icon: <Mic className="w-6 h-6" />,
      badge: "SPOKEN WORD ARTIST",
      title: "TEDx LASU",
      description:
        "Delivered a powerful performance at TEDx LASU, sharing ideas worth spreading through the intersection of poetry, social impact, and innovation.",
      image: "/images/tedx1.jpg",
      year: "2024",
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
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
          <div className="text-center mb-20">
            <p className="text-orange-500 text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Performances
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Poetry That Moves
              <br />
              <span className="text-orange-500">Nations</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              From government platforms to global summits, MAG's performances
              inspire change across stages worldwide.
            </p>
          </div>
        </AnimatedContent>

        {/* Stats Bar */}
        <AnimatedContent
          distance={60}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={0.95}
          threshold={0.3}
          delay={0.2}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-20 bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                100+
              </div>
              <p className="text-lg text-gray-600">Stages Graced</p>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                2x
              </div>
              <p className="text-lg text-gray-600">Poet Laureate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                10+
              </div>
              <p className="text-lg text-gray-600">Awards & Recognition</p>
            </div>
          </div>
        </AnimatedContent>

        {/* Featured Performances Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredPerformances.map((performance, index) => (
            <AnimatedContent
              key={index}
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.9}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.95}
              threshold={0.2}
              delay={index * 0.15}
            >
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={performance.image}
                    alt={performance.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider">
                    {performance.icon}
                    <span>{performance.badge}</span>
                  </div>

                  {/* Year */}
                  <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                    {performance.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-orange-500 transition-colors">
                    {performance.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {performance.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </AnimatedContent>
          ))}
        </div>

        {/* View All Performances CTA */}
        <AnimatedContent
          distance={60}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.3}
          delay={0.5}
        >
          <div className="text-center">
            <Link
              href="/performances"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <span>View All Performances</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </AnimatedContent>

        {/* Bottom Decorative Quote */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          reverse={false}
          duration={0.8}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.3}
          delay={0.7}
        >
          <div className="mt-20 text-center">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic max-w-4xl mx-auto">
              "Every stage is an opportunity to inspire change,
              <br />
              <span className="text-orange-500 font-normal">
                every word a catalyst for transformation."
              </span>
            </blockquote>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
