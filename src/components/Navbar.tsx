"use client"

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/performances', label: 'Performances' },
    { href: '/videos', label: 'Videos' },
    { href: '/impacts', label: 'Impact & Advocacy' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white border-t-4 border-orange-500 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-neutral-900">
              Michael Adeyemi Gnaho
            </span>
            <span className="text-xs sm:text-sm text-neutral-600 mt-0.5">
              Global Youth Ambassador & Spoken Word Poet
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-700 hover:text-orange-500 font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="px-6 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700"
            >
              Book Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neutral-900 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-700 hover:text-orange-500 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                className="px-6 py-3 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg text-center hover:from-orange-600 hover:to-orange-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}