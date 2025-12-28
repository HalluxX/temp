import Hero from '@/components/ui/capabilities-service/hero'
import Introduction from '@/components/ui/capabilities-service/introduction'
import Project from '@/components/ui/capabilities-service/project'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgConcreteSolution from '@/assets/images/concrete-solution.webp';
import type { Metadata } from 'next'

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: 'Home Maintenance Plans Delaware | Residential Maintenance Subscription',
  description: 'Expert home maintenance plans in Delaware. Professional residential maintenance subscription services, preventative home maintenance, electrical maintenance plans, annual home system maintenance, and preventative care programs in Dover, Milford, Millsboro, and Smyrna DE.',
  keywords: [
    // Primary & Core Keywords
    'home maintenance plans Delaware',
    'residential maintenance subscription',
    'preventative home maintenance DE',
    // Long-Tail Keywords
    'electrical maintenance plans for homes',
    'annual home system maintenance',
    'preventative electrical service plans',
    'residential service maintenance programs',
    // LSI Keywords
    'ongoing home maintenance services',
    'scheduled system inspections',
    'residential service agreements',
    'preventative care programs',
    // Local Intent Keywords
    'home maintenance plans Millsboro DE',
    'residential maintenance Dover DE',
    'service subscription Milford DE',
    'home care plans Smyrna DE',
  ],
  openGraph: {
    title: 'Home Maintenance Plans Delaware | Residential Maintenance Subscription',
    description: 'Expert home maintenance plans in Delaware. Professional residential maintenance subscriptions, preventative home maintenance, and electrical maintenance plans for homes.',
    url: 'https://homemaxrg.com/capabilities/maintenance-subscriptions',
    siteName: 'HomeMax RG',
    images: [
      {
        url: '/images/maintenance-subscriptions-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Maintenance Plans Delaware - Residential Maintenance Subscription',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Maintenance Plans Delaware | Residential Maintenance Subscription',
    description: 'Expert home maintenance plans in DE. Preventative home maintenance, electrical maintenance plans & residential service programs.',
    images: ['/images/maintenance-subscriptions-twitter.jpg'],
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
    canonical: 'https://homemaxrg.com/capabilities/maintenance-subscriptions',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Delaware',
    'geo.position': '38.9108;-75.5277', // Delaware coordinates
  },
}

export default function ConcreteSolutionLayout() {  

  return (
    <>
      <main className="grow">
        <Hero image={imgConcreteSolution} title='MAINTENANCE SUBSCRIPTIONS' />
        <Introduction currentIndex={7} />
        <ContactUs topic='MAINTENANCE SUBSCRIPTIONS' />
        
        {/* Structured Data - Service & Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  "@id": "https://homemaxrg.com/capabilities/maintenance-subscriptions#service",
                  "name": "Home Maintenance Plans Delaware",
                  "description": "Professional home maintenance plans and residential maintenance subscription services including preventative home maintenance, electrical maintenance plans, annual home system maintenance, and scheduled system inspections for Delaware homes.",
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
                      "name": "Smyrna",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Delaware"
                      }
                    }
                  ],
                  "serviceType": [
                    "Home Maintenance Plans",
                    "Residential Maintenance Subscription",
                    "Preventative Home Maintenance",
                    "Electrical Maintenance Plans",
                    "Annual Home System Maintenance",
                    "Preventative Electrical Service Plans",
                    "Residential Service Maintenance Programs",
                    "Ongoing Home Maintenance Services",
                    "Scheduled System Inspections"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Maintenance Subscription Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Electrical Maintenance Plans for Homes",
                          "description": "Comprehensive electrical maintenance plans with preventative electrical service plans for residential properties"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Annual Home System Maintenance",
                          "description": "Complete annual home system maintenance with scheduled system inspections and preventative care programs"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Preventative Electrical Service Plans",
                          "description": "Proactive preventative electrical service plans to prevent issues and maintain optimal home performance"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Residential Service Maintenance Programs",
                          "description": "Flexible residential service maintenance programs with ongoing home maintenance services and residential service agreements"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Preventative Care Programs",
                          "description": "Complete preventative care programs with scheduled system inspections for peace of mind home protection"
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
                      "name": "Maintenance Subscriptions",
                      "item": "https://homemaxrg.com/capabilities/maintenance-subscriptions"
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