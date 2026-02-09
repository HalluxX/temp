import Hero from '@/components/ui/capabilities-service/hero'
import Introduction from '@/components/ui/capabilities-service/introduction'
import Project from '@/components/ui/capabilities-service/project'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgRenewables from '@/assets/images/renewables.webp';
import type { Metadata } from 'next'

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: 'Home Safety Upgrades Delaware | Residential Safety Improvements DE',
  description: 'Expert home safety upgrades in Delaware. Professional residential safety improvements, electrical safety inspections, smoke detector installation, surge protection, and child-safe electrical installations in Dover, Millsboro, Laurel, and Bridgeville DE.',
  keywords: [
    // Primary & Core Keywords
    'home safety upgrades Delaware',
    'residential safety improvements',
    'electrical safety inspections DE',
    // Long-Tail Keywords
    'child-safe electrical installations',
    'home safety inspection services',
    'smoke detector installation DE',
    'surge protection for homes',
    // LSI Keywords
    'household safety solutions',
    'residential risk prevention',
    'electrical hazard prevention',
    'safety compliance upgrades',
    // Local Intent Keywords
    'home safety services Millsboro DE',
    'residential safety upgrades Laurel DE',
    'electrical safety checks Dover DE',
    'home protection services Bridgeville DE',
  ],
  openGraph: {
    title: 'Home Safety Upgrades Delaware | Residential Safety Improvements',
    description: 'Expert home safety upgrades in Delaware. Professional electrical safety inspections, smoke detector installation, surge protection, and child-safe electrical installations.',
    url: 'https://homemaxrg.com/capabilities/safety',
    siteName: 'HomeMax RG',
    images: [
      {
        url: '/images/safety-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Safety Upgrades Delaware - Residential Safety Improvements',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Safety Upgrades Delaware | Residential Safety Improvements',
    description: 'Expert home safety upgrades in DE. Electrical safety inspections, smoke detectors, surge protection & child-safe installations.',
    images: ['/images/safety-twitter.jpg'],
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
    canonical: 'https://homemaxrg.com/capabilities/safety',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Delaware',
    'geo.position': '38.9108;-75.5277', // Delaware coordinates
  },
}

export default function RenewablesLayout() {  

  return (
    <>
      <main className="grow">
        <Hero image={imgRenewables} title='SAFETY' />
        <Introduction currentIndex={2} />
        <Project currentIndex={2} />
        <ContactUs topic='SAFETY' />
        
        {/* Structured Data - Service & Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  "@id": "https://homemaxrg.com/capabilities/safety#service",
                  "name": "Home Safety Upgrades Delaware",
                  "description": "Professional home safety upgrades including electrical safety inspections, smoke detector installation, surge protection, child-safe electrical installations, and household safety solutions to prevent residential electrical hazards in Delaware.",
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
                      "name": "Millsboro",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Delaware"
                      }
                    },
                    {
                      "@type": "City",
                      "name": "Laurel",
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
                    "Home Safety Upgrades",
                    "Residential Safety Improvements",
                    "Electrical Safety Inspections",
                    "Smoke Detector Installation",
                    "Surge Protection Installation",
                    "Child-Safe Electrical Installations",
                    "Household Safety Solutions",
                    "Electrical Hazard Prevention",
                    "Safety Compliance Upgrades"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Home Safety Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Electrical Safety Inspections",
                          "description": "Comprehensive electrical safety inspections to identify and prevent residential electrical hazards"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Smoke Detector Installation",
                          "description": "Professional smoke detector installation and maintenance services for complete home protection"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Surge Protection for Homes",
                          "description": "Advanced surge protection systems to safeguard your home's electrical systems and appliances"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Child-Safe Electrical Installations",
                          "description": "Child-safe electrical installations and safety upgrades for family-friendly home protection"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Home Safety Inspection Services",
                          "description": "Complete home safety inspection services to ensure residential risk prevention and safety compliance"
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
                      "name": "Home Safety Services",
                      "item": "https://homemaxrg.com/capabilities/safety"
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