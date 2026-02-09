import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/ui/capabilities-service/hero';
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list';

import imgElectricPower from '@/assets/images/renewables.webp';

export const metadata: Metadata = {
  title: 'Electric Power Services in Dover, DE | HomeMax',
  description: 'Professional electric power services in Dover, DE. HomeMax provides electrical panel upgrades, power capacity improvements, and safety-focused electrical solutions for local homes.',
  keywords: [
    'electric power services Dover DE',
    'electrical panel upgrades Dover',
    'residential electrical services Dover Delaware',
    'electrical upgrades Dover',
    'power capacity improvements Dover',
    'electrical safety upgrades Dover',
    'residential electrical services Kent County',
    'local electrical contractor Dover DE',
  ],
  openGraph: {
    title: 'Electric Power Services in Dover, DE | HomeMax',
    description: 'Professional electric power services in Dover, DE. Electrical panel upgrades, power capacity improvements, and safety-focused solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/dover/capabilities/electric-power',
    siteName: 'HomeMax Delaware',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electric Power Services in Dover, DE | HomeMax',
    description: 'Professional electric power services in Dover, DE. Electrical panel upgrades and safety-focused solutions.',
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
    canonical: 'https://www.homemaxrg.com/locations/dover/capabilities/electric-power',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Dover, Delaware',
    'geo.position': '39.1582;-75.5244',
  },
};

export default function DoverElectricPowerPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/electric-power#service',
        name: 'Electric Power Services',
        description: 'Professional electric power services including electrical panel upgrades, power capacity improvements, and safety-focused electrical solutions in Dover, DE',
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
        serviceType: 'Electric Power',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Electric Power Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical Panel Upgrades' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Power Capacity Improvements' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical Safety Upgrades' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Electrical Upgrades' } },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/electric-power#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, item: { '@id': 'https://www.homemaxrg.com', name: 'Home' } },
          { '@type': 'ListItem', position: 2, item: { '@id': 'https://www.homemaxrg.com/locations', name: 'Locations' } },
          { '@type': 'ListItem', position: 3, item: { '@id': 'https://www.homemaxrg.com/locations/dover', name: 'Dover' } },
          { '@type': 'ListItem', position: 4, item: { '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/electric-power', name: 'Electric Power Services' } },
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
        <Hero image={imgElectricPower} title="ELECTRIC POWER SERVICES IN DOVER, DE" />

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Electric Power Services in Dover, DE
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                Reliable Residential Electrical Upgrades for Safer, Smarter Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homes in Dover rely on electricity more than ever. From modern appliances and home offices to HVAC systems and EV chargers, today's electrical demand is far beyond what many older homes were originally built to handle. At HomeMax, we provide professional electric power services in Dover, DE designed to keep your home safe, reliable, and prepared for everyday use—and unexpected outages.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're experiencing flickering lights, overloaded circuits, frequent breaker trips, or planning upgrades that require more power capacity, our team delivers practical, code-compliant electrical solutions tailored to local homes.
              </p>
            </div>
          </div>
        </section>

        {/* Local Electrical Power Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Electrical Power Solutions Built for Dover Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dover has a wide mix of housing styles, from older residential neighborhoods to newer developments. Each comes with its own electrical challenges. Some homes were built before modern power loads became standard, while others need upgrades to support renovations, generators, or energy-efficient systems.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax provides residential electrical services in Dover, DE that focus on safety, performance, and long-term reliability. We don't believe in one-size-fits-all fixes. Instead, we evaluate how your home actually uses power and recommend upgrades that make sense now—and in the future.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our approach is simple: identify risks, improve capacity, and ensure your electrical system supports how you live.
              </p>
            </div>
          </div>
        </section>

        {/* Electrical Panel Upgrades */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Panel Upgrades & Power Capacity Improvements
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your electrical panel is the heart of your home's power system. If it's outdated, undersized, or overloaded, it can limit what your home can safely run—and increase the risk of electrical hazards.
              </p>
              <p className="text-lg text-gray-700 mb-4">We provide electrical panel upgrades in Dover, DE for homeowners who need:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Increased power capacity for modern appliances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Support for remodeling or home additions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Safer, code-compliant electrical systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Improved breaker performance and reliability</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Upgrading your panel allows your home to handle higher electrical loads without stress on wiring or circuits. It also creates a solid foundation for future improvements like backup generators or energy-efficient upgrades.
              </p>
            </div>
          </div>
        </section>

        {/* Home Electrical Upgrades */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Home Electrical Upgrades for Modern Living
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As homes evolve, electrical systems must keep up. Many Dover homeowners contact HomeMax when their electrical setup no longer matches their lifestyle. Whether you're working from home, upgrading appliances, or adding new rooms, electrical improvements are often necessary.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our home electrical upgrades include:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Circuit additions and load balancing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Wiring upgrades for improved safety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Outlet and switch improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Electrical support for renovations</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                These upgrades don't just improve performance—they also help protect your home from avoidable electrical issues.
              </p>
            </div>
          </div>
        </section>

        {/* Electrical Safety Upgrades */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Safety Upgrades That Protect Your Home
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Electrical safety is not something homeowners should have to guess about. Aging wiring, outdated breakers, and overloaded circuits can quietly become serious hazards if left unaddressed.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax offers electrical safety upgrades in Dover, DE designed to reduce risk and bring systems up to modern standards. Our team identifies potential problem areas and recommends solutions that improve safety without unnecessary disruption.
              </p>
              <div className="bg-red-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety-focused electrical services include:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Residential electrical inspections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Hazard prevention upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Electrical system corrections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Code compliance improvements</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                These services are especially important for older homes or properties undergoing renovations.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ⚡ Concerned about your home's electrical capacity or safety?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Schedule a professional electric power assessment with HomeMax today. Our Dover-based team will evaluate your system and recommend practical upgrades that protect your home and support your needs.
              </p>
              <a
                href="/contact"
                className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg text-lg"
              >
                Schedule Your Assessment
              </a>
            </div>
          </div>
        </section>

        {/* Electrical Power Planning */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Power Planning for Home Improvements
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Electrical work often goes hand-in-hand with remodeling. Kitchen upgrades, bathroom renovations, finished basements, and exterior improvements frequently require additional power or system adjustments.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax works closely with homeowners to ensure electrical systems are properly planned before, during, and after renovations. By addressing electrical needs early, you avoid costly changes later and ensure your upgrades function safely and efficiently.
              </p>
              <p className="text-lg text-gray-700 mb-4">This planning is especially valuable for:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Interior remodeling projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Exterior home improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Energy efficiency upgrades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Generator installations</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Proper electrical preparation helps your entire project run smoothly.
              </p>
            </div>
          </div>
        </section>

        {/* Backup Power & Electrical Readiness */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Backup Power & Electrical Readiness
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Power outages are unpredictable, and when they happen, homes without proper preparation can face serious disruptions. Electrical readiness plays a critical role in backup power solutions.
              </p>
              <p className="text-lg text-gray-700 mb-4">We help Dover homeowners prepare their electrical systems for:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Backup generator connections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Emergency power solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Future standby power installations</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Even if you're not installing a generator right away, preparing your electrical system now makes future upgrades faster, safer, and more cost-effective.
              </p>
            </div>
          </div>
        </section>

        {/* Why Dover Homeowners Trust HomeMax */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Dover Homeowners Trust HomeMax for Electric Power Services
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Choosing the right contractor for electrical work matters. HomeMax is trusted by homeowners in Dover because we prioritize clear communication, practical solutions, and workmanship that lasts.
              </p>
              <p className="text-lg text-gray-700 mb-4">What sets us apart:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Local experience with Dover homes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Residential-focused electrical expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Honest recommendations without pressure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Safety-first approach on every project</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We treat electrical work as an investment in your home—not just a repair.
              </p>
            </div>
          </div>
        </section>

        {/* Serving Dover */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Serving Dover, DE and Surrounding Communities
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                While this page focuses on electric power services in Dover, DE, HomeMax also supports nearby communities throughout Kent and Sussex County. Our local presence allows us to respond quickly and deliver service that aligns with regional building requirements.
              </p>
              <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                We're proud to help homeowners maintain safe, functional electrical systems that support long-term home performance.
              </p>
            </div>
          </div>
        </section>

        {/* When to Consider Upgrades */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                When Should You Consider Electrical Power Upgrades?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many homeowners wait until a problem becomes urgent. In reality, early upgrades often prevent larger issues later. You may want to consider electrical improvements if:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Breakers trip frequently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Lights flicker or dim</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>You're planning a remodel or addition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Your home has older wiring or panels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>You want to improve safety and reliability</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Addressing these issues early can save time, money, and stress.
              </p>
            </div>
          </div>
        </section>

        {/* Smarter Approach */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Smarter Approach to Residential Electrical Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At HomeMax, we believe electrical work should be straightforward and transparent. We explain what we find, outline your options, and help you make informed decisions about your home.
              </p>
              <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                Our goal isn't just to fix today's issue—it's to make sure your electrical system continues to serve you well for years to come.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule Your Electric Power Consultation in Dover, DE
              </h2>
              <p className="text-xl text-red-100 mb-6 leading-relaxed">
                If you're looking for reliable electric power services in Dover, DE, HomeMax is ready to help. From electrical panel upgrades to safety improvements and power capacity solutions, we deliver work you can trust.
              </p>
              <p className="text-lg text-red-100 font-semibold mb-8">
                Contact HomeMax today to schedule your residential electrical consultation and take the next step toward a safer, more dependable home.
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

        <LocationCapabilitiesList location="dover" currentCapability="electric-power" />
      </main>
    </>
  );
}
