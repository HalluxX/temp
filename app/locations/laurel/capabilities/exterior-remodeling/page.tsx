import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import type { Metadata } from 'next'
import Link from 'next/link'

import imgExterior from '@/assets/images/speciality.webp'

export const metadata: Metadata = {
  title: 'Exterior Remodeling Services in Laurel, DE | HomeMax',
  description:
    'Professional exterior remodeling services in Laurel, DE. HomeMax strengthens and refreshes home exteriors with weather-ready, value-adding upgrades designed for Laurel homeowners.',
  keywords: [
    'exterior remodeling Laurel DE',
    'home exterior upgrades Laurel',
    'exterior renovation Laurel Delaware',
    'exterior home improvement Laurel DE',
    'curb appeal Laurel',
    'exterior remodeling contractor Laurel Delaware',
    'home exterior services Laurel',
    'HomeMax exterior remodeling Laurel',
  ],
  openGraph: {
    title: 'Exterior Remodeling Services in Laurel, DE',
    description:
      'HomeMax provides exterior remodeling services in Laurel, DE focused on protection, durability, curb appeal, and long-term home value.',
    url: 'https://www.homemaxrg.com/locations/laurel/capabilities/exterior-remodeling',
    siteName: 'HomeMax Premier Era Innovations',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.homemaxrg.com/locations/laurel/capabilities/exterior-remodeling',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Laurel, Delaware',
  },
}

export default function LaurelExteriorRemodelingPage() {
  return (
    <>
      <main className="grow">
        <Hero
          image={imgExterior}
          title="EXTERIOR REMODELING SERVICES IN LAUREL, DE"
        />

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Exterior Remodeling Services in Laurel, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your home&apos;s exterior is the first thing people notice—and more importantly, it&apos;s the first line of defense
                against Delaware&apos;s changing weather. In Laurel, DE, homeowners deal with coastal humidity, seasonal storms,
                temperature shifts, and long-term wear that can slowly break down exterior materials. That&apos;s why exterior
                remodeling isn&apos;t just about looks. It&apos;s about protection, durability, and long-term value.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At HomeMax, we provide professional exterior remodeling services in Laurel, DE designed to strengthen your home,
                improve curb appeal, and help you avoid costly repairs down the road. Whether your exterior needs targeted upgrades
                or a complete refresh, our team focuses on smart improvements that make sense for Laurel homes.
              </p>
            </div>
          </div>
        </section>

        {/* Exterior Remodeling Built for Laurel Homes */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Remodeling Built for Laurel Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                No two homes in Laurel are exactly the same. Some properties need weather-resistant upgrades, while others need
                visual improvements to modernize an aging exterior. Our approach to exterior remodeling always starts with
                understanding the condition of your home and how it&apos;s being used.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">We help homeowners improve:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Exterior durability and weather resistance</li>
                  <li>Energy efficiency and comfort</li>
                  <li>Curb appeal and resale value</li>
                  <li>Structural protection and longevity</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  As a local exterior remodeling contractor serving Laurel, DE, we understand the materials and methods that perform
                  best in this area. Our goal is to deliver exterior upgrades that look good today and continue protecting your home
                  for years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Exterior Remodeling Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Exterior Remodeling Services
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HomeMax offers full-service exterior home remodeling so homeowners don&apos;t need to coordinate multiple contractors.
                Our team handles planning, materials, and execution with a focus on quality and consistency.
              </p>
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">Exterior remodeling services include:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Exterior surface upgrades</li>
                  <li>Structural exterior improvements</li>
                  <li>Weather-resistant remodeling solutions</li>
                  <li>Property appearance enhancements</li>
                  <li>Long-term exterior protection upgrades</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  If your home&apos;s exterior is showing signs of age, wear, or inefficiency, we help identify the right
                  improvements—without pushing unnecessary work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curb Appeal and Durability */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Improving Curb Appeal Without Sacrificing Durability
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Curb appeal matters, but it should never come at the expense of durability. Many exterior remodeling projects fail
                because they focus too heavily on appearance while ignoring performance.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">Our exterior remodeling solutions in Laurel focus on:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Materials that hold up to moisture and temperature changes</li>
                  <li>Clean, timeless design choices</li>
                  <li>Practical upgrades that improve both function and appearance</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Whether you plan to stay in your home long-term or prepare it for resale, we help you make exterior improvements
                  that add real value—not just visual appeal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Weather-Resistant Exterior Upgrades */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Weather-Resistant Exterior Upgrades
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Homes in Laurel are exposed to rain, humidity, wind, and seasonal temperature swings. Over time, these conditions
                can weaken exterior materials and create vulnerabilities that lead to interior damage.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">
                  Our weather-resistant exterior remodeling services help protect your home by addressing:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Moisture-prone exterior areas</li>
                  <li>Aging or failing exterior materials</li>
                  <li>Structural weaknesses caused by exposure</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  By reinforcing your home&apos;s exterior, you reduce the risk of water intrusion, energy loss, and long-term
                  structural issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Exterior Remodeling for Energy Efficiency */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Remodeling for Energy Efficiency
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Exterior remodeling plays a major role in how efficiently your home performs. Poor exterior materials or outdated
                construction can allow air leaks, heat loss, and moisture infiltration.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">
                  Our exterior remodeling services help improve:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Insulation performance</li>
                  <li>Temperature regulation</li>
                  <li>Overall home comfort</li>
                  <li>Energy efficiency</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  For Laurel homeowners looking to reduce energy costs and improve comfort, exterior upgrades are often one of the
                  most effective investments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Thoughtful, Homeowner-First Process + CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Thoughtful, Homeowner-First Remodeling Process
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Exterior remodeling shouldn&apos;t feel overwhelming. We take a straightforward, homeowner-first approach that keeps
                communication clear and decisions informed.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8 mb-8">
                <p className="font-semibold text-gray-900 mb-4">Our process includes:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Evaluating your home&apos;s current exterior condition</li>
                  <li>Identifying practical improvement options</li>
                  <li>Recommending solutions based on performance and value</li>
                  <li>Completing work with attention to detail and safety</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  We don&apos;t believe in rushed jobs or one-size-fits-all solutions. Every exterior remodeling project is
                  approached with care and respect for your home.
                </p>
              </div>

              <div className="bg-green-600 rounded-lg shadow-md p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Thinking About Exterior Remodeling in Laurel, DE?
                </h3>
                <p className="text-lg mb-6">
                  If your home&apos;s exterior is starting to show signs of wear—or if you&apos;re planning upgrades to improve
                  curb appeal and protection—HomeMax can help. Our team provides honest guidance and professional exterior
                  remodeling services tailored to Laurel homeowners.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-green-50 transition-colors shadow-lg text-lg"
                >
                  Schedule Your Exterior Remodeling Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Exterior Remodeling and Long-Term Value */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Remodeling That Supports Long-Term Home Value
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Exterior upgrades aren&apos;t just cosmetic—they directly affect property value and long-term maintenance costs.
                Homes with well-maintained exteriors often require fewer repairs and attract stronger buyer interest.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">Our exterior remodeling services help:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Extend the lifespan of exterior materials</li>
                  <li>Reduce ongoing maintenance needs</li>
                  <li>Improve overall property condition</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Whether you&apos;re protecting a family home or maintaining a rental property in Laurel, exterior remodeling is a
                  smart long-term investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Experience */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Experience You Can Rely On
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As a company serving Laurel and surrounding Delaware communities, we understand local building standards, weather
                considerations, and homeowner expectations. That local experience allows us to recommend solutions that truly fit
                the area—not generic upgrades that fall short.
              </p>
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">Homeowners choose HomeMax because we provide:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Local exterior remodeling expertise</li>
                  <li>Reliable project timelines</li>
                  <li>Skilled workmanship</li>
                  <li>Clear communication throughout the process</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  We take pride in delivering exterior remodeling work that homeowners feel confident about.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Remodel & Service Area */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                When Is It Time to Remodel Your Home&apos;s Exterior?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Many homeowners wait too long to address exterior issues. Some common signs it may be time for exterior remodeling
                include:
              </p>
              <div className="bg-white rounded-lg shadow-md p-8 mb-10">
                <ul className="space-y-2 text-gray-700">
                  <li>Visible wear or deterioration</li>
                  <li>Rising energy bills</li>
                  <li>Moisture-related issues</li>
                  <li>Fading or outdated exterior appearance</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Addressing these issues early can prevent more expensive repairs later.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Serving Laurel, DE and Nearby Communities
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                HomeMax proudly provides exterior remodeling services throughout Laurel, DE and nearby areas. Our local focus allows
                us to deliver responsive service and personalized solutions for homeowners across the region. If you&apos;re
                searching for a trusted exterior remodeling contractor in Laurel, our team is ready to help you improve and protect
                your home.
              </p>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Schedule Your Exterior Remodeling Consultation Today
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your home&apos;s exterior plays a vital role in protection, comfort, and value. If you&apos;re ready to improve your
                home with professional exterior remodeling services in Laurel, DE, HomeMax is here to help.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From curb appeal upgrades to weather-resistant improvements, we deliver exterior remodeling solutions designed for
                real homes and real homeowners.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-green-600 text-white font-semibold px-10 py-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg text-lg"
              >
                Contact HomeMax for Exterior Remodeling in Laurel, DE
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactUs topic="EXTERIOR REMODELING SERVICES IN LAUREL, DE" />

        {/* Capabilities List Section */}
        <LocationCapabilitiesList
          location="laurel"
          locationName="Laurel"
          currentCapability="exterior-remodeling"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Service',
                  '@id':
                    'https://www.homemaxrg.com/locations/laurel/capabilities/exterior-remodeling#service',
                  name: 'Exterior Remodeling Services in Laurel, DE',
                  description:
                    'Exterior remodeling services in Laurel, DE focused on durability, weather resistance, curb appeal, and long-term home value. HomeMax provides professional exterior upgrades tailored to Laurel homeowners.',
                  provider: {
                    '@type': 'LocalBusiness',
                    name: 'HomeMax Premier Era Innovations',
                    '@id': 'https://www.homemaxrg.com/#organization',
                  },
                  areaServed: {
                    '@type': 'City',
                    name: 'Laurel',
                    containedInPlace: {
                      '@type': 'State',
                      name: 'Delaware',
                      address: {
                        '@type': 'PostalAddress',
                        addressRegion: 'DE',
                        addressCountry: 'US',
                      },
                    },
                  },
                  serviceType: [
                    'Exterior Remodeling',
                    'Home Exterior Upgrades',
                    'Weather-Resistant Exterior Improvements',
                    'Curb Appeal Enhancements',
                    'Energy-Efficient Exterior Upgrades',
                  ],
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
                      name: 'Exterior Remodeling',
                      item:
                        'https://www.homemaxrg.com/locations/laurel/capabilities/exterior-remodeling',
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </main>
    </>
  )
}

