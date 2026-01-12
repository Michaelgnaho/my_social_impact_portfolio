import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import Image from "next/image";
export default function ContactPage() {
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
                    Get In Touch
                  </p>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight">
                    Let's
                    <br />
                    Create
                    <br />
                    Impact
                  </h1>
                  <div className="h-1 w-24 bg-linear-to-r from-orange-500 to-orange-300"></div>
                </div>
                <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light">
                  Whether you're booking a performance, exploring partnerships,
                  or looking for a speaker—let's start the conversation.
                </p>

                {/* Contact Info */}
                <div className="space-y-6 pt-8">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:contact@michaelgnaho.com"
                        className="text-xl text-gray-900 hover:text-orange-500 transition-colors"
                      >
                        contact@michaelgnaho.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+2348145046894"
                        className="text-xl text-gray-900 hover:text-orange-500 transition-colors"
                      >
                        +2348145046894
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                        Location
                      </p>
                      <p className="text-xl text-gray-900">Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-8">
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                    Connect on Social Media
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-gray-900 hover:bg-orange-500 text-white flex items-center justify-center transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gray-900 hover:bg-orange-500 text-white flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gray-900 hover:bg-orange-500 text-white flex items-center justify-center transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-gray-900 hover:bg-orange-500 text-white flex items-center justify-center transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="relative h-125 lg:h-175">
                <div className="absolute inset-0 bg-linear-to-br from-orange-200 to-orange-100 rounded-sm shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg border-2 border-dashed border-orange-300">
                    <Image
                      src="/images/portrait1.jpg"
                      alt="MAG community engagement"
                      fill
                      className="object-fit"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-500 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>
            <div className="h-1 w-32 bg-linear-to-r from-orange-500 to-orange-300 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Fill out the form below and I'll get back to you within 24-48
              hours.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 uppercase tracking-wider mb-3"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg"
                  placeholder="Your first name"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 uppercase tracking-wider mb-3"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg"
                  placeholder="Your last name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 uppercase tracking-wider mb-3"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 uppercase tracking-wider mb-3"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg"
                placeholder="+234 XXX XXX XXXX"
              />
            </div>

            {/* Organization */}
            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-gray-700 uppercase tracking-wider mb-3"
              >
                Organization / Institution
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg"
                placeholder="Your organization name"
              />
            </div>

            {/* Inquiry Type */}
            <div>
              <label
                htmlFor="inquiryType"
                className="block text-sm font-medium text-gray-700 uppercase tracking-wider mb-3"
              >
                Type of Inquiry *
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                required
                className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg bg-white"
              >
                <option value="">Select an option</option>
                <option value="performance">Book a Performance</option>
                <option value="speaking">Speaking Engagement</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="media">Media / Interview Request</option>
                <option value="advocacy">Advocacy Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 uppercase tracking-wider mb-3"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg resize-none"
                placeholder="Tell me about your event, project, or inquiry..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="group relative px-12 py-5 bg-orange-500 text-white text-xl font-bold overflow-hidden inline-flex items-center gap-3 hover:bg-orange-600 transition-colors"
              >
                <span className="relative z-10">Send Message</span>
                <Send className="w-5 h-5 relative z-10" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What I Offer
            </h2>
            <div className="h-1 w-32 bg-linear-to-r from-orange-500 to-orange-300 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Performance Bookings */}
            <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 flex items-center justify-center mb-6">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Performance Bookings
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Poetry performances for conferences, ceremonies, corporate
                events, and festivals. From intimate gatherings to large-scale
                productions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Government ceremonies</li>
                <li>• Corporate events</li>
                <li>• Academic institutions</li>
                <li>• Festivals & conferences</li>
              </ul>
            </div>

            {/* Speaking Engagements */}
            <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 flex items-center justify-center mb-6">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Speaking Engagements
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Keynote speeches and panel discussions on youth leadership,
                climate action, education advocacy, and creative activism.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Youth summits</li>
                <li>• Leadership conferences</li>
                <li>• Climate forums</li>
                <li>• Educational workshops</li>
              </ul>
            </div>

            {/* Advocacy Partnerships */}
            <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 flex items-center justify-center mb-6">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advocacy Partnerships
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Collaborations on climate action, community development,
                education access, and social justice initiatives.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Climate campaigns</li>
                <li>• Community outreach</li>
                <li>• Education advocacy</li>
                <li>• Youth empowerment</li>
              </ul>
            </div>

            {/* Media & Interviews */}
            <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 flex items-center justify-center mb-6">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Media & Interviews
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Available for podcast interviews, magazine features, documentary
                participation, and media commentary on youth issues.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Podcast appearances</li>
                <li>• Magazine features</li>
                <li>• Documentary projects</li>
                <li>• Radio interviews</li>
              </ul>
            </div>

            {/* Workshop Facilitation */}
            <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 flex items-center justify-center mb-6">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Workshop Facilitation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Interactive workshops on spoken word poetry, storytelling for
                advocacy, and using creativity for social change.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Poetry writing workshops</li>
                <li>• Performance training</li>
                <li>• Storytelling sessions</li>
                <li>• Youth empowerment</li>
              </ul>
            </div>

            {/* Custom Projects */}
            <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 flex items-center justify-center mb-6">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Custom Projects
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Bespoke collaborations combining poetry, technology, and
                advocacy tailored to your organization's mission.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom poetry commissions</li>
                <li>• Campaign development</li>
                <li>• Website development</li>
                <li>• Content creation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-orange-900 to-gray-900 opacity-90"></div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-6 py-20 max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to make an impact?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            I typically respond within 24-48 hours. Let's create something
            meaningful together.
          </p>
          <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
        </div>
      </section>
    </main>
  );
}
