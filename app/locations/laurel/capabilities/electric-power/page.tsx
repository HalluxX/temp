import React from 'react'
import type { Metadata } from 'next'
import Hero from '@/components/ui/capabilities-service/hero'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgElectricPower from '@/assets/images/renewables.webp'

export const metadata: Metadata = {
  title: 'Residential Electric Power Services in Laurel, DE | HomeMax',
  description:
    'Residential electric power services in Laurel, DE from HomeMax. Panel upgrades, capacity improvements, safety upgrades, and electrical system modernization for modern living.',
  keywords: [
    'residential electric power Laurel DE',
    'electrical panel upgrades Laurel',
    'electric power services Laurel Delaware',
    'electrical upgrades Laurel',
    'power capacity improvements Laurel',
    'electrical safety upgrades Laurel',
    'residential electrical services Sussex County',
    'local electrical contractor Laurel DE',
  ],
  openGraph: {
    title: 'Residential Electric Power Services in Laurel, DE | HomeMax',
    description:
      'HomeMax provides residential electric power services in Laurel, DE, including panel upgrades, capacity improvements, and safety-focused electrical solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/laurel/capabilities/electric-power',
    siteName: 'HomeMax Remodeling Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Electric Power Services in Laurel, DE | HomeMax',
    description:
      'Professional residential electrical services in Laurel, DE focused on safety, reliability, and modern power needs.',
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
    canonical: 'https://www.homemaxrg.com/locations/laurel/capabilities/electric-power',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Laurel, Delaware',
  },
}

export default function LaurelElectricPowerPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id':
          'https://www.homemaxrg.com/locations/laurel/capabilities/electric-power#service',
        name: 'Residential Electric Power Services in Laurel, DE',
        description:
          'Residential electric power services in Laurel, DE including panel upgrades, power capacity improvements, electrical safety upgrades, and system modernization.',
        provider: {
          '@type': 'LocalBusiness',
          '@id': 'https://www.homemaxrg.com/#organization',
          name: 'HomeMax Remodeling Group',
        },
        areaServed: {
          '@type': 'City',
          name: 'Laurel',
          '@id': 'https://en.wikipedia.org/wiki/Laurel,_Delaware',
        },
        serviceType: 'Residential Electric Power Services',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.homemaxrg.com' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Locations',
            item: 'https://www.homemaxrg.com/locations',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Laurel',
            item: 'https://www.homemaxrg.com/locations/laurel',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Electric Power',
            item: 'https://www.homemaxrg.com/locations/laurel/capabilities/electric-power',
          },
        ],
      },
    ],
  }

  return (
    <>
      <main className="grow">
        <Hero
          image={imgElectricPower}
          title="RESIDENTIAL ELECTRIC POWER SERVICES IN LAUREL, DE"
        />

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Residential Electric Power Services in Laurel, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Reliable electric power isn&apos;t something most homeowners think about—until there&apos;s a problem. Flickering
                lights, overloaded panels, frequent breaker trips, or outdated wiring can quietly create frustration, inefficiency,
                and safety risks. That&apos;s where HomeMax comes in.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide residential electric power services in Laurel, DE, helping homeowners upgrade, stabilize, and protect
                their electrical systems. Whether your home needs a power capacity upgrade, electrical safety improvements, or
                preparation for modern energy demands, our team delivers solutions that are practical, code-compliant, and built
                for long-term performance. HomeMax works with local homeowners who want dependable electrical improvements—not
                quick fixes.
              </p>
            </div>
          </div>
        </section>

        {/* Electrical Systems Built for Today’s Homes */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Systems Built for Today&apos;s Homes
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Homes today use more power than ever before. Between smart devices, high-efficiency appliances, HVAC systems, and
                home offices, older electrical systems often struggle to keep up. Many Laurel homes were built at a time when
                electrical demand was far lower than it is now.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">
                  Our residential electrical services focus on making sure your home&apos;s power system matches how you actually
                  live. We help homeowners with:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Electrical load and capacity upgrades</li>
                  <li>Power distribution improvements</li>
                  <li>Electrical system modernization</li>
                  <li>Home safety and compliance upgrades</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Instead of patching symptoms, we address the root cause of electrical issues—so your home runs more smoothly,
                  safely, and efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Electrical Panel & Power Capacity Upgrades */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Panel &amp; Power Capacity Upgrades
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                An outdated or overloaded electrical panel is one of the most common issues we see in Laurel homes. If your
                breakers trip often or your panel struggles to support new appliances, it may be time for an upgrade.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">
                  HomeMax provides electrical panel upgrades designed to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Increase available power capacity</li>
                  <li>Support modern appliances and systems</li>
                  <li>Improve electrical reliability</li>
                  <li>Reduce the risk of overheating and failure</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Panel upgrades are one of the most effective ways to improve your home&apos;s electrical performance. We evaluate
                  your current system, explain your options clearly, and complete the work with minimal disruption to your home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solving Common Home Electrical Problems */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Solving Common Home Electrical Problems
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Electrical issues don&apos;t always show up as emergencies. Many start small and worsen over time. Our team helps
                Laurel homeowners identify and resolve problems before they turn into costly repairs or safety hazards.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">We commonly address:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Flickering or dimming lights</li>
                  <li>Frequently tripped breakers</li>
                  <li>Insufficient outlets for modern needs</li>
                  <li>Inconsistent power in certain rooms</li>
                  <li>Aging or outdated electrical components</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  By improving your home&apos;s electrical infrastructure, you gain peace of mind—and fewer unexpected issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Electrical Safety Upgrades */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Safety Upgrades for Peace of Mind
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Electrical safety is not optional. Faulty wiring, outdated components, and overloaded systems increase the risk of
                fire, shock, and equipment damage. HomeMax provides home electrical safety upgrades designed to protect your family
                and property.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">Our safety-focused services include:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Electrical system inspections</li>
                  <li>Code compliance upgrades</li>
                  <li>Power stabilization improvements</li>
                  <li>Safety-oriented electrical enhancements</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  For homeowners in Laurel, DE, electrical safety upgrades are one of the smartest investments you can make—
                  especially in older homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-12 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Concerned about your home&apos;s electrical system?
            </h2>
            <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
              If you&apos;re noticing power issues or planning future upgrades, now is the right time to take action.
            </p>
            <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
              Schedule a residential electric power assessment with HomeMax today and get clear, honest recommendations tailored to
              your home in Laurel, DE.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-green-50 transition-colors shadow-lg text-lg"
            >
              Schedule an Electric Power Assessment
            </a>
          </div>
        </section>

        {/* Preparing for Future Power Needs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Preparing Your Home for Future Power Needs
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Electrical upgrades aren&apos;t just about fixing current problems—they&apos;re about preparing your home for
                what&apos;s next. Many Laurel homeowners are adding new appliances, electric vehicles, or energy-efficient systems
                that require additional power support.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">HomeMax helps future-proof your home by:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Expanding electrical capacity</li>
                  <li>Improving power distribution</li>
                  <li>Supporting modern energy demands</li>
                  <li>Reducing strain on existing systems</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Planning ahead prevents costly emergency upgrades later and ensures your home is ready for future improvements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Efficiency Starts with Electrical Performance */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Efficiency Starts with Electrical Performance
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                While energy efficiency upgrades often focus on insulation or appliances, your electrical system plays a major role
                in overall efficiency. Poor power distribution and outdated systems can increase energy waste and reduce
                performance.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">
                  Our electric power services complement energy-efficient home improvements by:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Reducing electrical strain</li>
                  <li>Supporting efficient system operation</li>
                  <li>Improving overall power reliability</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  When your electrical system works properly, everything else in your home works better too.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Expertise & Coordination */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Electrical Expertise You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax is a local home improvement company serving Laurel, DE, and surrounding areas. We understand the
                construction styles, electrical challenges, and local standards that impact homes in this region.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                When you choose HomeMax, you&apos;re working with a team that knows local residential systems, prioritizes safety
                and reliability, communicates clearly and honestly, and respects your home and time. We don&apos;t believe in
                confusing explanations or unnecessary upgrades—our goal is to provide solutions that genuinely improve your home.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Seamless Coordination with Other Home Improvements
                </h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Electrical upgrades often go hand-in-hand with remodeling, energy efficiency improvements, and safety upgrades.
                  One of the advantages of working with HomeMax is that we coordinate electrical services with other home
                  improvement projects when needed.
                </p>
                <p className="font-semibold text-gray-900 mb-2">This integrated approach helps:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Reduce project delays</li>
                  <li>Avoid rework or conflicts</li>
                  <li>Improve overall project outcomes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Homeowners Choose HomeMax */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Laurel Homeowners Choose HomeMax for Electric Power Services
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Homeowners throughout Laurel choose HomeMax because we deliver dependable results without unnecessary
                complications. Our focus is on long-term performance, safety, and homeowner confidence.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">Clients trust us for:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Professional residential electrical services</li>
                  <li>Clear recommendations and fair pricing</li>
                  <li>Reliable scheduling and workmanship</li>
                  <li>Electrical solutions built to last</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  We treat every home as if it were our own—because quality electrical work matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reliable Power & Final CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Reliable Power Makes Everyday Life Easier
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From running appliances to powering essential systems, electricity is at the center of daily life. When your
                electrical system works the way it should, you don&apos;t have to think about it—and that&apos;s exactly the goal.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HomeMax helps Laurel homeowners enjoy consistent, reliable power, safer electrical systems, homes ready for modern
                living, and fewer unexpected electrical issues. It&apos;s not just about power—it&apos;s about confidence in your
                home.
              </p>
              <a
                href="/contact"
                className="inline-block bg-green-600 text-white font-semibold px-10 py-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg text-lg"
              >
                Schedule Your Electric Power Service in Laurel, DE
              </a>
            </div>
          </div>
        </section>

        {/* Contact + Capabilities List */}
        <ContactUs topic="RESIDENTIAL ELECTRIC POWER SERVICES IN LAUREL, DE" />

        <LocationCapabilitiesList
          location="laurel"
          locationName="Laurel"
          currentCapability="electric-power"
        />

        {/* Structured Data Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </main>
    </>
  )
}

