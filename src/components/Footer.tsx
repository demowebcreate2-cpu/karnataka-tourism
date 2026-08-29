import React from 'react';
import { PageId } from '../types';
import { Compass, Mail, Phone, MapPin, ExternalLink, Shield, Heart, Landmark, Trees, Waves } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPlanTrip: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPlanTrip }) => {
  return (
    <footer className="bg-black text-white border-t border-white/20 relative overflow-hidden">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[#2d6a4f]"></div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#2d6a4f] flex items-center justify-center text-white border border-white/20 shadow-sm">
                <span className="font-display font-bold text-xl">ಕರ್</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-white tracking-tight">
                  Karnataka <span className="text-white/90">Tourism</span>
                </span>
                <p className="text-xs text-white/70 tracking-widest uppercase font-medium">
                  One State, Many Worlds
                </p>
              </div>
            </div>

            <p className="text-sm text-white/80 leading-relaxed max-w-md">
              Discover the myriad worlds within one beautiful state. From the UNESCO ruins of the Vijayanagara Empire and lush misty Western Ghats to untamed tiger sanctuaries and pristine Arabian shores.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2d6a4f] text-white text-xs font-semibold rounded-xs border border-white/20">
                <Landmark className="w-3.5 h-3.5 text-white" />
                3 UNESCO World Heritage Sites
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2d6a4f] text-white text-xs font-semibold rounded-xs border border-white/20">
                <Trees className="w-3.5 h-3.5 text-white" />
                563+ Wild Tigers
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2d6a4f] text-white text-xs font-semibold rounded-xs border border-white/20">
                <Waves className="w-3.5 h-3.5 text-white" />
                320 km Coastline
              </span>
            </div>
          </div>

          {/* Column 2: Explore Karnataka */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4 border-b border-white/20 pb-2">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('guides'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Regional Travel Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('heritage'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  UNESCO Heritage & Arts
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('wildlife'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Tiger & Elephant Safaris
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('adventure'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Trekking & Water Sports
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Destinations */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4 border-b border-white/20 pb-2">
              Popular Hubs
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('guides')}>
                • Hampi (Vijayanagara)
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('guides')}>
                • Mysuru & Srirangapatna
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('guides')}>
                • Coorg (Kodagu Coffee Country)
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('guides')}>
                • Gokarna & Karavali Coast
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('guides')}>
                • Chikmagalur & Kudremukh
              </li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate('guides')}>
                • Badami, Aihole & Pattadakal
              </li>
            </ul>
          </div>

          {/* Column 4: Official & Assistance */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4 border-b border-white/20 pb-2">
              Tourist Assistance
            </h3>
            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Toll-Free Helpline:</span>
                  <span className="text-white font-mono text-sm">1800-425-4666</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Official Email:</span>
                  <span>info@karnatakatourism.org</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Headquarters:</span>
                  <span>Khanija Bhavan, Race Course Rd, Bengaluru, Karnataka 560001</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="footer-plan-trip-cta"
                  onClick={onOpenPlanTrip}
                  className="w-full py-2.5 px-3 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold uppercase tracking-wider rounded-xs text-[11px] transition-all shadow-xs border border-white/20"
                >
                  Custom Trip Planner →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary links strip */}
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Contact Us</span>
            <span className="hover:text-white cursor-pointer">Media Gallery</span>
            <span className="hover:text-white cursor-pointer">E-Brochures</span>
            <span className="hover:text-white cursor-pointer">KSTDC Tour Packages</span>
            <span className="hover:text-white cursor-pointer">Jungle Lodges & Resorts</span>
          </div>

          <div className="text-center md:text-right">
            <span>Powered by Karnataka State Tourism Development Corporation</span>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-6 pt-4 border-t border-white/10 text-center text-[11px] font-medium text-white/60 tracking-wider uppercase">
          © 2024–2026 DEPARTMENT OF TOURISM, GOVERNMENT OF KARNATAKA. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

