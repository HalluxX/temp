'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';  
import { CapabilityCard } from '@/components/utils';
import { capabilitycards } from '@/constants';

interface IntroductionProps {
  currentIndex: number;
}

const paths = [
  "/electric-power",
  "/energy-efficiency",
  "/safety",
  "/interior-remodeling",
  "/exterior-remodeling",
  "/restoration",
  "/generators",
  "/maintenance-subscriptions"
]

import imgLayoutElectricPower from '@/assets/images/layout-electricpower.webp'
import imgLayoutUndergroundutility from '@/assets/images/layout-undergroundutility.webp'
import imgRenewable from '@/assets/images/layout-renewable.webp'
import imgBroadband from '@/assets/images/layout-broadband.webp'
import imgSpecialty from '@/assets/images/layout-speciality.webp'
import imgUtilityPerformance from '@/assets/images/layout-utilityperformance.webp'
import imgEngineering from '@/assets/images/layout-engineering.webp'
import imgConcretesolution from '@/assets/images/layout-concretesolution.webp'

const images : any[] = [
  imgLayoutElectricPower,
  imgLayoutUndergroundutility,
  imgRenewable,
  imgBroadband,
  imgSpecialty,
  imgUtilityPerformance,
  imgEngineering,
  imgConcretesolution
]

export default function Introduction({ currentIndex } : IntroductionProps) {

  const router = useRouter(); 

  const onChangeTab = (selectedIndex : number) => {
    router.push("/capabilities" + paths[selectedIndex]);
  }

  return (
    <section className="capabilities-item-introduction">
      <div className='mx-auto'>
        {/* Custom Red Sidebar Menu */}
        <div className="custom-tab-container">
          {/* Sidebar Navigation */}
          <div className="custom-tab-nav">
            {capabilitycards.map((card, idx) => (
              <button
                key={idx}
                className={`custom-tab-button ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => onChangeTab(idx)}
              >
                {card.topic}
              </button>
            ))}
          </div>
          
          {/* Content Panel */}
          <div className="custom-tab-content">
            <div className='grid grid-cols-1 lg:grid-cols-2 p-5 bg-zinc-100'>
              <CapabilityCard
                topic={capabilitycards[currentIndex].topic}
                title={capabilitycards[currentIndex].title}
                description={capabilitycards[currentIndex].description}
                offerings={capabilitycards[currentIndex].offerings}
                className='w-full lg:w-8/12 mx-auto'
              />
              <Image 
                src={images[currentIndex]} 
                alt={capabilitycards[currentIndex].topic} 
                className='layout-image my-auto' 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 