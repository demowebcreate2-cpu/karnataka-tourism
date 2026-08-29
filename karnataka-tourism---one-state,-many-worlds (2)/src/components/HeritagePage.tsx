import React, { useState } from 'react';
import { HERITAGE_SITES, FESTIVALS, CRAFTS, CULINARY_ITEMS } from '../data';
import { HeritageSite } from '../types';
import { Award, Compass, Sparkles, MapPin, Calendar, CheckCircle2, BookOpen, Utensils, Palette, Landmark, Shield, Eye, Info, Search, Heart, Music, Check } from 'lucide-react';
import { ImageItem } from './ImageViewerModal';

interface HeritagePageProps {
  onViewImage?: (image: ImageItem, gallery?: ImageItem[]) => void;
  savedIds?: string[];
  onToggleSave?: (id: string) => void;
}

export const HeritagePage: React.FC<HeritagePageProps> = ({
  onViewImage,
  savedIds = [],
  onToggleSave,
}) => {
  const [activeTab, setActiveTab] = useState<'unesco' | 'festivals' | 'crafts' | 'cuisine'>('unesco');
  const [selectedSite, setSelectedSite] = useState<HeritageSite>(HERITAGE_SITES[0]);
  const [activeDynasty, setActiveDynasty] = useState<number>(2); // Default to Vijayanagara / Hampi
  const [searchQuery, setSearchQuery] = useState('');

  const dynasties = [
    {
      name: 'Badami Chalukyas',
      period: '543 – 753 CE',
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop',
      desc: 'Pioneered rock-cut cave temples in Badami and the experimental cradle of Hindu architecture in Aihole and UNESCO Pattadakal.',
      monuments: ['Badami Cave Temples', 'Virupaksha Temple Pattadakal', 'Durga Temple Aihole']
    },
    {
      name: 'Hoysala Empire',
      period: '1026 – 1343 CE',
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop',
      desc: 'Mastered star-shaped soapstone filigree carvings, Madanika bracket figures, and lathe-turned pillars in Belur, Halebidu & Somanathapura (UNESCO).',
      monuments: ['Chennakeshava Temple Belur', 'Hoysaleshwara Temple Halebidu', 'Keshava Temple Somanathapura']
    },
    {
      name: 'Vijayanagara Empire (Hampi)',
      period: '1336 – 1646 CE',
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop',
      desc: 'Built the monumental capital of Hampi on the Tungabhadra river banks, world-renowned for the Stone Chariot, musical pillars, and 1,600 ruins.',
      monuments: ['Stone Chariot Vijaya Vittala', 'Virupaksha Gopuram', 'Lotus Mahal & Elephant Stables']
    },
    {
      name: 'Wadiyar Dynasty of Mysuru',
      period: '1399 – 1950 CE',
      image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=800&auto=format&fit=crop',
      desc: 'Patronized Indo-Saracenic palace architecture, classical Carnatic arts, Mysore silk weaving, sandalwood carvings, and the royal Dasara pageant.',
      monuments: ['Mysore Royal Palace', 'Jaganmohan Palace & Art Gallery', 'Chamundeshwari Hill Shrine']
    }
  ];

  return (
    <div className="space-y-16 py-8 pb-20">
      {/* 1. Page Hero: Ancient Empires to Sun-Kissed Coast & A Millennia of Art, Faith & Splendor */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#1b4332] rounded-sm p-8 sm:p-14 text-white relative overflow-hidden border border-[#2d6a4f]/40 shadow-xl">
          <div className="absolute inset-0 opacity-10 green-subtle-pattern pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1b4332] text-white text-xs font-bold uppercase tracking-widest rounded-2xs border border-white/20">
              <Landmark className="w-3.5 h-3.5 text-white" />
              ANCIENT EMPIRES TO SUN-KISSED COAST
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              A Millennia of Art, Faith & Splendor
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
              From the monumental 1,600 ruins at the Group of Monuments at Hampi and sacred Hoysala soapstone sanctuaries to royal palaces and 45+ GI-protected master crafts, Karnataka is a living cradle of civilizational heritage.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Section Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex border-b border-black/15 gap-3 sm:gap-6 overflow-x-auto pb-1 bg-white p-2 rounded-xs border shadow-2xs">
          {[
            { id: 'unesco', label: 'UNESCO & Royal Monuments', icon: Landmark },
            { id: 'festivals', label: 'Celebrations & Living Festivals', icon: Calendar },
            { id: 'crafts', label: 'Master Crafts & GI Certifications', icon: Palette },
            { id: 'cuisine', label: 'Royal Culinary Heritage', icon: Utensils },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all relative shrink-0 rounded-xs flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-[#2d6a4f] text-white shadow-xs'
                    : 'text-black/70 hover:text-black hover:bg-black/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. TAB 1: UNESCO SITES & GROUP OF MONUMENTS AT HAMPI */}
      {activeTab === 'unesco' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fadeIn">
          {/* Site Selector + In-Depth Feature */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left selector column */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-black block">
                Select a Heritage Landmark:
              </span>
              {HERITAGE_SITES.map((site) => (
                <button
                  key={site.id}
                  onClick={() => setSelectedSite(site)}
                  className={`w-full text-left p-4 rounded-sm border transition-all ${
                    selectedSite.id === site.id
                      ? 'bg-black/5 border-[#2d6a4f] ring-1 ring-[#2d6a4f] shadow-xs'
                      : 'bg-white border-black/15 hover:bg-black/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-bold text-base text-black">
                      {site.name}
                    </span>
                    {site.unesco && (
                      <span className="px-2 py-0.5 bg-[#2d6a4f] text-white text-[9px] font-bold uppercase rounded-2xs shadow-2xs border border-white/20">
                        UNESCO
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-black/60 block">
                    {site.dynasty}
                  </span>
                </button>
              ))}
            </div>

            {/* Right Detailed Feature Card */}
            <div className="lg:col-span-8 bg-white rounded-sm border border-black/15 overflow-hidden shadow-sm flex flex-col">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-black">
                <img
                  src={selectedSite.image}
                  alt={selectedSite.name}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Interactive Lightbox Button */}
                {onViewImage && (
                  <button
                    onClick={() => onViewImage({
                      url: selectedSite.image,
                      title: selectedSite.name,
                      location: selectedSite.location,
                      caption: selectedSite.description,
                      category: selectedSite.unesco ? 'UNESCO World Heritage' : 'Heritage Monument'
                    })}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/80 hover:bg-[#2d6a4f] text-white backdrop-blur-xs border border-white/20 transition-all"
                    title="View Fullscreen"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                )}

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-[#2d6a4f] text-white text-xs font-bold uppercase rounded-2xs border border-white/20">
                      {selectedSite.era}
                    </span>
                    <span className="text-xs text-white/90 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-white" />
                      {selectedSite.location}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-4xl text-white">
                    {selectedSite.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80">
                    Architectural Style: {selectedSite.architecturalStyle}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                  {selectedSite.description}
                </p>

                <div className="bg-black/5 p-5 rounded-xs border border-black/10 space-y-3">
                  <h4 className="font-display font-bold text-sm text-[#2d6a4f] uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#2d6a4f]" />
                    Key Architectural Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-black/80">
                    {selectedSite.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2d6a4f] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-white rounded-xs border border-black/15 space-y-1">
                    <span className="font-bold text-[#2d6a4f] flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#2d6a4f]" />
                      Historical Significance
                    </span>
                    <p className="text-black/70 leading-relaxed">{selectedSite.historicalSignificance}</p>
                  </div>
                  <div className="p-4 bg-white rounded-xs border border-black/15 space-y-1">
                    <span className="font-bold text-[#2d6a4f] flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-[#2d6a4f]" />
                      Visitor Practical Tip
                    </span>
                    <p className="text-black/70 leading-relaxed">{selectedSite.visitorTips}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Historical Dynasties Showcase */}
          <div className="bg-white p-8 rounded-sm border border-black/15 space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2d6a4f]">
                CHRONOLOGY OF RULERS
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-black">
                Dynasties That Shaped Karnataka
              </h3>
              <p className="text-xs text-black/60">
                Click any empire to view architectural legacies and signature monuments
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {dynasties.map((dyn, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveDynasty(idx)}
                  className={`p-4 rounded-xs border cursor-pointer transition-all ${
                    activeDynasty === idx
                      ? 'bg-black/5 border-[#2d6a4f] ring-2 ring-[#2d6a4f]/30 shadow-md'
                      : 'bg-white border-black/15 hover:bg-black/5 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-black font-bold text-sm">{dyn.name}</span>
                  </div>
                  <span className="text-[10px] text-[#2d6a4f] font-semibold block mb-2">{dyn.period}</span>
                  <p className="text-xs text-black/70 leading-relaxed">
                    {dyn.desc}
                  </p>

                  <div className="mt-3 pt-2 border-t border-black/10 space-y-1">
                    <span className="text-[10px] font-bold uppercase text-[#2d6a4f] block">Monuments:</span>
                    {dyn.monuments.map((m, mIdx) => (
                      <div key={mIdx} className="text-[11px] text-black/80 flex items-center gap-1">
                        <span className="text-[#2d6a4f]">•</span>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. TAB 2: FESTIVALS & LIVING TRADITIONS */}
      {activeTab === 'festivals' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FESTIVALS.map((fest) => (
              <div
                key={fest.id}
                className="bg-white rounded-sm border border-black/15 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col group"
              >
                <div className="relative h-64 w-full overflow-hidden bg-black">
                  <img
                    src={fest.image}
                    alt={fest.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                  
                  {/* Lightbox trigger */}
                  {onViewImage && (
                    <button
                      onClick={() => onViewImage({
                        url: fest.image,
                        title: fest.name,
                        location: fest.location,
                        caption: fest.description,
                        category: 'Living Cultural Festival'
                      })}
                      className="absolute top-3 left-3 p-2 rounded-full bg-black/80 hover:bg-[#2d6a4f] text-white backdrop-blur-xs border border-white/20 transition-all"
                      title="View Photo"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#2d6a4f] text-white text-[10px] font-bold uppercase rounded-2xs border border-white/20">
                    {fest.duration}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-semibold text-white/90 block">
                      {fest.kannadaName} • {fest.location}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white">
                      {fest.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#2d6a4f]">
                      <Calendar className="w-4 h-4 text-[#2d6a4f]" />
                      <span>{fest.month} ({fest.seasonPeriod})</span>
                    </div>
                    <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                      {fest.description}
                    </p>

                    <div className="bg-black/5 p-3.5 rounded-xs border border-black/10 space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#2d6a4f] block">
                        Signature Rituals & Highlights:
                      </span>
                      <ul className="text-xs text-black/80 space-y-1">
                        {fest.keyRituals.map((r, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#2d6a4f] shrink-0" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2 text-xs text-black/60 italic border-t border-black/10">
                    Cultural Significance: {fest.culturalSignificance}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. TAB 3: MASTER CRAFTS & 45+ GI TAGS */}
      {activeTab === 'crafts' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
          <div className="bg-white p-6 rounded-sm border border-black/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2d6a4f] flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#2d6a4f]" />
                GEOGRAPHICAL INDICATION (GI) HERITAGE
              </span>
              <h3 className="font-display font-bold text-xl text-black">
                Authentic Artisanal Legacies of Karnataka
              </h3>
              <p className="text-xs text-black/70">
                Karnataka leads India with over 45 registered GI-protected master handicrafts, silks, and carvings.
              </p>
            </div>
            <div className="px-4 py-2 bg-[#2d6a4f] text-white text-xs font-bold uppercase tracking-wider rounded-xs shrink-0 shadow-2xs border border-white/20">
              45+ Registered GI Tags
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CRAFTS.map((craft) => (
              <div
                key={craft.id}
                className="bg-white rounded-sm border border-black/15 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-black">
                  <img
                    src={craft.image}
                    alt={craft.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {craft.giTag && (
                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-[#2d6a4f] text-white text-[9px] font-bold uppercase rounded-2xs shadow-xs border border-white/20">
                      GI Certified
                    </span>
                  )}
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 text-white text-[10px] rounded-2xs flex items-center gap-1 border border-white/20">
                    <MapPin className="w-3 h-3 text-white" />
                    {craft.origin}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#2d6a4f] block">
                      {craft.category}
                    </span>
                    <h4 className="font-display font-bold text-base text-black mt-0.5">
                      {craft.name}
                    </h4>
                    <p className="text-xs text-black/70 leading-relaxed mt-2 line-clamp-3">
                      {craft.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-black/10 text-[11px] text-[#2d6a4f]">
                    <strong>Artisan Lore:</strong> {craft.artisanStory}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. TAB 4: ROYAL CUISINE */}
      {activeTab === 'cuisine' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CULINARY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-sm border border-black/15 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col sm:flex-row group"
              >
                <div className="sm:w-1/2 h-56 sm:h-auto overflow-hidden bg-black relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 text-white text-[10px] font-bold uppercase rounded-2xs flex items-center gap-1 border border-white/20">
                    <MapPin className="w-3 h-3 text-white" />
                    {item.region}
                  </span>
                </div>

                <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="font-display font-bold text-xl text-black">
                      {item.name}
                    </h4>
                    <p className="text-xs text-black/70 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-black/10 text-xs">
                    <div>
                      <span className="font-bold text-[#2d6a4f]">Flavor Profile: </span>
                      <span className="text-black/80">{item.flavorProfile}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#2d6a4f]">Famous Hubs: </span>
                      <span className="text-black/70">{item.mustTryPlaces}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

