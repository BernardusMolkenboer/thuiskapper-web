import { Home, Shield, Clock, Wallet, Star, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Thuis geknipt worden',
    description: 'De kapper komt naar jou toe. Geen reistijd, geen parkeergedoe, gewoon lekker thuis.',
    stat: '100%',
    statLabel: 'Gemak',
  },
  {
    icon: Shield,
    title: 'Betrouwbare kappers',
    description: 'Alle kappers zijn geverifieerd en gecertificeerd. Jouw veiligheid staat voorop.',
    stat: '500+',
    statLabel: 'Kappers',
  },
  {
    icon: Clock,
    title: 'Flexibele tijden',
    description: 'Boek wanneer het jou uitkomt, ook \'s avonds en in het weekend.',
    stat: '7/7',
    statLabel: 'Dagen',
  },
  {
    icon: Wallet,
    title: 'Transparante prijzen',
    description: 'Geen verborgen kosten. Je ziet altijd vooraf wat je gaat betalen.',
    stat: '0',
    statLabel: 'Verborgen kosten',
  },
  {
    icon: Star,
    title: 'Kwaliteitsgarantie',
    description: 'Niet tevreden? We lossen het op. Kwaliteit staat bij ons voorop.',
    stat: '4.9',
    statLabel: 'Rating',
  },
  {
    icon: Users,
    title: 'Voor het hele gezin',
    description: 'Mannen, vrouwen, kinderen - voor iedereen een passende kapper.',
    stat: '50K+',
    statLabel: 'Klanten',
  },
];

export default function Features() {
  return (
    <section id="voordelen" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Voordelen
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Waarom kiezen voor
            <span className="block text-gradient">Thuiskapper?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Wij brengen de salon naar jouw huiskamer. Ontdek waarom duizenden Nederlanders al kozen voor Thuiskapper.app.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{
                opacity: 0,
                animationFillMode: 'forwards',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400/10 to-brand-600/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />

              <div className="relative h-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-gray-100 group-hover:border-brand-200/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-brand-500/10">
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand-400/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-brand-400 group-hover:to-brand-600">
                      <feature.icon className="w-5 h-5 sm:w-7 sm:h-7 text-brand-600 transition-colors duration-500 group-hover:text-white" />
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xl sm:text-2xl font-bold text-brand-500 group-hover:text-brand-600 transition-colors">{feature.stat}</p>
                    <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wide">{feature.statLabel}</p>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-brand-700 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 group-hover:border-brand-100 transition-colors">
                  <div className="flex items-center gap-2 text-brand-500 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Beschikbaar in heel Nederland</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 rounded-2xl sm:rounded-[2.5rem] blur-2xl opacity-20" />
          <div className="relative bg-gradient-to-br from-brand-500 via-brand-500 to-brand-600 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-brand-400/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10">
              <div className="text-center lg:text-left max-w-xl">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Klaar om te beginnen?
                </h3>
                <p className="text-white/80 text-base sm:text-lg">
                  Download de app en boek je eerste thuisknipbeurt binnen 5 minuten. Gratis en zonder verplichtingen.
                </p>
              </div>
              <a
                href="#download"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-brand-600 font-bold px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:scale-105 flex-shrink-0 w-full sm:w-auto"
              >
                Download nu gratis
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
