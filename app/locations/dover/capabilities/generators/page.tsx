import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/ui/capabilities-service/hero';
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list';

import imgGenerators from '@/assets/images/concrete-solution.webp';

export const metadata: Metadata = {
  title: 'Home Generator Installation & Backup Power Solutions in Dover, DE | HomeMax',
  description: 'Professional home generator installation in Dover, DE. HomeMax provides standby generators, whole-house backup power, and generator maintenance for Dover homes.',
  keywords: [
    'home generator installation Dover DE',
    'backup power Dover Delaware',
    'standby generator Dover',
    'whole-house generator Dover DE',
    'residential generator Dover',
    'generator installation Kent County',
    'backup power solutions Delaware',
    'generator maintenance Dover DE',
  ],
  openGraph: {
    title: 'Home Generator Installation & Backup Power Solutions in Dover, DE | HomeMax',
    description: 'Professional home generator installation in Dover, DE. Standby generators and backup power solutions for residential homes.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/dover/capabilities/generators',
    siteName: 'HomeMax Delaware',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Generator Installation & Backup Power Solutions in Dover, DE | HomeMax',
    description: 'Professional home generator installation in Dover, DE. Reliable backup power solutions for Dover homes.',
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
    canonical: 'https://www.homemaxrg.com/locations/dover/capabilities/generators',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Dover, Delaware',
    'geo.position': '39.1582;-75.5244',
  },
};

export default function DoverGeneratorsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/generators#service',
        name: 'Home Generator Installation & Backup Power Solutions',
        description: 'Professional home generator installation including standby generators, whole-house backup power, and generator maintenance in Dover, DE',
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
        serviceType: 'Home Generator Installation',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Generator Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Whole-House Generator Installation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Standby Generator Systems' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Backup Power Solutions' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Generator Maintenance' } },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/generators#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, item: { '@id': 'https://www.homemaxrg.com', name: 'Home' } },
          { '@type': 'ListItem', position: 2, item: { '@id': 'https://www.homemaxrg.com/locations', name: 'Locations' } },
          { '@type': 'ListItem', position: 3, item: { '@id': 'https://www.homemaxrg.com/locations/dover', name: 'Dover' } },
          { '@type': 'ListItem', position: 4, item: { '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/generators', name: 'Home Generator Installation' } },
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
        <Hero image={imgGenerators} title="HOME GENERATOR INSTALLATION IN DOVER, DE" />

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Home Generator Installation & Backup Power Solutions in Dover, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Power outages in Dover aren't just inconvenient—they can disrupt daily life, damage appliances, and leave homes without essential systems when they're needed most. From summer storms to winter grid strain, unexpected outages are a reality for Delaware homeowners. That's why more residents are choosing reliable home generator systems to protect their homes and families.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At HomeMax, we provide professional home generator installation in Dover, DE, offering dependable backup power solutions designed for residential properties. Whether you want peace of mind during storms or uninterrupted power for critical systems, our team helps you choose and install the right generator for your home.
              </p>
            </div>
          </div>
        </section>

        {/* Why Dover Homeowners Are Investing in Backup Power */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Dover Homeowners Are Investing in Backup Power
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dover's mix of older homes, growing neighborhoods, and seasonal weather makes power reliability a concern for many residents. Even short outages can affect heating and cooling systems, refrigeration, medical equipment, and home security.
              </p>
              <p className="text-lg text-gray-700 mb-4">A properly installed residential generator ensures:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Continuous power during outages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Protection for appliances and electronics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Safe operation of HVAC and plumbing systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Added property value and peace of mind</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unlike portable units, whole-house and standby generators are designed to activate automatically, restoring power within seconds of an outage. Homeowners no longer need to worry about extension cords, fuel storage, or manual setup.
              </p>
            </div>
          </div>
        </section>

        {/* Residential Generator Installation */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Residential Generator Installation Tailored to Your Home
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every home in Dover is different, and generator systems should be sized and installed accordingly. HomeMax provides custom residential generator installation, ensuring your backup power system meets your household's needs without overloading or inefficiency.
              </p>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our generator services include:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Whole-house generator installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Standby generator systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Backup power solutions for essential circuits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Generator system planning and load assessment</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We take the time to understand how your home operates—what systems matter most, how much power is required, and how to integrate the generator safely with your existing electrical system.
              </p>
            </div>
          </div>
        </section>

        {/* Choosing the Right Generator */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Choosing the Right Generator for Your Dover Home
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Not all generators are created equal. Selecting the right system depends on your home's size, power usage, and personal priorities. Our team helps Dover homeowners make informed decisions by explaining options clearly and honestly.
              </p>
              <p className="text-lg text-gray-700 mb-4">We help you consider:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Power capacity and load requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Fuel source options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Automatic vs. manual operation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Long-term maintenance needs</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                By focusing on reliable, residential-grade generator systems, we ensure your investment delivers dependable performance when you need it most.
              </p>
            </div>
          </div>
        </section>

        {/* Safe, Code-Compliant Generator Installation */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safe, Code-Compliant Generator Installation
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Generator installation isn't just about power—it's about safety. Improper installation can put your home and family at risk. HomeMax follows strict safety standards and local regulations to ensure every generator system is installed correctly.
              </p>
              <p className="text-lg text-gray-700 mb-4">Our process includes:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Electrical system evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Safe integration with your home's power supply</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Compliance with local codes and regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Thorough system testing before completion</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dover homeowners trust us for generator installation services that prioritize safety, reliability, and long-term performance.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Thinking about adding backup power to your Dover home?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Now is the perfect time to explore your options. A professionally installed generator can protect your home before the next outage happens.
              </p>
              <p className="text-lg text-gray-700 font-semibold mb-8">
                👉 Schedule a generator consultation with HomeMax today and get expert guidance on the best backup power solution for your home in Dover, DE.
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

        {/* Standby Generators vs. Portable Generators */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Standby Generators vs. Portable Generators
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many homeowners ask whether a portable generator is enough. While portable units can help in limited situations, they often fall short during extended outages.
              </p>
              <p className="text-lg text-gray-700 mb-4">Standby generators offer key advantages:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Automatic power restoration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Higher and more consistent power output</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Permanent installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Greater safety and convenience</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                For Dover homeowners who want a long-term solution, standby generator systems provide unmatched reliability and ease of use.
              </p>
            </div>
          </div>
        </section>

        {/* Backup Power for Essential Home Systems */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Backup Power for Essential Home Systems
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A generator does more than keep the lights on. During outages, essential systems need power to prevent damage and maintain comfort.
              </p>
              <p className="text-lg text-gray-700 mb-4">Backup power can support:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Heating and cooling systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Refrigerators and freezers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Medical and mobility equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Home security systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Sump pumps and plumbing systems</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                HomeMax designs generator systems that focus on what matters most to your household, ensuring your home remains functional and safe during power disruptions.
              </p>
            </div>
          </div>
        </section>

        {/* Generator Maintenance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Generator Maintenance & Long-Term Reliability
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A generator is an investment, and like any major system, it needs proper care. HomeMax offers generator maintenance services to keep your system ready year-round.
              </p>
              <p className="text-lg text-gray-700 mb-4">Our maintenance support helps:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Extend generator lifespan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Ensure reliable startup during outages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Identify issues before they become problems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Maintain safe operation</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dover homeowners appreciate having a trusted local provider who can support their generator long after installation.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose HomeMax */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose HomeMax for Generator Services in Dover, DE
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax isn't just another contractor—we're a local home improvement company committed to serving Delaware homeowners with honesty and quality workmanship.
              </p>
              <p className="text-lg text-gray-700 mb-4">When you choose HomeMax, you benefit from:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Local experience serving Dover, DE</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Residential-focused generator solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Clear communication and honest recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Skilled installation and safety-first practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Ongoing support and maintenance options</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand Dover homes, local power concerns, and the importance of dependable backup solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Serving Dover and Surrounding */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Serving Dover and Surrounding Delaware Communities
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                While this page focuses on generator installation in Dover, DE, HomeMax also supports homeowners in nearby areas, including Smyrna, Milford, and surrounding communities. Our local service model ensures responsive support and consistent quality throughout the region.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Protect Your Home with Reliable Backup Power
              </h2>
              <p className="text-xl text-red-100 mb-6 leading-relaxed">
                Power outages are unpredictable—but your response doesn't have to be. A professionally installed generator gives you confidence, comfort, and control when the grid goes down.
              </p>
              <p className="text-lg text-red-100 font-semibold mb-8">
                If you're ready to explore home generator installation in Dover, DE, HomeMax is here to help. 👉 Contact HomeMax today to schedule your generator consultation and take the first step toward reliable, worry-free backup power for your home.
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

        <LocationCapabilitiesList location="dover" currentCapability="generators" />
      </main>
    </>
  );
}
