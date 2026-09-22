import React, { useEffect, useRef } from 'react';
import { HeritagePlace, Language } from '../types';
import { TRANSLATIONS } from '../assets/data/translations';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Locate, Compass, Info, Sparkles, Store } from 'lucide-react';

interface MapViewProps {
  places: HeritagePlace[];
  selectedPlace: HeritagePlace | null;
  language: Language;
  onSelectPlace: (place: HeritagePlace) => void;
}

export const MapView: React.FC<MapViewProps> = ({
  places,
  selectedPlace,
  language,
  onSelectPlace
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  const t = TRANSLATIONS[language];

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Anguk & Bukchon Center
      const map = L.map(mapContainerRef.current, {
        center: [37.5805, 126.9855],
        zoom: 15,
        zoomControl: false
      });

      // CartoDB Voyager High-Quality Map Layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      // Add Zoom Control to top-right
      L.control.zoom({ position: 'topright' }).addTo(map);

      mapInstanceRef.current = map;
    }

    return () => {
      // Cleanup map on unmount if needed
    };
  }, []);

  // Update Markers when places or selectedPlace change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    places.forEach((place) => {
      const isMustSee = place.grade === 'must-see';
      const isHigh = place.grade === 'high';
      const isCommercial = place.grade === 'commercial';
      const isSelected = selectedPlace?.id === place.id;

      // Custom HTML Marker Icon
      let markerHtml = '';

      if (isMustSee || isHigh) {
        // Signature Gold / Navy Marker for Authentic Must-See Sites
        markerHtml = `
          <div className="relative group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-heritage-gold flex items-center justify-center text-white shadow-glow-gold ring-2 ring-amber-200 transform transition-all duration-300 hover:scale-115 ${
              isSelected ? 'scale-125 ring-4 ring-amber-400 z-50' : ''
            }">
              <span className="font-serif font-bold text-sm">韓</span>
            </div>
            <div className="absolute -top-2 -right-1 bg-amber-400 text-slate-950 font-extrabold text-[9px] px-1 rounded-full shadow border border-amber-200">
              ${place.authenticityScore.toFixed(1)}⭐
            </div>
            <div className="w-2 h-2 bg-amber-600 rotate-45 mx-auto -mt-1 shadow-md"></div>
          </div>
        `;
      } else {
        // Muted Slate Grey Marker for Commercial Spots
        markerHtml = `
          <div className="relative group cursor-pointer opacity-80 hover:opacity-100">
            <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-slate-200 shadow-md border border-slate-400 transform transition-all duration-300 ${
              isSelected ? 'scale-125 bg-rose-600 text-white z-50' : ''
            }">
              <span className="font-sans font-bold text-[10px]">상업</span>
            </div>
            <div className="w-1.5 h-1.5 bg-slate-600 rotate-45 mx-auto -mt-0.5"></div>
          </div>
        `;
      }

      const customIcon = L.divIcon({
        html: markerHtml,
        className: 'custom-heritage-marker',
        iconSize: [40, 44],
        iconAnchor: [20, 44]
      });

      const marker = L.marker([place.lat, place.lng], { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        onSelectPlace(place);
        map.panTo([place.lat, place.lng], { animate: true });
      });

      markersRef.current[place.id] = marker;
    });
  }, [places, selectedPlace, onSelectPlace]);

  // Center map on selected place
  useEffect(() => {
    if (selectedPlace && mapInstanceRef.current) {
      mapInstanceRef.current.panTo([selectedPlace.lat, selectedPlace.lng], {
        animate: true
      });
    }
  }, [selectedPlace]);

  const handleLocateUser = () => {
    if (!mapInstanceRef.current) return;
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          mapInstanceRef.current?.setView([pos.coords.latitude, pos.coords.longitude], 16, { animate: true });
        },
        () => {
          // Default Anguk center fallback
          mapInstanceRef.current?.setView([37.5805, 126.9855], 15, { animate: true });
        }
      );
    }
  };

  return (
    <div className="relative w-full h-[calc(100vh-8rem)] min-h-[500px]">
      
      {/* Leaflet Map Canvas Container */}
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Floating Map Controls & Map Notice */}
      <div className="absolute top-4 left-4 z-10 max-w-sm">
        <div className="bg-slate-900/90 backdrop-blur-md text-white px-3.5 py-2 rounded-xl shadow-xl border border-amber-500/40 text-xs flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
          <p className="text-[11px] text-slate-200">
            {t.mapNotice}
          </p>
        </div>
      </div>

      {/* Right Control Buttons */}
      <div className="absolute top-4 right-14 z-10 flex flex-col space-y-2">
        <button
          onClick={handleLocateUser}
          title="Center My GPS Location"
          className="w-10 h-10 rounded-xl bg-white shadow-lg text-slate-700 flex items-center justify-center hover:bg-amber-50 hover:text-amber-700 border border-slate-200 transition-colors"
        >
          <Locate className="w-4 h-4" />
        </button>
      </div>

      {/* Map Legend (Bottom Right Overlay) */}
      <div className="absolute bottom-6 right-4 z-10 hidden sm:block">
        <div className="bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200 text-xs space-y-1.5">
          <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-1">
            Map Marker Legend
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-500 to-heritage-gold shadow-glow-gold flex items-center justify-center text-[8px] text-white font-bold">
              韓
            </div>
            <span className="text-slate-700 font-semibold">{t.mustSeeBadge} (High Authenticity)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-slate-600 flex items-center justify-center text-[7px] text-slate-200 font-bold">
              상업
            </div>
            <span className="text-slate-500">{t.commercialBadge}</span>
          </div>
        </div>
      </div>

    </div>
  );
};
