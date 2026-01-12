import { Mic, Award, Users, Calendar, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

export default function PerformancesPage() {
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
                    Performances
                  </p>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight">
                    Poetry
                    <br />
                    That
                    <br />
                    Moves
                    <br />
                    Nations
                  </h1>
                  <div className="h-1 w-24 bg-linear-to-r from-orange-500 to-orange-300"></div>
                </div>
                <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light">
                  From government platforms to global youth summits, MAG's
                  performances inspire change across stages worldwide.
                </p>
              </div>

              {/* Image Column - Featured Performance */}
              <div className="relative h-125 lg:h-175">
                <div className="absolute inset-0 bg-linear-to-br from-orange-200 to-orange-100 rounded-sm shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-300">
                    <Image
                      src="/images/changemaker1.jpg"
                      alt="Global Youth Ambassador and Spoken Word Poet"
                      fill
                    />
                  </div>
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-500 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
                100+
              </div>
              <p className="text-xl text-gray-300">Stages Graced</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
                2x
              </div>
              <p className="text-xl text-gray-300">Poet Laureate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-4">
                10+
              </div>
              <p className="text-xl text-gray-300">Awards & Recognition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Laureate Performances */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Poet Laureate
              <br />
              Performances
            </h2>
            <div className="h-1 w-40 bg-linear-to-r from-orange-500 to-orange-300"></div>
          </div>

          <div className="space-y-24">
            {/* Performance 1 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <Award className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">
                      Poet Laureate
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    2024 International Youth Day Seminar
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span>
                        Lagos State Ministry of Youth and Social Development
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-orange-500" />
                      <span>August 2024</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Served as Poet Laureate for the Lagos State Government's
                    flagship youth empowerment event, delivering performances
                    that celebrated youth potential and social development.
                  </p>
                </div>
              </div>
              <div className="relative h-75  rounded-sm shadow-2xl mb-6 overflow-hidden">
                <Image
                  src="/images/youthday.jpg"
                  alt="Global Youth Ambassador"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Performance 2 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-75  rounded-sm shadow-2xl mb-6 overflow-hidden">
                <Image
                  src="/images/youthGenAss.jpg"
                  alt="Global Youth Ambassador"
                  fill
                  className="object-fit"
                />
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <Award className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">
                      Poet Laureate
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    5th Lagos State Youth Assembly Inauguration
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span>
                        Lagos State Ministry of Youth and Social Development
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-orange-500" />
                      <span>2024</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Honored to inaugurate the 5th Lagos State Youth Assembly
                    with performances highlighting governance, youth
                    participation, and democratic engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance 3 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <Award className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">
                      Poet Laureate
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    2025 Matriculation Ceremony (Regular Students)
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span>Lagos State University</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-orange-500" />
                      <span>January 2025</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Welcomed new students into the academic community with
                    inspiring performances celebrating knowledge, excellence,
                    and the transformative power of education.
                  </p>
                </div>
              </div>
              <div className="relative h-75  rounded-sm shadow-2xl mb-6 overflow-hidden">
                <Image
                  src="/images/lasu1.jpg"
                  alt="Global Youth Ambassador"
                  fill
                  className="object-fit"
                />
              </div>
            </div>

            {/* Performance 4 */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-75  rounded-sm shadow-2xl mb-6 overflow-hidden">
                <Image
                  src="/images/lasu2.jpg"
                  alt="Global Youth Ambassador"
                  fill
                  className="object-fit"
                />
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <Award className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">
                      Poet Laureate
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    2025 Matriculation Ceremony (Sandwich Students)
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span>Lagos State University</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-orange-500" />
                      <span>January 2025</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Honored adult learners and non-traditional students with
                    performances celebrating lifelong learning and the courage
                    to pursue education at any stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference & Summit Performances */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Conference &<br />
              Summit Performances
            </h2>
            <div className="h-1 w-40 bg-linear-to-r from-orange-500 to-orange-300"></div>
          </div>

          <div className="space-y-24">
            {/* TEDx LASU */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <Mic className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">
                      Spoken Word Artist
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    TEDx LASU
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span>Lagos State University</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Delivered a powerful spoken word performance at TEDx LASU,
                    sharing ideas worth spreading through the intersection of
                    poetry, social impact, and innovation.
                  </p>
                </div>
              </div>
              <div className="relative h-75  rounded-sm shadow-2xl mb-6 overflow-hidden">
                <Image
                  src="/images/tedx1.jpg"
                  alt="Global Youth Ambassador"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* Lagos Emerging Leader Summit */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-75  rounded-sm shadow-2xl mb-6 overflow-hidden">
                <Image
                  src="/images/emerging1.jpg"
                  alt="Global Youth Ambassador"
                  fill
                  className="object-fill"
                />
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <Mic className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">
                      Spoken Word Artist
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    2023 Lagos Emerging Leader Summit
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span>
                        National Youth Council of Nigeria, Lagos State
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-orange-500" />
                      <span>2023</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Inspired emerging leaders across Lagos with performances
                    focusing on youth leadership, civic engagement, and
                    nation-building.
                  </p>
                </div>
              </div>
            </div>

            {/* Mega Change Makers Conference */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <Mic className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">
                      Spoken Word Artist
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    2023 Mega Change Makers Conference
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span>Lagos State Youth Ambassador</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-orange-500" />
                      <span>2023</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Galvanized changemakers with performances celebrating
                    innovation, social entrepreneurship, and youth-led
                    transformation.
                  </p>
                </div>
              </div>
              <div className="relative h-75  rounded-sm shadow-2xl mb-6 overflow-hidden">
                <Image
                  src="/images/changemaker2.jpg"
                  alt="Global Youth Ambassador"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            {/* ALX Karibu Ceremony */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-75  rounded-sm shadow-2xl mb-6 overflow-hidden">
                <Image
                  src="/images/karibu2.jpg"
                  alt="Global Youth Ambassador"
                  fill
                  className="object-fill"
                />
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <Mic className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">
                      Spoken Word Artist
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    ALX Karibu Ceremony
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span>ALX Africa</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Welcomed new ALX learners with performances merging
                    technology, education, and the African tech ecosystem's
                    transformative potential.
                  </p>
                </div>
              </div>
            </div>

            {/* JCI Festac Convention */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-orange-500">
                    <Mic className="w-6 h-6" />
                    <span className="text-sm tracking-wider uppercase font-medium">
                      Spoken Word Artist
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    JCI Festac Convention
                  </h3>
                  <div className="space-y-2 text-lg text-gray-600">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-orange-500" />
                      <span>Junior Chamber International, Festac</span>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Engaged young entrepreneurs and community leaders with
                    performances highlighting business innovation, leadership
                    development, and social responsibility.
                  </p>
                </div>
              </div>
              <div className="relative h-75  rounded-sm shadow-2xl mb-6 overflow-hidden">
                <Image
                  src="/images/poet-l1.jpg"
                  alt="Global Youth Ambassador"
                  fill
                  className="object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Wins */}
      <section className="py-32 px-6 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Championship
              <br />
              Performances
            </h2>
            <div className="h-1 w-40 bg-white mx-auto"></div>
          </div>

          <div className="space-y-16">
            {/* Quramo Word Slam */}
            <div className="bg-white text-gray-900 p-12 md:p-16 rounded-sm shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-orange-500" />
                    <span className="text-sm tracking-wider uppercase font-bold text-orange-500">
                      WINNER
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                    Quramo Word Slam 2025
                  </h3>
                  <div className="flex items-center gap-3 text-lg text-gray-600">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span>2025</span>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Emerged victorious at one of Nigeria's most prestigious
                    spoken word competitions, delivering performances that
                    captivated judges and audiences with raw emotion, technical
                    brilliance, and social consciousness.
                  </p>
                </div>
                <div className="relative h-75  rounded-sm shadow-2xl mb-6 overflow-hidden">
                  <Image
                    src="/images/quramo.jpg"
                    alt="Global Youth Ambassador"
                    fill
                    className="object-fill"
                  />
                </div>
              </div>
            </div>

            {/* Sage Hassan World Poetry Day */}
            <div className="bg-white text-gray-900 p-12 md:p-16 rounded-sm shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-75  rounded-sm shadow-2xl mb-6 overflow-hidden">
                  <Image
                    src="/images/sage-hassan.jpg"
                    alt="Global Youth Ambassador"
                    fill
                    className="object-fill"
                  />
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-orange-500" />
                    <span className="text-sm tracking-wider uppercase font-bold text-orange-500">
                      WINNER
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                    Sage Hassan World Poetry Day Slam
                  </h3>
                  <div className="flex items-center gap-3 text-lg text-gray-600">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span>March 2025</span>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Clinched first place on World Poetry Day, honoring the
                    global celebration of verse with performances that bridged
                    cultures, languages, and generations through the universal
                    language of poetry.
                  </p>
                </div>
              </div>
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
            Bring poetry to
            <br />
            your platform
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            From government ceremonies to corporate events, conferences to
            festivals — MAG delivers performances that transform moments into
            movements.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="group relative px-12 py-6 bg-orange-500 text-white text-xl font-bold overflow-hidden w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Book a Performance</span>
              <div className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a
              href="/about"
              className="group relative px-12 py-6 border-4 border-white text-white text-xl font-bold overflow-hidden w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                Learn More
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
