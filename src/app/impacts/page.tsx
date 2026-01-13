"use client";
import {
  Droplet,
  Sprout,
  Heart,
  Users,
  HandHeart,
  Globe,
  Code,
  Megaphone,
  BookOpen,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import AnimatedContent from "../../components/AnimatedContent";

export default function SocialImpactPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-orange-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={true}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.2}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-700">
                  Social Impact
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                Action Beyond Words
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                From climate action to community advocacy, MAG transforms poetry
                into tangible change across Lagos and beyond.
              </p>
            </div>
          </AnimatedContent>

          {/* Image Column */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.1}
            animateOpacity
            threshold={0.2}
            delay={0.2}
          >
            <div className="relative h-100 md:h-125 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/advocacy1.jpg"
                alt="MAG community engagement"
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-linear-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.95}
            threshold={0.3}
          >
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="w-12 h-12 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-semibold italic">
                Real change happens when voices from the margins are centered
                and supported.
              </blockquote>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Climate Action Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
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
          <div className="flex items-center gap-3 mb-12">
            <Droplet className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Climate Action & Environmental Justice
            </h2>
          </div>
        </AnimatedContent>

        <div className="space-y-16">
          {/* World Cleanup Day 2025 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
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
              <div className="relative h-75 md:h-100 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
                <Image
                  src="/images/wcd20251.jpg"
                  alt="World Cleanup Day 2025"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedContent>

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
              <div className="space-y-4 order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
                  <Sprout className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">
                    World Cleanup Day
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Green Janitor Initiative Cleanup 2025
                </h3>
                <p className="text-orange-600 font-medium">
                  Green Janitor Initiative
                </p>
                <p className="text-slate-500">September 2025</p>
                <p className="text-slate-600 leading-relaxed">
                  Continued my commitment to environmental action by joining the
                  Green Janitor Initiative again for World Cleanup Day. This
                  consistent participation demonstrates long-term dedication to
                  climate action and community environmental health, not just
                  one-time involvement.
                </p>
              </div>
            </AnimatedContent>
          </div>

          {/* Website Development 2025 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={true}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              threshold={0.3}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 rounded-full">
                  <Code className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium text-indigo-700">
                    Tech for Good
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Green Janitor Initiative Website
                </h3>
                <p className="text-orange-600 font-medium">
                  Software Engineering Contribution
                </p>
                <p className="text-slate-500">2025</p>
                <p className="text-slate-600 leading-relaxed">
                  As a software engineer, I built a free website for the Green
                  Janitor Initiative where people can learn about their work,
                  get motivated to join them, and make donations toward their
                  cause. This project represents another dimension of climate
                  action—using technical skills to amplify impact.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
                >
                  Visit Website
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.95}
              threshold={0.3}
              delay={0.2}
            >
              <div className="relative h-75 md:h-100 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/greenJanitor.PNG"
                  alt="Green Janitor Initiative website"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedContent>
          </div>

          {/* World Cleanup Day 2024 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
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
              <div className="relative h-75 md:h-100 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
                <Image
                  src="/images/wcd1.jpg"
                  alt="World Cleanup Day community action"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedContent>

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
              <div className="space-y-4 order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full">
                  <Sprout className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">
                    World Cleanup Day
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Green Janitor Initiative Community Cleanup
                </h3>
                <p className="text-orange-600 font-medium">
                  Green Janitor Initiative
                </p>
                <p className="text-slate-500">September 2024</p>
                <p className="text-slate-600 leading-relaxed">
                  Joined a team of climate advocates for hands-on community
                  cleanup work. We went into the community with tools for
                  cleaning gutters and public spaces. This is a project I have
                  repeatedly participated in with genuine excitement,
                  demonstrating that real change requires rolling up your
                  sleeves alongside advocacy.
                </p>
              </div>
            </AnimatedContent>
          </div>

          {/* Riverine Schools Education 2023 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={true}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              threshold={0.3}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-full">
                  <BookOpen className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-700">
                    Education Advocacy
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Riverine Schools Water Conservation Project
                </h3>
                <p className="text-orange-600 font-medium">
                  Lekan Bakare Foundation
                </p>
                <p className="text-slate-500">2023</p>
                <p className="text-slate-600 leading-relaxed">
                  Invited as a spoken word poet to educate local riverine
                  schools on keeping water clean and how this can boost their
                  standard of living. Through compelling poetry performances, I
                  inspired students to engage actively in making the ocean
                  clean, merging art with environmental education.
                </p>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={100}
              direction="horizontal"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.95}
              threshold={0.3}
              delay={0.2}
            >
              <div className="relative h-75 md:h-100 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/reverineSchAdv.jpg"
                  alt="Education at riverine schools"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedContent>
          </div>

          {/* World Ocean Day 2022 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
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
              <div className="relative h-75 md:h-100 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
                <Image
                  src="/images/advocacy-lb1.jpg"
                  alt="World Ocean Day riverine community sensitization"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedContent>

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
              <div className="space-y-4 order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">
                    World Ocean Day
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Riverine Community Sensitization
                </h3>
                <p className="text-orange-600 font-medium">
                  Lekan Bakare Foundation
                </p>
                <p className="text-slate-500">June 2022</p>
                <p className="text-slate-600 leading-relaxed">
                  Joined a team of climate advocates to sensitize people living
                  near rivers on the importance of keeping water clean and
                  proper waste management. We enlightened communities on ways to
                  reduce, reuse, and recycle waste, connecting environmental
                  health to community wellbeing.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Community Advocacy Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
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
            <div className="flex items-center gap-3 mb-12">
              <Users className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Community Advocacy
              </h2>
            </div>
          </AnimatedContent>

          <div className="space-y-16">
            {/* Voice of the Street */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={true}
                duration={1}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                threshold={0.3}
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full">
                    <HandHeart className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium text-orange-700">
                      Food Distribution & Education
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Voice of the Street Project
                  </h3>
                  <p className="text-orange-600 font-medium">
                    Global Youth Ambassador, Theirworld
                  </p>
                  <p className="text-slate-500">2025</p>
                  <p className="text-slate-600 leading-relaxed">
                    As a facilitator representing Theirworld, I led street
                    outreach providing food to vulnerable populations while
                    advocating for early childhood education. This work embodies
                    the intersection of immediate humanitarian support and
                    long-term systemic change through education access.
                  </p>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={false}
                duration={1}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={0.95}
                threshold={0.3}
                delay={0.2}
              >
                <div className="relative h-75 md:h-100 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/advocacy-vts-2.jpg"
                    alt="Voice of the Street food distribution"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedContent>
            </div>

            {/* SDG Street Advocacy */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
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
                <div className="relative h-75 md:h-100 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
                  <Image
                    src="/images/srt-advocacy.jpg"
                    alt="SDG street advocacy campaign"
                    fill
                    className="object-fit"
                  />
                </div>
              </AnimatedContent>

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
                <div className="space-y-4 order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
                    <Megaphone className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-700">
                      Street Advocacy
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Sustainable Development Goals Street Campaign
                  </h3>
                  <p className="text-orange-600 font-medium">
                    Community Mobilization
                  </p>
                  <p className="text-slate-500">2025</p>
                  <p className="text-slate-600 leading-relaxed">
                    Participated in street-level advocacy for the United Nations
                    Sustainable Development Goals, bringing global frameworks to
                    local communities. This grassroots approach ensures that
                    international development targets translate into tangible
                    action in Lagos neighborhoods.
                  </p>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Philosophy */}
      <section className="container mx-auto px-4 py-16 md:py-24">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Impact Philosophy
            </h2>
          </div>
        </AnimatedContent>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={false}
            duration={0.9}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.95}
            threshold={0.3}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <Droplet className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Environmental Justice
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Climate action is inseparable from social justice. Communities
                most affected by environmental degradation deserve both
                immediate support and sustainable solutions.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={false}
            duration={0.9}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.95}
            threshold={0.3}
            delay={0.15}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <HandHeart className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Direct Action
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Real change requires showing up—whether with cleanup tools, food
                packages, or poetry that moves hearts. Advocacy without action
                is empty.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={80}
            direction="vertical"
            reverse={false}
            duration={0.9}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.95}
            threshold={0.3}
            delay={0.3}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <Users className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Community-Led Solutions
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The most effective interventions come from within communities,
                not imposed from outside. Amplify local voices, support local
                leaders, trust local knowledge.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-orange-500 to-orange-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the movement for change
            </h2>
            <p className="text-xl text-orange-50 mb-8 max-w-3xl mx-auto">
              Whether you're an organization seeking a climate advocate, a
              community leader building partnerships, or an individual ready to
              make a difference — let's collaborate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-lg"
              >
                Partner With Me
                <HandHeart className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-700 text-white rounded-lg hover:bg-orange-800 transition-colors font-semibold text-lg border-2 border-white"
              >
                Support Green Janitor
                <Sprout className="w-5 h-5" />
              </a>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </div>
  );
}
