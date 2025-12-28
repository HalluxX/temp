import Hero from '@/components/ui/capabilities-service/hero'
import Introduction from '@/components/ui/capabilities-service/introduction'
import Project from '@/components/ui/capabilities-service/project'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgEngineering from '@/assets/images/engineering.webp';
import type { Metadata } from 'next'

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: 'Whole House Generator Installation Delaware | Residential Generator Services',
  description: 'Expert whole house generator installation in Delaware. Professional residential generator services, backup power solutions, standby generator installation, emergency power systems, and generator maintenance services in Dover, Lewes, Milford, and Millsboro DE.',
  keywords: [
    // Primary & Core Keywords
    'whole house generator installation Delaware',
    'residential generator services DE',
    'backup power solutions for homes',
    // Long-Tail Keywords
    'standby generator installation cost DE',
    'generator installation for power outages',
    'home backup generator systems',
    'generator maintenance services DE',
    // LSI Keywords
    'emergency power systems',
    'backup electrical power solutions',
    'residential standby generators',
    'power outage protection',
    // Local Intent Keywords
    'generator installation Millsboro DE',
    'home generator Lewes DE',
    'standby generator Dover DE',
    'backup power Milford DE',
  ],
  openGraph: {
    title: 'Whole House Generator Installation Delaware | Residential Generator Services',
    description: 'Expert whole house generator installation in Delaware. Professional residential generator services, backup power solutions, and emergency power systems for homes.',
    url: 'https://homemaxrg.com/capabilities/generators',
    siteName: 'HomeMax RG',
    images: [
      {
        url: '/images/generators-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Whole House Generator Installation Delaware - Residential Generator Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whole House Generator Installation Delaware | Residential Generator Services',
    description: 'Expert generator installation in DE. Backup power solutions, standby generators & emergency power systems for homes.',
    images: ['/images/generators-twitter.jpg'],
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
    canonical: 'https://homemaxrg.com/capabilities/generators',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Delaware',
    'geo.position': '38.9108;-75.5277', // Delaware coordinates
  },
}

export default function EngineeringLayout() {  

  return (
    <>
      <main className="grow">
        <Hero image={imgEngineering} title='GENERATORS' />
        <Introduction currentIndex={6} />
        <Project currentIndex={6} />
        <ContactUs topic='GENERATORS' />
        
        {/* Structured Data - Service & Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ElectricalService",
                  "@id": "https://homemaxrg.com/capabilities/generators#service",
                  "name": "Whole House Generator Installation Delaware",
                  "description": "Professional whole house generator installation and residential generator services including backup power solutions, standby generator installation, emergency power systems, and generator maintenance for Delaware homes.",
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
                      "name": "Lewes",
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
                      "name": "Millsboro",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Delaware"
                      }
                    }
                  ],
                  "serviceType": [
                    "Whole House Generator Installation",
                    "Residential Generator Services",
                    "Backup Power Solutions",
                    "Standby Generator Installation",
                    "Generator Maintenance Services",
                    "Emergency Power Systems",
                    "Home Backup Generator Systems",
                    "Residential Standby Generators",
                    "Power Outage Protection"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Generator Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Standby Generator Installation",
                          "description": "Professional standby generator installation for power outages with complete backup electrical power solutions"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Home Backup Generator Systems",
                          "description": "Complete home backup generator systems installation providing reliable power outage protection"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Generator Maintenance Services",
                          "description": "Professional generator maintenance services to ensure your emergency power systems are always ready"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Generator Installation for Power Outages",
                          "description": "Expert generator installation for power outages with residential standby generators for reliable backup power"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Emergency Power Systems",
                          "description": "Advanced emergency power systems and backup electrical power solutions for residential properties"
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
                      "name": "Generator Services",
                      "item": "https://homemaxrg.com/capabilities/generators"
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