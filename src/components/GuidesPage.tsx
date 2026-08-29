import React, { useState } from 'react';
import { Destination, Region, PageId } from '../types';
import { DESTINATIONS, ITINERARIES } from '../data';
import { MapPin, Calendar, Clock, Filter, Sparkles, Navigation, Info, ArrowRight, Check, Landmark, Trees, Waves, Mountain, Plane, Bus, Sun, MessageSquare, Eye, Heart, Compass } from 'lucide-react';
import { ImageItem } from './ImageViewerModal';

interface GuidesPageProps {
  onSelectDestination: (dest: Destination) => void;
  onOpenPlanTrip: () => void;
  onViewImage?: (image: ImageItem, gallery?: ImageItem[]) => void;
  savedIds?: string[];
  onToggleSave?: (id: string) => void;
}

export const GuidesPage: React.FC<GuidesPageProps> = ({
  onSelectDestination,
  onOpenPlanTrip,
  onViewImage,
  savedIds = [],
  onToggleSave,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<Region>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedItinerary, setExpandedItinerary] = useState<string>(ITINERARIES[0].id);

  const filteredDestinations = DESTINATIONS.filter((d) => {
    const matchesRegion = selectedRegion === 'all' || d.region === selectedRegion;
    const matchesCategory = selectedCategory === 'all' || d.category === selectedCategory;
    return matchesRegion && matchesCategory;
  });

  const regions: { id: Region; label: string; desc: string }[] = [
    { id: 'all', label: 'All Karnataka', desc: 'Complete state overview' },
    { id: 'coastal', label: 'Coastal Karavali', desc: 'Gokarna, Udupi, Mangaluru beaches' },
    { id: 'malnad', label: 'Malnad Rainforests', desc: 'Coorg, Chikmagalur, Dandeli' },
    { id: 'south', label: 'South Karnataka', desc: 'Mysuru, Belur, Hassan, Srirangapatna' },
    { id: 'north', label: 'North Karnataka', desc: 'Hampi, Badami, Pattadakal, Bidar' },
  ];

  return (
    <div className="space-y-16 py-8 pb-20">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm p-8 sm:p-12 border border-black/15 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2d6a4f] text-white text-xs font-bold uppercase tracking-widest rounded-2xs shadow-2xs border border-white/20">
              <Navigation className="w-3.5 h-3.5" />
              EXPLORATION & CIRCUITS
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-black tracking-tight">
              Karnataka Regional Travel Guides
            </h1>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed">
              From the azure Arabian coastline and UNESCO rock monuments of Hampi to misty coffee-clad peaks and wild tiger corridors, explore detailed routes, regional highlights, and practical visitor tips.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Regional & Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-sm border border-black/15 shadow-sm space-y-6">
          {/* Region Tabs */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2d6a4f] block mb-3">
              Filter by Geographical Region:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {regions.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegion(reg.id)}
                  className={`p-3 rounded-xs text-left transition-all border ${
                    selectedRegion === reg.id
                      ? 'bg-[#2d6a4f] text-white border-[#2d6a4f] shadow-xs'
                      : 'bg-white text-black border-black/15 hover:bg-black/5'
                  }`}
                >
                  <span className="font-bold text-xs sm:text-sm block">{reg.label}</span>
                  <span className={`text-[10px] block mt-0.5 ${selectedRegion === reg.id ? 'text-white/80' : 'text-black/60'}`}>
                    {reg.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-black/10">
            <span className="text-xs font-bold text-black mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#2d6a4f]" />
              Category:
            </span>
            {[
              { id: 'all', label: 'All Categories', icon: null },
              { id: 'heritage', label: 'UNESCO Heritage', icon: Landmark },
              { id: 'nature', label: 'Nature & Hills', icon: Mountain },
              { id: 'adventure', label: 'Adventure', icon: Compass },
              { id: 'coastal', label: 'Coastal Shores', icon: Waves },
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-2xs text-xs font-semibold transition-colors inline-flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-[#2d6a4f] text-white shadow-2xs'
                      : 'bg-white text-black border border-black/20 hover:bg-black/5'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Destination Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-black">
            Destinations & Hubs ({filteredDestinations.length})
          </h2>
          <span className="text-xs text-black/60 font-medium">Click any card for full details</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => {
            const isSaved = savedIds.includes(dest.id);
            return (
              <div
                key={dest.id}
                className="group bg-white rounded-sm overflow-hidden border border-black/15 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer relative"
              >
                <div 
                  className="relative h-64 w-full overflow-hidden bg-black"
                  onClick={() => onSelectDestination(dest)}
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop';
                    }}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#2d6a4f] text-white text-[10px] font-bold uppercase tracking-wider rounded-2xs border border-white/20 backdrop-blur-xs">
                    {dest.category}
                  </span>

                  {/* Bookmark Button */}
                  {onToggleSave && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(dest.id);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-[#2d6a4f] text-white backdrop-blur-xs border border-white/20 transition-all"
                      title={isSaved ? "Remove from Saved" : "Save destination"}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-white text-white' : 'text-white'}`} />
                    </button>
                  )}

                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-xs font-semibold text-white/90 block">
                      {dest.district} District
                    </span>
                    <h3 className="font-display font-bold text-xl text-white">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                <div 
                  className="p-5 flex-1 flex flex-col justify-between space-y-4"
                  onClick={() => onSelectDestination(dest)}
                >
                  <p className="text-xs text-black/70 leading-relaxed line-clamp-3">
                    {dest.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-black/10 text-xs">
                    <div className="flex items-center gap-1.5 text-[#2d6a4f] font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#2d6a4f]" />
                      <span>Best Time: {dest.bestTimeToVisit}</span>
                    </div>
                    <div className="flex items-center justify-between font-bold text-[#2d6a4f] pt-1">
                      <span>View Complete Guide</span>
                      <span className="group-hover:translate-x-1 transition-transform text-[#2d6a4f]">→</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Curated Multi-Day Circuits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#2d6a4f] px-3 py-1 rounded-full border border-white/20">
            RECOMMENDED CIRCUITS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-black">
            Curated Karnataka Itineraries
          </h2>
          <p className="text-xs sm:text-sm text-black/70">
            Masterfully designed routes that capture the historical, natural, and coastal richness in balanced daily stages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ITINERARIES.map((itinerary) => {
            const isExpanded = expandedItinerary === itinerary.id;
            return (
              <div
                key={itinerary.id}
                className="bg-white rounded-sm border border-black/15 overflow-hidden shadow-sm flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-black">
                  <img
                    src={itinerary.image}
                    alt={itinerary.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="px-2.5 py-0.5 bg-[#2d6a4f] text-white text-[10px] font-bold uppercase rounded-2xs border border-white/20">
                      {itinerary.duration}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white mt-1">
                      {itinerary.title}
                    </h3>
                    <p className="text-xs text-white/90">
                      {itinerary.route}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2d6a4f]">
                      Day-by-Day Journey:
                    </h4>
                    <div className="space-y-2">
                      {(isExpanded ? itinerary.days : itinerary.days.slice(0, 3)).map((day) => (
                        <div key={day.day} className="p-3 bg-black/5 rounded-xs border border-black/10 text-xs">
                          <div className="flex items-center gap-2 font-bold text-black mb-1">
                            <span className="text-[#2d6a4f] font-extrabold">Day {day.day}:</span>
                            <span>{day.title}</span>
                          </div>
                          <p className="text-black/70 leading-relaxed">
                            {day.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/10 flex items-center justify-between">
                    <button
                      onClick={() => setExpandedItinerary(isExpanded ? '' : itinerary.id)}
                      className="text-xs font-bold text-[#2d6a4f] hover:text-black transition-colors"
                    >
                      {isExpanded ? 'Show Less ↑' : `View All ${itinerary.days.length} Days ↓`}
                    </button>
                    <button
                      onClick={onOpenPlanTrip}
                      className="px-4 py-2 bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-xs font-bold uppercase tracking-wider rounded-2xs shadow-xs border border-white/20"
                    >
                      Customize Circuit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Essential Traveler Info & Connectivity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-sm border border-black/15 space-y-6">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-2xl text-black">
              Karnataka Travel Essentials
            </h3>
            <p className="text-xs sm:text-sm text-black/70">
              Important transportation, weather windows, and language guidance for seamless exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-black/5 p-4 rounded-xs border border-black/10 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 font-bold text-sm text-[#2d6a4f]">
                <Plane className="w-4 h-4 text-[#2d6a4f]" />
                Airports & Air Connectivity
              </div>
              <p className="text-black/70 leading-relaxed">
                Bengaluru (BLR) connects globally. Regional airports in Mangaluru, Belagavi, Hubballi, Mysuru, Bidar, and Shivamogga offer swift state connectivity.
              </p>
            </div>

            <div className="bg-black/5 p-4 rounded-xs border border-black/10 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 font-bold text-sm text-[#2d6a4f]">
                <Bus className="w-4 h-4 text-[#2d6a4f]" />
                KSRTC & KSTDC Transport
              </div>
              <p className="text-black/70 leading-relaxed">
                Airavat Club Class luxury volvo buses reach every remote corner. KSTDC operates organized all-inclusive package tours with official guides.
              </p>
            </div>

            <div className="bg-black/5 p-4 rounded-xs border border-black/10 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 font-bold text-sm text-[#2d6a4f]">
                <Sun className="w-4 h-4 text-[#2d6a4f]" />
                Weather Windows
              </div>
              <p className="text-black/70 leading-relaxed">
                <strong>Oct–Mar:</strong> Ideal for heritage monuments, wildlife & beaches.<br />
                <strong>Jul–Sep:</strong> Breathtaking monsoons in Western Ghats & waterfalls.
              </p>
            </div>

            <div className="bg-black/5 p-4 rounded-xs border border-black/10 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 font-bold text-sm text-[#2d6a4f]">
                <MessageSquare className="w-4 h-4 text-[#2d6a4f]" />
                Useful Kannada Phrases
              </div>
              <p className="text-black/70 leading-relaxed">
                • <em>Namaskara</em> (Hello / Greetings)<br />
                • <em>Dhanyavadagalu</em> (Thank you)<br />
                • <em>Eshtu?</em> (How much is this?)<br />
                • <em>Channagide</em> (It is very good!)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

