'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { Tag } from '@/components/utils';

interface HeroProps {
  image: any;
  title: string;
}

export default function Hero({ image, title } : HeroProps) {
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
    <section className="capabilities-item-hero">
      <Image 
        src={image} 
        alt={`${title} - HomeMax Remodeling Group`} 
        fill 
        style={{ objectFit: 'cover', zIndex: -1 }} 
        priority
        quality={85}
      />
      <Link href={'/capabilities'} className='tag'>
        <Tag variant='warning' className='p-3 text-white font-bold'>
          CAPABILITIES
        </Tag>
      </Link>
      <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl capabilities-item-hero-title" ref={titleGroupRef}>
        <div className='title'>{title}</div>
      </div>
    </section>
  )
}