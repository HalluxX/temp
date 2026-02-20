import React from 'react'
import type { Metadata } from 'next'
import Hero from '@/components/ui/capabilities-service/hero'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgSafety from '@/assets/images/speciality.webp'

export const metadata: Metadata = {
  title: 'Home Safety Improvement Services in Laurel, DE | HomeMax',
  description:
    'Professional home safety improvement services in Laurel, DE. HomeMax provides electrical safety upgrades, lighting improvements, structural safety enhancements, and preventative safety solutions.',
  keywords: [
    'home safety improvements Laurel DE',
    'electrical safety upgrades Laurel',
    'home safety inspections Laurel Delaware',
    'residential safety services Laurel',
    'home safety upgrades Sussex County',
    'electrical safety services Laurel DE',
    'home hazard prevention Laurel',
    'safety improvement contractor Laurel',
    'residential safety compliance',
    'preventative safety upgrades Laurel',
  ],
  openGraph: {
    title: 'Home Safety Improvement Services in Laurel, DE | HomeMax',
    description:
      'HomeMax provides home safety improvement services in Laurel, DE, including electrical safety upgrades, lighting enhancements, and preventative safety solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/laurel/capabilities/safety',
    siteName: 'HomeMax Remodeling Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Safety Improvement Services in Laurel, DE | HomeMax',
    description:
      'Home safety improvement services in Laurel, DE from HomeMax, focused on electrical safety, structural reliability, and preventative upgrades.',
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
    canonical: 'https://www.homemaxrg.com/locations/laurel/capabilities/safety',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Laurel, Delaware',
  },
}

export default function LaurelSafetyPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.homemaxrg.com/locations/laurel/capabilities/safety#service',
        name: 'Home Safety Improvement Services in Laurel, DE',
        description:
          'Professional home safety improvement services in Laurel, DE including electrical safety upgrades, lighting improvements, structural safety enhancements, and preventative safety solutions.',
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
        serviceType: 'Home Safety Improvement Services',
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
            name: 'Safety',
            item: 'https://www.homemaxrg.com/locations/laurel/capabilities/safety',
          },
        ],
      },
    ],
  }

  return (
    <>
      <main className="grow">
        <Hero
          image={imgSafety}
          title="HOME SAFETY IMPROVEMENT SERVICES IN LAUREL, DE"
        />

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Home Safety Improvement Services in Laurel, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your home should be a place where you feel secure—not a source of hidden risks. In Laurel, DE, many homes were
                built years ago and weren&apos;t designed to meet today&apos;s safety standards, electrical demands, or modern
                living needs. That&apos;s where HomeMax comes in.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide professional home safety improvement services in Laurel, DE, helping homeowners reduce hazards, prevent
                accidents, and ensure their properties remain safe, functional, and up to code. From electrical safety upgrades to
                structural improvements and preventative solutions, our team focuses on practical upgrades that protect what
                matters most—your family and your investment. Home safety isn&apos;t about fear. It&apos;s about preparation, smart
                planning, and making sure small issues don&apos;t turn into major problems.
              </p>
            </div>
          </div>
        </section>

        {/* Why Home Safety Matters */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Home Safety Matters for Laurel Homeowners
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Laurel&apos;s mix of older residential properties and growing neighborhoods means safety issues can vary widely
                from home to home. Some homeowners experience outdated electrical systems. Others deal with poor lighting, aging
                materials, or structural concerns that develop over time.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <p className="font-semibold text-gray-900 mb-4">Common safety concerns we see in Laurel homes include:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Electrical systems not designed for modern usage</li>
                  <li>Inadequate lighting in key areas</li>
                  <li>Aging materials that pose trip or fire hazards</li>
                  <li>Lack of preventative safety features</li>
                  <li>Homes that no longer meet current safety standards</li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ignoring these issues doesn&apos;t make them go away. In many cases, they quietly get worse. Proactive residential
                safety upgrades can help reduce risk, improve comfort, and add peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Comprehensive Improvements */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Home Safety Improvements Built Around Real Homes
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At HomeMax, we don&apos;t take a one-size-fits-all approach. Every home is different, and safety improvements
                should reflect how your household actually functions.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">
                  Our home safety improvement services in Laurel, DE focus on:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Identifying potential hazards before they become serious</li>
                  <li>Improving everyday safety and accessibility</li>
                  <li>Enhancing electrical and structural reliability</li>
                  <li>Supporting long-term home protection</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  We work closely with homeowners to understand their concerns and recommend safety solutions that make
                  sense—not unnecessary upgrades or rushed fixes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Electrical Safety Upgrades */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Safety Upgrades for Modern Living
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Electrical issues are one of the most common safety risks in residential properties. Older wiring, overloaded
                systems, and outdated components can increase the risk of power failure, equipment damage, or worse.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">
                  HomeMax provides electrical safety upgrades in Laurel, DE designed to support modern living while reducing risk.
                  These services may include:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Electrical system evaluations</li>
                  <li>Power load balancing improvements</li>
                  <li>Electrical component upgrades</li>
                  <li>Safer power distribution solutions</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Our goal is to ensure your home&apos;s electrical system can safely support today&apos;s appliances, devices, and
                  daily usage without unnecessary strain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lighting and Visibility */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Improving Lighting and Visibility for Safer Living
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Poor lighting doesn&apos;t just affect comfort—it can create safety risks throughout your home. Entryways,
                hallways, staircases, and exterior areas are especially important.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">We help Laurel homeowners improve safety by:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Enhancing visibility in high-traffic areas</li>
                  <li>Improving indoor and exterior lighting placement</li>
                  <li>Supporting safer movement throughout the home</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Better lighting improves awareness, reduces accident risk, and makes your home feel more secure overall.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Structural and Interior Safety Enhancements */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Structural and Interior Safety Enhancements
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Over time, homes naturally shift, wear down, and require attention. Small issues like uneven surfaces, worn
                materials, or unstable elements can create everyday hazards if left unaddressed.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  HomeMax provides structural and interior safety improvements that help reduce these risks. Our team looks closely
                  at areas that impact daily movement and household safety, offering practical solutions that blend seamlessly into
                  your home&apos;s design.
                </p>
                <p className="font-semibold text-gray-900 mb-2">These improvements are especially valuable for:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Families with children</li>
                  <li>Aging homeowners</li>
                  <li>Multi-generational households</li>
                  <li>Homes preparing for resale</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Preventative Safety Solutions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Preventative Safety Solutions That Save You Money Long-Term
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                One of the biggest misconceptions about home safety upgrades is that they only matter after something goes wrong. In
                reality, preventative improvements often save homeowners money by avoiding costly repairs, emergencies, or insurance
                issues.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our preventative home safety services in Laurel, DE are designed to catch problems early and strengthen your
                  home&apos;s overall reliability. This proactive approach helps reduce stress and unexpected expenses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-12 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              If you&apos;re unsure whether your home has hidden safety risks, now is the right time to find out.
            </h2>
            <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
              Contact HomeMax today to schedule a home safety consultation in Laurel, DE and get expert guidance on practical
              upgrades that protect your home and family.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-green-50 transition-colors shadow-lg text-lg"
            >
              Schedule a Home Safety Consultation
            </a>
          </div>
        </section>

        {/* Everyday Peace of Mind */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safety Improvements That Support Everyday Peace of Mind
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Safety isn&apos;t just about emergencies—it&apos;s about confidence. Knowing your home is well-maintained,
                reliable, and thoughtfully upgraded allows you to focus on living comfortably.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">HomeMax helps Laurel homeowners:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Reduce accident risks</li>
                  <li>Improve home reliability</li>
                  <li>Increase long-term property value</li>
                  <li>Feel confident about their living environment</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Our safety-focused improvements are subtle but impactful, designed to support everyday life without disrupting
                  your home&apos;s appearance or functionality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Team */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Local Team That Understands Laurel Homes
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As a local home improvement contractor serving Laurel, DE, HomeMax understands the construction styles, materials,
                and challenges common in this area. That local knowledge allows us to make smarter recommendations and deliver
                better results.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We don&apos;t just improve homes—we help homeowners make informed decisions that benefit them now and in the
                future.
              </p>
            </div>
          </div>
        </section>

        {/* Integrated Upgrades */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safety Upgrades That Align With Other Home Improvements
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Many homeowners choose to address safety improvements alongside remodeling, electrical upgrades, or maintenance
                services. This integrated approach often leads to better results and fewer disruptions.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">HomeMax can coordinate safety upgrades with:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Interior remodeling projects</li>
                  <li>Electrical and power improvements</li>
                  <li>Energy efficiency upgrades</li>
                  <li>Ongoing maintenance plans</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  This allows you to improve multiple aspects of your home efficiently and cost-effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Homeowners Trust HomeMax */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Laurel Homeowners Trust HomeMax for Safety Improvements
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Homeowners choose HomeMax because we prioritize clear communication, honest recommendations, and quality
                workmanship. We take the time to explain options, answer questions, and deliver improvements that truly matter.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">What sets us apart:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Local experience in Laurel, DE</li>
                  <li>Practical, homeowner-focused solutions</li>
                  <li>Skilled residential professionals</li>
                  <li>Respect for your time and property</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Our work is built around long-term safety, not short-term fixes.
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
                Schedule a Home Safety Consultation in Laurel, DE
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If you&apos;re concerned about your home&apos;s safety—or simply want peace of mind—HomeMax is here to help. Our
                home safety improvement services in Laurel, DE are designed to protect your household, reduce risk, and support
                comfortable living.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Don&apos;t wait for small issues to turn into serious problems. Contact HomeMax today to schedule your home safety
                consultation in Laurel, DE and take a confident step toward a safer, more secure home.
              </p>
              <a
                href="/contact"
                className="inline-block bg-green-600 text-white font-semibold px-10 py-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg text-lg"
              >
                Contact HomeMax for Home Safety in Laurel, DE
              </a>
            </div>
          </div>
        </section>

        {/* Contact + Capabilities List */}
        <ContactUs topic="HOME SAFETY IMPROVEMENT SERVICES IN LAUREL, DE" />

        <LocationCapabilitiesList
          location="laurel"
          locationName="Laurel"
          currentCapability="safety"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </main>
    </>
  )
}

