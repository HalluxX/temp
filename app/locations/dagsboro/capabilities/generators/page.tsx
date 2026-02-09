import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/ui/capabilities-service/hero';
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list';

import imgGenerators from '@/assets/images/concrete-solution.webp';

export const metadata: Metadata = {
  title: 'Home Generator Installation & Backup Power Solutions in Dagsboro, DE | HomeMax',
  description: 'Professional home generator installation in Dagsboro, DE. HomeMax provides reliable backup power solutions, standby generators, and whole-home generator systems for coastal Delaware homes.',
  keywords: [
    'home generator installation Dagsboro DE',
    'backup power Dagsboro Delaware',
    'standby generator Dagsboro',
    'whole-home generator installation',
    'residential generator services Dagsboro',
    'generator installation Sussex County',
    'emergency power solutions Delaware',
    'automatic standby generators',
    'home backup power systems',
    'generator maintenance Dagsboro'
  ],
  openGraph: {
    title: 'Home Generator Installation & Backup Power Solutions in Dagsboro, DE | HomeMax',
    description: 'Professional home generator installation in Dagsboro, DE. Reliable backup power solutions and standby generators for Delaware homes.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/dagsboro/capabilities/generators',
    siteName: 'HomeMax Delaware',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Generator Installation & Backup Power Solutions in Dagsboro, DE | HomeMax',
    description: 'Professional home generator installation in Dagsboro, DE. Reliable backup power solutions and standby generators for Delaware homes.',
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
    canonical: 'https://www.homemaxrg.com/locations/dagsboro/capabilities/generators',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Dagsboro, Delaware',
    'geo.position': '38.5485;-75.2460',
  },
};

export default function DagsboroGeneratorsPage() {
  // Structured Data for Local Business Service
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/generators#service',
        name: 'Home Generator Installation & Backup Power Solutions',
        description: 'Professional home generator installation and backup power solutions for residential properties in Dagsboro, DE',
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
        serviceType: 'Home Generator Installation',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Generator Installation Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Whole-Home Generator Installation',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Standby Generator Systems',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Generator Maintenance Services',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Backup Power System Installation',
              },
            },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/generators#breadcrumb',
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
              '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/generators',
              name: 'Home Generator Installation',
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
        <Hero image={imgGenerators} title="HOME GENERATOR INSTALLATION IN DAGSBORO, DE" />

        {/* Reliable Backup Power Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Reliable Backup Power for Dagsboro Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Living in Dagsboro means enjoying a quiet coastal lifestyle—but it also means being prepared for weather-related power disruptions. A residential backup generator ensures that your home continues to function even when the local grid goes down.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax installs standby and whole-home generators that automatically restore power within seconds of an outage. These systems are permanently installed, connected directly to your electrical panel, and designed to handle the everyday power needs of modern homes.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  With a properly installed generator, you don't have to worry about:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Spoiled food during extended outages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Losing heat or air conditioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Disrupted work-from-home schedules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Medical or mobility equipment losing power</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Safety and security systems shutting down</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our generator solutions are tailored specifically for Dagsboro residential properties, taking into account home size, power demand, and local electrical requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Whole-Home Generator Installation Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Whole-Home Generator Installation Done Right
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Not all generator installations are the same. Proper planning, load calculations, and professional electrical integration are essential for long-term reliability. HomeMax specializes in whole-house generator installation that delivers seamless power without overloading your system.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We start by assessing your home's electrical needs. From there, we design a backup power system that supports essential appliances—or your entire home—depending on your goals. Our team handles everything from electrical upgrades to final testing, ensuring your system works exactly as it should.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our generator installation services in Dagsboro include:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✓</span>
                    <span>Residential power load assessments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✓</span>
                    <span>Generator sizing and system selection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✓</span>
                    <span>Electrical panel integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✓</span>
                    <span>Automatic transfer switch installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✓</span>
                    <span>Full system testing and safety checks</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                The result is a backup power system you can rely on when it matters most.
              </p>
            </div>
          </div>
        </section>

        {/* Standby vs Portable Generators Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Standby Generators vs. Portable Generators
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many homeowners ask whether a portable generator is enough. While portable units can help in short outages, they often require manual setup, extension cords, refueling, and constant monitoring. They also cannot safely power an entire home.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  A standby generator, on the other hand, offers:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">►</span>
                    <span>Automatic operation during outages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">►</span>
                    <span>Permanent outdoor installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">►</span>
                    <span>Direct connection to your electrical system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">►</span>
                    <span>Greater power capacity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">►</span>
                    <span>Safer and quieter performance</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                For homeowners in Dagsboro who want long-term reliability, standby generators provide a far more dependable solution—especially during extended outages caused by storms or grid failures.
              </p>
            </div>
          </div>
        </section>

        {/* Tailored Solutions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Generator Solutions Tailored to Coastal Delaware Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homes in Dagsboro face unique environmental factors, including coastal weather conditions and seasonal occupancy patterns. HomeMax designs generator systems that work efficiently in these conditions, ensuring dependable performance year after year.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our team considers:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Local weather patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Electrical code requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Property layout and placement needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Noise and zoning considerations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Long-term maintenance accessibility</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-600 text-white rounded-lg shadow-md p-6 flex flex-col justify-center">
                  <p className="text-lg font-semibold mb-2">⚡ Coastal-Ready Systems</p>
                  <p className="text-blue-50">
                    By tailoring each installation to the property, we deliver generator systems that are reliable, efficient, and built to last.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't wait for the next outage to leave your home in the dark.
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                If you're considering a backup power solution, HomeMax offers professional generator consultations in Dagsboro, DE. We'll assess your needs, explain your options clearly, and help you choose a system that fits your home and budget.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              >
                Contact HomeMax Today
              </a>
            </div>
          </div>
        </section>

        {/* Generator Maintenance Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Generator Maintenance & Ongoing Support
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A generator is only as reliable as its maintenance. Regular servicing ensures your system is ready when you need it. HomeMax provides generator maintenance services designed to keep your backup power system in peak condition.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our maintenance support includes:
                </h3>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✓</span>
                    <span>Routine system inspections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✓</span>
                    <span>Electrical connection checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✓</span>
                    <span>Performance testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✓</span>
                    <span>Preventative service recommendations</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Many homeowners choose to combine generator care with our home maintenance subscription plans, making it easy to stay on top of routine service without the stress of scheduling.
              </p>
            </div>
          </div>
        </section>

        {/* Electrical Upgrades Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Upgrades for Generator Readiness
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In some homes, electrical upgrades are needed before installing a generator safely. HomeMax provides residential electrical services that ensure your system is generator-ready.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  These upgrades may include:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">►</span>
                    <span>Electrical panel improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">►</span>
                    <span>Load balancing adjustments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">►</span>
                    <span>Safety and compliance updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">►</span>
                    <span>Power capacity enhancements</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                By addressing these details upfront, we ensure your generator integrates smoothly with your home's electrical system and operates safely during outages.
              </p>
            </div>
          </div>
        </section>

        {/* Why Homeowners Trust HomeMax Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Dagsboro Homeowners Trust HomeMax
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Choosing the right contractor matters just as much as choosing the right generator. HomeMax is trusted by homeowners throughout Sussex County because we focus on quality, transparency, and long-term reliability.
              </p>
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Homeowners choose HomeMax for:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Local Delaware expertise</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Skilled residential electricians</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Clear communication and honest recommendations</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Proper permitting and code compliance</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Professional installation and testing</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-6 font-semibold">
                  We don't believe in one-size-fits-all solutions. Every generator system we install is customized to the home it serves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Long-Term Value Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Backup Power That Adds Long-Term Value
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Installing a home generator isn't just about convenience—it's also an investment in your property. Backup power systems can increase home value, improve safety, and make your home more attractive to future buyers.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  For homeowners in Dagsboro, a professionally installed generator adds:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">+</span>
                    <span>Increased resilience during storms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">+</span>
                    <span>Greater home functionality during outages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">+</span>
                    <span>Improved safety and security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">+</span>
                    <span>Peace of mind year-round</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 mt-6 font-semibold">
                  It's an upgrade that pays off both immediately and long-term.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule Your Generator Installation in Dagsboro, DE
              </h2>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                If you're ready to protect your home with reliable backup power, HomeMax is here to help. We proudly provide home generator installation and backup power solutions in Dagsboro, DE, delivering systems you can trust when the grid goes down.
              </p>
              <p className="text-lg text-blue-100 mb-8">
                From initial consultation to final installation and ongoing maintenance, our team is committed to keeping your home powered, safe, and comfortable.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  🔌 Don't leave your home vulnerable during the next power outage.
                </h3>
                <p className="text-lg text-blue-100 mb-6">
                  Contact HomeMax today to schedule your generator consultation in Dagsboro, DE. Let us help you choose and install a dependable backup power system built for your home and your peace of mind.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-xl text-lg"
              >
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Location-Specific Capabilities List */}
        <LocationCapabilitiesList location="dagsboro" currentCapability="generators" />
      </main>
    </>
  );
}

