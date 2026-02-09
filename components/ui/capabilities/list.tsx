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
import imgEngineering from '@/assets/images/layout-engineering.webp'
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
const images : any[] = CapabilityMenus.map(menu => {
  const image = imageMapping[menu.name] || imgLayoutElectricPower;
  console.log('Mapping:', menu.name, '→', image.src || 'fallback');
  return image;
});

export default function List() {

  const [currentCapability, setCurrentCapability] = useState<number>(0)
  const [imageError, setImageError] = useState<boolean>(false)

  useEffect(() => {
    const menus = document.getElementsByClassName('menu');
    const handlers: (() => void)[] = [];
    
    for(let i = 0; i < menus.length; i++) {
      const menuObj = menus[i];
      const handler = () => {
        // Ensure we don't go out of bounds
        if (i < images.length) {
          setImageError(false); // Reset image error state
          setCurrentCapability(i);
          console.log('Hovering over capability:', i, CapabilityMenus[i]?.name, 'Image:', images[i]);
        }
      };
      
      menuObj.addEventListener('mouseover', handler);
      handlers.push(handler);
    }
    
    // Cleanup function to remove event listeners
    return () => {
      for(let i = 0; i < menus.length; i++) {
        if (handlers[i]) {
          menus[i].removeEventListener('mouseover', handlers[i]);
        }
      }
    };
  }, []) // Remove currentCapability dependency to prevent re-running

} 