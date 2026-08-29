import React, { useState, useEffect } from 'react';
import { ImageItem } from '../types';
export type { ImageItem };
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Share2, MapPin, Info, Sparkles, Check } from 'lucide-react';

interface ImageViewerModalProps {
  image: ImageItem | null;
  gallery?: ImageItem[];
  onClose: () => void;
}

export const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  image,
  gallery = [],
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(true);

  const imagesList: ImageItem[] = gallery.length > 0 ? gallery : image ? [image] : [];

  // Update index if initial image changes
  useEffect(() => {
    if (image && gallery.length > 0) {
      const idx = gallery.findIndex((item) => item.url === image.url);
      if (idx !== -1) setCurrentIndex(idx);
      else setCurrentIndex(0);
    } else {
      setCurrentIndex(0);
    }
  }, [image, gallery]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && imagesList.length > 1) {
        setIsZoomed(false);
        setCurrentIndex((prev) => (prev + 1) % imagesList.length);
      }
      if (e.key === 'ArrowLeft' && imagesList.length > 1) {
        setIsZoomed(false);
        setCurrentIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imagesList.length, onClose]);

  if (!image && imagesList.length === 0) return null;

  const currentItem = imagesList[currentIndex] || image;
  if (!currentItem) return null;

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % imagesList.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(currentItem.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 transition-all animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div 
        className="flex items-center justify-between z-30 text-white pb-3 max-w-6xl w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 min-w-0 pr-4">
          <div className="w-9 h-9 rounded-full bg-[#2d6a4f] text-white flex items-center justify-center font-bold text-xs tracking-wider border border-white/30 shadow-md shrink-0">
            KT
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-sm sm:text-lg text-white truncate">
                {currentItem.title}
              </h3>
              {currentItem.category && (
                <span className="hidden sm:inline-flex px-2.5 py-0.5 bg-[#2d6a4f]/80 text-white text-[10px] font-bold uppercase tracking-wider rounded-full border border-white/20 shrink-0">
                  {currentItem.category}
                </span>
              )}
            </div>
            {currentItem.location && (
              <p className="text-xs text-white/70 flex items-center gap-1 truncate">
                <MapPin className="w-3 h-3 text-[#52b788] shrink-0" />
                {currentItem.location}
              </p>
            )}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowDetails(!showDetails)}
            aria-label="Toggle Details"
            className={`p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all border ${
              showDetails 
                ? 'bg-[#2d6a4f] text-white border-[#52b788]' 
                : 'bg-white/10 hover:bg-white/20 text-white border-white/15'
            }`}
            title="Toggle Info"
          >
            <Info className="w-4 h-4" />
            <span className="hidden md:inline">Story Info</span>
          </button>
          
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            aria-label={isZoomed ? "Zoom out" : "Zoom in"}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15"
            title={isZoomed ? "Zoom Out" : "Zoom In"}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          <button
            onClick={handleShare}
            aria-label="Share image link"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15"
            title="Copy Image Link"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4 text-white" />}
          </button>

          <button
            onClick={onClose}
            aria-label="Close image viewer"
            className="p-2 rounded-full bg-white/20 hover:bg-[#2d6a4f] text-white transition-colors border border-white/30 shadow-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage & Story Card Container */}
      <div 
        className="relative flex-1 flex flex-col lg:flex-row items-center justify-center gap-4 my-auto overflow-hidden py-2 max-w-6xl w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation - Left */}
        {imagesList.length > 1 && (
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-[#2d6a4f] text-white transition-all backdrop-blur-md border border-white/20 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* The Main Image Stage */}
        <div className={`relative flex items-center justify-center max-h-[62vh] sm:max-h-[68vh] transition-all duration-300 ${
          isZoomed ? 'scale-115 cursor-zoom-out z-20' : 'cursor-zoom-in'
        } ${showDetails && currentItem.caption ? 'lg:max-w-[65%]' : 'w-full'}`}>
          <img
            src={currentItem.url}
            alt={currentItem.title}
            onClick={() => setIsZoomed(!isZoomed)}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop';
            }}
            className="max-h-[58vh] sm:max-h-[65vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl mx-auto border border-white/20"
          />
        </div>

        {/* Floating / Side Story & Cultural Info Card */}
        {showDetails && (
          <div className="w-full lg:max-w-xs xl:max-w-sm bg-neutral-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 text-white shadow-2xl space-y-3 shrink-0 animate-fadeIn">
            <div className="flex items-center gap-2 text-[#52b788] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Karnataka Heritage Insight
            </div>
            
            <h4 className="font-display font-bold text-base sm:text-lg text-white leading-snug">
              {currentItem.title}
            </h4>

            {currentItem.caption && (
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {currentItem.caption}
              </p>
            )}

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
              <span>{currentItem.location || 'Karnataka, India'}</span>
              <span className="text-[#52b788] font-semibold">Official Showcase</span>
            </div>
          </div>
        )}

        {/* Navigation - Right */}
        {imagesList.length > 1 && (
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-[#2d6a4f] text-white transition-all backdrop-blur-md border border-white/20 shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip */}
      <div 
        className="z-30 max-w-4xl w-full mx-auto pt-2 text-center text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Thumbnail Carousel if multiple images */}
        {imagesList.length > 1 && (
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 px-4 no-scrollbar">
            {imagesList.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsZoomed(false);
                  setCurrentIndex(idx);
                }}
                className={`w-14 h-10 sm:w-16 sm:h-12 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                  currentIndex === idx
                    ? 'border-[#52b788] scale-105 shadow-lg shadow-black/80 ring-2 ring-white/40'
                    : 'border-white/30 opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={thumb.url} 
                  alt={thumb.title} 
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=300&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover" 
                />
              </button>
            ))}
          </div>
        )}

        {copied && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2d6a4f] text-white text-xs font-semibold rounded-full animate-bounce shadow-md">
            <Check className="w-3.5 h-3.5" />
            Image link copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
};

