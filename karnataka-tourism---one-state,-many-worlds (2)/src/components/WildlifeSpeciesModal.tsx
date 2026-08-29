import React, { useEffect } from 'react';
import { WildlifeSpecies, ImageItem } from '../types';
import { X, Sparkles, MapPin, Shield, Trees, Eye, Compass, Info, Check } from 'lucide-react';

interface WildlifeSpeciesModalProps {
  species: WildlifeSpecies | null;
  onClose: () => void;
  onViewImage?: (image: ImageItem, gallery?: ImageItem[]) => void;
}

export const WildlifeSpeciesModal: React.FC<WildlifeSpeciesModalProps> = ({
  species,
  onClose,
  onViewImage,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (species) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [species, onClose]);

  if (!species) return null;

  const handleOpenPhoto = () => {
    if (!onViewImage) return;
    onViewImage({
      url: species.image,
      title: `${species.name} (${species.scientificName})`,
      location: `Habitats: ${species.bestSanctuaries.join(', ')}`,
      category: `Status: ${species.status}`,
      caption: `${species.description} | Conservation Status: ${species.status}. Fun Fact: ${species.funFact}`
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white text-neutral-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close animal popup"
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-[#2d6a4f] text-white backdrop-blur-md border border-white/20 shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Photo Section */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-950">
          <img
            src={species.image}
            alt={species.name}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop';
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

          {/* Top badges */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-[#2d6a4f] text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/20 shadow-sm flex items-center gap-1.5">
              <Trees className="w-3.5 h-3.5 text-[#52b788]" />
              Karnataka Fauna
            </span>
            <span className="px-3 py-1 bg-amber-600/90 text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/20 shadow-sm flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-white" />
              {species.status}
            </span>
          </div>

          {/* Bottom Title inside photo */}
          <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white drop-shadow-md">
              {species.name}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-200 italic font-medium">
              Scientific Name: {species.scientificName}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Fun Fact Highlight */}
          <div className="bg-[#f4fbf7] p-4 sm:p-5 rounded-2xl border border-[#2d6a4f]/25 text-xs sm:text-sm text-neutral-800 space-y-1.5 shadow-2xs">
            <div className="flex items-center gap-2 text-[#2d6a4f] font-bold uppercase text-xs tracking-wider">
              <Sparkles className="w-4 h-4 text-[#2d6a4f]" />
              Did You Know?
            </div>
            <p className="text-neutral-700 leading-relaxed font-light">
              {species.funFact}
            </p>
          </div>

          {/* Species Description */}
          <div className="space-y-2">
            <h3 className="font-display font-bold text-base text-neutral-900 flex items-center gap-2">
              <Info className="w-4 h-4 text-[#2d6a4f]" />
              Habitat & Behavioral Profile
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              {species.description}
            </p>
          </div>

          {/* Prime Sanctuaries */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-base text-neutral-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#2d6a4f]" />
              Top Reserves to Spot in Karnataka:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {species.bestSanctuaries.map((sanctuary, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center gap-2.5 text-xs text-neutral-800 font-medium"
                >
                  <Check className="w-4 h-4 text-[#2d6a4f] shrink-0" />
                  <span>{sanctuary}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Safari Viewing Advice */}
          <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200/80 text-xs text-amber-900 space-y-1">
            <span className="font-bold flex items-center gap-1.5 text-amber-800">
              <Compass className="w-4 h-4 text-amber-700" />
              Sighting & Photography Tips:
            </span>
            <p className="text-amber-900/80 leading-relaxed font-light">
              Early morning (6:00 AM – 8:30 AM) and late afternoon (3:30 PM – 6:00 PM) safaris offer the highest probability of sightings near waterholes and riverbanks. Respect silence and maintain at least 20 meters of distance at all times.
            </p>
          </div>

          {/* Footer Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-200">
            {onViewImage && (
              <button
                type="button"
                onClick={handleOpenPhoto}
                className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-full border border-neutral-300 transition-colors flex items-center gap-2"
              >
                <Eye className="w-4 h-4 text-[#2d6a4f]" />
                View Fullscreen Photo
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm transition-all ml-auto"
            >
              Close Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
