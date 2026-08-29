import React, { useState } from 'react';
import { ADVENTURE_ACTIVITIES } from '../data';
import { AdventureActivity } from '../types';
import { Compass, Flame, ShieldAlert, CheckCircle2, MapPin, Calendar, Activity, Wind, Mountain, Waves, Footprints, Ticket, Shield, Eye, Heart, ArrowRight, X, Sparkles } from 'lucide-react';
import { ImageItem } from './ImageViewerModal';

interface AdventurePageProps {
  onViewImage?: (image: ImageItem, gallery?: ImageItem[]) => void;
  savedIds?: string[];
  onToggleSave?: (id: string) => void;
}

export const AdventurePage: React.FC<AdventurePageProps> = ({
  onViewImage,
  savedIds = [],
  onToggleSave,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedActivity, setSelectedActivity] = useState<AdventureActivity | null>(null);

  const filteredActivities = ADVENTURE_ACTIVITIES.filter((act) => {
    if (selectedCategory === 'all') return true;
    return act.category === selectedCategory;
  });

  return (
    <div className="space-y-16 py-8 pb-20">
      {/* 1. Page Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#1b4332] rounded-sm p-8 sm:p-14 text-white relative overflow-hidden border border-[#2d6a4f]/40 shadow-xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1b4332] text-white text-xs font-bold uppercase tracking-widest rounded-2xs border border-white/20 shadow-2xs">
              <Compass className="w-3.5 h-3.5" />
              ADVENTURE & OUTDOORS
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Thrill Across Land, River & Ocean
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
              From white-water rapids crashing through Dandeli canyons to razor-edge summit treks across the Western Ghats and international sport climbing on Badami red sandstone.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-5 rounded-sm border border-black/15 shadow-2xs">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Adventures', icon: null },
              { id: 'trekking', label: 'Peak Trekking', icon: Mountain },
              { id: 'water-sports', label: 'White Water & Scuba', icon: Waves },
              { id: 'rock-climbing', label: 'Rock Climbing', icon: Footprints },
              { id: 'caving', label: 'Karst Caving', icon: Compass },
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-2xs transition-colors inline-flex items-center gap-1.5 ${
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
          <span className="text-xs text-black/60 font-semibold">
            Showing {filteredActivities.length} Activities
          </span>
        </div>
      </section>

      {/* 3. Activities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity) => {
            const isSaved = savedIds.includes(activity.id);
            return (
              <div
                key={activity.id}
                onClick={() => setSelectedActivity(activity)}
                className="group bg-white rounded-sm overflow-hidden border border-black/15 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer relative"
              >
                <div className="relative h-64 w-full overflow-hidden bg-black">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`px-2.5 py-0.5 text-white text-[10px] font-bold uppercase rounded-2xs shadow-2xs border border-white/20 ${
                      activity.difficulty === 'Easy' ? 'bg-[#2d6a4f]' :
                      activity.difficulty === 'Moderate' ? 'bg-amber-800' :
                      'bg-rose-800'
                    }`}>
                      {activity.difficulty}
                    </span>
                  </div>

                  {/* Bookmark Button */}
                  {onToggleSave && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(activity.id);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-[#2d6a4f] text-white backdrop-blur-xs border border-white/20 transition-all z-10"
                      title={isSaved ? "Remove from Saved" : "Save activity"}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-white text-white' : 'text-white'}`} />
                    </button>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs text-white/90 block font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-white" />
                      {activity.district}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white">
                      {activity.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-black/70 leading-relaxed line-clamp-3">
                    {activity.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-black/10 text-xs">
                    {activity.altitudeOrDistance && (
                      <div className="text-[#2d6a4f] font-semibold flex items-center gap-1">
                        <Activity className="w-3.5 h-3.5 text-[#2d6a4f]" />
                        <span>{activity.altitudeOrDistance}</span>
                      </div>
                    )}
                    <div className="text-black/60 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#2d6a4f]" />
                      <span>Best Season: {activity.bestSeason}</span>
                    </div>
                    <div className="flex items-center justify-between font-bold text-[#2d6a4f] pt-1">
                      <span>View Trek & Safety Details</span>
                      <span className="group-hover:translate-x-1 transition-transform text-[#2d6a4f]">→</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Activity Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div 
            className="bg-white rounded-sm max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-black/20 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-black/10 pb-4">
              <div>
                <span className="px-2.5 py-0.5 bg-[#2d6a4f] text-white text-[10px] font-bold uppercase rounded-2xs border border-white/20">
                  {selectedActivity.difficulty} Difficulty • {selectedActivity.category}
                </span>
                <h3 className="font-display font-bold text-2xl text-black mt-1.5">
                  {selectedActivity.title}
                </h3>
                <p className="text-xs text-black/60 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#2d6a4f]" />
                  {selectedActivity.location}
                </p>
              </div>
              <button
                onClick={() => setSelectedActivity(null)}
                className="p-1.5 rounded-full text-black/60 hover:text-black hover:bg-black/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-black/80 leading-relaxed">
              {selectedActivity.description}
            </p>

            <div className="bg-black/5 p-4 rounded-xs border border-black/10 space-y-2">
              <span className="text-xs font-bold uppercase text-[#2d6a4f] block flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#2d6a4f]" />
                Highlights & Features:
              </span>
              <ul className="text-xs text-black/80 space-y-1">
                {selectedActivity.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2d6a4f] shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white border border-black/15 rounded-xs space-y-1 shadow-2xs">
                <span className="font-bold text-[#2d6a4f] block flex items-center gap-1">
                  <Ticket className="w-3.5 h-3.5 text-[#2d6a4f]" />
                  Permits Required
                </span>
                <p className="text-black/70">{selectedActivity.requiredPermits}</p>
              </div>
              <div className="p-3 bg-white border border-black/15 rounded-xs space-y-1 shadow-2xs">
                <span className="font-bold text-[#2d6a4f] block flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-[#2d6a4f]" />
                  Safety Guidelines
                </span>
                <ul className="text-black/70 space-y-0.5">
                  {selectedActivity.safetyTips.map((tip, i) => (
                    <li key={i}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedActivity(null)}
                className="px-6 py-2.5 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-bold text-xs uppercase tracking-wider rounded-2xs shadow-xs border border-white/20"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Safety & Forest Rules Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-sm border border-black/15 space-y-4">
          <div className="flex items-center gap-2 text-black">
            <ShieldAlert className="w-5 h-5 text-[#2d6a4f]" />
            <h3 className="font-display font-bold text-xl text-black">
              Karnataka Forest & Adventure Regulations
            </h3>
          </div>
          <p className="text-xs text-black/70 leading-relaxed">
            All peak treks inside national parks (such as Kudremukh, Netravati, and Kumaraparvatha) require mandatory prior online permits via the Karnataka Eco-Tourism portal (karnatakaecotourism.com). Trekkers must be accompanied by certified forest guides. Night camping is strictly prohibited to safeguard fragile biodiversity corridors.
          </p>
        </div>
      </section>
    </div>
  );
};

