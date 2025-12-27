'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, Heart, MessageCircle, TrendingUp, Users, Scissors, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useDragScroll } from '@/hooks/useDragScroll';

const testimonials = [
  {
    name: 'Sophie van den Berg',
    location: 'Amsterdam',
    rating: 5,
    text: 'Eindelijk geen gedoe meer met naar de kapper gaan! De kapper was super professioneel en mijn haar ziet er geweldig uit. Aanrader!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    treatment: 'Knippen & Kleuren',
    date: '2 weken geleden',
  },
  {
    name: 'Mark Jansen',
    location: 'Rotterdam',
    rating: 5,
    text: 'Als drukke ondernemer heb ik geen tijd om naar de kapper te gaan. Thuiskapper lost dit perfect op. Top service!',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    treatment: 'Herenknippen',
    date: '1 week geleden',
  },
  {
    name: 'Emma de Groot',
    location: 'Utrecht',
    rating: 5,
    text: 'Mijn kinderen vinden het veel fijner om thuis geknipt te worden. Geen gehuil meer in de kappersstoel. Dank je wel!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    treatment: 'Kinderknippen',
    date: '3 dagen geleden',
  },
  {
    name: 'Thomas Bakker',
    location: 'Den Haag',
    rating: 5,
    text: 'De kapper die ik boekte was echt een vakman. Zelfde kwaliteit als een dure kapsalon, maar dan in mijn eigen woonkamer.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    treatment: 'Knippen & Baard',
    date: '5 dagen geleden',
  },
  {
    name: 'Lisa van Dijk',
    location: 'Eindhoven',
    rating: 5,
    text: 'Super handig! Ik werk vanuit huis en kon gewoon doorwerken terwijl ik geknipt werd. Nooit meer terug naar de salon.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    treatment: 'Damesknippen',
    date: '1 dag geleden',
  },
  {
    name: 'Pieter Smit',
    location: 'Groningen',
    rating: 5,
    text: 'Mijn oma kan niet meer naar de kapper. Dankzij Thuiskapper komt er nu elke maand iemand bij haar langs. Fantastisch!',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    treatment: 'Thuisbezoek',
    date: '4 dagen geleden',
  },
];

const stats = [
  {
    icon: Star,
    value: '4.9',
    label: 'Gemiddelde rating',
    description: 'Op basis van 10K+ reviews',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Users,
    value: '10K+',
    label: 'Tevreden klanten',
    description: '98% zou ons aanraden',
    color: 'from-brand-400 to-brand-600',
  },
  {
    icon: Scissors,
    value: '50K+',
    label: 'Knipbeurten',
    description: 'En het groeit dagelijks',
    color: 'from-brand-400 to-teal-500',
  },
  {
    icon: Award,
    value: '500+',
    label: 'Pro kappers',
    description: 'Door heel Nederland',
    color: 'from-brand-500 to-brand-700',
  },
];

export default function Testimonials() {
  const { ref: sliderRef, isDragging, handlers } = useDragScroll();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const getCardWidth = () => {
    if (typeof window === 'undefined') return 360;
    const cardWidth = window.innerWidth < 640 ? 260 : window.innerWidth < 768 ? 320 : 340;
    const gap = window.innerWidth < 640 ? 12 : 20;
    return cardWidth + gap;
  };

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const maxScroll = scrollWidth - clientWidth;
      const cardWidthWithGap = getCardWidth();
      const pages = Math.max(1, Math.ceil(maxScroll / cardWidthWithGap) + 1);
      setTotalPages(pages);

      const newIndex = maxScroll > 0 ? Math.round((scrollLeft / maxScroll) * (pages - 1)) : 0;
      setActiveIndex(Math.min(Math.max(0, newIndex), pages - 1));
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        slider.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -getCardWidth() : getCardWidth();
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const { scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const scrollPosition = totalPages > 1 ? (index / (totalPages - 1)) * maxScroll : 0;
      sliderRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 sm:-top-40 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-brand-50 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 sm:-bottom-40 sm:-right-40 w-48 sm:w-96 h-48 sm:h-96 bg-brand-50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-500" />
              Geliefd door klanten
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Wat onze klanten <span className="text-gradient">zeggen</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-2 sm:mt-3 max-w-xl">
              Meer dan 10.000 tevreden klanten gingen je voor.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 mt-6 sm:mt-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'bg-white border-2 border-gray-200 hover:border-brand-500 hover:bg-brand-50 text-gray-700 hover:text-brand-600 shadow-md'
                  : 'bg-gray-100 border-2 border-gray-100 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'bg-white border-2 border-gray-200 hover:border-brand-500 hover:bg-brand-50 text-gray-700 hover:text-brand-600 shadow-md'
                  : 'bg-gray-100 border-2 border-gray-100 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className={`flex gap-3 sm:gap-5 overflow-x-auto scrollbar-hide pb-4 -mr-4 pr-4 sm:-mx-4 sm:px-4 ${isDragging ? '' : 'snap-x snap-mandatory'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          {...handlers}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-[260px] sm:w-[320px] md:w-[340px] snap-start"
            >
              <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 relative border border-gray-100 hover:border-brand-200 transition-all duration-500 hover:shadow-xl hover:shadow-brand-100/30">
                <Quote className="absolute top-4 right-4 sm:top-5 sm:right-5 w-6 h-6 sm:w-8 sm:h-8 text-brand-100 group-hover:text-brand-200 transition-colors duration-300" />

                <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl object-cover ring-2 ring-white shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-brand-400 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-xs sm:text-sm">{testimonial.name}</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-400">{testimonial.date}</span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm line-clamp-3 sm:line-clamp-4">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-gray-100">
                  <span className="text-[10px] sm:text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                    {testimonial.treatment}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400">
                    <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="text-[10px] sm:text-xs">Geverifieerd</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-brand-500 w-4 sm:w-6' : 'bg-gray-300 hover:bg-gray-400 w-1.5 sm:w-2'
              }`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>

        <div className="mt-12 sm:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />

                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-100 group-hover:border-brand-200 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-brand-100/20 text-center h-full">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>

                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1">{stat.value}</p>
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-0.5">{stat.label}</p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-10 flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-500" />
              <span className="font-medium text-xs sm:text-sm">Groeit elke maand</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-medium text-xs sm:text-sm">Hoogst beoordeelde app</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 fill-red-500" />
              <span className="font-medium text-xs sm:text-sm">Geliefd door Nederland</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
