'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hoe-werkt-het', label: 'Hoe werkt het' },
    { href: '#voordelen', label: 'Voordelen' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#kappers', label: 'Voor Kappers' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className={`absolute -inset-1 rounded-xl transition-opacity duration-300 ${isScrolled ? 'bg-brand-100 opacity-0' : 'bg-white/20 opacity-100'}`} />
              <Image
                src="/favicon.png"
                alt="Thuiskapper.app"
                width={40}
                height={40}
                className="relative rounded-xl transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span
              className={`font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Thuiskapper<span className="text-brand-400">.app</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                  isScrolled
                    ? 'text-gray-600 hover:text-brand-600 hover:bg-brand-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-400 transition-all duration-300 group-hover:w-1/2 rounded-full" />
              </a>
            ))}
            <a
              href="#download"
              className="ml-4 group inline-flex items-center gap-2 bg-brand-400 hover:bg-brand-500 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-400/30 hover:scale-105 active:scale-100"
            >
              Download App
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-all duration-300 ${
              isScrolled
                ? 'text-gray-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className={`rounded-2xl p-4 ${isScrolled ? 'bg-gray-50' : 'glass'}`}>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-700 hover:bg-brand-50 hover:text-brand-600'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 bg-brand-400 hover:bg-brand-500 text-white font-semibold px-6 py-3.5 rounded-xl text-center transition-all duration-300 flex items-center justify-center gap-2"
              >
                Download App
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
