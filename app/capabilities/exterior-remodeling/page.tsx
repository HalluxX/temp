import Hero from '@/components/ui/capabilities-service/hero'
import Introduction from '@/components/ui/capabilities-service/introduction'
import Project from '@/components/ui/capabilities-service/project'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgSpeciality from '@/assets/images/speciality.webp';
import type { Metadata } from 'next'

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: 'Exterior Remodeling Services Delaware | Home Exterior Renovation DE',
  description: 'Expert exterior remodeling services in Delaware. Professional home exterior renovation, residential exterior upgrades, outdoor lighting installation, exterior electrical upgrades, and exterior safety and power upgrades in Smyrna, Milford, Lewes, and Dagsboro DE.',
  keywords: [
    // Primary & Core Keywords
    'exterior remodeling services Delaware',
    'home exterior renovation DE',
    'residential exterior upgrades',
    // Long-Tail Keywords
    'exterior electrical upgrades for homes',
    'outdoor lighting installation DE',
    'exterior safety and power upgrades',
    'home exterior improvement contractor',
    // LSI Keywords
    'outdoor home renovations',
    'exterior home improvements',
    'residential curb appeal upgrades',
    'exterior system upgrades',
    // Local Intent Keywords
    'exterior remodeling Smyrna DE',
    'home exterior upgrades Milford DE',
    'exterior renovation Lewes DE',
    'residential exterior services Dagsboro DE',
  ],
  openGraph: {
    title: 'Exterior Remodeling Services Delaware | Home Exterior Renovation',
    description: 'Expert exterior remodeling services in Delaware. Professional home exterior renovation, outdoor lighting installation, exterior electrical upgrades, and residential curb appeal upgrades.',
    url: 'https://homemaxrg.com/capabilities/exterior-remodeling',
    siteName: 'HomeMax RG',
    images: [
      {
        url: '/images/exterior-remodeling-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Exterior Remodeling Services Delaware - Home Exterior Renovation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exterior Remodeling Services Delaware | Home Exterior Renovation',
    description: 'Expert exterior remodeling in DE. Outdoor lighting installation, exterior electrical upgrades & residential exterior improvements.',
    images: ['/images/exterior-remodeling-twitter.jpg'],
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
    canonical: 'https://homemaxrg.com/capabilities/exterior-remodeling',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Delaware',
    'geo.position': '38.9108;-75.5277', // Delaware coordinates
  },
}

export default function SpecialityLayout() {  

  return (
    <>
      <main className="grow">
        <Hero image={imgSpeciality} title='EXTERIOR REMODELING' />
        <Introduction currentIndex={4} />
        <Project currentIndex={4} />
        <ContactUs topic='EXTERIOR REMODELING' />
        
        {/* Structured Data - Service & Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "HomeAndConstructionBusiness",
                  "@id": "https://homemaxrg.com/capabilities/exterior-remodeling#service",
                  "name": "Exterior Remodeling Services Delaware",
                  "description": "Professional exterior remodeling services including home exterior renovation, residential exterior upgrades, outdoor lighting installation, exterior electrical upgrades, and exterior safety and power upgrades for Delaware homes.",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "HomeMax RG",
                    "image": "https://www.homemaxrg.com/banner_logo_max.svg",
                    "@id": "https://homemaxrg.com/#organization",
                  },
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "Smyrna",
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
                      "name": "Lewes",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Delaware"
                      }
                    },
                    {
                      "@type": "City",
                      "name": "Dagsboro",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Delaware"
                      }
                    }
                  ],
                  "serviceType": [
                    "Exterior Remodeling Services",
                    "Home Exterior Renovation",
                    "Residential Exterior Upgrades",
                    "Outdoor Lighting Installation",
                    "Exterior Electrical Upgrades",
                    "Exterior Safety and Power Upgrades",
                    "Outdoor Home Renovations",
                    "Residential Curb Appeal Upgrades",
                    "Exterior System Upgrades"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Exterior Remodeling Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Exterior Electrical Upgrades for Homes",
                          "description": "Professional exterior electrical upgrades including power systems and wiring for home exterior improvements"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Outdoor Lighting Installation",
                          "description": "Expert outdoor lighting installation to enhance curb appeal, safety, and functionality of your home exterior"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Exterior Safety and Power Upgrades",
                          "description": "Comprehensive exterior safety and power upgrades for enhanced home security and electrical capacity"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Home Exterior Improvement Contractor",
                          "description": "Complete home exterior improvement services with residential curb appeal upgrades and outdoor renovations"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Exterior System Upgrades",
                          "description": "Professional exterior system upgrades for residential properties including electrical, lighting, and power solutions"
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
                      "name": "Exterior Remodeling",
                      "item": "https://homemaxrg.com/capabilities/exterior-remodeling"
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