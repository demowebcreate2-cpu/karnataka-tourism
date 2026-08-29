import React, { useState, useMemo } from 'react';
import { DESTINATIONS, HERITAGE_SITES, FESTIVALS, WILDLIFE_SANCTUARIES, ADVENTURE_ACTIVITIES } from '../data';
import { Destination, PageId } from '../types';
import { Search, X, MapPin, Compass, Sparkles, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDestination: (dest: Destination) => void;
  onNavigate: (page: PageId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDestination,
  onNavigate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return { destinations: [], heritage: [], wildlife: [], adventure: [] };
    const q = searchQuery.toLowerCase();

    return {
      destinations: DESTINATIONS.filter(d => 
        d.name.toLowerCase().includes(q) || 
        d.district.toLowerCase().includes(q) || 
        d.tagline.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q)
      ),
      heritage: HERITAGE_SITES.filter(h => 
        h.name.toLowerCase().includes(q) || 
        h.dynasty.toLowerCase().includes(q) || 
        h.location.toLowerCase().includes(q)
      ),
      wildlife: WILDLIFE_SANCTUARIES.filter(w => 
        w.name.toLowerCase().includes(q) || 
        w.district.toLowerCase().includes(q) || 
        w.keyAnimals.some(a => a.toLowerCase().includes(q))
      ),
      adventure: ADVENTURE_ACTIVITIES.filter(a => 
        a.title.toLowerCase().includes(q) || 
        a.location.toLowerCase().includes(q) || 
        a.category.toLowerCase().includes(q)
      )
    };
  }, [searchQuery]);

  if (!isOpen) return null;

  const totalResults = 
    filteredResults.destinations.length + 
    filteredResults.heritage.length + 
    filteredResults.wildlife.length + 
    filteredResults.adventure.length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-start justify-center p-3 sm:p-6 pt-12 sm:pt-20 animate-fadeIn" onClick={onClose}>
      <div 
        className="bg-white text-neutral-900 rounded-3xl max-w-2xl w-full shadow-2xl border border-neutral-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center gap-3 bg-neutral-50/80">
          <Search className="w-5 h-5 text-[#2d6a4f] shrink-0" />
          <input
            type="text"
            placeholder="Search Hampi, Tiger safari, Coorg, Trekking, Temples, Mysuru..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base font-medium text-neutral-900 placeholder-neutral-400 focus:outline-none"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200/50 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="px-3 py-1 text-xs text-neutral-600 hover:text-neutral-900 uppercase font-bold border border-neutral-300 rounded-full bg-white transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {!searchQuery.trim() ? (
            <div className="py-8 text-center space-y-4">
              <Compass className="w-10 h-10 text-[#2d6a4f] mx-auto opacity-80" />
              <p className="text-xs sm:text-sm text-neutral-500 font-light">
                Popular searches across Karnataka:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-lg mx-auto">
                {['Hampi', 'Tiger Safari', 'Coorg', 'Dandeli Rafting', 'Gokarna', 'Mysore Palace', 'Badami Caves'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1.5 bg-neutral-100 hover:bg-[#2d6a4f] hover:text-white text-neutral-700 text-xs font-medium rounded-full transition-all border border-neutral-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-neutral-500 text-xs sm:text-sm">
              No results found for "<span className="font-semibold text-neutral-800">{searchQuery}</span>". Try searching for destinations, temples, safaris, or activities.
            </div>
          ) : (
            <div className="space-y-5">
              {/* Destinations Matches */}
              {filteredResults.destinations.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#2d6a4f] mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Destinations ({filteredResults.destinations.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredResults.destinations.map((d) => (
                      <div
                        key={d.id}
                        onClick={() => {
                          onClose();
                          onSelectDestination(d);
                        }}
                        className="p-3 bg-neutral-50 hover:bg-[#f4fbf7] hover:border-[#2d6a4f]/40 rounded-2xl cursor-pointer flex items-center justify-between transition-all border border-neutral-200 shadow-2xs group"
                      >
                        <div className="flex items-center gap-3.5">
                          <img
                            src={d.image}
                            alt={d.name}
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop';
                            }}
                            className="w-12 h-12 object-cover rounded-xl border border-neutral-200"
                          />
                          <div>
                            <h5 className="font-bold text-sm text-neutral-900 group-hover:text-[#2d6a4f] transition-colors">{d.name}</h5>
                            <span className="text-xs text-neutral-500">{d.district} • {d.tagline}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#2d6a4f] group-hover:translate-x-1 transition-transform" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Heritage Sites */}
              {filteredResults.heritage.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#2d6a4f] mb-2.5">
                    Heritage & UNESCO Sites ({filteredResults.heritage.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredResults.heritage.map((h) => (
                      <div
                        key={h.id}
                        onClick={() => {
                          onClose();
                          onNavigate('heritage');
                        }}
                        className="p-3 bg-neutral-50 hover:bg-[#f4fbf7] hover:border-[#2d6a4f]/40 rounded-2xl cursor-pointer flex items-center justify-between border border-neutral-200 transition-all shadow-2xs group"
                      >
                        <div>
                          <span className="font-semibold text-xs sm:text-sm text-neutral-900 group-hover:text-[#2d6a4f] block">{h.name}</span>
                          <span className="text-[11px] text-neutral-500">{h.dynasty} • {h.location}</span>
                        </div>
                        <span className="text-xs text-[#2d6a4f] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          View Heritage →
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Wildlife Sanctuaries */}
              {filteredResults.wildlife.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#2d6a4f] mb-2.5">
                    Wildlife Reserves & Sanctuaries ({filteredResults.wildlife.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredResults.wildlife.map((w) => (
                      <div
                        key={w.id}
                        onClick={() => {
                          onClose();
                          onNavigate('wildlife');
                        }}
                        className="p-3 bg-neutral-50 hover:bg-[#f4fbf7] hover:border-[#2d6a4f]/40 rounded-2xl cursor-pointer flex items-center justify-between border border-neutral-200 transition-all shadow-2xs group"
                      >
                        <div>
                          <span className="font-semibold text-xs sm:text-sm text-neutral-900 group-hover:text-[#2d6a4f] block">{w.name}</span>
                          <span className="text-[11px] text-neutral-500">{w.type} • {w.district}</span>
                        </div>
                        <span className="text-xs text-[#2d6a4f] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Safari Details →
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Adventure */}
              {filteredResults.adventure.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#2d6a4f] mb-2.5">
                    Adventure & Outdoor ({filteredResults.adventure.length})
                  </h4>
                  <div className="space-y-2">
                    {filteredResults.adventure.map((a) => (
                      <div
                        key={a.id}
                        onClick={() => {
                          onClose();
                          onNavigate('adventure');
                        }}
                        className="p-3 bg-neutral-50 hover:bg-[#f4fbf7] hover:border-[#2d6a4f]/40 rounded-2xl cursor-pointer flex items-center justify-between border border-neutral-200 transition-all shadow-2xs group"
                      >
                        <div>
                          <span className="font-semibold text-xs sm:text-sm text-neutral-900 group-hover:text-[#2d6a4f] block">{a.title}</span>
                          <span className="text-[11px] text-neutral-500">{a.difficulty} • {a.location}</span>
                        </div>
                        <span className="text-xs text-[#2d6a4f] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Explore →
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


