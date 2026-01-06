import { Award, Globe, Heart, BookOpen, Mic, Users, Sprout, Droplet, HandHeart, GraduationCap, Shield, Briefcase } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            About Michael Adeyemi Gnaho (MAG)
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
            A global youth leader using poetry, education, and advocacy to inspire change across communities.
          </p>
        </div>
      </section>

      {/* Orange Divider */}
      <div className="h-px bg-linear-to-r from-orange-500 via-orange-400 to-white max-w-6xl mx-auto"></div>

      {/* Main Bio Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg md:prose-xl text-gray-700 leading-relaxed space-y-6">
            <p>
              Michael Adeyemi Gnaho, popularly known as MAG, is a two-time Poet Laureate for the Lagos State Government and a globally engaged youth leader whose work sits at the intersection of storytelling, education, climate action, and social justice.
            </p>
            <p>
              Through spoken word poetry, MAG blends rhythm, raw emotion, and lived experience to create performances that do more than entertain — they inspire, challenge, and ignite change. Having graced over 100 stages, including TEDx LASU, his words have resonated with audiences across academic institutions, government platforms, and global youth spaces.
            </p>
            <p>
              Beyond poetry, MAG is a Global Youth Ambassador with Theirworld, a Youth Delegate to the World Bank Youth Summit, a Microscope Fellowship graduate in youth innovation and leadership, and a Harvard Business School Online alumnus (Aspire Institute). He is also a Certified Software Engineer trained at ALX, uniquely merging technology with social impact.
            </p>
            <p>
              MAG's leadership extends into governance and student advocacy. He currently serves as the Vice President of the Lagos State University of Education Student Union and the General Secretary of the English Language Student Association of Nigeria (LASU Chapter), where he champions youth participation, leadership, and academic excellence.
            </p>
            <p>
              His contributions to poetry and civic engagement have earned him multiple recognitions, including being a two-time Poet Laureate for Lagos State University, Winner of the Sage Hassan World Poetry Day Slam, and Winner of the Quramo Word Slam 2025. His performances have been recognized by high-profile leaders, including government commissioners and the First Lady of Ogun State.
            </p>
            <p>
              MAG's work is driven by a deep belief that voice is power, education is liberation, and global conversations create global change. Wherever he performs or advocates, one thing remains certain — MAG doesn't just speak; he leaves an imprint on hearts and minds.
            </p>
          </div>
        </div>
      </section>

      {/* Orange Divider */}
      <div className="h-px bg-linear-to-r from-white via-orange-400 to-white max-w-6xl mx-auto"></div>

      {/* Highlights/Credentials Section */}
      <section className="px-6 py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
            Credentials & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Global Ambassador */}
            <div className="border border-gray-200 p-8 hover:border-orange-500 transition-colors">
              <Globe className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Global Youth Ambassador
              </h3>
              <p className="text-gray-600">Theirworld</p>
            </div>

            {/* World Bank */}
            <div className="border border-gray-200 p-8 hover:border-orange-500 transition-colors">
              <Briefcase className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Youth Delegate
              </h3>
              <p className="text-gray-600">World Bank Youth Summit</p>
            </div>

            {/* Microscope Fellowship */}
            <div className="border border-gray-200 p-8 hover:border-orange-500 transition-colors">
              <Users className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Microscope Fellowship Graduate
              </h3>
              <p className="text-gray-600">Youth Innovation & Leadership</p>
            </div>

            {/* Software Engineer */}
            <div className="border border-gray-200 p-8 hover:border-orange-500 transition-colors">
              <GraduationCap className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Certified Software Engineer
              </h3>
              <p className="text-gray-600">ALX</p>
            </div>

            {/* Harvard */}
            <div className="border border-gray-200 p-8 hover:border-orange-500 transition-colors">
              <Shield className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Harvard Business School Online Alumnus
              </h3>
              <p className="text-gray-600">Aspire Institute</p>
            </div>

            {/* Poet Laureate Lagos State */}
            <div className="border border-gray-200 p-8 hover:border-orange-500 transition-colors">
              <Award className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Two-time Poet Laureate
              </h3>
              <p className="text-gray-600">Lagos State Government</p>
            </div>

            {/* Poet Laureate LASU */}
            <div className="border border-gray-200 p-8 hover:border-orange-500 transition-colors">
              <Award className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Two-time Poet Laureate
              </h3>
              <p className="text-gray-600">Lagos State University</p>
            </div>

            {/* Sage Hassan */}
            <div className="border border-gray-200 p-8 hover:border-orange-500 transition-colors">
              <Mic className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Winner
              </h3>
              <p className="text-gray-600">Sage Hassan World Poetry Day Slam</p>
            </div>

            {/* Quramo */}
            <div className="border border-gray-200 p-8 hover:border-orange-500 transition-colors">
              <Mic className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Winner
              </h3>
              <p className="text-gray-600">Quramo Word Slam 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Divider */}
      <div className="h-px bg-linear-to-r from-orange-500 via-orange-400 to-white max-w-6xl mx-auto"></div>

      {/* Social Impact & Advocacy Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
            Social Impact & Advocacy
          </h2>
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="shrink-0">
                <Heart className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Community Advocacy
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Deeply rooted in Lagos, Nigeria, MAG works at the grassroots level to amplify the voices of underrepresented communities. His advocacy bridges the gap between local challenges and global conversations, ensuring that the stories of everyday people reach platforms that matter.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="shrink-0">
                <Sprout className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Climate Action Through Storytelling
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  MAG uses poetry as a tool for climate advocacy, weaving environmental consciousness into performances that challenge audiences to act. As part of his work with the Green Janitor Initiative, he participated in World Cleanup Day efforts and built a website for the initiative, combining his technical skills with his passion for environmental justice.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="shrink-0">
                <Droplet className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  World Ocean Day Sensitization
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  MAG has led sensitization projects in riverine communities, raising awareness about ocean conservation and the impact of environmental degradation on coastal populations. These projects merge education, advocacy, and direct community engagement.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="shrink-0">
                <HandHeart className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Voice of the Street Project
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a facilitator for the Voice of the Street Project, MAG organizes food distribution drives and education advocacy initiatives for vulnerable populations. This work embodies his belief that real change happens when voices from the margins are centered and supported.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Divider */}
      <div className="h-px bg-linear-to-r from-white via-orange-400 to-white max-w-6xl mx-auto"></div>

      {/* Values Section */}
      <section className="px-6 py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                <Mic className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Voice</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Using poetry and storytelling to effect change, amplifying narratives that challenge systems and inspire action.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                <BookOpen className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Belief in lifelong learning as a tool for transformation, empowering individuals and communities through knowledge.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
                <Globe className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Global Impact</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Amplifying local voices on global platforms, ensuring that conversations transcend borders and create lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Divider */}
      <div className="h-px bg-linear-to-r from-orange-500 via-orange-400 to-white max-w-6xl mx-auto"></div>

      {/* Call to Action */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Let's use storytelling to spark change.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/performances"
              className="px-8 py-4 bg-orange-500 text-white text-lg font-semibold hover:bg-orange-600 transition-colors w-full sm:w-auto text-center"
            >
              Watch Performances
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-orange-500 text-orange-500 text-lg font-semibold hover:bg-orange-50 transition-colors w-full sm:w-auto text-center"
            >
              Book Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}