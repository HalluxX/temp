import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/ui/capabilities-service/hero';
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list';

import imgSafety from '@/assets/images/speciality.webp';

export const metadata: Metadata = {
  title: 'Home Safety Improvement Services in Dagsboro, DE | HomeMax',
  description: 'Professional home safety improvement services in Dagsboro, DE. HomeMax provides electrical safety upgrades, home safety inspections, and residential safety solutions.',
  keywords: [
    'home safety improvements Dagsboro DE',
    'electrical safety upgrades Dagsboro',
    'home safety inspections Delaware',
    'residential safety services Dagsboro',
    'home safety upgrades Sussex County',
    'electrical safety services Delaware',
    'home hazard prevention Dagsboro',
    'safety improvement contractor',
    'residential safety compliance',
    'preventative safety upgrades'
  ],
  openGraph: {
    title: 'Home Safety Improvement Services in Dagsboro, DE | HomeMax',
    description: 'Professional home safety improvement services in Dagsboro, DE. Electrical safety upgrades, inspections, and residential safety solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/dagsboro/capabilities/safety',
    siteName: 'HomeMax Delaware',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Safety Improvement Services in Dagsboro, DE | HomeMax',
    description: 'Professional home safety improvement services in Dagsboro, DE. Electrical safety upgrades, inspections, and residential safety solutions.',
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
    canonical: 'https://www.homemaxrg.com/locations/dagsboro/capabilities/safety',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Dagsboro, Delaware',
    'geo.position': '38.5485;-75.2460',
  },
};

export default function DagsboroSafetyPage() {
  // Structured Data for Local Business Service
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/safety#service',
        name: 'Home Safety Improvement Services',
        description: 'Professional home safety improvement services including electrical safety upgrades, home safety inspections, and residential safety solutions in Dagsboro, DE',
        provider: {
          '@type': 'LocalBusiness',
          '@id': 'https://www.homemaxrg.com/#organization',
          name: 'HomeMax',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '8 The Green #23065',
            addressLocality: 'Dover',
            addressRegion: 'DE',
            postalCode: '19901',
            addressCountry: 'US',
          },
          telephone: '+1-302-XXX-XXXX',
          url: 'https://www.homemaxrg.com',
        },
        areaServed: {
          '@type': 'City',
          name: 'Dagsboro',
          '@id': 'https://en.wikipedia.org/wiki/Dagsboro,_Delaware',
        },
        serviceType: 'Home Safety Improvement',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Safety Improvement Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Electrical Safety Upgrades',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Home Safety Inspections',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Hazard Prevention Improvements',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Residential Safety Compliance',
              },
            },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/safety#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': 'https://www.homemaxrg.com',
              name: 'Home',
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': 'https://www.homemaxrg.com/locations',
              name: 'Locations',
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@id': 'https://www.homemaxrg.com/locations/dagsboro',
              name: 'Dagsboro',
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/safety',
              name: 'Home Safety Improvement Services',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="grow">
        <Hero image={imgSafety} title="HOME SAFETY IMPROVEMENT SERVICES IN DAGSBORO, DE" />

        {/* Why Safety Matters Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Home Safety Improvements Matter for Dagsboro Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homes in Dagsboro and surrounding Sussex County areas face unique challenges. Seasonal weather changes, humidity, power fluctuations, and older construction styles can all contribute to safety concerns if not addressed properly.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many safety risks don't announce themselves clearly. Loose wiring, overloaded circuits, inadequate grounding, poor lighting, or outdated safety components can exist quietly in the background. Over time, these issues increase the risk of electrical failure, fire hazards, and everyday household accidents.
              </p>
              <div className="bg-red-50 rounded-lg p-8">
                <p className="text-lg text-gray-900 font-semibold mb-4">
                  HomeMax focuses on preventative home safety upgrades that help homeowners stay ahead of potential problems instead of reacting to emergencies.
                </p>
                <p className="text-lg text-gray-700">
                  Our approach is simple: identify vulnerabilities, explain them clearly, and implement solutions that actually improve how your home functions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Safety Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Home Safety Services in Dagsboro, DE
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our safety services are designed to support both older homes and newer construction. We don't rely on one-size-fits-all checklists. Instead, we tailor our recommendations based on your home's layout, systems, and usage.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our residential safety improvement services include:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Electrical safety upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Home safety inspections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Power system safety enhancements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Hazard prevention improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Residential safety compliance upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Preventative safety modifications</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each service is performed with attention to detail and an understanding of how safety improvements affect daily living—not just inspections on paper.
              </p>
            </div>
          </div>
        </section>

        {/* Electrical Safety Upgrades Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Safety Upgrades That Reduce Hidden Risks
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Electrical issues are among the most common safety concerns we see in Dagsboro homes. Even houses that appear to function normally may still rely on outdated wiring, overloaded panels, or insufficient protection.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax provides electrical safety upgrades that help protect your home from avoidable risks. These improvements are especially important for homes that have been expanded, renovated, or upgraded with modern appliances over the years.
              </p>
              <div className="bg-red-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Electrical safety services may include:
                </h3>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Load and circuit safety evaluations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Electrical panel safety improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Grounding and protection upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Safe power distribution improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Residential electrical system enhancements</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                By addressing electrical safety proactively, homeowners reduce the risk of outages, damage, and fire hazards—while improving overall system reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Everyday Living Spaces Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safety Improvements for Everyday Living Spaces
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Safety isn't limited to electrical systems alone. Everyday living spaces can present risks if they're poorly lit, uneven, or not designed for long-term use. Slips, falls, and minor accidents are often caused by simple design oversights that can be corrected easily.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We help homeowners improve safety throughout the home by identifying problem areas and recommending practical upgrades that blend seamlessly into the space.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  These improvements may include:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    <span>Improved lighting for hallways and stairways</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    <span>Safer transitions between rooms or levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    <span>Visibility enhancements in frequently used areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">•</span>
                    <span>Residential safety feature upgrades</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The goal is not to change how your home looks—but to make it safer to live in every day.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                If you're unsure whether your home has hidden safety issues, now is the right time to find out.
              </h2>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Contact HomeMax today to schedule a professional home safety evaluation in Dagsboro, DE.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-red-50 transition-colors duration-300 shadow-lg"
              >
                Schedule Safety Evaluation
              </a>
              <p className="text-red-100 mt-4">
                A simple assessment can prevent costly repairs and give you confidence in your home's safety.
              </p>
            </div>
          </div>
        </section>

        {/* Preventative Safety Upgrades Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Preventative Safety Upgrades for Long-Term Protection
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                One of the most effective ways to protect your home is through preventative safety improvements. These upgrades focus on reducing risks before they develop into serious problems.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax works with homeowners who want to invest in safety the smart way—by strengthening systems, improving reliability, and eliminating weak points over time.
              </p>
              <div className="bg-red-50 rounded-lg p-8 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Preventative safety services include:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Residential hazard prevention upgrades</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Long-term safety system improvements</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Safety compliance enhancements</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Proactive home protection solutions</span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                These upgrades are especially valuable for homeowners planning to stay in their homes long-term or preparing properties for future resale.
              </p>
            </div>
          </div>
        </section>

        {/* Older Homes Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safety Services for Older Homes in Dagsboro
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many homes in and around Dagsboro were built decades ago, often before modern safety standards were established. While these homes have character and charm, they may also rely on outdated safety features that no longer meet today's expectations.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We regularly help homeowners modernize safety systems without disrupting the integrity of the home. Our team understands how to improve safety while respecting the original structure and design.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="text-xl text-gray-900 font-semibold">
                  If your home hasn't been evaluated in years, a safety update can dramatically improve both comfort and confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Local Team That Understands Dagsboro Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax is proud to serve homeowners in Dagsboro, DE with local expertise and responsive service. We understand the construction styles, environmental conditions, and homeowner concerns common in this area.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Because we work locally, we're able to:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">►</span>
                      <span>Respond quickly to safety concerns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">►</span>
                      <span>Offer realistic recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">►</span>
                      <span>Provide long-term support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">►</span>
                      <span>Build lasting relationships with homeowners</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-600 text-white rounded-lg p-6 flex flex-col justify-center">
                  <p className="text-xl font-bold mb-4">Our Commitment</p>
                  <p className="text-red-50">
                    Our goal isn't to sell unnecessary services—it's to deliver meaningful safety improvements that genuinely protect your home and family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How Our Safety Process Works
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe homeowners deserve clarity, not confusion. That's why our safety service process is straightforward and transparent.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Here's what you can expect when working with HomeMax:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-2xl mr-4">1</span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Thorough Home Review</h4>
                      <p className="text-gray-700">A thorough review of your home's safety needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-2xl mr-4">2</span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Clear Explanations</h4>
                      <p className="text-gray-700">Clear explanations of any concerns found</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-2xl mr-4">3</span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Practical Recommendations</h4>
                      <p className="text-gray-700">Practical recommendations tailored to your home</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-2xl mr-4">4</span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Professional Implementation</h4>
                      <p className="text-gray-700">Professional implementation of safety upgrades</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-2xl mr-4">5</span>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Ongoing Support</h4>
                      <p className="text-gray-700">Ongoing support when needed</p>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-6 font-semibold">
                  You stay informed at every step, and nothing is done without your approval.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who Benefits Most from Home Safety Services?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our home safety improvement services in Dagsboro, DE are ideal for:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">•</span>
                      <span>Homeowners with aging electrical systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">•</span>
                      <span>Families concerned about household safety</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">•</span>
                      <span>Property owners planning renovations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">•</span>
                      <span>New homeowners seeking peace of mind</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">•</span>
                      <span>Anyone wanting to prevent future issues</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-600 text-white rounded-lg p-6 flex flex-col justify-center">
                  <p className="text-2xl font-bold mb-4">🛡️ Safety First</p>
                  <p className="text-lg text-red-50">
                    Even small safety upgrades can make a meaningful difference when they're done correctly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose HomeMax Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose HomeMax for Home Safety in Dagsboro, DE
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homeowners choose HomeMax because we combine technical expertise with honest communication. We don't rush projects or overlook details. Every safety upgrade is completed with care and professionalism.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  When you work with HomeMax, you get:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Experienced residential safety professionals</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Local knowledge of Dagsboro homes</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">High-quality workmanship</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Clear recommendations without pressure</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Long-term value and peace of mind</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-6 font-semibold">
                  We treat your home with the same care we'd expect for our own.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule Your Home Safety Consultation in Dagsboro Today
              </h2>
              <p className="text-xl text-red-100 mb-6 leading-relaxed">
                Your home should feel safe, reliable, and comfortable—every day of the year. If you've been putting off safety upgrades or aren't sure where to start, HomeMax is here to help.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
                <p className="text-lg text-red-100 mb-4">
                  Schedule your home safety consultation in Dagsboro, DE today and let our team identify practical improvements that protect what matters most.
                </p>
                <p className="text-lg text-red-100">
                  From electrical safety upgrades to preventative home safety solutions, we're ready to support your home with dependable, professional service.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-block bg-white text-red-600 font-bold py-4 px-10 rounded-lg hover:bg-red-50 transition-colors duration-300 shadow-xl text-lg"
              >
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Location-Specific Capabilities List */}
        <LocationCapabilitiesList location="dagsboro" currentCapability="safety" />
      </main>
    </>
  );
}

