import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/ui/capabilities-service/hero';
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list';

import imgElectricPower from '@/assets/images/renewables.webp';

export const metadata: Metadata = {
  title: 'Residential Electric Power Services in Dagsboro, DE | HomeMax',
  description: 'Professional residential electric power services in Dagsboro, DE. HomeMax provides electrical panel upgrades, power capacity improvements, and safety-focused electrical solutions for local homes.',
  keywords: [
    'residential electric power Dagsboro DE',
    'electrical panel upgrades Dagsboro',
    'electric power services Dagsboro Delaware',
    'electrical upgrades Dagsboro',
    'power capacity improvements Dagsboro',
    'electrical safety upgrades Dagsboro',
    'residential electrical services Sussex County',
    'local electrical contractor Dagsboro DE',
  ],
  openGraph: {
    title: 'Residential Electric Power Services in Dagsboro, DE | HomeMax',
    description: 'Professional residential electric power services in Dagsboro, DE. Electrical panel upgrades, power capacity improvements, and safety-focused solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/dagsboro/capabilities/electric-power',
    siteName: 'HomeMax Delaware',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Electric Power Services in Dagsboro, DE | HomeMax',
    description: 'Professional residential electric power services in Dagsboro, DE. Electrical panel upgrades and safety-focused solutions.',
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
    canonical: 'https://www.homemaxrg.com/locations/dagsboro/capabilities/electric-power',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Dagsboro, Delaware',
    'geo.position': '38.5485;-75.2460',
  },
};

export default function DagsboroElectricPowerPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/electric-power#service',
        name: 'Residential Electric Power Services',
        description: 'Professional residential electric power services including electrical panel upgrades, power capacity improvements, and safety-focused electrical solutions in Dagsboro, DE',
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
        serviceType: 'Residential Electric Power',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Electric Power Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical Panel Upgrades' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Power Capacity Enhancements' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical Safety Upgrades' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Circuit and Load Balancing' } },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/electric-power#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, item: { '@id': 'https://www.homemaxrg.com', name: 'Home' } },
          { '@type': 'ListItem', position: 2, item: { '@id': 'https://www.homemaxrg.com/locations', name: 'Locations' } },
          { '@type': 'ListItem', position: 3, item: { '@id': 'https://www.homemaxrg.com/locations/dagsboro', name: 'Dagsboro' } },
          { '@type': 'ListItem', position: 4, item: { '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/electric-power', name: 'Residential Electric Power Services' } },
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
        <Hero image={imgElectricPower} title="ELECTRIC POWER SERVICES IN DAGSBORO, DE" />

        {/* When Your Home's Electrical System Needs Attention */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                When Your Home's Electrical System Needs Attention
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Electrical problems don't always show up as dramatic failures. Often, the signs are subtle—and easy to ignore until they become serious.
              </p>
              <p className="text-lg text-gray-700 mb-4">You might notice:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Breakers tripping more often than they used to</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Lights dimming when appliances turn on</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Limited outlets in high-use rooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Older panels struggling to keep up</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>No clear surge protection or safety upgrades</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                These issues are common in residential properties throughout Dagsboro and surrounding Sussex County communities. HomeMax focuses on electrical power upgrades that address these problems early—before they turn into costly repairs or safety concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Electrical Power Upgrades Built for Real Homes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Power Upgrades Built for Real Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At HomeMax, we don't approach electrical work as a one-size-fits-all service. Every home has a different layout, usage pattern, and future plan. Our job is to strengthen your electrical system so it supports your lifestyle—not restricts it.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our electric power services include:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Residential electrical system upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Electrical panel improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Power capacity enhancements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Circuit and load balancing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Safety-focused electrical improvements</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're renovating, adding new appliances, or simply want a more reliable electrical setup, our team focuses on long-term performance and safety.
              </p>
            </div>
          </div>
        </section>

        {/* Why Electrical Panel Upgrades Matter */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Electrical Panel Upgrades Matter More Than You Think
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your electrical panel is the heart of your home's power system. If it's outdated or overloaded, everything downstream is affected.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Older panels were not designed to support:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Modern kitchens with high-demand appliances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Home offices and smart technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Electric vehicle charging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Backup generators or energy-efficient upgrades</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Homeowners in Dagsboro often delay panel upgrades because the panel "still works." But functionality doesn't always equal safety or capacity. Upgrading your electrical panel helps prevent overloads, improves power distribution, and prepares your home for future improvements.
              </p>
            </div>
          </div>
        </section>

        {/* Power Capacity Improvements */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Power Capacity Improvements for Modern Living
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homes today consume more power than ever before. From HVAC systems to entertainment centers, electrical demand adds up quickly.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax provides power capacity improvements that allow your home to operate efficiently without stressing the system. This includes evaluating how electricity is distributed throughout the home and making targeted upgrades that support daily use.
              </p>
              <p className="text-lg text-gray-700 mb-4">If you're planning:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Interior remodeling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Exterior upgrades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Energy efficiency improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Generator installation</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your electrical system needs to be ready. Power upgrades ensure everything works together safely and reliably.
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
                Electrical safety is not just about meeting code—it's about protecting your family and your investment.
              </p>
              <div className="bg-red-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our safety-focused electrical services include:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Electrical system inspections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Wiring evaluations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Circuit protection improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">►</span>
                    <span>Load management upgrades</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                These services are especially important in older homes where wiring and panels may not meet current standards. HomeMax helps homeowners in Dagsboro reduce risk while improving overall system performance.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Not sure if your home's electrical system can handle today's demands?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax offers professional evaluations to help homeowners understand what upgrades make sense—without pressure or unnecessary recommendations.
              </p>
              <p className="text-lg text-gray-700 font-semibold mb-8">
                👉 Schedule a residential electrical consultation with HomeMax today and get clear answers about your home's power system.
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

        {/* Electrical Services That Support Home Improvements */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Services That Support Home Improvements
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Electrical upgrades often go hand-in-hand with remodeling projects. Whether you're updating your interior or improving your exterior, electrical systems play a major role behind the scenes.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax coordinates electrical power services with:
              </p>
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
                  <span>Backup generator installations</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                By handling electrical work as part of a broader home improvement plan, we help homeowners avoid delays, rework, and hidden issues down the line.
              </p>
            </div>
          </div>
        </section>

        {/* Energy Efficiency Starts with the Right Electrical Foundation */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Efficiency Starts with the Right Electrical Foundation
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Energy-efficient appliances and systems only perform well when your electrical infrastructure supports them properly. Outdated wiring or overloaded circuits can reduce efficiency and increase wear on equipment.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our electric power services support:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Efficient home systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Reduced energy waste</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Better appliance performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Long-term energy savings</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                For homeowners looking to lower utility costs, electrical improvements are often an overlooked—but critical—first step.
              </p>
            </div>
          </div>
        </section>

        {/* Local Electrical Expertise */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Electrical Expertise You Can Rely On
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax isn't a distant contractor rotating crews from one town to another. We work with homeowners across Dagsboro and nearby communities, and we understand local building standards, common home layouts, and regional electrical challenges.
              </p>
              <p className="text-lg text-gray-700 mb-4">That local knowledge allows us to:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Identify common electrical issues faster</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Recommend practical upgrades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Communicate clearly with homeowners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Deliver consistent, reliable results</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our goal is not just to complete a job—it's to improve how your home functions every day.
              </p>
            </div>
          </div>
        </section>

        {/* Preparing Your Home for Backup Power Systems */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Preparing Your Home for Backup Power Systems
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many homeowners explore backup generators after experiencing unreliable power or severe weather. However, generator installation is only effective if your electrical system is properly prepared.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                HomeMax ensures your home's electrical infrastructure can safely support:
              </p>
              <ul className="space-y-2 text-gray-700 mt-4">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Standby generators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Backup power systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Emergency power transitions</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                This preparation protects both your generator investment and your home's electrical network.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes HomeMax Different */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Makes HomeMax Different
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe homeowners deserve straightforward advice and dependable service—especially when it comes to something as important as electrical power.
              </p>
              <p className="text-lg text-gray-700 mb-4">When you choose HomeMax, you get:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Honest evaluations without sales pressure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Clear explanations in plain language</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Electrical upgrades focused on safety and longevity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Coordination with other home improvement services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>A local team that stands behind its work</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We approach every electrical project as part of a bigger picture: helping homeowners create safer, more functional living spaces.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule Your Residential Electric Power Consultation in Dagsboro Today
              </h2>
              <p className="text-xl text-red-100 mb-6 leading-relaxed">
                If your home in Dagsboro needs stronger, safer, or more reliable electrical power, HomeMax is ready to help. From panel upgrades to full electrical system improvements, we provide solutions that support modern living without cutting corners.
              </p>
              <p className="text-lg text-red-100 font-semibold mb-8">
                📞 Contact HomeMax today to schedule your residential electric power consultation and take the first step toward a safer, better-powered home.
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

        <LocationCapabilitiesList location="dagsboro" currentCapability="electric-power" />
      </main>
    </>
  );
}
