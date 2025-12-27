import { Smartphone, Star, Shield, Zap } from 'lucide-react';
import Image from 'next/image';

export default function DownloadCTA() {
  return (
    <section id="download" className="py-16 sm:py-24 lg:py-32 bg-mesh relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-brand-300/20 rounded-full blur-3xl animate-blob delay-300" />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 glass text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-5 sm:mb-8">
              <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Gratis downloaden
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              Klaar om thuis
              <span className="block text-white/90">geknipt te worden?</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
              Download de Thuiskapper.app en boek vandaag nog je eerste afspraak.
              Professionele kapsalon kwaliteit, gewoon bij jou thuis.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10 px-2 sm:px-0">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 sm:gap-4 bg-black/80 backdrop-blur-sm text-white font-semibold px-5 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-black border border-white/10"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] sm:text-xs text-gray-400">Download in de</p>
                  <p className="text-lg sm:text-xl font-bold">App Store</p>
                </div>
              </a>

              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 sm:gap-4 bg-black/80 backdrop-blur-sm text-white font-semibold px-5 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-black border border-white/10"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] sm:text-xs text-gray-400">Download in de</p>
                  <p className="text-lg sm:text-xl font-bold">Google Play</p>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-white/80">
              {[
                { icon: Star, text: '4.9 Rating' },
                { icon: Shield, text: 'Veilig & betrouwbaar' },
                { icon: Zap, text: 'Direct boeken' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 sm:gap-2">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-200" />
                  <span className="text-xs sm:text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-br from-white/20 to-white/5 rounded-[2rem] sm:rounded-[3rem] blur-2xl animate-pulse" />

              <div className="relative animate-float-slow">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-6 backdrop-blur-sm border border-white/20">
                  <Image
                    src="/favicon.png"
                    alt="Thuiskapper.app"
                    width={256}
                    height={256}
                    className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 mx-auto rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl animate-pulse-glow"
                  />

                  <div className="mt-4 sm:mt-6 text-center">
                    <p className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-0.5 sm:mb-1">Thuiskapper.app</p>
                    <p className="text-white/60 text-xs sm:text-sm">Altijd een kapper bij jou thuis</p>

                    <div className="flex items-center justify-center gap-0.5 sm:gap-1 mt-3 sm:mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-white/80 text-xs sm:text-sm ml-1.5 sm:ml-2">4.9 (10K+)</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block absolute -top-4 -right-4 glass rounded-2xl p-3 shadow-xl animate-float delay-200">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Geboekt!</p>
                      <p className="text-white/60 text-xs">Morgen 14:00</p>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block absolute -bottom-4 -left-4 glass rounded-2xl p-3 shadow-xl animate-float delay-400">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
                      alt=""
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-white font-bold text-sm">Lisa</p>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
