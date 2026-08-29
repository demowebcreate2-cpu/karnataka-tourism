import React, { useState } from 'react';
import { PageId } from '../types';
import { Search, MapPin, Compass, Calendar, X, Menu, Trees, ShieldCheck, Heart } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
  onOpenPlanTrip: () => void;
  savedCount?: number;
  onOpenWishlist?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenPlanTrip,
  savedCount = 0,
  onOpenWishlist,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'guides', label: 'Travel Guides' },
    { id: 'heritage', label: 'Heritage & Culture' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'adventure', label: 'Adventure' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#2d6a4f]/15 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand / Logo */}
          <div 
            id="brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Stylized Karnataka Heritage Emblem */}
            <div className="w-11 h-11 rounded-sm bg-[#2d6a4f] flex items-center justify-center text-white shadow-sm border border-[#1b4332]/30 transition-transform group-hover:scale-105">
              <span className="font-display font-bold text-2xl tracking-tighter text-white">ಕರ್</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xl sm:text-2xl text-[#2d6a4f] tracking-tight">
                  Karnataka
                </span>
                <span className="font-display font-semibold text-xl sm:text-2xl text-black">
                  Tourism
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-black tracking-widest uppercase">
                <span className="text-[#2d6a4f] font-bold">ಒಂದು ರಾಜ್ಯ ಹಲವು ಜಗತ್ತು</span>
                <span>•</span>
                <span className="text-black/70 font-semibold">One State, Many Worlds</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-[14px] font-medium transition-all relative rounded-sm ${
                    isActive
                      ? 'text-[#2d6a4f] font-bold bg-[#2d6a4f]/10'
                      : 'text-black/80 hover:text-black hover:bg-black/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#2d6a4f] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              id="search-btn-desktop"
              onClick={onOpenSearch}
              aria-label="Search destinations and experiences"
              className="p-2.5 rounded-sm text-black hover:text-[#2d6a4f] hover:bg-black/5 border border-black/15 transition-colors flex items-center gap-2 text-xs font-medium"
            >
              <Search className="w-4 h-4 text-[#2d6a4f]" />
              <span className="hidden xl:inline text-black/60">Search Hampi, safaris, trek...</span>
            </button>

            {/* Wishlist button if items saved */}
            {onOpenWishlist && (
              <button
                onClick={onOpenWishlist}
                aria-label="Saved favorites"
                className="p-2.5 rounded-sm text-black hover:text-[#2d6a4f] hover:bg-black/5 border border-black/15 transition-colors relative"
                title="Saved Places"
              >
                <Heart className={`w-4 h-4 ${savedCount > 0 ? 'fill-[#2d6a4f] text-[#2d6a4f]' : 'text-black'}`} />
                {savedCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#2d6a4f] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {savedCount}
                  </span>
                )}
              </button>
            )}

            {/* Plan Trip CTA */}
            <button
              id="plan-trip-cta-btn"
              onClick={onOpenPlanTrip}
              className="px-5 py-2.5 bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-xs transition-all hover:shadow flex items-center gap-2 border border-[#2d6a4f]/20"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Plan Trip</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="search-btn-mobile"
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-2 text-black hover:text-[#2d6a4f]"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-black hover:bg-black/5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-black/15 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-sm text-sm font-medium transition-all ${
                currentPage === item.id
                  ? 'bg-[#2d6a4f] text-white font-semibold shadow-xs'
                  : 'text-black hover:bg-black/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-black/10 flex flex-col gap-2">
            <button
              id="mobile-plan-trip-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanTrip();
              }}
              className="w-full py-3 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-semibold text-xs uppercase tracking-wider rounded-sm text-center shadow-xs"
            >
              Plan Your Itinerary
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

