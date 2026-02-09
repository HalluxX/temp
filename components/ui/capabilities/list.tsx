'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import imgLayoutElectricPower from '@/assets/images/layout-electricpower.webp'
import imgLayoutUndergroundutility from '@/assets/images/layout-undergroundutility.webp'
import imgRenewable from '@/assets/images/layout-renewable.webp'
import imgBroadband from '@/assets/images/layout-broadband.webp'
import imgSpeciality from '@/assets/images/layout-speciality.webp'
import imgUtilityPerformance from '@/assets/images/layout-utilityperformance.webp'
import imgConcretesolution from '@/assets/images/layout-concretesolution.webp'

interface ICapabilityMenu {
  name : string,
  path: string;
}

const CapabilityMenus : ICapabilityMenu[] = [
  { name: "ELECTRIC POWER", path: "/capabilities/electric-power"},
  { name: "ENERGY EFFICIENCY", path: "/capabilities/energy-efficiency"},
  { name: "SAFETY", path: "/capabilities/safety"},
  { name: "INTERIOR REMODELING", path: "/capabilities/interior-remodeling"},
  { name: "EXTERIOR REMODELING", path: "/capabilities/exterior-remodeling"},
  { name: "RESTORATION", path: "/capabilities/restoration"},
  { name: "GENERATORS", path: "/capabilities/generators"},
  { name: "MAINTENANCE SUBSCRIPTIONS", path: "/capabilities/maintenance-subscriptions"},
  
]

// Create a mapping object to ensure proper correspondence
// Note: layout-engineering.webp is identical to layout-utilityperformance.webp (duplicate file)
const imageMapping: { [key: string]: any } = {
  "ELECTRIC POWER": imgLayoutElectricPower,
  "ENERGY EFFICIENCY": imgLayoutUndergroundutility,
  "SAFETY": imgRenewable,
  "INTERIOR REMODELING": imgBroadband,
  "EXTERIOR REMODELING": imgSpeciality,
  "RESTORATION": imgUtilityPerformance,
  "GENERATORS": imgConcretesolution, // Swapped with maintenance subscriptions to avoid duplicate
  "MAINTENANCE SUBSCRIPTIONS": imgSpeciality // Using speciality to avoid duplicates
};

// Create images array based on the menu order
const images: any[] = CapabilityMenus.map(menu => {
  const image = imageMapping[menu.name] || imgLayoutElectricPower;
  return image;
});

export default function List() {
  const [currentCapability, setCurrentCapability] = useState<number>(0);
  const [imageError, setImageError] = useState<boolean>(false);

  return (
    <section className="capabilities-list bg-zinc-100">
      <div className="container mx-auto px-6 lg:px-11 py-16 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="col-span-1">
          <div className="text-2xl md:text-3xl font-bold my-10">
            OUR SERVICES
          </div>
          <div className="text-black text-sm my-10">
            HomeMax provides comprehensive home improvement services throughout Delaware.
            From electrical upgrades to complete remodeling, we deliver professional solutions that enhance
            your home&apos;s safety, efficiency, and value.
          </div>
          {CapabilityMenus.map((item, idx) => (
            <Link key={idx} href={item.path}>
              <div
                className={`font-bold my-4 menu transition-colors hover:text-blue-600 ${
                  currentCapability === idx ? 'text-blue-600' : 'text-gray-900'
                }`}
                onMouseEnter={() => {
                  setCurrentCapability(idx);
                  setImageError(false);
                }}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="col-span-1">
          {/* Right column intentionally left empty for cleaner layout */}
        </div>
      </div>
      {images[currentCapability] && !imageError && (
        <Image
          src={images[currentCapability]}
          alt={`${CapabilityMenus[currentCapability]?.name || 'capability'} layout`}
          className="layout-image mx-auto"
          onError={() => setImageError(true)}
          onLoad={() => setImageError(false)}
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