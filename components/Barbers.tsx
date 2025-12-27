'use client';

import { useState, useEffect } from 'react';
import { Star, MapPin, Clock, ChevronRight, ChevronLeft, Scissors, Quote, X, Award } from 'lucide-react';
import { useDragScroll } from '@/hooks/useDragScroll';

interface Barber {
  id: string;
  name: string;
  bio: string;
  specialties: string[];
  image_url: string;
  location: string;
  rating: number;
  review_count: number;
  years_experience: number;
}

interface BarberReview {
  id: string;
  barber_id: string;
  reviewer_name: string;
  reviewer_image: string;
  rating: number;
  comment: string;
  treatment: string;
  created_at: string;
}

const barbers: Barber[] = [
  {
    id: '1',
    name: 'Anna de Vries',
    bio: 'Gespecialiseerd in moderne kapsels en kleurbehandelingen. Ik breng vakmanschap naar jouw huis met oog voor detail en persoonlijke aandacht.',
    specialties: ['Balayage', 'Knippen', 'Highlights', 'Styling'],
    image_url: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Amsterdam',
    rating: 4.9,
    review_count: 127,
    years_experience: 8,
  },
  {
    id: '2',
    name: 'Mohammed El-Amin',
    bio: 'Expert in herenkapsels en baardverzorging. Van klassieke cuts tot moderne fades, ik zorg voor de perfecte look.',
    specialties: ['Fade', 'Baard trimmen', 'Herenknippen', 'Hot towel'],
    image_url: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Rotterdam',
    rating: 4.8,
    review_count: 203,
    years_experience: 12,
  },
  {
    id: '3',
    name: 'Sophie Bakker',
    bio: 'Passie voor bruidskapsel en speciale gelegenheden. Elke klant verdient een perfect gestyled moment.',
    specialties: ['Bruidskapsel', 'Updo', 'Extensions', 'Speciale gelegenheden'],
    image_url: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Eindhoven',
    rating: 4.9,
    review_count: 178,
    years_experience: 10,
  },
  {
    id: '4',
    name: 'Lisa Janssen',
    bio: 'Specialist in kleurbehandelingen en creatieve kapsels. Transformeer je look met een persoonlijke touch.',
    specialties: ['Kleuren', 'Creatief knippen', 'Ombre', 'Behandelingen'],
    image_url: 'https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Utrecht',
    rating: 5.0,
    review_count: 89,
    years_experience: 6,
  },
  {
    id: '5',
    name: 'Thomas van der Berg',
    bio: 'Barbier met liefde voor het vak. Traditionele technieken gecombineerd met moderne trends.',
    specialties: ['Klassiek knippen', 'Scheermessen', 'Baard styling', 'Grooming'],
    image_url: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Den Haag',
    rating: 4.7,
    review_count: 156,
    years_experience: 15,
  },
  {
    id: '6',
    name: 'Daan Visser',
    bio: 'Jong talent met frisse ideeen. Altijd op de hoogte van de laatste trends en technieken.',
    specialties: ['Trendy cuts', 'Textured hair', 'Styling advies', 'Mannen & vrouwen'],
    image_url: 'https://images.pexels.com/photos/2076930/pexels-photo-2076930.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Groningen',
    rating: 4.8,
    review_count: 134,
    years_experience: 4,
  },
];

const reviews: Record<string, BarberReview[]> = {
  '1': [
    { id: 'r1', barber_id: '1', reviewer_name: 'Maria S.', reviewer_image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150', rating: 5, comment: 'Anna is fantastisch! Mijn balayage ziet er prachtig uit, precies wat ik wilde.', treatment: 'Balayage', created_at: '2025-12-20' },
    { id: 'r2', barber_id: '1', reviewer_name: 'Jessica K.', reviewer_image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150', rating: 5, comment: 'Zeer professioneel en vriendelijk. Komt altijd op tijd en levert geweldig werk.', treatment: 'Knippen & Kleuren', created_at: '2025-12-15' },
  ],
  '2': [
    { id: 'r3', barber_id: '2', reviewer_name: 'Peter J.', reviewer_image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150', rating: 5, comment: 'Beste fade die ik ooit heb gehad. Mohammed is een echte vakman!', treatment: 'Fade & Baard', created_at: '2025-12-22' },
    { id: 'r4', barber_id: '2', reviewer_name: 'Tom B.', reviewer_image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150', rating: 5, comment: 'Top service, komt naar kantoor. Perfect voor drukke professionals.', treatment: 'Herenknippen', created_at: '2025-12-18' },
  ],
  '3': [
    { id: 'r5', barber_id: '3', reviewer_name: 'Linda M.', reviewer_image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150', rating: 5, comment: 'Sophie deed mijn bruidskapsel. Het was perfect en hield de hele dag!', treatment: 'Bruidskapsel', created_at: '2025-12-10' },
  ],
  '4': [
    { id: 'r6', barber_id: '4', reviewer_name: 'Emma V.', reviewer_image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150', rating: 5, comment: 'Lisa heeft mijn haar getransformeerd! De kleur is precies goed.', treatment: 'Ombre', created_at: '2025-12-21' },
  ],
  '5': [
    { id: 'r7', barber_id: '5', reviewer_name: 'Henk D.', reviewer_image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150', rating: 5, comment: 'Ouderwets vakmanschap. Thomas weet wat hij doet.', treatment: 'Klassiek knippen', created_at: '2025-12-19' },
  ],
  '6': [
    { id: 'r8', barber_id: '6', reviewer_name: 'Sander L.', reviewer_image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150', rating: 5, comment: 'Daan snapt precies wat je bedoelt. Trendy en betaalbaar!', treatment: 'Trendy cut', created_at: '2025-12-23' },
  ],
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Vandaag';
  if (diffDays === 1) return 'Gisteren';
  if (diffDays < 7) return `${diffDays} dagen geleden`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weken geleden`;
  return `${Math.floor(diffDays / 30)} maanden geleden`;
}

export default function Barbers() {
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: sliderRef, isDragging, handlers } = useDragScroll();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const getCardWidth = () => {
    if (typeof window === 'undefined') return 364;
    const cardWidth = window.innerWidth < 640 ? 280 : 340;
    const gap = window.innerWidth < 640 ? 16 : 24;
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
      setCurrentIndex(Math.min(Math.max(0, newIndex), pages - 1));
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
    <>
      <section id="kappers" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-brand-100/40 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-40 sm:w-80 h-40 sm:h-80 bg-brand-50 rounded-full blur-3xl translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                <Scissors className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Onze Kappers
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Ontmoet onze <span className="text-gradient">topkappers</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mt-2 sm:mt-3 max-w-xl">
                Gecertificeerde professionals die naar jou toe komen.
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
            className={`flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 -mr-4 pr-4 sm:-mx-4 sm:px-4 ${isDragging ? '' : 'snap-x snap-mandatory'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            {...handlers}
          >
            {barbers.map((barber) => (
              <div
                key={barber.id}
                className="group relative flex-shrink-0 w-[280px] sm:w-[340px] snap-start"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-400/10 to-brand-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />

                <div className="relative h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 group-hover:border-brand-200/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-brand-500/10">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={barber.image_url}
                      alt={barber.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-lg">
                      <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-gray-900 text-xs sm:text-sm">{barber.rating}</span>
                      <span className="text-gray-500 text-[10px] sm:text-xs">({barber.review_count})</span>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">{barber.name}</h3>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-white/80 text-xs sm:text-sm">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>{barber.location}</span>
                        <span className="mx-0.5">-</span>
                        <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>{barber.years_experience}j</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                      {barber.specialties.slice(0, 3).map((specialty, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-xs font-medium text-brand-600 bg-brand-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {reviews[barber.id]?.[0] && (
                      <div className="bg-gray-50 rounded-lg sm:rounded-xl p-2.5 sm:p-3 mb-3 sm:mb-4">
                        <div className="flex items-start gap-2">
                          <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-300 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                              &quot;{reviews[barber.id][0].comment}&quot;
                            </p>
                            <p className="text-gray-400 text-[10px] sm:text-xs mt-1 sm:mt-1.5">
                              - {reviews[barber.id][0].reviewer_name}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => !isDragging && setSelectedBarber(barber)}
                      className="w-full flex items-center justify-center gap-2 text-brand-600 font-semibold py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-brand-100 hover:border-brand-500 hover:bg-brand-50 transition-all duration-300 group/btn text-xs sm:text-sm"
                    >
                      Bekijk profiel
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
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
                  index === currentIndex ? 'bg-brand-500 w-4 sm:w-6' : 'bg-gray-300 hover:bg-gray-400 w-1.5 sm:w-2'
                }`}
                onClick={() => scrollToIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedBarber && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBarber(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-56 sm:h-72">
              <img
                src={selectedBarber.image_url}
                alt={selectedBarber.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <button
                onClick={() => setSelectedBarber(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-gray-900 text-sm">{selectedBarber.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <Award className="w-3.5 h-3.5 text-brand-500" />
                    <span className="font-medium text-gray-900 text-sm">{selectedBarber.review_count} reviews</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{selectedBarber.name}</h3>
                <div className="flex items-center gap-4 text-white/80 mt-1 text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedBarber.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedBarber.years_experience} jaar ervaring
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 overflow-y-auto max-h-[calc(90vh-288px)]">
              <div className="mb-5">
                <h4 className="font-semibold text-gray-900 mb-2">Over {selectedBarber.name.split(' ')[0]}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{selectedBarber.bio}</p>
              </div>

              <div className="mb-5">
                <h4 className="font-semibold text-gray-900 mb-2">Specialiteiten</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedBarber.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="text-sm font-medium text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {reviews[selectedBarber.id] && reviews[selectedBarber.id].length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recente reviews</h4>
                  <div className="space-y-3">
                    {reviews[selectedBarber.id].map((review) => (
                      <div key={review.id} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          {review.reviewer_image && (
                            <img
                              src={review.reviewer_image}
                              alt={review.reviewer_name}
                              className="w-9 h-9 rounded-full object-cover"
                            />
                          )}
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-gray-900 text-sm">{review.reviewer_name}</span>
                              <span className="text-xs text-gray-400">{formatDate(review.created_at)}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className="flex items-center gap-0.5">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              {review.treatment && (
                                <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
                                  {review.treatment}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">&quot;{review.comment}&quot;</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button className="w-full mt-5 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold py-3.5 rounded-xl hover:shadow-lg hover:shadow-brand-500/30 transition-all duration-300 hover:scale-[1.02]">
                Boek {selectedBarber.name.split(' ')[0]}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
