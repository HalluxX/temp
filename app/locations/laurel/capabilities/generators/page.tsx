import React from 'react'
import type { Metadata } from 'next'
import Hero from '@/components/ui/capabilities-service/hero'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgGenerators from '@/assets/images/concrete-solution.webp'

export const metadata: Metadata = {
  title: 'Home Generator Installation in Laurel, DE | HomeMax',
  description:
    'Professional home generator installation in Laurel, DE. HomeMax designs and installs standby and backup power systems to keep your home powered, safe, and comfortable during outages.',
  keywords: [
    'home generator installation Laurel DE',
    'backup power Laurel Delaware',
    'standby generator Laurel',
    'whole-house generator Laurel DE',
    'residential generator services Laurel',
    'generator installation Sussex County',
    'emergency power solutions Laurel',
    'automatic standby generators Laurel',
    'home backup power systems Laurel',
  ],
  openGraph: {
    title: 'Home Generator Installation in Laurel, DE | HomeMax',
    description:
      'HomeMax provides home generator installation and backup power solutions in Laurel, DE so your home stays powered and comfortable during outages.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/laurel/capabilities/generators',
    siteName: 'HomeMax Premier Era Innovations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Generator Installation in Laurel, DE | HomeMax',
    description:
      'Professional home generator installation and backup power solutions for Laurel, DE homeowners.',
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
    canonical: 'https://www.homemaxrg.com/locations/laurel/capabilities/generators',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Laurel, Delaware',
  },
}

export default function LaurelGeneratorsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.homemaxrg.com/locations/laurel/capabilities/generators#service',
        name: 'Home Generator Installation in Laurel, DE',
        description:
          'Home generator installation and backup power solutions for residential properties in Laurel, Delaware. Standby generators, whole-house systems, and essential-load backup options.',
        provider: {
          '@type': 'LocalBusiness',
          '@id': 'https://www.homemaxrg.com/#organization',
          name: 'HomeMax Premier Era Innovations',
        },
        areaServed: {
          '@type': 'City',
          name: 'Laurel',
          '@id': 'https://en.wikipedia.org/wiki/Laurel,_Delaware',
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
                name: 'Whole-House Generator Systems',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Partial / Essential-Load Backup Systems',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Standby Generator Installation',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Generator Maintenance Services',
              },
            },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.homemaxrg.com',
          },
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
            name: 'Generators',
            item: 'https://www.homemaxrg.com/locations/laurel/capabilities/generators',
          },
        ],
      },
    ],
  }

  return (
    <>
      <main className="grow">
        <Hero
          image={imgGenerators}
          title="HOME GENERATOR INSTALLATION IN LAUREL, DE"
        />

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Home Generator Installation in Laurel, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Power outages are a reality for many homeowners in Laurel, DE—especially during storms, high winds, or unexpected
                grid failures. When the lights go out, daily life can quickly come to a standstill. That&apos;s why more local
                homeowners are choosing residential generator installation to protect their homes, families, and essential systems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At HomeMax, we provide professional home generator solutions in Laurel, DE, designed to keep your property powered,
                safe, and comfortable when utility power fails. From whole-house standby generators to customized backup power
                systems, we help homeowners prepare for outages with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Reliable Backup Power */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Reliable Backup Power for Laurel Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Living in Laurel means dealing with unpredictable weather and occasional power interruptions. Even a short outage can
                affect heating and cooling systems, refrigerators, sump pumps, medical equipment, and home security systems.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A professionally installed home generator ensures your home continues to function normally when the grid goes down.
                Instead of worrying about spoiled food, frozen pipes, or safety risks, you can focus on what matters most—your
                family&apos;s comfort and well-being. HomeMax provides backup power solutions tailored to Laurel homes, taking into
                account property size, electrical demand, and lifestyle needs.
              </p>
            </div>
          </div>
        </section>

        {/* Whole-House vs Partial Systems */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Whole-House Generators vs. Partial Backup Systems
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Not every home needs the same level of backup power. That&apos;s why we help homeowners understand their options
                before choosing a generator system.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Whole-House Generator Systems
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A whole-house generator automatically restores power to your entire home within seconds of an outage. These
                    systems are permanently installed and connected directly to your electrical panel, offering seamless, uninterrupted
                    power.
                  </p>
                  <p className="text-gray-700 font-semibold mb-2">Whole-house generators are ideal for:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Homes with high electrical demand</li>
                    <li>• Families who work from home</li>
                    <li>• Properties with medical equipment</li>
                    <li>• Homeowners who want full peace of mind</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Partial or Essential-Load Generators
                  </h3>
                  <p className="text-gray-700 mb-4">
                    For homeowners who want backup power for critical systems only, partial backup generators offer a more targeted
                    solution. These systems focus on essentials like refrigeration, heating, lighting, and outlets.
                  </p>
                  <p className="text-gray-700">
                    This option is often chosen by homeowners looking for affordable generator installation in Laurel, DE without
                    powering the entire home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Generator Installation Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Generator Installation Services in Laurel, DE
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Installing a generator is not a DIY project. Proper sizing, electrical integration, and safety compliance are critical
                to system performance and long-term reliability. HomeMax provides professional generator installation services in
                Laurel, ensuring every system is installed correctly and safely.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">Our installation process includes:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Home power assessment</li>
                  <li>Generator sizing and selection</li>
                  <li>Electrical panel integration</li>
                  <li>Automatic transfer switch installation</li>
                  <li>System testing and walkthrough</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  We handle every step of the process, so you don&apos;t have to coordinate multiple contractors or worry about code
                  compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Generator Sizing Matters + Mid CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Generator Sizing Matters
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                One of the most common mistakes homeowners make is choosing a generator that is either too small or unnecessarily
                large. An undersized generator may struggle during outages, while an oversized system can increase costs without
                added benefit.
              </p>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                At HomeMax, we carefully evaluate the square footage of your home, the number of appliances and systems, electrical
                load requirements, and your future power needs. This ensures your home generator in Laurel, DE delivers reliable
                performance without strain or inefficiency.
              </p>

              <div className="bg-green-600 rounded-lg shadow-md p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Not sure what size generator your home needs?
                </h3>
                <p className="text-lg mb-4">
                  Let HomeMax assess your property and recommend the right backup power solution for your Laurel home.
                </p>
                <p className="text-xl font-semibold mb-4">
                  Schedule a generator consultation today and get expert guidance before the next outage hits.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors shadow-lg text-lg"
                >
                  Schedule Your Generator Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance & Ongoing Support */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Standby Generator Maintenance &amp; Ongoing Support
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A generator is only effective if it works when you need it. Regular maintenance helps ensure your system starts
                reliably and runs efficiently during emergencies. HomeMax offers generator maintenance services that help protect
                your investment and extend system lifespan.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Routine service includes inspections, testing, and performance checks to ensure your generator is always ready.
                Homeowners in Laurel appreciate the peace of mind that comes from knowing their backup power system won&apos;t fail
                when it matters most.
              </p>
            </div>
          </div>
        </section>

        {/* Power Outage Protection */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Power Outage Protection for Laurel Families
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Power outages don&apos;t just cause inconvenience—they can create serious safety concerns. Loss of power can impact
                heating and cooling systems, water pumps, medical devices, and security systems.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">
                  A professionally installed generator helps protect:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Elderly family members</li>
                  <li>Children and infants</li>
                  <li>Home offices and remote work setups</li>
                  <li>Refrigeration and food storage</li>
                  <li>Home security systems</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  For many Laurel homeowners, installing a generator isn&apos;t a luxury—it&apos;s a practical step toward
                  protecting their household.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Energy-Efficient Generator Options */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy-Efficient Generator Options
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Modern generator systems are more efficient, quieter, and cleaner than older models. HomeMax helps homeowners select
                energy-efficient generator systems that balance performance with fuel usage and operational cost.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">We guide you through options that:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Minimize fuel consumption</li>
                  <li>Reduce operational noise</li>
                  <li>Support long-term reliability</li>
                  <li>Integrate with existing electrical systems</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Choosing the right generator today can lead to lower operating costs and better performance for years to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Expertise & Lifestyle Fit */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Expertise You Can Trust in Laurel, DE
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax is proud to serve Laurel homeowners with reliable, locally informed service. We understand the electrical
                infrastructure, permitting requirements, and residential needs specific to this area.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                When you choose HomeMax for your home generator installation in Laurel, DE, you&apos;re working with a team that
                values quality workmanship, clear communication, and long-term reliability. We don&apos;t believe in
                one-size-fits-all solutions—every generator system we install is tailored to the home and the homeowner.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Generator Installation That Fits Your Lifestyle
                </h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Some homeowners want a generator that powers everything without interruption. Others simply want to keep essential
                  systems running during short outages. Whatever your goal, HomeMax designs backup power solutions that fit your
                  lifestyle—not the other way around.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From compact standby systems to full residential generator installations, we help Laurel homeowners stay prepared
                  without unnecessary complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Be Ready Before the Next Outage
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Power outages don&apos;t give warnings—but you can be ready. If you&apos;re considering a home generator installation
                in Laurel, DE, HomeMax is here to help you make a confident, informed decision.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Contact HomeMax today to schedule your generator consultation and discover how a professionally installed backup
                power system can protect your home, comfort, and peace of mind.
              </p>
              <a
                href="/contact"
                className="inline-block bg-green-600 text-white font-semibold px-10 py-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg text-lg"
              >
                Contact HomeMax for Generator Installation in Laurel, DE
              </a>
            </div>
          </div>
        </section>

        {/* Contact + Capabilities List */}
        <ContactUs topic="HOME GENERATOR INSTALLATION IN LAUREL, DE" />

        <LocationCapabilitiesList
          location="laurel"
          locationName="Laurel"
          currentCapability="generators"
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

