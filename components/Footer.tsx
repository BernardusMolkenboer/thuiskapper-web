'use client';

import { Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-brand-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-brand-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-16 border-b border-gray-800">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
                Blijf op de hoogte
              </h3>
              <p className="text-gray-400 text-sm sm:text-lg">
                Ontvang de laatste updates, tips en aanbiedingen direct in je inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Je e-mailadres"
                className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg sm:rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
              />
              <button className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base transition-all hover:shadow-lg hover:shadow-brand-500/30 hover:scale-105 flex-shrink-0">
                Aanmelden
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="py-10 sm:py-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="col-span-2 sm:col-span-2 lg:col-span-1">
              <a href="#" className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6 group">
                <Image
                  src="/favicon.png"
                  alt="Thuiskapper.app"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl transition-transform group-hover:scale-110"
                />
                <span className="font-bold text-lg sm:text-xl">
                  Thuiskapper<span className="text-brand-400">.app</span>
                </span>
              </a>
              <p className="text-gray-400 mb-5 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Altijd een kapper bij jou thuis. Professionele kapsalon kwaliteit, waar en wanneer jij wilt.
              </p>
              <div className="flex gap-2.5 sm:gap-3">
                {[
                  { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                  { name: 'Instagram', icon: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' },
                  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-9 h-9 sm:w-11 sm:h-11 bg-gray-800 hover:bg-brand-500 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon}/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Navigatie</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { href: '#hoe-werkt-het', label: 'Hoe werkt het' },
                  { href: '#voordelen', label: 'Voordelen' },
                  { href: '#reviews', label: 'Reviews' },
                  { href: '#kappers', label: 'Voor Kappers' },
                  { href: '#download', label: 'Download' },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-gray-400 hover:text-brand-400 transition-colors flex items-center gap-2 group text-sm sm:text-base">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-brand-400 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Juridisch</h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Privacybeleid',
                  'Algemene voorwaarden',
                  'Cookiebeleid',
                  'FAQ',
                  'Support',
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors flex items-center gap-2 group text-sm sm:text-base">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-brand-400 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Contact</h3>
              <ul className="space-y-3 sm:space-y-5">
                <li>
                  <a href="mailto:info@thuiskapper.app" className="flex items-center gap-3 sm:gap-4 text-gray-400 hover:text-brand-400 transition-colors group">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gray-800 group-hover:bg-brand-500/20 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
                    </div>
                    <span className="text-sm sm:text-base">info@thuiskapper.app</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+31201234567" className="flex items-center gap-3 sm:gap-4 text-gray-400 hover:text-brand-400 transition-colors group">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gray-800 group-hover:bg-brand-500/20 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
                    </div>
                    <span className="text-sm sm:text-base">+31 20 123 4567</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 sm:gap-4 text-gray-400">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-400" />
                  </div>
                  <span className="text-sm sm:text-base">Amsterdam, Nederland</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6 sm:py-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-500 text-xs sm:text-sm">
              {currentYear} Thuiskapper.app. Alle rechten voorbehouden.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-2">
              Made with <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 fill-red-500" /> in the Netherlands
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
