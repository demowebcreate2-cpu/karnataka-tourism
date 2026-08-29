import React, { useState } from 'react';
import { WILDLIFE_SANCTUARIES, WILDLIFE_SPECIES } from '../data';
import { WildlifeSanctuary, WildlifeSpecies, ImageItem } from '../types';
import { Compass, Calendar, Clock, MapPin, Shield, Award, Info, Trees, Eye, Heart, Camera, VolumeX, Ban, Shirt, Check, Sparkles, AlertCircle } from 'lucide-react';
import { WildlifeSpeciesModal } from './WildlifeSpeciesModal';

interface WildlifePageProps {
  onViewImage?: (image: ImageItem, gallery?: ImageItem[]) => void;
  savedIds?: string[];
  onToggleSave?: (id: string) => void;
}

export const WildlifePage: React.FC<WildlifePageProps> = ({
  onViewImage,
  savedIds = [],
  onToggleSave,
}) => {
  const [selectedSanctuary, setSelectedSanctuary] = useState<WildlifeSanctuary>(WILDLIFE_SANCTUARIES[0]);
  const [selectedSpecies, setSelectedSpecies] = useState<WildlifeSpecies | null>(null);

  // Build full galleries for sanctuaries and species
  const allSanctuaryGallery: ImageItem[] = WILDLIFE_SANCTUARIES.map(s => ({
    url: s.image,
    title: s.name,
    location: `${s.district} • ${s.area}`,
    category: s.type,
    caption: `${s.description} | Key Animals: ${s.keyAnimals.join(', ')} | Best Season: ${s.bestSeason}`
  }));

  const allSpeciesGallery: ImageItem[] = WILDLIFE_SPECIES.map(sp => ({
    url: sp.image,
    title: `${sp.name} (${sp.scientificName})`,
    location: `Habitats: ${sp.bestSanctuaries.slice(0, 2).join(', ')}`,
    category: `Status: ${sp.status}`,
    caption: `${sp.description} | Conservation Status: ${sp.status}. Did you know? ${sp.funFact}`
  }));

  const handleSanctuaryImageClick = (sanctuary: WildlifeSanctuary) => {
    if (!onViewImage) return;
    const currentItem: ImageItem = {
      url: sanctuary.image,
      title: sanctuary.name,
      location: `${sanctuary.district} • ${sanctuary.area}`,
      category: sanctuary.type,
      caption: `${sanctuary.description} | Key Animals: ${sanctuary.keyAnimals.join(', ')} | Safari: ${sanctuary.safariTypes.join(', ')}`
    };
    onViewImage(currentItem, allSanctuaryGallery);
  };

  const handleSpeciesClick = (species: WildlifeSpecies) => {
    setSelectedSpecies(species);
  };

  return (
    <div className="space-y-16 py-8 pb-20">
      {/* 1. Page Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#1b4332] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden border border-[#2d6a4f]/40 shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#1b4332]/90 text-white text-xs font-bold uppercase tracking-widest rounded-full border border-white/20 shadow-sm backdrop-blur-md">
              <Trees className="w-3.5 h-3.5 text-[#52b788]" />
              WILD KARNATAKA • ECO-SANCTUARIES
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Kingdom of Big Cats & Wild Elephants
            </h1>
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
              Karnataka is India’s premier biodiversity sanctuary state, harboring over 25% of India’s wild Asian elephant herd and the second-highest tiger population. Explore the lush Nilgiri Biosphere, dense shola canopies, and serene Kabini backwater boat safaris.
            </p>
          </div>
        </div>
      </section>

      {/* 2. State Wildlife Conservation Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-xs text-center space-y-1.5 hover:shadow-md transition-shadow">
            <span className="text-3xl sm:text-4xl font-display font-bold text-[#2d6a4f]">563+</span>
            <span className="text-xs font-bold text-neutral-900 block uppercase tracking-wider">Royal Bengal Tigers</span>
            <span className="text-[11px] text-neutral-500 font-medium">2nd Highest in India</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-xs text-center space-y-1.5 hover:shadow-md transition-shadow">
            <span className="text-3xl sm:text-4xl font-display font-bold text-[#2d6a4f]">6,049+</span>
            <span className="text-xs font-bold text-neutral-900 block uppercase tracking-wider">Wild Asian Elephants</span>
            <span className="text-[11px] text-neutral-500 font-medium">&gt;25% of India's Total</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-xs text-center space-y-1.5 hover:shadow-md transition-shadow">
            <span className="text-3xl sm:text-4xl font-display font-bold text-[#2d6a4f]">5</span>
            <span className="text-xs font-bold text-neutral-900 block uppercase tracking-wider">Tiger Reserves</span>
            <span className="text-[11px] text-neutral-500 font-medium">Project Tiger Apex Zones</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-xs text-center space-y-1.5 hover:shadow-md transition-shadow">
            <span className="text-3xl sm:text-4xl font-display font-bold text-[#2d6a4f]">30+</span>
            <span className="text-xs font-bold text-neutral-900 block uppercase tracking-wider">Wildlife Sanctuaries</span>
            <span className="text-[11px] text-neutral-500 font-medium">Western Ghats Hotspot</span>
          </div>
        </div>
      </section>

      {/* 3. National Parks & Safari Guide Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-neutral-200 pb-4">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900">
              Premier Reserves & Sanctuaries
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light">
              Detailed safari types, flora, fauna, and optimal seasons (Click photos to view full details)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left selector */}
          <div className="lg:col-span-4 space-y-3">
            {WILDLIFE_SANCTUARIES.map((sanctuary) => (
              <button
                key={sanctuary.id}
                onClick={() => setSelectedSanctuary(sanctuary)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all ${
                  selectedSanctuary.id === sanctuary.id
                    ? 'bg-[#f4fbf7] border-[#2d6a4f] ring-2 ring-[#2d6a4f]/20 shadow-sm'
                    : 'bg-white border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-display font-bold text-base text-neutral-900">
                    {sanctuary.name}
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#2d6a4f] text-white text-[10px] font-bold uppercase rounded-full shadow-xs">
                    {sanctuary.type}
                  </span>
                </div>
                <span className="text-xs text-neutral-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2d6a4f] shrink-0" />
                  {sanctuary.district} • {sanctuary.area}
                </span>
              </button>
            ))}
          </div>

          {/* Right Detailed Sanctuary Feature */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-md flex flex-col">
            <div 
              className="relative h-72 sm:h-96 w-full overflow-hidden bg-neutral-950 group cursor-pointer"
              onClick={() => handleSanctuaryImageClick(selectedSanctuary)}
            >
              <img
                src={selectedSanctuary.image}
                alt={selectedSanctuary.name}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop';
                }}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Lightbox / Info Badge */}
              <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-black/65 hover:bg-[#2d6a4f] text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-md flex items-center gap-1.5 transition-all">
                <Eye className="w-3.5 h-3.5" />
                <span>View Full Photo & Info</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 bg-[#2d6a4f] text-white text-xs font-bold uppercase rounded-full border border-white/20 shadow-sm">
                  {selectedSanctuary.type}
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-4xl text-white drop-shadow-md">
                  {selectedSanctuary.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200">
                  {selectedSanctuary.district} • Best Season: {selectedSanctuary.bestSeason}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
                {selectedSanctuary.description}
              </p>

              {/* Key Wildlife Spotted */}
              <div className="bg-[#f4fbf7] p-5 rounded-2xl border border-[#2d6a4f]/20 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2d6a4f] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Key Wildlife Species Sighted:
                  </span>
                  <span className="text-[11px] text-neutral-400 font-medium">Click animal for info</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedSanctuary.keyAnimals.map((animal, i) => {
                    const matched = WILDLIFE_SPECIES.find(
                      (s) =>
                        animal.toLowerCase().includes(s.name.toLowerCase()) ||
                        s.name.toLowerCase().includes(animal.toLowerCase())
                    );
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          if (matched) {
                            setSelectedSpecies(matched);
                          } else {
                            setSelectedSpecies({
                              id: `custom-${i}`,
                              name: animal,
                              scientificName: 'Native Karnataka Wildlife Fauna',
                              status: 'Vulnerable',
                              image: selectedSanctuary.image,
                              bestSanctuaries: [selectedSanctuary.name, 'Bandipur Tiger Reserve', 'Nagarhole National Park'],
                              funFact: `${animal} is an integral part of the protected ecosystem in ${selectedSanctuary.name}.`,
                              description: `Sighted during safaris in ${selectedSanctuary.name} (${selectedSanctuary.district}). Best observed during ${selectedSanctuary.bestSeason}.`
                            });
                          }
                        }}
                        className="px-3 py-1 bg-white hover:bg-[#2d6a4f] text-neutral-800 hover:text-white text-xs font-semibold rounded-full border border-neutral-200 hover:border-[#2d6a4f] shadow-2xs flex items-center gap-1.5 transition-all cursor-pointer group/chip"
                      >
                        <Check className="w-3.5 h-3.5 text-[#2d6a4f] group-hover/chip:text-white" />
                        <span>{animal}</span>
                        <Info className="w-3 h-3 text-neutral-400 group-hover/chip:text-white ml-0.5 opacity-60 group-hover/chip:opacity-100" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Safari Types & Timings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200/80 space-y-2">
                  <span className="font-bold text-sm text-[#2d6a4f] flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-[#2d6a4f]" />
                    Safari Options
                  </span>
                  <ul className="space-y-1.5 text-neutral-700">
                    {selectedSanctuary.safariTypes.map((type, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a4f]"></span>
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200/80 space-y-2">
                  <span className="font-bold text-sm text-[#2d6a4f] flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#2d6a4f]" />
                    Safari Timings & Booking
                  </span>
                  <p className="text-neutral-900 font-semibold">{selectedSanctuary.safariTimings}</p>
                  <p className="text-[11px] text-neutral-500 leading-normal">Bookings open in advance through Jungle Lodges & Resorts (JLR) or Karnataka Forest Dept portals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Star Species of Karnataka with Full Interactive Pop Up Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#2d6a4f] px-3.5 py-1 rounded-full border border-white/20 shadow-sm">
            FAUNA PROFILE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-neutral-900">
            Iconic Wild Species of Karnataka
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 font-light">
            Click on any species photo to view high-resolution photography and conservation details
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WILDLIFE_SPECIES.map((species) => (
            <div
              key={species.id}
              onClick={() => handleSpeciesClick(species)}
              className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer hover:border-[#2d6a4f]/40"
            >
              <div className="relative h-52 w-full overflow-hidden bg-neutral-950">
                <img
                  src={species.image}
                  alt={species.name}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=600&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#2d6a4f] text-white text-[10px] font-bold uppercase rounded-full shadow-sm border border-white/20 backdrop-blur-md">
                  {species.status}
                </span>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2.5 py-1 bg-black/70 rounded-full flex items-center gap-1 backdrop-blur-sm">
                    <Eye className="w-3 h-3 text-[#52b788]" /> Click for Info
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
                <div>
                  <h4 className="font-display font-bold text-lg text-neutral-900 group-hover:text-[#2d6a4f] transition-colors">
                    {species.name}
                  </h4>
                  <span className="text-[11px] text-neutral-500 italic block">
                    {species.scientificName}
                  </span>
                  <p className="text-xs text-neutral-600 leading-relaxed mt-2 line-clamp-3 font-light">
                    {species.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 text-[11px] text-[#2d6a4f] bg-[#f4fbf7] p-2.5 rounded-xl">
                  <strong>Did you know?</strong> {species.funFact}
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSpeciesClick(species);
                  }}
                  className="w-full py-2 px-3 bg-neutral-100 hover:bg-[#2d6a4f] text-neutral-800 hover:text-white text-xs font-semibold rounded-xl border border-neutral-200 transition-all flex items-center justify-center gap-1.5 shadow-2xs group-hover:bg-[#2d6a4f] group-hover:text-white"
                >
                  <Eye className="w-3.5 h-3.5 text-[#52b788]" />
                  View Full Animal Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Responsible Safari Code of Ethics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 text-neutral-900">
            <Shield className="w-6 h-6 text-[#2d6a4f]" />
            <h3 className="font-display font-bold text-xl sm:text-2xl text-neutral-900">
              Responsible Eco-Tourism & Safari Guidelines
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs text-neutral-700">
            <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#2d6a4f] text-sm">
                <VolumeX className="w-4 h-4 text-[#2d6a4f]" />
                Maintain Silence
              </div>
              <p className="text-neutral-600 leading-relaxed font-light">
                Animals have sensitive hearing. Loud noises, mobile ringtones, and flash photography are strictly prohibited during safaris.
              </p>
            </div>
            <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#2d6a4f] text-sm">
                <Ban className="w-4 h-4 text-[#2d6a4f]" />
                Zero Plastic Zone
              </div>
              <p className="text-neutral-600 leading-relaxed font-light">
                All Karnataka national parks are zero single-use plastic zones. Carry reusable water bottles and leave no trace.
              </p>
            </div>
            <div className="bg-neutral-50 p-5 rounded-2xl border border-neutral-200/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#2d6a4f] text-sm">
                <Shirt className="w-4 h-4 text-[#2d6a4f]" />
                Earthy Camouflage Attire
              </div>
              <p className="text-neutral-600 leading-relaxed font-light">
                Wear neutral khaki, olive green, or brown clothing to blend harmoniously into the jungle landscape without alarming fauna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Animal Species Detail Pop-Up Modal */}
      <WildlifeSpeciesModal
        species={selectedSpecies}
        onClose={() => setSelectedSpecies(null)}
        onViewImage={onViewImage}
      />
    </div>
  );
};

