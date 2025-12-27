import { Smartphone, Search, Calendar, Scissors, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    step: '01',
    title: 'Download de app',
    description: 'Download Thuiskapper.app gratis in de App Store of Google Play Store.',
    highlight: 'Gratis & makkelijk',
  },
  {
    icon: Search,
    step: '02',
    title: 'Vind een kapper',
    description: 'Bekijk profielen, reviews en prijzen van kappers bij jou in de buurt.',
    highlight: '500+ kappers',
  },
  {
    icon: Calendar,
    step: '03',
    title: 'Boek een afspraak',
    description: 'Kies een datum, tijd en behandeling die bij jou past.',
    highlight: 'Flexibele tijden',
  },
  {
    icon: Scissors,
    step: '04',
    title: 'Word thuis geknipt',
    description: 'Ontspan terwijl de kapper bij jou thuis aan de slag gaat.',
    highlight: 'Salon kwaliteit',
  },
];

export default function HowItWorks() {
  return (
    <section id="hoe-werkt-het" className="py-16 sm:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-48 sm:w-64 h-48 sm:h-64 bg-brand-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-56 sm:w-80 h-56 sm:h-80 bg-brand-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white text-brand-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Simpel proces
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            In <span className="text-gradient">4 simpele</span> stappen
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Van downloaden tot geknipt worden - zo makkelijk is het om een kapper naar je toe te laten komen.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-32 left-[12%] right-[12%] h-1 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 rounded-full" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`relative animate-slide-up`}
                style={{
                  opacity: 0,
                  animationFillMode: 'forwards',
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl shadow-gray-200/50 text-center group card-hover border border-gray-100 h-full">
                  <div className="relative inline-block mb-4 sm:mb-6 lg:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-brand-400 to-brand-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-brand-400/30">
                      <item.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gray-900 text-white text-xs sm:text-sm font-bold rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                      {item.step}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1 bg-brand-50 text-brand-600 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold mb-2 sm:mb-4">
                    {item.highlight}
                  </div>

                  <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-1.5 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg shadow-gray-200/50 border border-gray-100">
            {[
              { value: '50K+', label: 'Knipbeurten' },
              { value: '500+', label: 'Kappers' },
              { value: '4.9', label: 'Rating' },
              { value: '24u', label: 'Respons' },
            ].map((stat, i) => (
              <div key={i} className="px-2 sm:px-4 lg:px-6">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
