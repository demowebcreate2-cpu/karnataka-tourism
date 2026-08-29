import React, { useState } from 'react';
import { PageId, Destination } from '../types';
import { DESTINATIONS } from '../data';
import { ArrowRight, ChevronLeft, ChevronRight, Compass, Sparkles, MapPin, Calendar, Heart, ShieldCheck, Landmark, Trees, Waves, Mountain, Eye, Award, CheckCircle } from 'lucide-react';
import { ImageItem } from './ImageViewerModal';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectDestination: (dest: Destination) => void;
  onOpenPlanTrip: () => void;
  onViewImage?: (image: ImageItem, gallery?: ImageItem[]) => void;
  savedIds?: string[];
  onToggleSave?: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectDestination,
  onOpenPlanTrip,
  onViewImage,
  savedIds = [],
  onToggleSave,
}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'all' | 'heritage' | 'nature' | 'wildlife' | 'coastal'>('all');
  const [activeHighlightZone, setActiveHighlightZone] = useState<number>(0);

  const filteredDestinations = DESTINATIONS.filter((d) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'heritage') return d.category === 'heritage';
    if (activeTab === 'nature') return d.category === 'nature';
    if (activeTab === 'wildlife') return d.category === 'wildlife';
    if (activeTab === 'coastal') return d.category === 'coastal';
    return true;
  });

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % Math.max(1, filteredDestinations.length - 2));
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + Math.max(1, filteredDestinations.length - 2)) % Math.max(1, filteredDestinations.length - 2));
  };

  const highlightStories = [
    {
      title: 'Group of Monuments at Hampi',
      subtitle: 'UNESCO World Heritage Capital of Vijayanagara Empire',
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop',
      description: 'The monumental stone chariot, towering Virupaksha gopuram, and 1,600 surviving ruins set among sacred river boulder landscapes.',
      district: 'Vijayanagara',
      tag: 'UNESCO Heritage'
    },
    {
      title: 'Western Ghats Biodiversity & Mist Peaks',
      subtitle: 'Kudremukh & Chikmagalur Coffee High Ranges',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop',
      description: 'Verdant shola forests, emerald coffee plantations, and mist-kissed ridges home to endemic flora and rare birdlife.',
      district: 'Chikkamagaluru',
      tag: 'Nature & Coffee'
    },
    {
      title: 'Bandipur & Nagarhole Tiger Reserves',
      subtitle: 'Premier Apex Carnivore & Elephant Sanctuaries',
      image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop',
      description: 'Over 563 wild tigers and 6,000 Asian elephants roaming freely across protected Nilgiri biosphere jungles.',
      district: 'Mysuru & Kodagu',
      tag: 'Tiger Safaris'
    },
    {
      title: 'Sun-Kissed Arabian Coastline & Gokarna',
      subtitle: 'Om Beach, Cliff Treks & Ancient Coastal Sanctuaries',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
      description: 'Golden beaches carved between rocky headlands, serene palm fringes, scuba diving reefs, and spiritual heritage.',
      district: 'Uttara Kannada',
      tag: 'Coastal & Adventure'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. HERO SECTION: Nature Green, White & Clean Theme with Hampi & Heritage Grandeur */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image featuring Hampi Stone Chariot & Vijayanagara Heritage */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=2000&auto=format&fit=crop"
            alt="Hampi UNESCO Heritage Stone Chariot"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop';
            }}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Layered Gradient Overlays for High Contrast Nature Green Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-black/60 to-[#1b4332]/90"></div>
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/40 to-black/75"></div>
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 pt-12">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2d6a4f]/90 backdrop-blur-md border border-white/20 shadow-sm animate-fadeIn">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span className="text-white text-[11px] sm:text-xs font-semibold uppercase tracking-widest">
              WELCOME TO KARNATAKA
            </span>
          </div>

          {/* Headline: "One State, Many Worlds" */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.1] drop-shadow-md">
            One State, <br />
            <span className="font-serif italic font-normal text-white">
              Many Worlds
            </span>
          </h1>

          {/* Hero Subtitle Card */}
          <div className="max-w-2xl mx-auto p-5 sm:p-6 rounded-sm bg-black/70 backdrop-blur-md border border-white/20 shadow-xl text-white">
            <p className="text-sm sm:text-base md:text-lg text-white/90 font-light leading-relaxed">
              Experience the perfect harmony of UNESCO heritage ruins, lush Western Ghats, untamed tiger reserves, and sun-kissed Arabian shores. Your discovery begins here.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              id="hero-explore-btn"
              onClick={() => onNavigate('guides')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xs shadow-xl transition-all transform hover:-translate-y-0.5 border border-white/20"
            >
              <span>EXPLORE DESTINATIONS</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <button
              id="hero-plan-btn"
              onClick={onOpenPlanTrip}
              className="inline-flex items-center gap-2 px-7 py-4 bg-white hover:bg-[#2d6a4f] hover:text-white text-black font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xs shadow-lg transition-all border border-black/20"
            >
              <Calendar className="w-4 h-4 text-[#2d6a4f]" />
              <span>CUSTOM PLANNER</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. DISCOVER BY INTEREST BENTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#2d6a4f] px-3.5 py-1 rounded-full">
            <Compass className="w-3.5 h-3.5 text-white" />
            Curated Dimensions
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-black tracking-tight">
            Discover by Interest
          </h2>
          <div className="w-16 h-1 bg-[#2d6a4f] mx-auto rounded-full"></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: HERITAGE */}
          <div
            id="bento-heritage-card"
            onClick={() => onNavigate('heritage')}
            className="md:col-span-7 group relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden cursor-pointer shadow-md transition-all duration-300 hover:shadow-2xl border border-neutral-200 bg-[#1b4332]"
          >
            <img
              src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop"
              alt="Hampi Stone Chariot & Heritage Ruins"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop';
              }}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

            {/* Content overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2d6a4f] text-white text-[11px] font-bold tracking-widest uppercase rounded-full border border-white/20 backdrop-blur-md shadow-sm">
                <Landmark className="w-3.5 h-3.5 text-white" />
                UNESCO HERITAGE
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Ancient Empires & Sacred Temples
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 max-w-md leading-relaxed font-light">
                Walk through 1,600 monuments at Hampi, Hoysala soapstone masterpieces, and rock-cut cave temples of Badami and Pattadakal.
              </p>
            </div>
          </div>

          {/* Right Column: NATURE & WILDLIFE (spanning 5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Card 2: NATURE */}
            <div
              id="bento-nature-card"
              onClick={() => onNavigate('guides')}
              className="group relative h-[200px] sm:h-[227px] rounded-3xl overflow-hidden cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl border border-neutral-200 bg-[#1b4332]"
            >
              <img
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop"
                alt="Chikmagalur Mist Rolling Hills and Coffee Estates"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              <div className="absolute bottom-4 left-5 right-5 text-white space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-white">
                  <Mountain className="w-3 h-3 text-[#52b788]" />
                  Misty Western Ghats
                </div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  Coffee Country & Hills
                </h3>
                <p className="text-xs text-neutral-200 font-light">
                  Pristine shola peaks and rolling Arabica plantations in Coorg & Chikmagalur.
                </p>
              </div>
            </div>

            {/* Card 3: WILDLIFE */}
            <div
              id="bento-wildlife-card"
              onClick={() => onNavigate('wildlife')}
              className="group relative h-[200px] sm:h-[227px] rounded-3xl overflow-hidden cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl border border-neutral-200 bg-[#1b4332]"
            >
              <img
                src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop"
                alt="Bandipur Bengal Tiger in Wild Sanctuary"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              <div className="absolute bottom-4 left-5 right-5 text-white space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-white">
                  <Trees className="w-3 h-3 text-[#52b788]" />
                  563+ Wild Tigers
                </div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  Tiger & Elephant Safaris
                </h3>
                <p className="text-xs text-neutral-200 font-light">
                  Bandipur, Kabini backwaters, and untamed Nilgiri biosphere.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: CULTURE & TRADITIONS (Full-Width Bottom Banner) */}
          <div
            id="bento-culture-card"
            onClick={() => onNavigate('heritage')}
            className="md:col-span-12 group relative h-[260px] sm:h-[300px] rounded-sm overflow-hidden cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl border border-[#2d6a4f]/20 bg-[#1b4332]"
          >
            <img
              src="https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=1600&auto=format&fit=crop"
              alt="Mysuru Dasara Royal Palace and Cultural Heritage"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="text-white space-y-1.5 max-w-xl">
                <span className="inline-block px-2.5 py-0.5 bg-[#2d6a4f] text-white text-[10px] font-bold tracking-widest uppercase rounded-2xs border border-white/20">
                  ROYAL TRADITIONS & LIVING ARTS
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  Living Culture & Royal Festivals
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                  Immerse yourself in Mysore Dasara royal illumination, coastal Kambala buffalo races, Mysore silk weaving, and authentic GI-tagged crafts.
                </p>
              </div>

              {/* Action circle arrow */}
              <div className="hidden sm:flex w-12 h-12 rounded-full border border-white/40 bg-black/60 backdrop-blur-xs items-center justify-center text-white group-hover:bg-[#2d6a4f] group-hover:border-white transition-colors shrink-0">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SPOTLIGHT SHOWCASE: Experience Karnataka's Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm border border-black/15 shadow-sm overflow-hidden p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-black/10 pb-6 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#2d6a4f] mb-1">
                Interactive Showcase
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-black">
                Iconic Wonders of Karnataka
              </h3>
            </div>

            {/* Interactive Tab Switchers */}
            <div className="flex flex-wrap items-center gap-2">
              {highlightStories.map((story, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveHighlightZone(idx)}
                  className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-xs border transition-all ${
                    activeHighlightZone === idx
                      ? 'bg-[#2d6a4f] text-white border-[#2d6a4f] shadow-xs'
                      : 'bg-white text-black border-black/20 hover:bg-black/5'
                  }`}
                >
                  {story.tag}
                </button>
              ))}
            </div>
          </div>

          {/* Active Highlight Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-sm overflow-hidden group shadow-md border border-black/15 bg-black">
              <img
                src={highlightStories[activeHighlightZone].image}
                alt={highlightStories[activeHighlightZone].title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Quick Image Preview Trigger */}
              {onViewImage && (
                <button
                  onClick={() => onViewImage({
                    url: highlightStories[activeHighlightZone].image,
                    title: highlightStories[activeHighlightZone].title,
                    location: `${highlightStories[activeHighlightZone].district} District, Karnataka`,
                    caption: highlightStories[activeHighlightZone].description,
                    category: highlightStories[activeHighlightZone].tag
                  })}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 hover:bg-[#2d6a4f] text-white backdrop-blur-xs border border-white/20 transition-all"
                  title="View Fullscreen Photo"
                >
                  <Eye className="w-4 h-4" />
                </button>
              )}

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#2d6a4f] text-white text-[10px] font-bold uppercase rounded-2xs mb-1.5 border border-white/20">
                  <MapPin className="w-3 h-3" />
                  {highlightStories[activeHighlightZone].district} District
                </div>
                <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {highlightStories[activeHighlightZone].title}
                </h4>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-bold text-[#2d6a4f] uppercase tracking-widest">
                  {highlightStories[activeHighlightZone].subtitle}
                </span>
                <p className="text-sm sm:text-base text-black/80 leading-relaxed mt-2">
                  {highlightStories[activeHighlightZone].description}
                </p>
              </div>

              <div className="bg-black/5 p-4 rounded-xs border border-black/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2d6a4f]">
                  <CheckCircle className="w-4 h-4 text-[#2d6a4f]" />
                  Highlights & Guided Experiences
                </div>
                <ul className="text-xs text-black/70 space-y-1 pl-6 list-disc">
                  <li>Government certified KSTDC guides available</li>
                  <li>Direct road & rail connectivity with Bengaluru & Hubballi</li>
                  <li>Eco-friendly accommodations & Jungle Lodges</li>
                </ul>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('guides')}
                  className="px-6 py-3 bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs transition-all flex items-center gap-2"
                >
                  <span>Explore Travel Guides</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenPlanTrip}
                  className="px-5 py-3 bg-white hover:bg-black/5 text-black text-xs font-bold uppercase tracking-wider rounded-xs border border-black/20 transition-all"
                >
                  Plan Route
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRENDING DESTINATIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/15 pb-4">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-black tracking-tight">
              Trending Destinations
            </h2>
            <p className="text-xs sm:text-sm text-black/70 font-medium mt-1">
              Curated experiences across the state • Filter by category below
            </p>
          </div>

          {/* Filter Pills & Prev/Next arrows */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 bg-white p-1 rounded-xs border border-black/15">
              {(['all', 'heritage', 'nature', 'wildlife', 'coastal'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setCarouselIndex(0);
                  }}
                  className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-2xs transition-all ${
                    activeTab === tab
                      ? 'bg-[#2d6a4f] text-white shadow-2xs'
                      : 'text-black/80 hover:text-black hover:bg-black/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                id="trending-prev-btn"
                onClick={handlePrev}
                aria-label="Previous destination"
                className="p-2.5 rounded-full border border-black/20 text-black bg-white hover:bg-black/5 transition-colors shadow-2xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="trending-next-btn"
                onClick={handleNext}
                aria-label="Next destination"
                className="p-2.5 rounded-full border border-black/20 text-black bg-white hover:bg-black/5 transition-colors shadow-2xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel / Grid of Destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.slice(carouselIndex, carouselIndex + 3).map((dest) => {
            const isSaved = savedIds.includes(dest.id);
            return (
              <div
                key={dest.id}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-black/15 flex flex-col cursor-pointer relative"
              >
                {/* Destination Image */}
                <div 
                  className="relative h-80 sm:h-96 w-full overflow-hidden bg-black"
                  onClick={() => onSelectDestination(dest)}
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#2d6a4f] text-white text-[10px] font-bold uppercase tracking-widest rounded-2xs border border-white/20 backdrop-blur-xs">
                    {dest.category}
                  </span>

                  {/* Bookmark Button */}
                  {onToggleSave && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(dest.id);
                      }}
                      className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-[#2d6a4f] text-white backdrop-blur-xs border border-white/20 transition-all"
                      title={isSaved ? "Remove from Saved" : "Save destination"}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-white text-white' : 'text-white'}`} />
                    </button>
                  )}

                  <div className="absolute bottom-3 left-3 bg-black/80 px-2.5 py-1 rounded-2xs text-[11px] text-white flex items-center gap-1 border border-white/20">
                    <MapPin className="w-3 h-3 text-white" />
                    {dest.district} District
                  </div>
                </div>

                {/* Destination Meta Info */}
                <div 
                  className="p-6 flex-1 flex flex-col justify-between space-y-3 bg-white"
                  onClick={() => onSelectDestination(dest)}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-2xl text-black group-hover:text-[#2d6a4f] transition-colors">
                        {dest.name}
                      </h3>
                      <span className="text-xs font-bold text-white bg-[#2d6a4f] px-2 py-0.5 rounded-xs border border-[#2d6a4f]/20">
                        {dest.rating} / 5.0
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-black/70 leading-relaxed line-clamp-2 mt-1.5">
                      {dest.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs text-[#2d6a4f] font-bold">
                    <span>Explore Itinerary & Highlights</span>
                    <span className="group-hover:translate-x-1 transition-transform text-[#2d6a4f]">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. TRIP PLANNER CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#1b4332] rounded-sm p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-[#2d6a4f]/40">
          <div className="absolute inset-0 opacity-10 green-subtle-pattern pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-xs backdrop-blur-xs border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                OFFICIAL TRIP ASSISTANT
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                Ready to Experience Karnataka?
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl font-light">
                Whether you want to explore the 1,600 ruins of Hampi, embark on a wild tiger safari in Bandipur, or savor authentic coffee amidst the misty peaks of Coorg, our customized planner crafts your dream voyage.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                id="cta-plan-custom-trip"
                onClick={onOpenPlanTrip}
                className="w-full py-3.5 px-6 bg-white hover:bg-black hover:text-white text-black font-bold text-xs uppercase tracking-wider rounded-xs shadow-md transition-all text-center border border-black/20"
              >
                Plan Custom Itinerary
              </button>
              <button
                onClick={() => onNavigate('guides')}
                className="w-full py-3.5 px-6 bg-[#1b4332] hover:bg-black text-white font-bold text-xs uppercase tracking-wider rounded-xs border border-white/20 transition-all text-center"
              >
                View Regional Guides
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

