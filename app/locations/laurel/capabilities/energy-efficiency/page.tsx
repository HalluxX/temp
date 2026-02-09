import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import type { Metadata } from 'next'
import Link from 'next/link'

import imgEnergyEfficiency from '@/assets/images/underground-utility.webp'

export const metadata: Metadata = {
  title: 'Energy Efficiency Home Upgrades in Laurel, DE | HomeMax',
  description: 'Energy efficiency services in Laurel, DE. HomeMax helps Laurel homeowners lower energy bills, improve comfort, and reduce wasted energy with practical, long-lasting home improvements.',
  keywords: [
    'energy efficiency Laurel DE',
    'home energy upgrades Laurel',
    'energy efficient home improvements Laurel Delaware',
    'lower energy bills Laurel',
    'home insulation Laurel DE',
    'energy saving services Laurel',
    'energy efficiency contractor Laurel Delaware',
    'HomeMax energy efficiency Laurel',
  ],
  openGraph: {
    title: 'Energy Efficiency Home Upgrades in Laurel, DE',
    description: 'HomeMax helps Laurel homeowners make practical energy efficiency upgrades that reduce wasted energy, improve comfort, and lower utility costs.',
    url: 'https://www.homemaxrg.com/locations/laurel/capabilities/energy-efficiency',
    siteName: 'HomeMax Premier Era Innovations',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.homemaxrg.com/locations/laurel/capabilities/energy-efficiency',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Laurel, Delaware',
  },
}

export default function LaurelEnergyEfficiencyPage() {
  return (
    <>
      <main className="grow">
        <Hero
          image={imgEnergyEfficiency}
          title="ENERGY EFFICIENCY HOME UPGRADES IN LAUREL, DE"
        />

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Energy Efficiency Home Upgrades in Laurel, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If your home in Laurel feels too hot in the summer, too cold in the winter, or your energy bills keep climbing for no clear reason, energy efficiency may be the missing piece. At HomeMax, we help homeowners in Laurel, Delaware make practical, long-lasting improvements that reduce wasted energy, improve comfort, and lower monthly utility costs—without overcomplicating the process.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Energy efficiency isn&apos;t about trendy upgrades or gimmicks. It&apos;s about making sure your home works the way it should. From targeted efficiency improvements to whole-home upgrades, our team focuses on real solutions that make a noticeable difference in how your home feels and how much it costs to run.
              </p>
            </div>
          </div>
        </section>

        {/* Helping Laurel Homeowners Lower Energy Costs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Helping Laurel Homeowners Lower Energy Costs the Smart Way
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many homes in Laurel were built before modern energy standards became common. Over time, small inefficiencies add up—air leaks, outdated systems, poor insulation, and electrical inefficiencies quietly drain energy every day. The result is higher utility bills, uneven temperatures, and unnecessary wear on your home systems.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HomeMax provides energy efficiency upgrades in Laurel DE that focus on fixing the root causes, not just the symptoms. Our approach is simple: identify where energy is being lost and make improvements that deliver real, measurable benefits.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">Homeowners often contact us because they want:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span> Lower electric and heating bills
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span> A more comfortable home year-round
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span> Better indoor temperature control
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span> Long-term savings without constant repairs
                  </li>
                </ul>
                <p className="mt-6 text-gray-700">
                  We design energy-saving home improvements around your home&apos;s layout, usage patterns, and budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Energy Efficiency Really Means */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Energy Efficiency Really Means for Your Home
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Energy efficiency isn&apos;t one single upgrade—it&apos;s how all parts of your home work together. When systems are balanced and properly supported, your home uses less energy while delivering better performance.
              </p>
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Our residential energy efficiency services may include:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">•</span> Improving insulation and thermal performance
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">•</span> Sealing gaps that cause air loss
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">•</span> Upgrading inefficient electrical components
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">•</span> Supporting energy-efficient systems
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-3">•</span> Reducing unnecessary power consumption
                  </li>
                </ul>
                <p className="mt-6 text-gray-700">
                  These improvements help create a home that stays comfortable without constantly running heating or cooling systems at full capacity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Upgrades Designed for Laurel Homes */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Energy Efficiency Upgrades Designed for Laurel Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homes in Laurel face specific challenges due to seasonal temperature changes, humidity levels, and construction styles. A one-size-fits-all solution doesn&apos;t work. That&apos;s why HomeMax customizes every energy efficiency plan based on the home and the homeowner.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">We help Laurel residents with:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Energy-efficient home improvements</li>
                  <li>Utility cost reduction strategies</li>
                  <li>Sustainable home upgrades</li>
                  <li>Efficient home system enhancements</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Whether you live in an older home or a newer build, improving efficiency can reduce strain on your systems and extend their lifespan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Energy Efficiency Is One of the Best Investments */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Energy Efficiency Is One of the Best Home Investments
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Energy efficiency upgrades don&apos;t just save money—they protect your home. When systems run more efficiently, they experience less stress, fewer breakdowns, and longer service life.
              </p>
              <div className="bg-green-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">Benefits homeowners in Laurel often notice include:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>More consistent indoor temperatures</li>
                  <li>Reduced drafts and cold spots</li>
                  <li>Lower monthly energy bills</li>
                  <li>Increased home value</li>
                  <li>Improved everyday comfort</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Many homeowners are surprised by how quickly energy-saving upgrades begin to pay for themselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-12 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to lower your energy bills and improve home comfort?
            </h2>
            <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
              HomeMax helps Laurel homeowners make smart energy efficiency upgrades that deliver real results. Schedule a consultation today and find out where your home is losing energy—and how to fix it.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-green-600 font-semibold px-8 py-4 rounded-lg hover:bg-green-50 transition-colors shadow-lg text-lg"
            >
              Schedule Your Energy Efficiency Consultation
            </Link>
          </div>
        </section>

        {/* Energy Efficiency and Electrical Performance */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Efficiency and Electrical Performance Go Hand in Hand
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Energy efficiency isn&apos;t just about insulation or windows. Your home&apos;s electrical system plays a major role in how energy is distributed and consumed. Outdated or overloaded electrical components can waste power and limit your ability to upgrade to more efficient solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                HomeMax integrates electrical efficiency improvements into our energy-saving strategies whenever needed. This ensures your home can safely support modern, efficient systems without unnecessary energy loss. Our team looks at how power flows through your home and identifies opportunities to improve efficiency without sacrificing performance.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainable Home Improvements */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sustainable Home Improvements Without the Guesswork
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Many homeowners want to make sustainable choices but don&apos;t want complicated systems or costly experiments. Our energy efficiency services focus on practical, proven improvements that fit real homes and real budgets.
              </p>
              <div className="bg-gray-50 rounded-lg p-8">
                <p className="font-semibold text-gray-900 mb-4">Sustainable upgrades may include:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Reducing excess energy consumption</li>
                  <li>Improving home performance without major reconstruction</li>
                  <li>Supporting long-term efficiency goals</li>
                  <li>Creating a more environmentally responsible household</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  We help you make informed decisions that benefit both your home and the environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Efficiency for Long-Term Comfort */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Efficiency for Long-Term Comfort
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Comfort isn&apos;t just about temperature—it&apos;s about consistency. Energy-efficient homes maintain stable indoor conditions without constantly adjusting thermostats or relying on temporary fixes.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">Homeowners in Laurel often tell us they notice:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Fewer temperature swings</li>
                  <li>Improved airflow and circulation</li>
                  <li>Reduced noise from overworked systems</li>
                  <li>A more balanced indoor environment</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  These improvements contribute to a home that feels better every day, not just during extreme weather.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Laurel Homeowners Trust HomeMax */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Laurel Homeowners Trust HomeMax
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HomeMax is more than a contractor—we&apos;re a local partner focused on helping homeowners make smart, lasting improvements. We understand Laurel homes, local expectations, and the importance of doing the job right the first time.
              </p>
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">Homeowners choose HomeMax because we offer:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Local experience in Delaware homes</li>
                  <li>Clear communication and honest recommendations</li>
                  <li>Energy efficiency solutions tailored to real needs</li>
                  <li>Quality workmanship and dependable service</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Our goal is simple: help you get more comfort and value from your home while reducing wasted energy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Care */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Efficiency Works Best When Combined with Ongoing Care
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Efficiency improvements are most effective when paired with routine maintenance. Small issues—like wear, gaps, or aging components—can slowly reduce performance over time. HomeMax offers long-term support to help maintain efficiency gains and prevent small problems from turning into expensive fixes. This proactive approach keeps your home performing at its best year after year.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactUs topic="ENERGY EFFICIENCY SERVICES IN LAUREL, DE" />

        {/* Capabilities List Section */}
        <LocationCapabilitiesList
          location="laurel"
          locationName="Laurel"
          currentCapability="energy-efficiency"
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
                  '@id': 'https://www.homemaxrg.com/locations/laurel/capabilities/energy-efficiency#service',
                  name: 'Energy Efficiency Home Upgrades in Laurel, DE',
                  description: 'Energy efficiency services in Laurel, DE. Practical home improvements that reduce wasted energy, improve comfort, and lower utility costs. Insulation, air sealing, electrical efficiency, and sustainable upgrades for Laurel homeowners.',
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
                    'Energy Efficiency Services',
                    'Home Energy Upgrades',
                    'Insulation Improvements',
                    'Air Sealing',
                    'Energy-Saving Solutions',
                    'Home Energy Audits',
                  ],
                },
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.homemaxrg.com' },
                    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.homemaxrg.com/locations' },
                    { '@type': 'ListItem', position: 3, name: 'Laurel', item: 'https://www.homemaxrg.com/locations/laurel' },
                    { '@type': 'ListItem', position: 4, name: 'Energy Efficiency', item: 'https://www.homemaxrg.com/locations/laurel/capabilities/energy-efficiency' },
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
