import { Award, Globe, Heart, BookOpen, Mic, Users, Sprout, Droplet, HandHeart, GraduationCap, Shield, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Editorial Magazine Style */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-linear-to-br from-orange-50 via-white to-orange-50"></div>
        
        <div className="relative z-10 w-full px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Column */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-orange-500 text-sm tracking-[0.3em] uppercase font-medium">
                    About
                  </p>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight">
                    Michael<br />
                    Adeyemi<br />
                    Gnaho
                  </h1>
                  <div className="h-1 w-24 bg-linear-to-r from-orange-500 to-orange-300"></div>
                </div>
                <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light">
                  A global youth leader using poetry, education, and advocacy to inspire change across communities.
                </p>
              </div>
              
              {/* Image Column - Placeholder for portrait */}
              <div className="relative h-125 lg:h-175">
                <div className="absolute inset-0 bg-linear-to-br from-orange-200 to-orange-100 rounded-sm shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-300">
                    <Image
                     src="/images/portrait1.jpg"
                    alt="Global Youth Ambassador and Spoken Word Poet"
                     fill/>
                  </div>
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-500 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Bio Section - Magazine Layout */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Column - Large Quote */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
                  "Voice is power, education is liberation"
                </div>
                <div className="h-1 w-32 bg-orange-500"></div>
                
                {/* Image Placeholder */}
                <div className="mt-16 h-100 bg-linear-to-br from-orange-100 to-orange-50 rounded-sm shadow-xl">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 border-2 border-dashed border-orange-200">
                    <Image
                     src="/images/karibu1.jpg"
                    alt="Global Youth Ambassador and Spoken Word Poet"
                     fill/>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Bio Text */}
            <div className="lg:col-span-7">
              <div className="prose prose-xl max-w-none">
                <p className="text-xl leading-relaxed text-gray-700 mb-8 first-letter:text-7xl first-letter:font-bold first-letter:text-orange-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  Michael Adeyemi Gnaho, popularly known as MAG, is a two-time Poet Laureate for the Lagos State Government and a globally engaged youth leader whose work sits at the intersection of storytelling, education, climate action, and social justice.
                </p>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  Through spoken word poetry, MAG blends rhythm, raw emotion, and lived experience to create performances that do more than entertain — they inspire, challenge, and ignite change. Having graced over 100 stages, including TEDx LASU, his words have resonated with audiences across academic institutions, government platforms, and global youth spaces.
                </p>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  Beyond poetry, MAG is a Global Youth Ambassador with Theirworld, a Youth Delegate to the World Bank Youth Summit, a Microscope Fellowship graduate in youth innovation and leadership, and a Harvard Business School Online alumnus (Aspire Institute). He is also a Certified Software Engineer trained at ALX, uniquely merging technology with social impact.
                </p>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  MAG's leadership extends into governance and student advocacy. He currently serves as the Vice President of the Lagos State University of Education Student Union and the General Secretary of the English Language Student Association of Nigeria (LASU Chapter), where he champions youth participation, leadership, and academic excellence.
                </p>
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  His contributions to poetry and civic engagement have earned him multiple recognitions, including being a two-time Poet Laureate for Lagos State University, Winner of the Sage Hassan World Poetry Day Slam, and Winner of the Quramo Word Slam 2025. His performances have been recognized by high-profile leaders, including government commissioners and the First Lady of Ogun State.
                </p>
                <p className="text-xl leading-relaxed text-gray-700">
                  MAG's work is driven by a deep belief that voice is power, education is liberation, and global conversations create global change. Wherever he performs or advocates, one thing remains certain — MAG doesn't just speak; he leaves an imprint on hearts and minds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section - Dramatic Grid with Images */}
      <section className="py-32 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Credentials &<br />Recognition
            </h2>
            <div className="h-1 w-40 bg-linear-to-r from-orange-500 to-orange-300"></div>
          </div>

          <div className="space-y-24">
            {/* Row 1 - Featured Credentials with Images */}
            <div className="grid md:grid-cols-2 gap-16">
              {/* Global Youth Ambassador */}
              <div className="group">
                <div className="h-75 bg-linear-to-br from-orange-200 to-orange-100 rounded-sm shadow-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-300">
                    <Image
                     src="/images/gya.jpg"
                    alt="Global Youth Ambassador and Spoken Word Poet"
                     fill/>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="w-10 h-10 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Global Youth Ambassador</h3>
                    <p className="text-gray-400 text-lg">Theirworld</p>
                    <p className="text-gray-300 mt-3 leading-relaxed">
                      Representing youth voices on global platforms, advocating for education access and youth empowerment worldwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Youth Delegate - World Bank */}
              <div className="group">
                <div className="h-75 bg-linear-to-br from-orange-200 to-orange-100 rounded-sm shadow-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-300">
                  <Image
                     src="/images/world-bank.PNG"
                    alt="Global Youth Ambassador and Spoken Word Poet"
                     fill/>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Briefcase className="w-10 h-10 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Youth Delegate</h3>
                    <p className="text-gray-400 text-lg">World Bank Youth Summit</p>
                    <p className="text-gray-300 mt-3 leading-relaxed">
                      Bringing African youth perspectives to global economic development conversations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 - Academic & Professional Credentials */}
            <div className="grid md:grid-cols-3 gap-12">
              {/* Microscope Fellowship */}
              <div className="group">
                <div className="h-62.5 bg-linear-to-br from-orange-200 to-orange-100 rounded-sm shadow-xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 border-2 border-dashed border-orange-300">
                    <Image
                     src="/images/microsope.jpg"
                    alt="Global Youth Ambassador and Spoken Word Poet"
                     fill/>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-8 h-8 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Microscope Fellowship Graduate</h3>
                    <p className="text-gray-400 text-sm">Youth Innovation & Leadership</p>
                  </div>
                </div>
              </div>

              {/* Software Engineer */}
              <div className="group">
                <div className="h-62.5 bg-linear-to-br from-orange-200 to-orange-100 rounded-sm shadow-xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 border-2 border-dashed border-orange-300">
                    <Image
                     src="/images/alx.jpg"
                    alt="Global Youth Ambassador and Spoken Word Poet"
                     fill/>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-8 h-8 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Certified Software Engineer</h3>
                    <p className="text-gray-400 text-sm">ALX</p>
                  </div>
                </div>
              </div>

              {/* Harvard */}
              <div className="group">
                <div className="h-62.5 bg-linear-to-br from-orange-200 to-orange-100 rounded-sm shadow-xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 border-2 border-dashed border-orange-300">
                   <Image
                     src="/images/aspire-img.PNG"
                    alt="Global Youth Ambassador and Spoken Word Poet"
                     fill/>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-8 h-8 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Harvard Business School Online Alumnus</h3>
                    <p className="text-gray-400 text-sm">Aspire Institute</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 - Poet Laureate Achievements */}
            <div className="grid md:grid-cols-2 gap-16">
              {/* Lagos State Government Poet Laureate */}
              <div className="group">
                <div className="h-75 bg-linear-to-br from-orange-200 to-orange-100 rounded-sm shadow-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-300">
                    <Image
                     src="/images/poet-lagos.jpg"
                    alt="Global Youth Ambassador and Spoken Word Poet"
                     fill/>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-10 h-10 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Two-time Poet Laureate</h3>
                    <p className="text-gray-400 text-lg">Lagos State Government</p>
                    <p className="text-gray-300 mt-3 leading-relaxed">
                      Serving as the official poet for Lagos State Government events, bringing poetry to governance and civic engagement.
                    </p>
                  </div>
                </div>
              </div>

              {/* LASU Poet Laureate */}
              <div className="group">
                <div className="h-75 bg-linear-to-br from-orange-200 to-orange-100 rounded-sm shadow-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-300">
                    <Image
                     src="/images/poet-l1.jpg"
                    alt="Global Youth Ambassador and Spoken Word Poet"
                     fill/>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-10 h-10 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Two-time Poet Laureate</h3>
                    <p className="text-gray-400 text-lg">Lagos State University</p>
                    <p className="text-gray-300 mt-3 leading-relaxed">
                      Honored twice as the official poet for Lagos State University, celebrating academic excellence through verse.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4 - Competition Wins */}
            <div className="grid md:grid-cols-2 gap-16">
              {/* Sage Hassan */}
              <div className="group">
                <div className="h-75 bg-linear-to-br from-orange-200 to-orange-100 rounded-sm shadow-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-300">
                    <Image
                     src="/images/sage-hassan.jpg"
                    alt="Global Youth Ambassador and Spoken Word Poet"
                     fill/>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mic className="w-10 h-10 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Winner</h3>
                    <p className="text-gray-400 text-lg">Sage Hassan World Poetry Day Slam</p>
                    <p className="text-gray-300 mt-3 leading-relaxed">
                      First place on World Poetry Day, celebrating the art form with performances that transcend borders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quramo */}
              <div className="group">
                <div className="h-75 bg-linear-to-br from-orange-200 to-orange-100 rounded-sm shadow-2xl mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-300">
                    <Image
                     src="/images/quramo.jpg"
                    alt="Global Youth Ambassador and Spoken Word Poet"
                     fill/>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mic className="w-10 h-10 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Winner</h3>
                    <p className="text-gray-400 text-lg">Quramo Word Slam 2025</p>
                    <p className="text-gray-300 mt-3 leading-relaxed">
                      Champion of one of Nigeria's most prestigious spoken word competitions with technical brilliance and emotional depth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Organizations & Partners Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Trusted By<br />Leading Organizations
            </h2>
            <div className="h-1 w-40 bg-linear-to-r from-orange-500 to-orange-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Lagos State Government */}
            <div className="aspect-square bg-gray-50 rounded-sm shadow-lg flex items-center justify-center p-8 group hover:shadow-2xl hover:bg-orange-50 transition-all">
              <div className="text-center">
                <div className="w-full h-32 bg-linear-to-br from-gray-200 to-gray-100 rounded flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
                  <span className="text-xs text-gray-400 px-2">[Lagos State Logo]</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-orange-500 transition-colors">
                  Lagos State Government
                </p>
              </div>
            </div>

            {/* Theirworld */}
            <div className="aspect-square bg-gray-50 rounded-sm shadow-lg flex items-center justify-center p-8 group hover:shadow-2xl hover:bg-orange-50 transition-all">
              <div className="text-center">
                <div className="w-full h-32 bg-linear-to-br from-gray-200 to-gray-100 rounded flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
                  <span className="text-xs text-gray-400 px-2">[Theirworld Logo]</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-orange-500 transition-colors">
                  Theirworld
                </p>
              </div>
            </div>

            {/* TEDx */}
            <div className="aspect-square bg-gray-50 rounded-sm shadow-lg flex items-center justify-center p-8 group hover:shadow-2xl hover:bg-orange-50 transition-all">
              <div className="text-center">
                <div className="w-full h-32 bg-linear-to-br from-gray-200 to-gray-100 rounded flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
                  <span className="text-xs text-gray-400 px-2">[TEDx Logo]</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-orange-500 transition-colors">
                  TEDx
                </p>
              </div>
            </div>

            {/* JCI */}
            <div className="aspect-square bg-gray-50 rounded-sm shadow-lg flex items-center justify-center p-8 group hover:shadow-2xl hover:bg-orange-50 transition-all">
              <div className="text-center">
                <div className="w-full h-32 bg-linear-to-br from-gray-200 to-gray-100 rounded flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
                  <span className="text-xs text-gray-400 px-2">[JCI Logo]</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-orange-500 transition-colors">
                  Junior Chamber International
                </p>
              </div>
            </div>

            {/* Quramo */}
            <div className="aspect-square bg-gray-50 rounded-sm shadow-lg flex items-center justify-center p-8 group hover:shadow-2xl hover:bg-orange-50 transition-all">
              <div className="text-center">
                <div className="w-full h-32 bg-linear-to-br from-gray-200 to-gray-100 rounded flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
                  <span className="text-xs text-gray-400 px-2">[Quramo Logo]</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-orange-500 transition-colors">
                  Quramo
                </p>
              </div>
            </div>

            {/* Green Janitor Initiative */}
            <div className="aspect-square bg-gray-50 rounded-sm shadow-lg flex items-center justify-center p-8 group hover:shadow-2xl hover:bg-orange-50 transition-all">
              <div className="text-center">
                <div className="w-full h-32 bg-linear-to-br from-gray-200 to-gray-100 rounded flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
                  <span className="text-xs text-gray-400 px-2">[Green Janitor Logo]</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-orange-500 transition-colors">
                  Green Janitor Initiative
                </p>
              </div>
            </div>

            {/* Adunni Save A Girl Foundation */}
            <div className="aspect-square bg-gray-50 rounded-sm shadow-lg flex items-center justify-center p-8 group hover:shadow-2xl hover:bg-orange-50 transition-all">
              <div className="text-center">
                <div className="w-full h-32 bg-linear-to-br from-gray-200 to-gray-100 rounded flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
                  <span className="text-xs text-gray-400 px-2">[Adunni Logo]</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 group-hover:text-orange-500 transition-colors">
                  Adunni Save A Girl Foundation
                </p>
              </div>
            </div>

            
          </div>

          {/* Additional Partner Stats */}
          <div className="mt-20 text-center">
            <p className="text-2xl text-gray-600 font-light">
              Collaborating with <span className="font-bold text-orange-500">8+ organizations</span> across government, civil society, and international development
            </p>
          </div>
        </div>
      </section>

      {/* Values - Bold Minimal */}
      <section className="py-32 px-6 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center">Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-1 bg-white p-1">
            <div className="bg-orange-500 p-16 text-center">
              <Mic className="w-16 h-16 mx-auto mb-8" />
              <h3 className="text-3xl font-bold mb-6">Voice</h3>
              <p className="text-lg leading-relaxed text-orange-100">
                Using poetry and storytelling to effect change, amplifying narratives that challenge systems and inspire action.
              </p>
            </div>
            
            <div className="bg-orange-500 p-16 text-center">
              <BookOpen className="w-16 h-16 mx-auto mb-8" />
              <h3 className="text-3xl font-bold mb-6">Education</h3>
              <p className="text-lg leading-relaxed text-orange-100">
                Belief in lifelong learning as a tool for transformation, empowering individuals and communities through knowledge.
              </p>
            </div>
            
            <div className="bg-orange-500 p-16 text-center">
              <Globe className="w-16 h-16 mx-auto mb-8" />
              <h3 className="text-3xl font-bold mb-6">Global Impact</h3>
              <p className="text-lg leading-relaxed text-orange-100">
                Amplifying local voices on global platforms, ensuring that conversations transcend borders and create lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Full Bleed */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-orange-900 to-gray-900 opacity-90"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-6 py-20 max-w-5xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight">
            Let's use storytelling<br />to spark change.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/performances"
              className="group relative px-12 py-6 bg-orange-500 text-white text-xl font-bold overflow-hidden w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Watch Performances</span>
              <div className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a
              href="/contact"
              className="group relative px-12 py-6 border-4 border-white text-white text-xl font-bold overflow-hidden w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Book Me</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity z-20">Book Me</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}