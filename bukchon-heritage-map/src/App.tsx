import React, { useState, useMemo } from 'react';
import { HeritagePlace, Language, FilterOptions, Review } from './types';
import { HERITAGE_PLACES } from './assets/data/heritagePlaces';
import { Navbar } from './components/Navbar';
import { FilterBar } from './components/FilterBar';
import { MapView } from './components/MapView';
import { ListView } from './components/ListView';
import { PlaceBottomSheet } from './components/PlaceBottomSheet';
import { ReviewModal } from './components/ReviewModal';
import { calculateAuthenticityIndex } from './utils/scoreCalculator';

export function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [places, setPlaces] = useState<HeritagePlace[]>(HERITAGE_PLACES);
  const [selectedPlace, setSelectedPlace] = useState<HeritagePlace | null>(HERITAGE_PLACES[0]);
  
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    mustSeeOnly: false,
    minAuthenticityScore: 1.0,
    searchQuery: ''
  });

  const [reviewingPlace, setReviewingPlace] = useState<HeritagePlace | null>(null);

  // Filtered Places logic
  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      // Category filter
      if (filters.category !== 'all' && place.category !== filters.category) {
        return false;
      }

      // Must-See Only filter
      if (filters.mustSeeOnly && place.grade !== 'must-see' && place.grade !== 'high') {
        return false;
      }

      // Minimum Authenticity Score filter
      if (place.authenticityScore < filters.minAuthenticityScore) {
        return false;
      }

      // Search Query filter
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const nameMatch = Object.values(place.name).some(n => n.toLowerCase().includes(query));
        const tagMatch = place.positiveTags.some(t => t.toLowerCase().includes(query));
        const addrMatch = Object.values(place.address).some(a => a.toLowerCase().includes(query));
        const certMatch = place.certifiedBy?.toLowerCase().includes(query);

        if (!nameMatch && !tagMatch && !addrMatch && !certMatch) {
          return false;
        }
      }

      return true;
    });
  }, [places, filters]);

  // Overall Statistics
  const stats = useMemo(() => {
    const total = places.length;
    const sumScore = places.reduce((acc, p) => acc + p.authenticityScore, 0);
    const avgScore = total > 0 ? parseFloat((sumScore / total).toFixed(2)) : 0;
    const mustSeeCount = places.filter(p => p.grade === 'must-see').length;

    return { total, avgScore, mustSeeCount };
  }, [places]);

  // Submit Review Handler
  const handleReviewSubmit = (placeId: string, newReview: Review) => {
    setPlaces((prevPlaces) =>
      prevPlaces.map((place) => {
        if (place.id !== placeId) return place;

        const updatedReviews = [newReview, ...place.reviews];
        
        // Recalculate average authenticity score
        const totalReviewsCount = updatedReviews.length;
        const newAuthenticityIndex = calculateAuthenticityIndex(
          newReview.authenticityRating,
          newReview.culturalValueRating,
          newReview.commercialityRating
        );

        // Weighted update
        const updatedScore = parseFloat(
          ((place.authenticityScore * place.reviewsCount + newAuthenticityIndex) / (place.reviewsCount + 1)).toFixed(2)
        );

        return {
          ...place,
          authenticityScore: updatedScore,
          reviewsCount: totalReviewsCount,
          reviews: updatedReviews
        };
      })
    );

    // Also update selectedPlace if it's the currently opened one
    if (selectedPlace?.id === placeId) {
      setSelectedPlace((prev) => prev ? {
        ...prev,
        reviews: [newReview, ...prev.reviews]
      } : null);
    }
  };

  return (
    <div className="min-h-screen bg-heritage-paper flex flex-col font-sans selection:bg-heritage-gold selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        filters={filters}
        onFilterChange={setFilters}
        stats={stats}
      />

      {/* Filter Controls Bar */}
      <FilterBar
        language={language}
        filters={filters}
        onFilterChange={setFilters}
        resultCount={filteredPlaces.length}
      />

      {/* Main Map or List Content View */}
      <main className="flex-1 relative">
        {viewMode === 'map' ? (
          <MapView
            places={filteredPlaces}
            selectedPlace={selectedPlace}
            language={language}
            onSelectPlace={setSelectedPlace}
          />
        ) : (
          <ListView
            places={filteredPlaces}
            language={language}
            onSelectPlace={(place) => {
              setSelectedPlace(place);
              setViewMode('map');
            }}
          />
        )}
      </main>

      {/* Slide-Up Place Quick View Docent Sheet */}
      {viewMode === 'map' && (
        <PlaceBottomSheet
          place={selectedPlace}
          language={language}
          onClose={() => setSelectedPlace(null)}
          onOpenReviewModal={(place) => setReviewingPlace(place)}
        />
      )}

      {/* Review Submission Modal */}
      {reviewingPlace && (
        <ReviewModal
          place={reviewingPlace}
          language={language}
          onClose={() => setReviewingPlace(null)}
          onSubmitReview={handleReviewSubmit}
        />
      )}

    </div>
  );
}

export default App;
