import {
  Mic,
  Award,
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PerformancesPage() {
  const laureatePerformances = [
    {
      badge: "POET LAUREATE",
      icon: <Award className="w-6 h-6" />,
      title: "2024 International Youth Day Seminar",
      location: "Lagos State Ministry of Youth and Social Development",
      date: "August 2024",
      description:
        "Served as Poet Laureate for the Lagos State Government's flagship youth empowerment event, delivering performances that celebrated youth potential and social development.",
      image: "/images/youthday.jpg",
    },
    {
      badge: "POET LAUREATE",
      icon: <Award className="w-6 h-6" />,
      title: "5th Lagos State Youth Assembly Inauguration",
      location: "Lagos State Ministry of Youth and Social Development",
      date: "2024",
      description:
        "Honored to inaugurate the 5th Lagos State Youth Assembly with performances highlighting governance, youth participation, and democratic engagement.",
      image: "/images/youthGenAss.jpg",
    },
    {
      badge: "POET LAUREATE",
      icon: <Award className="w-6 h-6" />,
      title: "2025 Matriculation Ceremony (Regular Students)",
      location: "Lagos State University",
      date: "January 2025",
      description:
        "Welcomed new students into the academic community with inspiring performances celebrating knowledge, excellence, and the transformative power of education.",
      image: "/images/lasu1.jpg",
    },
    {
      badge: "POET LAUREATE",
      icon: <Award className="w-6 h-6" />,
      title: "2025 Matriculation Ceremony (Sandwich Students)",
      location: "Lagos State University",
      date: "January 2025",
      description:
        "Honored adult learners and non-traditional students with performances celebrating lifelong learning and the courage to pursue education at any stage.",
      image: "/images/lasu2.jpg",
    },
  ];

  const conferencePerformances = [
    {
      badge: "SPOKEN WORD ARTIST",
      icon: <Mic className="w-6 h-6" />,
      title: "TEDx LASU",
      location: "Lagos State University",
      date: "2024",
      description:
        "Delivered a powerful spoken word performance at TEDx LASU, sharing ideas worth spreading through the intersection of poetry, social impact, and innovation.",
      image: "/images/tedx1.jpg",
    },
    {
      badge: "SPOKEN WORD ARTIST",
      icon: <Mic className="w-6 h-6" />,
      title: "2023 Lagos Emerging Leader Summit",
      location: "National Youth Council of Nigeria, Lagos State",
      date: "2023",
      description:
        "Inspired emerging leaders across Lagos with performances focusing on youth leadership, civic engagement, and nation-building.",
      image: "/images/emerging1.jpg",
    },
    {
      badge: "SPOKEN WORD ARTIST",
      icon: <Mic className="w-6 h-6" />,
      title: "2023 Mega Change Makers Conference",
      location: "Lagos State Youth Ambassador",
      date: "2023",
      description:
        "Galvanized changemakers with performances celebrating innovation, social entrepreneurship, and youth-led transformation.",
      image: "/images/changemaker2.jpg",
    },
    {
      badge: "SPOKEN WORD ARTIST",
      icon: <Mic className="w-6 h-6" />,
      title: "ALX Karibu Ceremony",
      location: "ALX Africa",
      date: "2024",
      description:
        "Welcomed new ALX learners with performances merging technology, education, and the African tech ecosystem's transformative potential.",
      image: "/images/karibu2.jpg",
    },
    {
      badge: "SPOKEN WORD ARTIST",
      icon: <Mic className="w-6 h-6" />,
      title: "JCI Festac Convention",
      location: "Junior Chamber International, Festac",
      date: "2024",
      description:
        "Engaged young entrepreneurs and community leaders with performances highlighting business innovation, leadership development, and social responsibility.",
      image: "/images/poet-l1.jpg",
    },
  ];

  const championshipPerformances = [
    {
      badge: "WINNER",
      icon: <Sparkles className="w-8 h-8" />,
      title: "Quramo Word Slam 2025",
      date: "2025",
      description:
        "Emerged victorious at one of Nigeria's most prestigious spoken word competitions, delivering performances that captivated judges and audiences with raw emotion, technical brilliance, and social consciousness.",
      image: "/images/quramo.jpg",
    },
    {
      badge: "WINNER",
      icon: <Sparkles className="w-8 h-8" />,
      title: "Sage Hassan World Poetry Day Slam",
      date: "March 2025",
      description:
        "Clinched first place on World Poetry Day, honoring the global celebration of verse with performances that bridged cultures, languages, and generations through the universal language of poetry.",
      image: "/images/sage-hassan.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-white to-orange-50">
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
                  <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-300"></div>
                </div>
                <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light">
                  From government platforms to global youth summits, MAG's
                  performances inspire change across stages worldwide.
                </p>
              </div>

              {/* Image Column - Featured Performance */}
              <div className="relative h-[500px] lg:h-[700px]">
                <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src="/images/changemaker1.jpg"
                    alt="Global Youth Ambassador and Spoken Word Poet"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-500 rounded-2xl -z-10"></div>
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
            <div className="h-1 w-40 bg-gradient-to-r from-orange-500 to-orange-300"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {laureatePerformances.map((performance, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
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

                  {/* Date */}
                  <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                    {performance.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-orange-500 transition-colors">
                    {performance.title}
                  </h3>
                  <div className="flex items-start gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">{performance.location}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {performance.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference & Summit Performances */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Conference &<br />
              Summit Performances
            </h2>
            <div className="h-1 w-40 bg-gradient-to-r from-orange-500 to-orange-300"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {conferencePerformances.map((performance, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
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

                  {/* Date */}
                  <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                    {performance.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-orange-500 transition-colors">
                    {performance.title}
                  </h3>
                  <div className="flex items-start gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">{performance.location}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {performance.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Championship Performances */}
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

          <div className="grid lg:grid-cols-2 gap-8">
            {championshipPerformances.map((performance, index) => (
              <div
                key={index}
                className="group relative bg-white text-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={performance.image}
                    alt={performance.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-full font-bold tracking-wider">
                    {performance.icon}
                    <span>{performance.badge}</span>
                  </div>

                  {/* Date */}
                  <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
                    {performance.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight group-hover:text-orange-500 transition-colors">
                    {performance.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {performance.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 opacity-90"></div>

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
            <Link
              href="/contact"
              className="group relative px-12 py-6 bg-orange-500 text-white text-xl font-bold overflow-hidden w-full sm:w-auto text-center rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Book a Performance
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
            <Link
              href="/about"
              className="group relative px-12 py-6 border-4 border-white text-white text-xl font-bold overflow-hidden w-full sm:w-auto text-center rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <span className="relative z-10">Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
