import { TrendingUp, Calendar, Wallet, Users, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Meer klanten',
    description: 'Krijg toegang tot duizenden potentiele klanten in jouw regio.',
  },
  {
    icon: Calendar,
    title: 'Eigen agenda',
    description: 'Jij bepaalt wanneer je werkt. Volledige vrijheid en flexibiliteit.',
  },
  {
    icon: Wallet,
    title: 'Eerlijke verdiensten',
    description: 'Stel je eigen prijzen in en houd het grootste deel van je inkomsten.',
  },
  {
    icon: Users,
    title: 'Trouwe klantenkring',
    description: 'Bouw een vaste klantenkring op met ons review-systeem.',
  },
];

const features = [
  'Geen opstartkosten',
  'Eigen prijsbepaling',
  'Wekelijkse uitbetaling',
  'Gratis marketing',
  'Verzekerd werken',
  '24/7 support',
];

export default function ForHairdressers() {
  return (
    <section id="kappers" className="py-16 sm:py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-brand-500/10 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-5 sm:mb-8">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Voor Professionals
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Word een
              <span className="block text-brand-400">Thuiskapper</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-10 leading-relaxed">
              Ben jij een professionele kapper en wil je meer vrijheid in je werk?
              Sluit je aan bij ons netwerk van thuiskappers en bouw je eigen onderneming.
            </p>

            <div className="space-y-3 sm:space-y-5 mb-6 sm:mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group flex gap-3 sm:gap-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-brand-500/30"
                >
                  <div className="w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <benefit.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-base sm:text-lg mb-0.5 sm:mb-1">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm sm:text-base">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#download"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-brand-400 hover:bg-brand-500 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg transition-all hover:shadow-lg hover:shadow-brand-500/30 hover:scale-105"
              >
                Meld je aan als kapper
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 text-gray-400 hover:text-white font-medium px-6 py-3.5 sm:py-4 transition-colors"
              >
                Meer informatie
              </a>
            </div>
          </div>

          <div className="relative mt-4 lg:mt-0">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-brand-500/20 to-brand-600/10 rounded-2xl sm:rounded-[2.5rem] blur-2xl" />

            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                {[
                  { value: '500+', label: 'Actieve kappers', color: 'text-brand-400' },
                  { value: '50K+', label: 'Knipbeurten', color: 'text-blue-400' },
                  { value: '4.9', label: 'Gem. rating', color: 'text-yellow-400' },
                  { value: '85%', label: 'Voor de kapper', color: 'text-emerald-400' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center border border-white/5 hover:border-white/10 transition-colors">
                    <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${stat.color} mb-0.5 sm:mb-1`}>{stat.value}</p>
                    <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-brand-500/20 to-brand-600/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-brand-500/20 mb-4 sm:mb-6">
                <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">Gemiddeld maandinkomen</p>
                <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">EUR 2.500-5.000</span>
                </div>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">bij fulltime werken</p>
              </div>

              <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/5">
                <p className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Inclusief bij Thuiskapper:</p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
