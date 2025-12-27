import { MapPin, Star, Clock, Sparkles, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-mesh overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-brand-300/20 rounded-full blur-3xl animate-blob delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-60" />

      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center min-h-[calc(100vh-8rem)]">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 glass text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-slide-up">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300" />
              <span className="hidden xs:inline">Nieuw:</span>
              <span>Direct boeken</span>
              <div className="flex items-center gap-1 ml-1.5 sm:ml-2 pl-1.5 sm:pl-2 border-l border-white/20">
                <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold">4.9</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-5 sm:mb-8 animate-slide-up delay-100">
              Altijd een
              <span className="block relative">
                <span className="relative z-10">kapper bij</span>
              </span>
              <span className="block text-white/90">jou thuis</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-up delay-200 px-2 sm:px-0">
              Vind direct een professionele kapper die naar je toe komt.
              <span className="text-white font-medium"> Salon-kwaliteit in je eigen huiskamer.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-10 sm:mb-14 animate-slide-up delay-300 px-2 sm:px-0">
              <a
                href="#download"
                className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-white text-brand-600 font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 active:scale-100"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-100 to-brand-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg className="relative w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span className="relative">Download voor iOS</span>
              </a>
              <a
                href="#download"
                className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 glass text-white font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-100"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>Download voor Android</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 animate-slide-up delay-400">
              {[
                { icon: MapPin, text: 'Heel Nederland' },
                { icon: Clock, text: 'Binnen 24 uur' },
                { icon: Star, text: 'Top kappers' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-2.5 text-white/90">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-scale-in delay-200 mt-4 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-br from-white/20 to-white/5 rounded-[2rem] sm:rounded-[3rem] blur-2xl animate-pulse" />
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-brand-300/30 to-transparent rounded-[2rem] sm:rounded-[3rem]" />

              <div className="relative animate-float-slow">
                <Image
                  src="/thuiskapper-main-screen.png"
                  alt="Thuiskapper illustratie"
                  width={576}
                  height={720}
                  className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-xl rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/20"
                  priority
                />

                <div className="hidden sm:block absolute -left-6 top-1/4 glass rounded-2xl p-4 shadow-xl animate-float delay-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                      <Star className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">4.9/5</p>
                      <p className="text-white/70 text-sm">10K+ reviews</p>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block absolute -right-4 bottom-1/4 glass rounded-2xl p-4 shadow-xl animate-float delay-400">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">24 uur</p>
                      <p className="text-white/70 text-sm">Snelle service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#voordelen" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
            <span className="text-sm font-medium">Ontdek meer</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
