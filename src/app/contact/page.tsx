"use client";

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
import { useState } from "react";
import Image from "next/image";
import AnimatedContent from "../../components/AnimatedContent";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    inquiryType: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Using Web3Forms (Free, no API key needed in frontend)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "552a701b-1412-4ba3-968e-6619c6e4d901",
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: `New Contact Form: ${formData.inquiryType} - ${formData.firstName} ${formData.lastName}`,
          to_email: "helloglobalmichael@gmail.com",
          message: `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Organization: ${formData.organization || "Not provided"}
Inquiry Type: ${formData.inquiryType}

Message:
${formData.message}
          `,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          organization: "",
          inquiryType: "",
          message: "",
        });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-linear-to-br from-orange-50 via-white to-orange-50"></div>

        <div className="relative z-10 w-full px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                    Whether you're booking a performance, exploring
                    partnerships, or looking for a speaker—let's start the
                    conversation.
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
                          href="mailto:helloglobalmichael@gmail.com"
                          className="text-xl text-gray-900 hover:text-orange-500 transition-colors"
                        >
                          helloglobalmichael@gmail.com
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
                        href="https://www.instagram.com/simplymag_?igsh=MW1uYW13NzR1aW1peQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-900 hover:bg-orange-500 text-white flex items-center justify-center transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/michael-adeyemi-gnaho-7b487020b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-900 hover:bg-orange-500 text-white flex items-center justify-center transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="https://x.com/simplymag_?t=2PSbJI2OFVrKmScN_cxPxg&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-900 hover:bg-orange-500 text-white flex items-center justify-center transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.facebook.com/micheal.adeyemi.963?mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-900 hover:bg-orange-500 text-white flex items-center justify-center transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
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
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>
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
            <div className="mb-16 text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                What I Offer
              </h2>
              <div className="h-1 w-32 bg-linear-to-r from-orange-500 to-orange-300 mx-auto"></div>
            </div>
          </AnimatedContent>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Performance Bookings */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={false}
              duration={0.9}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.95}
              threshold={0.2}
            >
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
            </AnimatedContent>

            {/* Speaking Engagements */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={false}
              duration={0.9}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.95}
              threshold={0.2}
              delay={0.1}
            >
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
            </AnimatedContent>

            {/* Advocacy Partnerships */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={false}
              duration={0.9}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.95}
              threshold={0.2}
              delay={0.2}
            >
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
            </AnimatedContent>

            {/* Media & Interviews */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={false}
              duration={0.9}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.95}
              threshold={0.2}
              delay={0.3}
            >
              <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-orange-500 flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Media & Interviews
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Available for podcast interviews, magazine features,
                  documentary participation, and media commentary on youth
                  issues.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Podcast appearances</li>
                  <li>• Magazine features</li>
                  <li>• Documentary projects</li>
                  <li>• Radio interviews</li>
                </ul>
              </div>
            </AnimatedContent>

            {/* Workshop Facilitation */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={false}
              duration={0.9}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.95}
              threshold={0.2}
              delay={0.4}
            >
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
            </AnimatedContent>

            {/* Custom Projects */}
            <AnimatedContent
              distance={80}
              direction="vertical"
              reverse={false}
              duration={0.9}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={0.95}
              threshold={0.2}
              delay={0.5}
            >
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
            </AnimatedContent>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
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
          </AnimatedContent>

          <AnimatedContent
            distance={60}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.3}
            delay={0.2}
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Status Messages */}
              {status === "success" && (
                <div className="bg-green-50 border-2 border-green-500 text-green-800 px-6 py-4 rounded-lg">
                  <p className="font-semibold">✓ Message sent successfully!</p>
                  <p className="text-sm mt-1">
                    Thank you for reaching out. I'll get back to you within
                    24-48 hours.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 border-2 border-red-500 text-red-800 px-6 py-4 rounded-lg">
                  <p className="font-semibold">✗ Failed to send message</p>
                  <p className="text-sm mt-1">
                    {errorMessage ||
                      "Please try again or email directly at helloglobalmichael@gmail.com"}
                  </p>
                </div>
              )}

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
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg disabled:bg-gray-100"
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
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg disabled:bg-gray-100"
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg disabled:bg-gray-100"
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
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg disabled:bg-gray-100"
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
                  value={formData.organization}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg disabled:bg-gray-100"
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
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg bg-white disabled:bg-gray-100"
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  disabled={status === "loading"}
                  className="w-full px-6 py-4 border-2 border-gray-300 focus:border-orange-500 focus:outline-none transition-colors text-lg resize-none disabled:bg-gray-100"
                  placeholder="Tell me about your event, project, or inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative px-12 py-5 bg-orange-500 text-white text-xl font-bold overflow-hidden inline-flex items-center gap-3 hover:bg-orange-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </span>
                  <Send className="w-5 h-5 relative z-10" />
                </button>
              </div>
            </form>
          </AnimatedContent>
        </div>
      </section>

      {/* Booking Information */}

      {/* CTA Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-orange-900 to-gray-900 opacity-90"></div>

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
        </AnimatedContent>
      </section>
    </main>
  );
}
