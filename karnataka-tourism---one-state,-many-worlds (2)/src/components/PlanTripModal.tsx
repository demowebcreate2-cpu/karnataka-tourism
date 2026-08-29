import React, { useState } from 'react';
import { Destination } from '../types';
import { DESTINATIONS, ITINERARIES } from '../data';
import { X, Calendar, Compass, Users, Clock, CheckCircle2, Sparkles, MapPin, Download, Share2, Landmark, Trees, Coffee, Waves, Check } from 'lucide-react';

interface PlanTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: Destination | null;
}

export const PlanTripModal: React.FC<PlanTripModalProps> = ({
  isOpen,
  onClose,
  initialDestination,
}) => {
  const [duration, setDuration] = useState<number>(5);
  const [interest, setInterest] = useState<string>(initialDestination?.category || 'heritage');
  const [travelerType, setTravelerType] = useState<string>('couple');
  const [region, setRegion] = useState<string>(initialDestination?.region || 'all');
  const [budget, setBudget] = useState<string>('moderate');
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerated(true);
  };

  const matchingItinerary = ITINERARIES.find(it => {
    if (interest === 'heritage') return it.theme.includes('Heritage');
    if (interest === 'wildlife') return it.theme.includes('Wildlife');
    if (interest === 'nature') return it.theme.includes('Coffee') || it.theme.includes('Hills');
    if (interest === 'adventure') return it.theme.includes('Coastal') || it.theme.includes('Adventure');
    return it;
  }) || ITINERARIES[0];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 md:p-8 animate-fadeIn" onClick={onClose}>
      <div 
        className="bg-white text-neutral-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 relative p-6 sm:p-8 md:p-10 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-plan-trip-modal-btn"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center max-w-xl mx-auto mb-8 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#2d6a4f] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            Personalized Tour Planner
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 tracking-tight">
            Plan Your Karnataka Journey
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-light">
            Customize your personalized travel plan based on your preferred days, interests, and style across Karnataka.
          </p>
        </div>

        {!isGenerated ? (
          <form onSubmit={handleGenerate} className="space-y-6">
            {/* 1. Duration */}
            <div>
              <label className="block text-xs font-bold text-[#2d6a4f] uppercase tracking-wider mb-2.5">
                1. Trip Duration ({duration} Days)
              </label>
              <div className="grid grid-cols-4 gap-2.5">
                {[3, 5, 7, 10].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setDuration(days)}
                    className={`py-3 text-xs sm:text-sm font-semibold rounded-2xl border transition-all ${
                      duration === days
                        ? 'bg-[#2d6a4f] text-white border-[#2d6a4f] shadow-sm'
                        : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {days} Days
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Primary Interests */}
            <div>
              <label className="block text-xs font-bold text-[#2d6a4f] uppercase tracking-wider mb-2.5">
                2. What do you love most?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'heritage', label: 'UNESCO Heritage', desc: 'Hampi, Belur, Badami', icon: Landmark },
                  { id: 'wildlife', label: 'Wildlife Safaris', desc: 'Bandipur, Kabini Tigers', icon: Trees },
                  { id: 'nature', label: 'Coffee & Hills', desc: 'Coorg, Chikmagalur', icon: Coffee },
                  { id: 'adventure', label: 'Coast & Adventure', desc: 'Gokarna, Dandeli Rafting', icon: Waves },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setInterest(item.id)}
                      className={`p-3.5 text-left rounded-2xl border transition-all ${
                        interest === item.id
                          ? 'bg-[#f4fbf7] border-[#2d6a4f] ring-2 ring-[#2d6a4f]/30 shadow-xs'
                          : 'bg-neutral-50 border-neutral-200 hover:bg-neutral-100'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1 text-[#2d6a4f]">
                        <Icon className="w-4 h-4" />
                        <span className="font-bold text-xs sm:text-sm text-neutral-900 block">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-500 block leading-tight">
                        {item.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Traveling With & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#2d6a4f] uppercase tracking-wider mb-2">
                  3. Who is traveling?
                </label>
                <select
                  value={travelerType}
                  onChange={(e) => setTravelerType(e.target.value)}
                  className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-2xl text-xs sm:text-sm text-neutral-800 focus:outline-none focus:border-[#2d6a4f] focus:ring-1 focus:ring-[#2d6a4f]"
                >
                  <option value="solo">Solo Explorer (Self-paced, homestays)</option>
                  <option value="couple">Couple / Honeymoon (Heritage resorts, coffee villas)</option>
                  <option value="family">Family with Kids (Guided tours, wildlife & heritage)</option>
                  <option value="friends">Group of Friends (Trekking, rafting & roadtrips)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2d6a4f] uppercase tracking-wider mb-2">
                  4. Travel Style / Comfort
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-2xl text-xs sm:text-sm text-neutral-800 focus:outline-none focus:border-[#2d6a4f] focus:ring-1 focus:ring-[#2d6a4f]"
                >
                  <option value="budget">Budget / Eco-Travel (KSRTC express & homestays)</option>
                  <option value="moderate">Comfort / Premium (KSTDC hotels, private cabs)</option>
                  <option value="luxury">Luxury Heritage (Jungle Lodges, Taj, Evolve Back)</option>
                </select>
              </div>
            </div>

            <button
              id="generate-itinerary-btn"
              type="submit"
              className="w-full py-4 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-white" />
              Generate Curated Karnataka Itinerary
            </button>
          </form>
        ) : (
          /* Generated Custom Itinerary View */
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-[#f4fbf7] p-5 sm:p-6 rounded-2xl border border-[#2d6a4f]/20 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2d6a4f]/15 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2d6a4f] block">
                    Customized Itinerary Plan
                  </span>
                  <h3 className="font-display font-bold text-xl text-neutral-900">
                    {matchingItinerary.title} ({duration} Days)
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#2d6a4f] text-white text-xs font-bold rounded-full shadow-xs">
                    {matchingItinerary.duration}
                  </span>
                </div>
              </div>

              <div className="text-xs text-neutral-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2d6a4f] shrink-0" />
                <span className="font-semibold text-neutral-900">Route:</span>
                <span>{matchingItinerary.route}</span>
              </div>
            </div>

            {/* Daily Schedule */}
            <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1">
              {matchingItinerary.days.slice(0, duration).map((day) => (
                <div key={day.day} className="bg-neutral-50 p-4 sm:p-5 rounded-2xl border border-neutral-200/80 space-y-2 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-[#2d6a4f] text-white font-bold text-xs rounded-full">
                      Day {day.day}
                    </span>
                    <h4 className="font-semibold text-sm text-neutral-900">
                      {day.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    {day.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {day.places.map((place, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white text-neutral-800 text-[11px] font-medium rounded-full border border-neutral-200 flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-[#2d6a4f]" />
                        {place}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Practical Advice Note */}
            <div className="p-4 bg-[#f4fbf7] rounded-2xl border border-[#2d6a4f]/20 text-xs text-neutral-700 flex items-start gap-2">
              <span className="font-bold text-[#2d6a4f] shrink-0">Official Tip:</span> 
              <span>Government-certified KSTDC air-conditioned coaches and package tours connect these destinations with professional English and Kannada speaking guides.</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setIsGenerated(false)}
                className="text-xs text-[#2d6a4f] font-bold hover:underline"
              >
                ← Edit Preferences
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300 text-xs font-semibold rounded-full flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  {copied ? 'Link Copied!' : 'Share Plan'}
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


