"use client";

import Link from "next/link";
import { Linkedin, Instagram, Youtube, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourprofile",
      ariaLabel: "Visit LinkedIn profile",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/yourprofile",
      ariaLabel: "Visit Instagram profile",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@yourprofile",
      ariaLabel: "Visit YouTube channel",
    },
    {
      name: "X (Twitter)",
      icon: Twitter,
      url: "https://x.com/yourprofile",
      ariaLabel: "Visit X profile",
    },
  ];

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              Michael Gnaho
            </h3>
            <div className="w-12 h-1 bg-linear-to-r from-orange-500 to-orange-600 mb-4"></div>
            <p className="text-neutral-600 leading-relaxed">
              Global Youth Ambassador, Spoken Word Poet, and advocate for
              education, climate action, and justice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <Link
                href="/about"
                className="block text-neutral-600 hover:text-orange-600"
              >
                About
              </Link>
              <Link
                href="/performances"
                className="block text-neutral-600 hover:text-orange-600"
              >
                Performances
              </Link>
              <Link
                href="/advocacy"
                className="block text-neutral-600 hover:text-orange-600"
              >
                Advocacy
              </Link>
              <Link
                href="/book"
                className="block text-neutral-600 hover:text-orange-600"
              >
                Book Me
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 mb-4">
              Connect
            </h4>

            {/* Email */}
            <div className="mb-6">
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-2 text-neutral-600 hover:text-orange-600"
              >
                <Mail className="w-5 h-5" strokeWidth={2} />
                <span>contact@example.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-orange-500 hover:text-white"
                  >
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
            <p>
              &copy; {currentYear} Michael [Last Name]. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-orange-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-orange-600">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
