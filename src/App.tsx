import React, { useState } from 'react';
import { PageId, Destination, ImageItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { GuidesPage } from './components/GuidesPage';
import { HeritagePage } from './components/HeritagePage';
import { WildlifePage } from './components/WildlifePage';
import { AdventurePage } from './components/AdventurePage';
import { DestinationModal } from './components/DestinationModal';
import { PlanTripModal } from './components/PlanTripModal';
import { SearchModal } from './components/SearchModal';
import { ImageViewerModal } from './components/ImageViewerModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isPlanTripOpen, setIsPlanTripOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [viewingImage, setViewingImage] = useState<ImageItem | null>(null);
  const [imageGallery, setImageGallery] = useState<ImageItem[]>([]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPlanTripWithDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    setIsPlanTripOpen(true);
  };

  const handleViewImage = (image: ImageItem, gallery?: ImageItem[]) => {
    setViewingImage(image);
    setImageGallery(gallery || (image ? [image] : []));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-[#2d6a4f] selection:text-white font-['Montserrat',sans-serif]">
      {/* Top Fixed / Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPlanTrip={() => setIsPlanTripOpen(true)}
      />

      {/* Main Content Router for 5 Sections */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectDestination={(dest) => setSelectedDestination(dest)}
            onOpenPlanTrip={() => setIsPlanTripOpen(true)}
            onViewImage={handleViewImage}
          />
        )}

        {currentPage === 'guides' && (
          <GuidesPage
            onSelectDestination={(dest) => setSelectedDestination(dest)}
            onOpenPlanTrip={() => setIsPlanTripOpen(true)}
            onViewImage={handleViewImage}
          />
        )}

        {currentPage === 'heritage' && (
          <HeritagePage 
            onViewImage={handleViewImage}
          />
        )}

        {currentPage === 'wildlife' && (
          <WildlifePage 
            onViewImage={handleViewImage}
          />
        )}

        {currentPage === 'adventure' && (
          <AdventurePage 
            onViewImage={handleViewImage}
          />
        )}
      </main>

      {/* Footer matching portal design */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPlanTrip={() => setIsPlanTripOpen(true)}
      />

      {/* Interactive Modals */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onPlanTripForDestination={handleOpenPlanTripWithDestination}
      />

      <PlanTripModal
        isOpen={isPlanTripOpen}
        onClose={() => setIsPlanTripOpen(false)}
        initialDestination={selectedDestination}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDestination={(dest) => setSelectedDestination(dest)}
        onNavigate={handleNavigate}
      />

      {/* Photo Lightbox & Story Modal */}
      <ImageViewerModal
        image={viewingImage}
        gallery={imageGallery}
        onClose={() => setViewingImage(null)}
      />
    </div>
  );
}
