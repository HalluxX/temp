import Hero from '@/components/ui/capabilities-service/hero'
import Introduction from '@/components/ui/capabilities-service/introduction'
import Project from '@/components/ui/capabilities-service/project'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgUndergroundUtility from '@/assets/images/underground-utility.webp';
import type { Metadata } from 'next'

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: 'Home Energy Efficiency Upgrades Delaware | Energy Saving Solutions',
  description: 'Expert home energy efficiency upgrades in Delaware. Reduce energy bills with residential energy improvements, insulation upgrades, energy audits, and eco-friendly home solutions in Dover, Smyrna, Milford, and Lewes DE.',
  keywords: [
    // Primary & Core Keywords
    'home energy efficiency upgrades',
    'energy saving solutions for homes',
    'residential energy improvements DE',
    // Long-Tail Keywords
    'reduce energy bills in Delaware homes',
    'energy efficient home upgrades',
    'insulation and efficiency improvements',
    'energy audit for residential properties',
    // LSI Keywords
    'energy optimization services',
    'power consumption reduction',
    'sustainable home improvements',
    'eco-friendly home upgrades',
    // Local Intent Keywords
    'energy efficiency services Dover DE',
    'home energy upgrades Smyrna DE',
    'energy saving solutions Milford DE',
    'residential efficiency improvements Lewes DE',
  ],
  openGraph: {
    title: 'Home Energy Efficiency Upgrades Delaware | Energy Saving Solutions',
    description: 'Expert home energy efficiency upgrades in Delaware. Reduce energy bills with residential energy improvements, insulation upgrades, and sustainable home solutions.',
    url: 'https://homemaxrg.com/capabilities/energy-efficiency',
    siteName: 'HomeMax RG',
    images: [
      {
        url: '/images/energy-efficiency-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Energy Efficiency Upgrades Delaware - Energy Saving Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Energy Efficiency Upgrades Delaware | Energy Saving Solutions',
    description: 'Expert home energy efficiency upgrades in DE. Reduce bills with residential energy improvements & eco-friendly solutions.',
    images: ['/images/energy-efficiency-twitter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://homemaxrg.com/capabilities/energy-efficiency',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Delaware',
    'geo.position': '38.9108;-75.5277', // Delaware coordinates
  },
}

export default function UndergroundUtilityLayout() {  

  return (
    <>
      <main className="grow">
        <Hero image={imgUndergroundUtility} title='ENERGY EFFICIENCY' />
        <Introduction currentIndex={1} />
        <Project currentIndex={1} />
        <ContactUs topic='ENERGY EFFICIENCY' />
        
        {/* Structured Data - Service & Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  "@id": "https://homemaxrg.com/capabilities/energy-efficiency#service",
                  "name": "Home Energy Efficiency Upgrades Delaware",
                  "description": "Professional home energy efficiency upgrades including energy audits, insulation improvements, power consumption reduction, and sustainable home solutions to reduce energy bills for residential properties in Delaware.",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "HomeMax RG",
                    "image": "https://homemaxrg.com/images/logo.png",
                    "@id": "https://homemaxrg.com/#organization",
                  },
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "Dover",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Delaware",
                        "address": {
                          "@type": "PostalAddress",
                          "addressRegion": "DE",
                          "addressCountry": "US"
                        }
                      }
                    },
                    {
                      "@type": "City",
                      "name": "Smyrna",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Delaware"
                      }
                    },
                    {
                      "@type": "City",
                      "name": "Milford",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Delaware"
                      }
                    },
                    {
                      "@type": "City",
                      "name": "Lewes",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Delaware"
                      }
                    }
                  ],
                  "serviceType": [
                    "Home Energy Efficiency Upgrades",
                    "Energy Saving Solutions",
                    "Residential Energy Improvements",
                    "Energy Audits",
                    "Insulation Improvements",
                    "Power Consumption Reduction",
                    "Sustainable Home Improvements",
                    "Eco-Friendly Home Upgrades"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Energy Efficiency Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Energy Audit for Residential Properties",
                          "description": "Comprehensive energy audits to identify opportunities to reduce energy bills in Delaware homes"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Insulation and Efficiency Improvements",
                          "description": "Professional insulation upgrades and energy efficiency improvements for optimal home performance"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Energy Efficient Home Upgrades",
                          "description": "Complete energy efficient home upgrades to reduce power consumption and lower utility costs"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Energy Optimization Services",
                          "description": "Advanced energy optimization services for sustainable and eco-friendly home improvements"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://homemaxrg.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Capabilities",
                      "item": "https://homemaxrg.com/capabilities"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Energy Efficiency Solutions",
                      "item": "https://homemaxrg.com/capabilities/energy-efficiency"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </main>
    </>
  )
}