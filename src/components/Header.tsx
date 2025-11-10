'use client';

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Books', href: '/books' },
  { name: 'Articles', href: '/articles' },
  { name: 'Media', href: '/media' },
  { name: 'CV', href: '/cv' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-gradient-to-r from-white via-gray-50 to-white border-b border-gray-200 shadow-lg backdrop-blur-md">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-indigo-50/20 to-purple-50/30 animate-pulse"></div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      <nav className="relative mx-auto max-w-6xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo/Name with 3D effect */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-cinzel font-semibold text-transparent bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 bg-clip-text tracking-wider hover:scale-105 transition-all duration-300 drop-shadow-sm"
            >
              Maruf Hasan Rumi
            </Link>
          </div>

          {/* Desktop Navigation with 3D buttons */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-5 py-2.5 text-sm font-medium text-slate-700 hover:text-white transition-all duration-300 group rounded-xl overflow-hidden"
                >
                  {/* Button background with 3D effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 shadow-md group-hover:shadow-xl transition-all duration-300 rounded-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

                  {/* Text with 3D shadow */}
                  <span className="relative z-10 font-semibold drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300">
                    {item.name}
                  </span>

                  {/* Bottom highlight */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-3 text-slate-700 hover:text-white bg-gradient-to-br from-white to-gray-100 hover:from-blue-500 hover:to-indigo-600 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-gradient-to-b from-white/90 to-gray-50/90 backdrop-blur-sm">
            <div className="py-4 space-y-2 px-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative block px-4 py-3 text-base font-semibold text-slate-700 hover:text-white transition-all duration-300 group rounded-lg overflow-hidden"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideInRight 0.5s ease-out forwards'
                  }}
                >
                  {/* Mobile button background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white shadow-sm group-hover:shadow-lg transition-all duration-300 rounded-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>

                  {/* Mobile shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

                  <span className="relative z-10 drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}