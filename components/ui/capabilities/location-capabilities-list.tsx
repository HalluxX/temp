'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatedButton } from '@/components/utils';

import imgLayoutElectricPower from '@/assets/images/layout-electricpower.webp'
import imgLayoutUndergroundutility from '@/assets/images/layout-undergroundutility.webp'
import imgRenewable from '@/assets/images/layout-renewable.webp'
import imgBroadband from '@/assets/images/layout-broadband.webp'
import imgSpeciality from '@/assets/images/layout-speciality.webp'
import imgUtilityPerformance from '@/assets/images/layout-utilityperformance.webp'
import imgConcretesolution from '@/assets/images/layout-concretesolution.webp'

interface ICapabilityMenu {
  name: string;
  path: string;
}

// Slug → display name for when locationName is not passed (e.g. on capability pages)
const LOCATION_NAMES: Record<string, string> = {
  bridgeville: 'Bridgeville',
  dover: 'Dover',
  millsboro: 'Millsboro',
  lewes: 'Lewes',
  smyrna: 'Smyrna',
  milford: 'Milford',
  laurel: 'Laurel',
  dagsboro: 'Dagsboro',
};

interface LocationCapabilitiesListProps {
  location: string;
  locationName?: string;
  currentCapability?: string;
}

const CapabilityMenus: ICapabilityMenu[] = [
  { name: "ELECTRIC POWER", path: "electric-power" },
  { name: "ENERGY EFFICIENCY", path: "energy-efficiency" },
  { name: "SAFETY", path: "safety" },
  { name: "INTERIOR REMODELING", path: "interior-remodeling" },
  { name: "EXTERIOR REMODELING", path: "exterior-remodeling" },
  { name: "RESTORATION", path: "restoration" },
  { name: "GENERATORS", path: "generators" },
  { name: "MAINTENANCE SUBSCRIPTIONS", path: "maintenance-subscriptions" },
];

// Create a mapping object to ensure proper correspondence
const imageMapping: { [key: string]: any } = {
  "ELECTRIC POWER": imgLayoutElectricPower,
  "ENERGY EFFICIENCY": imgLayoutUndergroundutility,
  "SAFETY": imgRenewable,
  "INTERIOR REMODELING": imgBroadband,
  "EXTERIOR REMODELING": imgSpeciality,
  "RESTORATION": imgUtilityPerformance,
  "GENERATORS": imgConcretesolution,
  "MAINTENANCE SUBSCRIPTIONS": imgSpeciality
};

// Create images array based on the menu order
const images: any[] = CapabilityMenus.map(menu => {
  const image = imageMapping[menu.name] || imgLayoutElectricPower;
  return image;
});

export default function LocationCapabilitiesList({ location, locationName, currentCapability }: LocationCapabilitiesListProps) {
  const [hoveredCapability, setHoveredCapability] = useState<number>(0);
  const [imageError, setImageError] = useState<boolean>(false);

  const displayName = locationName ?? LOCATION_NAMES[location] ?? (location.charAt(0).toUpperCase() + location.slice(1));

  return (
    <section className="capabilities-list bg-zinc-100">
      <div className='container mx-auto px-6 lg:px-11 py-16 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='col-span-1'>
          <div className="text-2xl md:text-3xl font-bold my-10">
            OUR SERVICES IN {displayName.toUpperCase()}
          </div>
          <div className="text-black text-sm my-10">
            HomeMax provides comprehensive home improvement services throughout {displayName}, Delaware. 
            From electrical upgrades to complete remodeling, we deliver professional solutions that enhance 
            your home's safety, efficiency, and value.
          </div>
          {CapabilityMenus.map((item, idx) => {
            const isActive = item.path === currentCapability;
            return (
              <Link key={idx} href={`/locations/${location}/capabilities/${item.path}`}>
                <div 
                  className={`font-bold my-4 menu transition-colors hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-900'
                  }`}
                  onMouseEnter={() => {
                    setHoveredCapability(idx);
                    setImageError(false);
                  }}
                >
                  {item.name}
                  {isActive && (
                    <span className="ml-2 text-sm text-blue-600">← Currently viewing</span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
        <div className='col-span-1'>
          {/* Right column intentionally left empty for cleaner layout */}
        </div>
      </div>
      {images[hoveredCapability] && !imageError && (
        <Image 
          src={images[hoveredCapability]} 
          alt={`${CapabilityMenus[hoveredCapability]?.name || 'capability'} layout`} 
          className='layout-image mx-auto'
          onError={() => {
            setImageError(true);
          }}
          onLoad={() => {
            setImageError(false);
          }}
        />
      )}
      {imageError && (
        <div className="layout-image mx-auto flex items-center justify-center bg-gray-200 h-64 w-full">
          <p className="text-gray-500">Image not available</p>
        </div>
      )}
    </section>
  );
}

