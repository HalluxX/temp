import Hero from '@/components/ui/capabilities-service/hero'
import Introduction from '@/components/ui/capabilities-service/introduction'
import Project from '@/components/ui/capabilities-service/project'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgElectricPower from '@/assets/images/electric-power.webp';
import type { Metadata } from 'next'

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: 'Residential Electric Services Delaware | Licensed Home Electrician DE',
  description: 'Expert residential electric services in Delaware. Licensed electricians specializing in electrical panel upgrades, whole house rewiring, circuit breaker replacement, and power distribution upgrades for homes in Dover, Lewes, Milford, and Millsboro DE.',
  keywords: [
    // Primary & Core Keywords
    'residential electric services Delaware',
    'home electrical contractor DE',
    'licensed electrician Delaware',
    'electric power upgrades for homes',
    // Long-Tail Keywords
    'electrical panel upgrade for older homes',
    'whole house rewiring services',
    'circuit breaker replacement cost DE',
    'electrical load upgrade for renovations',
    // LSI Keywords
    'home electrical systems',
    'power distribution upgrades',
    'residential wiring solutions',
    'electrical troubleshooting services',
    // Local Intent Keywords
    'electrician in Millsboro DE',
    'residential electrical services Lewes DE',
    'home electrician Dover DE',
    'electrical contractor Milford DE',
  ],
  openGraph: {
    title: 'Residential Electric Services Delaware | Licensed Home Electrician',
    description: 'Expert residential electrical services in Delaware. Licensed electricians for panel upgrades, rewiring, circuit breaker replacement & power distribution upgrades.',
    url: 'https://homemaxrg.com/capabilities/electric-power',
    siteName: 'HomeMax RG',
    images: [
      {
        url: '/images/electric-power-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Residential Electric Services Delaware - Licensed Electrician',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Electric Services Delaware | Licensed Electrician',
    description: 'Expert residential electrical services in DE. Panel upgrades, rewiring, circuit breaker replacement & more.',
    images: ['/images/electric-power-twitter.jpg'],
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
    canonical: 'https://homemaxrg.com/capabilities/electric-power',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Delaware',
    'geo.position': '38.9108;-75.5277', // Delaware coordinates
  },
}

export default function ElectricPowerLayout() {  

  return (
    <>
      <main className="grow">
        <Hero image={imgElectricPower} title='ELECTRIC POWER' />
        <Introduction currentIndex={0} />
        <Project currentIndex={0} />
        <ContactUs topic='ELECTRIC POWER' />
        
        {/* Structured Data - Local Business & Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ElectricalService",
                  "@id": "https://homemaxrg.com/capabilities/electric-power#service",
                  "name": "Residential Electric Services Delaware",
                  "description": "Professional residential electrical services including panel upgrades, whole house rewiring, circuit breaker replacement, and electrical troubleshooting for homes in Delaware.",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "HomeMax RG",
                    "image": "https://www.homemaxrg.com/banner_logo_max.svg",
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
                    "Electrical Panel Upgrade",
                    "Whole House Rewiring",
                    "Circuit Breaker Replacement",
                    "Electrical Load Upgrade",
                    "Power Distribution Upgrades",
                    "Residential Wiring Solutions",
                    "Electrical Troubleshooting"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Residential Electrical Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Electrical Panel Upgrade for Older Homes",
                          "description": "Professional electrical panel upgrades for older homes to meet modern power demands"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Whole House Rewiring Services",
                          "description": "Complete home rewiring services for safety and efficiency"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Circuit Breaker Replacement",
                          "description": "Expert circuit breaker replacement and repair services"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Electrical Load Upgrade for Renovations",
                          "description": "Power upgrades to support home renovations and additions"
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
                      "name": "Electric Power Services",
                      "item": "https://homemaxrg.com/capabilities/electric-power"
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