import Hero from '@/components/ui/capabilities-service/hero'
import Introduction from '@/components/ui/capabilities-service/introduction'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import Project from '@/components/ui/capabilities-service/project'

import imgUtilityPerformance from '@/assets/images/utility-performance.webp';
import type { Metadata } from 'next'

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: 'Home Restoration Services Delaware | Residential Restoration Contractor',
  description: 'Expert home restoration services in Delaware. Professional residential restoration contractor for property restoration, electrical restoration after damage, storm damage restoration, and home repair and restoration services in Dover, Milford, Millsboro, and Bridgeville DE.',
  keywords: [
    // Primary & Core Keywords
    'home restoration services Delaware',
    'residential restoration contractor',
    'property restoration DE',
    // Long-Tail Keywords
    'electrical restoration after damage',
    'home repair and restoration services',
    'storm damage restoration DE',
    'residential system restoration',
    // LSI Keywords
    'home recovery services',
    'residential repair solutions',
    'system restoration specialists',
    'property repair services',
    // Local Intent Keywords
    'home restoration Millsboro DE',
    'property restoration Dover DE',
    'residential restoration Milford DE',
    'restoration contractor Bridgeville DE',
  ],
  openGraph: {
    title: 'Home Restoration Services Delaware | Residential Restoration Contractor',
    description: 'Expert home restoration services in Delaware. Professional property restoration, electrical restoration after damage, storm damage restoration, and residential repair solutions.',
    url: 'https://homemaxrg.com/capabilities/restoration',
    siteName: 'HomeMax RG',
    images: [
      {
        url: '/images/restoration-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Restoration Services Delaware - Residential Restoration Contractor',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Restoration Services Delaware | Residential Restoration Contractor',
    description: 'Expert home restoration in DE. Property restoration, electrical restoration, storm damage repair & residential solutions.',
    images: ['/images/restoration-twitter.jpg'],
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
    canonical: 'https://homemaxrg.com/capabilities/restoration',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Delaware',
    'geo.position': '38.9108;-75.5277', // Delaware coordinates
  },
}

export default function UtilityPerformanceLayout() {  

  return (
    <>
      <main className="grow">
        <Hero image={imgUtilityPerformance} title='RESTORATION' />
        <Introduction currentIndex={5} />
        <Project currentIndex={5} />
        <ContactUs topic='RESTORATION' />
        
        {/* Structured Data - Service & Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "HomeAndConstructionBusiness",
                  "@id": "https://homemaxrg.com/capabilities/restoration#service",
                  "name": "Home Restoration Services Delaware",
                  "description": "Professional home restoration services including residential restoration, property restoration, electrical restoration after damage, storm damage restoration, and home repair and restoration services for Delaware properties.",
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
                      "name": "Milford",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Delaware"
                      }
                    },
                    {
                      "@type": "City",
                      "name": "Millsboro",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Delaware"
                      }
                    },
                    {
                      "@type": "City",
                      "name": "Bridgeville",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Delaware"
                      }
                    }
                  ],
                  "serviceType": [
                    "Home Restoration Services",
                    "Residential Restoration",
                    "Property Restoration",
                    "Electrical Restoration After Damage",
                    "Storm Damage Restoration",
                    "Home Repair and Restoration",
                    "Residential System Restoration",
                    "Home Recovery Services",
                    "Property Repair Services"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Restoration Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Electrical Restoration After Damage",
                          "description": "Professional electrical restoration services after storm damage, fire, or other property damage incidents"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Storm Damage Restoration",
                          "description": "Expert storm damage restoration services to repair and restore electrical systems and home infrastructure"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Home Repair and Restoration Services",
                          "description": "Comprehensive home repair and restoration services including electrical, structural, and system repairs"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Residential System Restoration",
                          "description": "Complete residential system restoration for electrical, power, and safety systems after property damage"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Property Repair Services",
                          "description": "Professional property repair services as system restoration specialists for home recovery needs"
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
                      "name": "Restoration Services",
                      "item": "https://homemaxrg.com/capabilities/restoration"
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