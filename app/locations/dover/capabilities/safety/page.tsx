import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/ui/capabilities-service/hero';
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list';

import imgSafety from '@/assets/images/speciality.webp';

export const metadata: Metadata = {
  title: 'Home Safety Improvement Services in Dover, DE | HomeMax',
  description: 'Professional home safety improvement services in Dover, DE. HomeMax provides electrical safety upgrades, home safety inspections, and residential safety solutions for Dover homes.',
  keywords: [
    'home safety Dover DE',
    'electrical safety upgrades Dover',
    'home safety inspections Dover Delaware',
    'residential safety Dover',
    'safety improvements Dover DE',
    'home hazard prevention Kent County',
    'safety upgrades Dover',
    'home safety Dover DE',
  ],
  openGraph: {
    title: 'Home Safety Improvement Services in Dover, DE | HomeMax',
    description: 'Professional home safety improvement services in Dover, DE. Electrical safety upgrades, inspections, and residential safety solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/dover/capabilities/safety',
    siteName: 'HomeMax Delaware',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Safety Improvement Services in Dover, DE | HomeMax',
    description: 'Professional home safety improvement services in Dover, DE. Electrical safety upgrades and residential safety solutions.',
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
    canonical: 'https://www.homemaxrg.com/locations/dover/capabilities/safety',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Dover, Delaware',
    'geo.position': '39.1582;-75.5244',
  },
};

export default function DoverSafetyPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/safety#service',
        name: 'Home Safety Improvement Services',
        description: 'Professional home safety improvement services including electrical safety upgrades, home safety inspections, and residential safety solutions in Dover, DE',
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
          name: 'Dover',
          '@id': 'https://en.wikipedia.org/wiki/Dover,_Delaware',
        },
        serviceType: 'Home Safety Improvement',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Safety Improvement Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Safety Inspections' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical Safety Upgrades' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structural and Interior Safety' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Preventative Hazard Reduction' } },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/safety#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, item: { '@id': 'https://www.homemaxrg.com', name: 'Home' } },
          { '@type': 'ListItem', position: 2, item: { '@id': 'https://www.homemaxrg.com/locations', name: 'Locations' } },
          { '@type': 'ListItem', position: 3, item: { '@id': 'https://www.homemaxrg.com/locations/dover', name: 'Dover' } },
          { '@type': 'ListItem', position: 4, item: { '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/safety', name: 'Home Safety Improvement Services' } },
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
        <Hero image={imgSafety} title="HOME SAFETY IMPROVEMENT SERVICES IN DOVER, DE" />

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Home Safety Improvement Services in Dover, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Keeping your home safe isn't about one upgrade or a single inspection—it's about making sure every system, structure, and space works together to protect the people who live there. At HomeMax, we provide professional home safety improvement services in Dover, DE designed to reduce risks, prevent accidents, and give homeowners peace of mind.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Homes across Dover range from older properties with aging systems to newer builds that still require ongoing safety checks and updates. No matter the age of your home, safety should never be assumed. Our team helps identify potential hazards early and delivers practical, long-lasting solutions that keep your household secure.
              </p>
            </div>
          </div>
        </section>

        {/* A Local Approach to Residential Safety */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Local Approach to Residential Safety in Dover
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dover homeowners face a unique mix of safety concerns. Older neighborhoods often deal with outdated electrical systems, worn interior features, or insufficient safety upgrades. Newer homes, while modern, can still have overlooked risks such as improper installations, insufficient load capacity, or missing preventative measures.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a local home improvement contractor serving Dover, DE, HomeMax understands these challenges. We don't offer generic fixes—we focus on residential safety upgrades that are appropriate for local homes, local building standards, and real daily use.
              </p>
              <p className="text-lg text-gray-700 mb-4">Our safety services are designed to help homeowners:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Reduce household hazards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Improve electrical and structural safety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Prevent costly damage caused by neglected issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Protect families, guests, and long-term property value</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comprehensive Home Safety Improvements */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Home Safety Improvements That Make a Difference
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                True home safety goes beyond alarms and detectors. It involves making sure your home's systems, surfaces, and layouts function safely under everyday conditions. HomeMax provides full-scope home safety improvement services in Dover to address both visible risks and hidden concerns.
              </p>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our safety-focused services include:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Residential safety inspections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Electrical safety upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Structural and interior safety improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Preventative hazard reduction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Code-compliant safety enhancements</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each project begins with an evaluation of your home and a conversation about how you use your space. From there, we recommend upgrades that improve safety without unnecessary disruption.
              </p>
            </div>
          </div>
        </section>

        {/* Electrical Safety Upgrades */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Safety Upgrades for Modern Living
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Electrical systems are one of the most common sources of home safety issues, especially in older Dover homes. As power demands increase with modern appliances, outdated wiring and panels can become serious hazards.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax provides electrical safety improvements in Dover, DE that help protect your home and reduce the risk of electrical failures.
              </p>
              <p className="text-lg text-gray-700 mb-4">Our electrical safety services include:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Electrical panel and circuit upgrades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Power capacity improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Wiring safety corrections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Load balancing and system optimization</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                These upgrades not only improve safety but also support the performance of your home's electrical systems, helping prevent outages, overheating, and long-term damage.
              </p>
            </div>
          </div>
        </section>

        {/* Interior Safety Improvements */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Interior Safety Improvements for Everyday Use
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many household accidents happen inside the home during everyday activities. Loose fixtures, worn surfaces, and poorly designed layouts can create unnecessary risks over time.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our interior home safety improvements focus on making living spaces safer and more functional without sacrificing comfort or style.
              </p>
              <p className="text-lg text-gray-700 mb-4">We help Dover homeowners with:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Safer interior layouts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Secure fixtures and finishes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Improved lighting and visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Interior upgrades that reduce trip and fall risks</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                These improvements are especially valuable for households with children, aging family members, or frequent visitors.
              </p>
            </div>
          </div>
        </section>

        {/* Structural Safety */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Structural Safety and Preventative Upgrades
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Structural safety is often overlooked until a problem becomes obvious. Small issues can quietly grow into serious concerns if left unaddressed. HomeMax provides preventative safety upgrades that help protect the integrity of your home.
              </p>
              <p className="text-lg text-gray-700 mb-4">Our safety services support:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Structural stability improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Reinforcement of high-use areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Long-term safety compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Protection against wear-related risks</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                By addressing these issues early, Dover homeowners can avoid costly repairs and reduce the risk of sudden safety failures.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Concerned about hidden safety risks in your Dover home?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Now is the right time to take action.
              </p>
              <p className="text-lg text-gray-700 font-semibold mb-8">
                👉 Schedule a Home Safety Consultation with HomeMax today. Our local team will assess your home, explain your options clearly, and recommend safety upgrades that actually make sense for your property.
              </p>
              <a
                href="/contact"
                className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg text-lg"
              >
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Home Safety Inspections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Home Safety Inspections with Real Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A safety inspection should do more than point out problems—it should provide clear, actionable solutions. HomeMax offers residential safety inspections in Dover, DE that focus on practical improvements, not unnecessary add-ons.
              </p>
              <p className="text-lg text-gray-700 mb-4">Our inspections help identify:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Electrical and system-related risks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Interior and structural safety concerns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Areas that may not meet current safety standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Preventative improvements that add long-term value</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We take the time to explain what matters most and prioritize upgrades based on real risk, not sales pressure.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Improvements That Protect Long-Term Value */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safety Improvements That Protect Long-Term Home Value
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Safety upgrades are not just about immediate protection—they also play a major role in preserving your home's value. Homes with well-maintained systems, updated safety features, and preventative improvements are easier to maintain and more attractive to future buyers.
              </p>
              <p className="text-lg text-gray-700 mb-4">HomeMax helps Dover homeowners invest in:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Long-lasting safety solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Upgrades that support resale value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Reliable home systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Reduced maintenance risks</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                These improvements make your home safer today while protecting its value tomorrow.
              </p>
            </div>
          </div>
        </section>

        {/* Why Dover Homeowners Trust HomeMax */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Dover Homeowners Trust HomeMax
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homeowners choose HomeMax because we approach safety with care, honesty, and local experience. We understand that inviting a contractor into your home requires trust, and we take that responsibility seriously.
              </p>
              <p className="text-lg text-gray-700 mb-4">When you work with HomeMax, you get:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>A local team familiar with Dover homes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Clear communication and realistic recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Quality workmanship focused on safety and durability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Respect for your home and your time</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our goal is to be the trusted home safety improvement provider in Dover, DE, not just another contractor.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Solutions for Every Stage */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safety Solutions for Every Stage of Homeownership
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether you've lived in your Dover home for decades or recently moved in, safety needs change over time. HomeMax works with homeowners at every stage—addressing aging systems, adapting homes for changing needs, and ensuring long-term safety.
              </p>
              <p className="text-lg text-gray-700 mb-4">We support:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>New homeowners seeking peace of mind</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Long-term homeowners planning upgrades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Families improving safety for children or seniors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Property owners focused on preventative care</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                No matter your situation, we help you make informed decisions about your home's safety.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Protect Your Home with Confidence
              </h2>
              <p className="text-xl text-red-100 mb-6 leading-relaxed">
                Your home should be a place of comfort, not concern. With professional home safety improvement services in Dover, DE, HomeMax helps homeowners reduce risks, improve protection, and feel confident in their living spaces.
              </p>
              <p className="text-lg text-red-100 font-semibold mb-8">
                📞 Contact HomeMax today to schedule your home safety consultation. Let our local team help you identify potential hazards and implement safety upgrades that truly protect your home and family.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-red-600 font-bold py-4 px-10 rounded-lg hover:bg-red-50 transition-colors duration-300 shadow-xl text-lg"
              >
                Contact HomeMax
              </a>
            </div>
          </div>
        </section>

        <LocationCapabilitiesList location="dover" currentCapability="safety" />
      </main>
    </>
  );
}
