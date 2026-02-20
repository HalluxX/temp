'use client'

import Image from 'next/image';
import imgCapabilitiesHero from '@/assets/images/capabilities-hero.webp';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addClasses();
  }, [])

  async function addClasses() {
    let titles = document.getElementsByClassName('title');
    for (let i = 0; i < titles.length; i ++) {
      let title = titles[i];
      title.classList.add(`visible-title${i+1}`);
    }
  }

  return (
    <section className="capabilities-hero">
      <Image 
        src={imgCapabilitiesHero} 
        alt='Capabilities - HomeMax Remodeling Group' 
        fill 
        style={{ objectFit: 'cover', zIndex: -1 }} 
        priority
        quality={85}
      />
      <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl capabilities-hero-title" ref={titleGroupRef}>
        <div className='title'>CAPABILITIES</div>
      </div>
    </section>
  )
}