import React from 'react';
import { Destination, ImageItem } from '../types';
import { X, MapPin, Calendar, Clock, CreditCard, Navigation, Award, Compass, Sparkles, Plane, Train, Car, Star, Eye, Image as ImageIcon } from 'lucide-react';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onPlanTripForDestination: (dest: Destination) => void;
  onViewImage?: (item: ImageItem, gallery?: ImageItem[]) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onPlanTripForDestination,
  onViewImage,
}) => {
  if (!destination) return null;

  const handleHeroImageClick = () => {
    if (onViewImage) {
      const galleryItems: ImageItem[] = (destination.gallery && destination.gallery.length > 0)
        ? destination.gallery.map((url, i) => ({
            url,
            title: `${destination.name} - View ${i + 1}`,
            location: `${destination.district}, Karnataka`,
            category: destination.category,
            caption: destination.description
          }))
        : [{
            url: destination.image,
            title: destination.name,
            location: `${destination.district}, Karnataka`,
            category: destination.category,
            caption: destination.description
          }];

      onViewImage({
        url: destination.image,
        title: destination.name,
        location: `${destination.district} District, Karnataka`,
        category: destination.category,
        caption: `${destination.description} | Known for: ${destination.popularFor}`
      }, galleryItems);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-8 animate-fadeIn" onClick={onClose}>
      <div 
        className="bg-white text-neutral-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 relative transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top-Right Close Button with Safe Backdrop */}
        <button
          id="close-dest-modal-btn"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 hover:bg-[#2d6a4f] text-white transition-all shadow-lg border border-white/20 hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image & Headline Banner with Safe Gradient Spacing */}
        <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-neutral-950 group">
          <img
            src={destination.image}
            alt={destination.name}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop';
            }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Multi-tier Gradient to ensure text NEVER overlaps or clashes */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

          {/* Quick Photo Expand Badge */}
          {onViewImage && (
            <button
              onClick={handleHeroImageClick}
              className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-[#2d6a4f] text-white text-xs font-semibold backdrop-blur-md border border-white/25 flex items-center gap-1.5 transition-all shadow-md"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Full Screen Photo & Gallery</span>
            </button>
          )}

          {/* Banner Text with safe padding */}
          <div className="absolute bottom-6 left-6 right-16 sm:right-6 text-white space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#2d6a4f] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm border border-white/20">
                {destination.category}
              </span>
              <span className="px-3 py-1 bg-black/70 text-white text-xs font-medium uppercase tracking-wider rounded-full border border-white/20 backdrop-blur-md flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#52b788]" />
                {destination.district} • {destination.region.toUpperCase()}
              </span>
              <span className="px-3 py-1 bg-amber-500/90 text-white text-xs font-bold rounded-full flex items-center gap-1 border border-white/20 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-white text-white" />
                {destination.rating} / 5.0
              </span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight drop-shadow-md">
              {destination.name}
            </h2>
            <p className="text-sm sm:text-base text-neutral-200 font-serif italic max-w-2xl drop-shadow-sm">
              {destination.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          {/* Overview */}
          <div>
            <h3 className="font-display font-bold text-xl text-neutral-900 mb-3 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#2d6a4f]" />
              Overview & Cultural Significance
            </h3>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg font-light">
              {destination.description}
            </p>
          </div>

          {/* Key Highlights Grid */}
          <div className="bg-[#f4fbf7] p-6 sm:p-7 rounded-2xl border border-[#2d6a4f]/15">
            <h4 className="font-display font-bold text-lg text-neutral-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#2d6a4f]" />
              Top Experiences & Key Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {destination.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-neutral-200/80 shadow-xs hover:border-[#2d6a4f]/40 transition-colors">
                  <span className="w-6 h-6 rounded-full bg-[#2d6a4f] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-medium text-neutral-800">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid if Available */}
          {destination.gallery && destination.gallery.length > 0 && (
            <div>
              <h4 className="font-display font-bold text-lg text-neutral-900 mb-3 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#2d6a4f]" />
                Photo Showcase (Click to Expand & Read Info)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {destination.gallery.map((picUrl, pIdx) => (
                  <div
                    key={pIdx}
                    onClick={() => {
                      if (onViewImage) {
                        onViewImage({
                          url: picUrl,
                          title: `${destination.name} - Scene ${pIdx + 1}`,
                          location: `${destination.district}, Karnataka`,
                          category: destination.category,
                          caption: destination.description
                        });
                      }
                    }}
                    className="group relative h-28 sm:h-36 rounded-xl overflow-hidden cursor-pointer border border-neutral-200 shadow-xs hover:shadow-md transition-all"
                  >
                    <img
                      src={picUrl}
                      alt={`${destination.name} gallery ${pIdx + 1}`}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=600&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="px-2.5 py-1 bg-black/75 text-white text-xs rounded-full flex items-center gap-1 font-semibold">
                        <Eye className="w-3 h-3" /> View Info
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Practical Info: Timings, Best Season, Fees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-neutral-50 p-4 sm:p-5 rounded-2xl border border-neutral-200">
              <div className="flex items-center gap-2 text-[#2d6a4f] font-bold text-xs uppercase tracking-wider mb-1.5">
                <Calendar className="w-4 h-4 text-[#2d6a4f]" />
                Best Time to Visit
              </div>
              <p className="text-sm font-semibold text-neutral-900">
                {destination.bestTimeToVisit}
              </p>
            </div>

            <div className="bg-neutral-50 p-4 sm:p-5 rounded-2xl border border-neutral-200">
              <div className="flex items-center gap-2 text-[#2d6a4f] font-bold text-xs uppercase tracking-wider mb-1.5">
                <Clock className="w-4 h-4 text-[#2d6a4f]" />
                Visiting Hours
              </div>
              <p className="text-sm font-semibold text-neutral-900">
                {destination.timings || 'Open throughout the day'}
              </p>
            </div>

            <div className="bg-neutral-50 p-4 sm:p-5 rounded-2xl border border-neutral-200">
              <div className="flex items-center gap-2 text-[#2d6a4f] font-bold text-xs uppercase tracking-wider mb-1.5">
                <CreditCard className="w-4 h-4 text-[#2d6a4f]" />
                Entry Tariffs
              </div>
              <p className="text-sm font-semibold text-neutral-900">
                {destination.entryFee || 'Free entry'}
              </p>
            </div>
          </div>

          {/* How to Reach Guide */}
          <div className="border-t border-neutral-200 pt-6">
            <h4 className="font-display font-bold text-lg text-neutral-900 mb-4 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-[#2d6a4f]" />
              How to Reach {destination.name}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/80 flex items-start gap-3">
                <span className="font-bold text-[#2d6a4f] min-w-[90px] sm:min-w-[110px] flex items-center gap-1.5">
                  <Plane className="w-4 h-4 text-[#2d6a4f]" />
                  By Air:
                </span>
                <span className="text-neutral-700">{destination.howToReach.nearestAirport}</span>
              </div>
              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/80 flex items-start gap-3">
                <span className="font-bold text-[#2d6a4f] min-w-[90px] sm:min-w-[110px] flex items-center gap-1.5">
                  <Train className="w-4 h-4 text-[#2d6a4f]" />
                  By Rail:
                </span>
                <span className="text-neutral-700">{destination.howToReach.nearestRailway}</span>
              </div>
              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200/80 flex items-start gap-3">
                <span className="font-bold text-[#2d6a4f] min-w-[90px] sm:min-w-[110px] flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-[#2d6a4f]" />
                  By Road:
                </span>
                <span className="text-neutral-700">{destination.howToReach.roadways}</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-500 font-medium">
              Verified by Department of Tourism, Government of Karnataka
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-6 py-3 border border-neutral-300 text-neutral-800 hover:bg-neutral-100 font-semibold text-xs rounded-full transition-colors"
              >
                Close
              </button>
              <button
                id="modal-plan-trip-btn"
                onClick={() => {
                  onClose();
                  onPlanTripForDestination(destination);
                }}
                className="flex-1 sm:flex-none px-7 py-3 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg flex items-center justify-center gap-2 border border-white/20 transition-all"
              >
                <Sparkles className="w-4 h-4 text-white" />
                Build Custom Itinerary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


