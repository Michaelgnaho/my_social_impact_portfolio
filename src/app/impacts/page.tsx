import { Droplet, Sprout, Heart, Users, HandHeart, Globe, Code, Megaphone, BookOpen, Sparkles } from 'lucide-react';

export default function SocialImpactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-linear-to-br from-orange-50 via-white to-orange-50"></div>
        
        <div className="relative z-10 w-full px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Column */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-orange-500 text-sm tracking-[0.3em] uppercase font-medium">
                    Social Impact
                  </p>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight">
                    Action<br />
                    Beyond<br />
                    Words
                  </h1>
                  <div className="h-1 w-24 bg-linear-to-r from-orange-500 to-orange-300"></div>
                </div>
                <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light">
                  From climate action to community advocacy, MAG transforms poetry into tangible change across Lagos and beyond.
                </p>
              </div>
              
              {/* Image Column */}
              <div className="relative h-125 lg:h-175">
                <div className="absolute inset-0 bg-linear-to-br from-orange-200 to-orange-100 rounded-sm shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-300">
                    [Community Impact Photo]
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-500 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Real change happens when voices from the margins are centered and supported.
          </h2>
          <div className="h-1 w-32 bg-orange-500 mx-auto"></div>
        </div>
      </section>

      {/* Climate Action Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Climate Action &<br />Environmental Justice
            </h2>
            <div className="h-1 w-40 bg-linear-to-r from-orange-500 to-orange-300"></div>
          </div>

          <div className="space-y-32">
            {/* World Ocean Day 2022 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <Droplet className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">World Ocean Day</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Riverine Community Sensitization
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-orange-500" />
                      <span>Lekan Bakare Foundation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-orange-500" />
                      <span>June 2022</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Joined a team of climate advocates to sensitize people living near rivers on the importance of keeping water clean and proper waste management. We enlightened communities on ways to reduce, reuse, and recycle waste, connecting environmental health to community wellbeing.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 h-112.5 bg-linear-to-br from-orange-100 to-orange-50 rounded-sm shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-200">
                  [Ocean Day 2022 Photo]
                </div>
              </div>
            </div>

            {/* Riverine Schools Education 2023 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="h-112.5 bg-linear-to-br from-orange-100 to-orange-50 rounded-sm shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-200">
                  [Riverine Schools 2023 Photo]
                </div>
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <BookOpen className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">Education Advocacy</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Riverine Schools Water Conservation Project
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-orange-500" />
                      <span>Lekan Bakare Foundation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-orange-500" />
                      <span>2023</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Invited as a spoken word poet to educate local riverine schools on keeping water clean and how this can boost their standard of living. Through compelling poetry performances, I inspired students to engage actively in making the ocean clean, merging art with environmental education.
                  </p>
                </div>
              </div>
            </div>

            {/* World Cleanup Day 2024 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <Sprout className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">World Cleanup Day</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Green Janitor Initiative Community Cleanup
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-orange-500" />
                      <span>Green Janitor Initiative</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-orange-500" />
                      <span>September 2024</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Joined a team of climate advocates for hands-on community cleanup work. We went into the community with tools for cleaning gutters and public spaces. This is a project I have repeatedly participated in with genuine excitement, demonstrating that real change requires rolling up your sleeves alongside advocacy.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 h-112.5 bg-linear-to-br from-orange-100 to-orange-50 rounded-sm shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-200">
                  [Cleanup Day 2024 Photo]
                </div>
              </div>
            </div>

            {/* Website Development 2025 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="h-112.5 bg-linear-to-br from-orange-100 to-orange-50 rounded-sm shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-200">
                  [Website Development Photo]
                </div>
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <Code className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">Tech for Good</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Green Janitor Initiative Website
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-orange-500" />
                      <span>Software Engineering Contribution</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-orange-500" />
                      <span>2025</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    As a software engineer, I built a free website for the Green Janitor Initiative where people can learn about their work, get motivated to join them, and make donations toward their cause. This project represents another dimension of climate action—using technical skills to amplify impact.
                  </p>
                  <a 
                    href="https://green-janitor1.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Visit Website
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* World Cleanup Day 2025 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <Sprout className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">World Cleanup Day</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Green Janitor Initiative Cleanup 2025
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-orange-500" />
                      <span>Green Janitor Initiative</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-orange-500" />
                      <span>September 2025</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Continued my commitment to environmental action by joining the Green Janitor Initiative again for World Cleanup Day. This consistent participation demonstrates long-term dedication to climate action and community environmental health, not just one-time involvement.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 h-112.5 bg-linear-to-br from-orange-100 to-orange-50 rounded-sm shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-200">
                  [Cleanup Day 2025 Photo]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Advocacy Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Community<br />Advocacy
            </h2>
            <div className="h-1 w-40 bg-linear-to-r from-orange-500 to-orange-300"></div>
          </div>

          <div className="space-y-32">
            {/* Voice of the Street */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <HandHeart className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">Food Distribution & Education</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Voice of the Street Project
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-orange-500" />
                      <span>Global Youth Ambassador, Theirworld</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-orange-500" />
                      <span>2025</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    As a facilitator representing Theirworld, I led street outreach providing food to vulnerable populations while advocating for early childhood education. This work embodies the intersection of immediate humanitarian support and long-term systemic change through education access.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 h-112.5 bg-linear-to-br from-orange-100 to-orange-50 rounded-sm shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-200">
                  [Voice of Street Photo]
                </div>
              </div>
            </div>

            {/* SDG Street Advocacy */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="h-112.5 bg-linear-to-br from-orange-100 to-orange-50 rounded-sm shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-200">
                  [SDG Advocacy Photo]
                </div>
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <Megaphone className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">Street Advocacy</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Sustainable Development Goals Street Campaign
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-orange-500" />
                      <span>Community Mobilization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-orange-500" />
                      <span>2025</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Participated in street-level advocacy for the United Nations Sustainable Development Goals, bringing global frameworks to local communities. This grassroots approach ensures that international development targets translate into tangible action in Lagos neighborhoods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Philosophy */}
      <section className="py-32 px-6 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center">Impact Philosophy</h2>
          
          <div className="grid md:grid-cols-3 gap-1 bg-white p-1">
            <div className="bg-orange-500 p-16 text-center">
              <Sprout className="w-16 h-16 mx-auto mb-8" />
              <h3 className="text-3xl font-bold mb-6">Environmental Justice</h3>
              <p className="text-lg leading-relaxed text-orange-100">
                Climate action is inseparable from social justice. Communities most affected by environmental degradation deserve both immediate support and sustainable solutions.
              </p>
            </div>
            
            <div className="bg-orange-500 p-16 text-center">
              <HandHeart className="w-16 h-16 mx-auto mb-8" />
              <h3 className="text-3xl font-bold mb-6">Direct Action</h3>
              <p className="text-lg leading-relaxed text-orange-100">
                Real change requires showing up—whether with cleanup tools, food packages, or poetry that moves hearts. Advocacy without action is empty.
              </p>
            </div>
            
            <div className="bg-orange-500 p-16 text-center">
              <Users className="w-16 h-16 mx-auto mb-8" />
              <h3 className="text-3xl font-bold mb-6">Community-Led Solutions</h3>
              <p className="text-lg leading-relaxed text-orange-100">
                The most effective interventions come from within communities, not imposed from outside. Amplify local voices, support local leaders, trust local knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-orange-900 to-gray-900 opacity-90"></div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-6 py-20 max-w-5xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Join the movement<br />for change
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Whether you're an organization seeking a climate advocate, a community leader building partnerships, or an individual ready to make a difference — let's collaborate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="group relative px-12 py-6 bg-orange-500 text-white text-xl font-bold overflow-hidden w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Partner With Me</span>
              <div className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a
              href="https://green-janitor1.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-6 border-4 border-white text-white text-xl font-bold overflow-hidden w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Support Green Janitor</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity z-20">Support Green Janitor</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}