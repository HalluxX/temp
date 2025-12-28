import Hero from '@/components/ui/capabilities-service/hero'
import Introduction from '@/components/ui/capabilities-service/introduction'
import Project from '@/components/ui/capabilities-service/project'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgBroadband from '@/assets/images/broadband.webp';
import imgBroadbandDesktop from '@/assets/images/broadband-desktop.webp';
import type { Metadata } from 'next'

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: 'Interior Remodeling Services Delaware | Home Interior Renovation Contractor',
  description: 'Expert interior remodeling services in Delaware. Professional home interior renovation contractor for residential remodeling, kitchen and bathroom renovation, interior upgrades, and electrical upgrades for interior remodel in Dover, Lewes, Milford, and Millsboro DE.',
  keywords: [
    // Primary & Core Keywords
    'interior remodeling services Delaware',
    'home interior renovation contractor',
    'residential remodeling DE',
    // Long-Tail Keywords
    'interior remodeling for older homes',
    'kitchen and bathroom renovation DE',
    'interior upgrades during home remodel',
    'electrical upgrades for interior remodel',
    // LSI Keywords
    'indoor home renovations',
    'interior home improvements',
    'residential renovation solutions',
    'remodeling project support services',
    // Local Intent Keywords
    'interior remodeling Millsboro DE',
    'home renovation Lewes DE',
    'interior remodel contractor Dover DE',
    'residential remodel Milford DE',
  ],
  openGraph: {
    title: 'Interior Remodeling Services Delaware | Home Interior Renovation',
    description: 'Expert interior remodeling services in Delaware. Professional home interior renovation for residential remodeling, kitchen and bathroom renovation, and interior upgrades.',
    url: 'https://homemaxrg.com/capabilities/interior-remodeling',
    siteName: 'HomeMax RG',
    images: [
      {
        url: '/images/interior-remodeling-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Interior Remodeling Services Delaware - Home Interior Renovation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Remodeling Services Delaware | Home Interior Renovation',
    description: 'Expert interior remodeling in DE. Kitchen & bathroom renovation, interior upgrades, and residential remodeling solutions.',
    images: ['/images/interior-remodeling-twitter.jpg'],
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
    canonical: 'https://homemaxrg.com/capabilities/interior-remodeling',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Delaware',
    'geo.position': '38.9108;-75.5277', // Delaware coordinates
  },
}

export default function BroadbandLayout() {  

  return (
    <>
      <main className="grow">
        <div className='hidden md:block' >
          <Hero image={imgBroadbandDesktop} title='INTERIOR REMODELING' />
        </div>
        <div className='md:hidden' >
          <Hero image={imgBroadband} title='INTERIOR REMODELING' />
        </div>
        <Introduction currentIndex={3} />
        <Project currentIndex={3} />
        <ContactUs topic='INTERIOR REMODELING' />
        
        {/* Structured Data - Service & Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "HomeAndConstructionBusiness",
                  "@id": "https://homemaxrg.com/capabilities/interior-remodeling#service",
                  "name": "Interior Remodeling Services Delaware",
                  "description": "Professional interior remodeling services including home interior renovation, kitchen and bathroom renovation, interior upgrades during home remodel, and electrical upgrades for residential remodeling projects in Delaware.",
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
                    "Interior Remodeling Services",
                    "Home Interior Renovation",
                    "Residential Remodeling",
                    "Kitchen Renovation",
                    "Bathroom Renovation",
                    "Interior Upgrades",
                    "Electrical Upgrades for Remodels",
                    "Indoor Home Renovations",
                    "Residential Renovation Solutions"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Interior Remodeling Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Interior Remodeling for Older Homes",
                          "description": "Comprehensive interior remodeling services tailored for older homes with modern upgrades and improvements"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Kitchen and Bathroom Renovation",
                          "description": "Professional kitchen and bathroom renovation services with complete design and installation"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Interior Upgrades During Home Remodel",
                          "description": "Complete interior upgrades including lighting, fixtures, and electrical improvements during home remodeling projects"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Electrical Upgrades for Interior Remodel",
                          "description": "Expert electrical upgrades to support interior remodeling projects with modern power and lighting solutions"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Remodeling Project Support Services",
                          "description": "Complete remodeling project support with indoor home renovations and residential renovation solutions"
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
                      "name": "Interior Remodeling",
                      "item": "https://homemaxrg.com/capabilities/interior-remodeling"
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