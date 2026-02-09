import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import type { Metadata } from 'next'
import Link from 'next/link'

import imgMaintenance from '@/assets/images/speciality.webp';

export const metadata: Metadata = {
  title: 'Home Maintenance Subscriptions in Bridgeville, DE | Preventative Home Care',
  description: 'Home maintenance subscription plans in Bridgeville, DE. Professional preventative home care, routine inspections, scheduled maintenance, and residential upkeep services from HomeMax.',
  keywords: [
    'home maintenance subscriptions Bridgeville DE',
    'preventative home maintenance Bridgeville',
    'home maintenance plans Bridgeville Delaware',
    'residential maintenance services Bridgeville',
    'scheduled home maintenance Bridgeville DE',
    'preventative home care Bridgeville',
    'home upkeep services Bridgeville Delaware',
    'routine home inspections Bridgeville',
  ],
  openGraph: {
    title: 'Home Maintenance Subscriptions in Bridgeville, DE',
    description: 'Professional home maintenance subscription plans for Bridgeville homes. Preventative care, scheduled inspections, and reliable upkeep services.',
    url: 'https://homemaxrg.com/locations/bridgeville/capabilities/maintenance-subscriptions',
    siteName: 'HomeMax Premier Era Innovations',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://homemaxrg.com/locations/bridgeville/capabilities/maintenance-subscriptions',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Bridgeville, Delaware',
  },
}

export default function BridgevilleMaintenanceSubscriptionsPage() {
  return (
    <>
      <main className="grow">
        <Hero 
          image={imgMaintenance} 
          title='HOME MAINTENANCE SUBSCRIPTIONS IN BRIDGEVILLE, DE' 
        />

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Home Maintenance Subscriptions in Bridgeville, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Owning a home in Bridgeville comes with pride—but it also comes with responsibility. Small issues don't 
                stay small for long when routine maintenance gets delayed. That's why HomeMax offers home maintenance 
                subscription plans in Bridgeville, DE, designed to keep your home running smoothly year-round without the 
                stress of last-minute repairs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Instead of reacting to problems after damage occurs, our maintenance subscriptions focus on preventative 
                home care, scheduled checkups, and early issue detection. It's a smarter way to protect your home, your 
                budget, and your peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Why Preventative Maintenance Matters */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Preventative Home Maintenance Matters in Bridgeville
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Bridgeville homes experience seasonal shifts that can quietly impact systems over time—humidity changes, 
                temperature swings, and normal wear all add up. Many homeowners don't notice problems until they become 
                expensive repairs.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Routine home maintenance helps:</h3>
                <div className="space-y-4">
                  <div className="flex items-start bg-green-50 rounded-lg p-4">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Catch issues before they cause damage</h4>
                      <p className="text-gray-600 text-sm">Early detection prevents costly repairs down the road</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-blue-50 rounded-lg p-4">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Extend the lifespan of home systems</h4>
                      <p className="text-gray-600 text-sm">Regular care keeps systems running longer</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-purple-50 rounded-lg p-4">
                    <svg className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Reduce unexpected repair costs</h4>
                      <p className="text-gray-600 text-sm">Avoid surprise expenses with proactive care</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-yellow-50 rounded-lg p-4">
                    <svg className="w-8 h-8 text-yellow-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Maintain property value</h4>
                      <p className="text-gray-600 text-sm">Well-maintained homes retain their value</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-red-50 rounded-lg p-4">
                    <svg className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Improve safety and efficiency</h4>
                      <p className="text-gray-600 text-sm">Keep your home safe and running efficiently</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  Our residential maintenance services in Bridgeville, DE are built around consistency. We don't rush through 
                  checklists—we look at your home the way a homeowner would, with care and attention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Is a Maintenance Subscription */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Is a Home Maintenance Subscription?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A home maintenance subscription is a scheduled service plan that ensures your home receives regular 
                inspections, adjustments, and preventative care throughout the year. Instead of calling for service only 
                when something breaks, you have a trusted team keeping an eye on your home proactively.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">HomeMax maintenance plans are ideal for:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center bg-white rounded-lg p-3">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Busy homeowners</strong></span>
                  </li>
                  <li className="flex items-center bg-white rounded-lg p-3">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span><strong>Rental property owners</strong></span>
                  </li>
                  <li className="flex items-center bg-white rounded-lg p-3">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span><strong>Vacation or secondary homes</strong></span>
                  </li>
                  <li className="flex items-center bg-white rounded-lg p-3">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span><strong>Aging homes that need consistent attention</strong></span>
                  </li>
                  <li className="flex items-center bg-white rounded-lg p-3">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Anyone who wants fewer surprises</strong></span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700 text-center font-medium">
                  Our home maintenance plans in Bridgeville are flexible, practical, and tailored to real-world homeowner needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Plans Include */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Our Bridgeville Maintenance Plans Include
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Each maintenance subscription is customized based on your home's size, age, and systems. While every plan 
                is slightly different, most include a combination of the following services:
              </p>
              
              <div className="space-y-6">
                {/* Routine Home Inspections */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Routine Home Inspections</h3>
                      <p className="text-gray-700">
                        We check key areas of your home to identify early signs of wear, damage, or inefficiency. These 
                        inspections help prevent small issues from turning into major repairs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Electrical & Power System Checks */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Electrical & Power System Checks</h3>
                      <p className="text-gray-700">
                        Electrical components are inspected for safety, functionality, and reliability. This helps reduce 
                        hazards and ensures your home's power systems stay dependable.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Safety & Compliance Reviews */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety & Compliance Reviews</h3>
                      <p className="text-gray-700">
                        We look for common safety concerns such as loose fixtures, worn components, or areas that could 
                        become hazards over time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Preventative Maintenance Adjustments */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Preventative Maintenance Adjustments</h3>
                      <p className="text-gray-700">
                        Minor fixes and adjustments are handled early to prevent breakdowns, saving time and money in the 
                        long run.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Maintenance Reports */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Maintenance Reports & Recommendations</h3>
                      <p className="text-gray-700">
                        After each visit, you'll receive clear feedback about your home's condition, along with honest 
                        recommendations—no pressure, no unnecessary upsells.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Designed for Bridgeville Homeowners */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Designed for Bridgeville Homeowners
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Bridgeville has a mix of older homes, newer builds, and rural properties. That means maintenance needs 
                aren't one-size-fits-all. Our team understands local construction styles and common maintenance challenges 
                in the area.
              </p>
              
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Homeowners across Bridgeville, DE choose HomeMax because:
                </h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">We're local and responsive</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">We understand regional home conditions</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">We focus on prevention, not just repairs</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">We communicate clearly and honestly</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700 text-center font-medium">
                  Our goal is to make home maintenance simple, predictable, and stress-free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-12 bg-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tired of Dealing with Unexpected Home Repairs?
            </h2>
            <p className="text-xl text-purple-100 mb-6 max-w-3xl mx-auto">
              Let HomeMax handle the upkeep for you. Our maintenance subscriptions are designed to keep your Bridgeville 
              home protected year-round.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors shadow-lg text-lg"
            >
              Schedule a Home Maintenance Consultation
            </Link>
          </div>
        </section>

        {/* Ideal for Busy Homeowners */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ideal for Busy Homeowners & Property Owners
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Life gets busy, and home maintenance often falls to the bottom of the list—until something goes wrong. Our 
                residential maintenance subscriptions in Bridgeville, DE are perfect for homeowners who want consistent 
                care without constantly scheduling appointments.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Maintenance plans are especially helpful for:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-gray-700">Families with busy schedules</span>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Homeowners who travel frequently</span>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-gray-700">Rental property owners</span>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-gray-700">Seniors who want dependable support</span>
                  </div>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-gray-700">New homeowners learning their property</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  Instead of worrying about what needs attention next, you can relax knowing your home is being monitored 
                  by professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Saves Money Over Time */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Preventative Maintenance Saves Money Over Time
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                One of the biggest benefits of a maintenance subscription is cost control. Preventative care reduces 
                emergency calls, unexpected breakdowns, and expensive repairs.
              </p>
              
              <div className="bg-green-50 rounded-lg shadow-md p-8 border-l-4 border-green-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Routine maintenance can help:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Avoid major system failures</strong> - Catch problems before they become costly disasters</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Reduce emergency service costs</strong> - Fewer urgent, after-hours service calls</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Extend the life of home components</strong> - Get more years from your systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span><strong>Maintain energy efficiency</strong> - Well-maintained systems use less energy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span><strong>Protect resale value</strong> - Well-maintained homes command higher prices</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700 font-medium">
                  Homeowners in Bridgeville appreciate knowing what to expect, rather than being surprised by sudden repair bills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Flexible Plans */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Flexible Maintenance Plans That Fit Your Home
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HomeMax offers flexible home maintenance plans because no two homes are the same. We'll work with you to 
                build a plan that matches your property's needs and your budget.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Plans can be adjusted for:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Frequency of visits</h4>
                      <p className="text-gray-600 text-sm">Monthly, quarterly, or seasonal schedules</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Type of home systems</h4>
                      <p className="text-gray-600 text-sm">Focus on electrical, safety, or comprehensive care</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Property size and age</h4>
                      <p className="text-gray-600 text-sm">Scaled appropriately for your home</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Seasonal considerations</h4>
                      <p className="text-gray-600 text-sm">Adjusted for Delaware's weather patterns</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  Whether you need basic preventative care or more comprehensive home upkeep, we'll design a solution that 
                  works for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Team You Can Rely On */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Local Team You Can Rely On
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                When you choose HomeMax, you're working with a local team that values long-term relationships. We're not 
                here for one-time visits—we're here to support your home for years to come.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our approach is:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Honest and transparent
                    </h4>
                    <p className="text-gray-600 text-sm">Clear communication with no hidden fees</p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Detail-oriented
                    </h4>
                    <p className="text-gray-600 text-sm">Thorough inspections and careful work</p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Respectful of your home
                    </h4>
                    <p className="text-gray-600 text-sm">Treat your property like our own</p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      Focused on long-term value
                    </h4>
                    <p className="text-gray-600 text-sm">Solutions that benefit you for years</p>
                  </div>
                </div>
                <p className="mt-8 text-center text-gray-700 font-medium">
                  We believe great maintenance starts with trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Benefits Most */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Who Benefits Most from Maintenance Subscriptions?
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
                Our home maintenance subscriptions in Bridgeville, DE are ideal for homeowners who want consistency, safety, 
                and peace of mind. If you've ever thought, "I wish I caught that earlier," a maintenance plan is the solution.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Homeowners who benefit most include:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Those tired of emergency repairs</span>
                  </div>
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Anyone wanting fewer maintenance headaches</span>
                  </div>
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-gray-700">Property owners focused on long-term care</span>
                  </div>
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700">Families who value safety and reliability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactUs topic='HOME MAINTENANCE SUBSCRIPTIONS IN BRIDGEVILLE, DE' />

        {/* Capabilities List Section */}
        <LocationCapabilitiesList 
          location="bridgeville" 
          locationName="Bridgeville"
          currentCapability="maintenance-subscriptions"
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  "@id": "https://homemaxrg.com/locations/bridgeville/capabilities/maintenance-subscriptions#service",
                  "name": "Home Maintenance Subscriptions in Bridgeville, DE",
                  "description": "Professional home maintenance subscription plans including preventative home care, routine inspections, scheduled maintenance, electrical system checks, safety reviews, and residential upkeep services for homes in Bridgeville, Delaware.",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "HomeMax Premier Era Innovations",
                    "@id": "https://homemaxrg.com/#organization",
                  },
                  "areaServed": {
                    "@type": "City",
                    "name": "Bridgeville",
                    "containedInPlace": {
                      "@type": "State",
                      "name": "Delaware",
                      "address": {
                        "@type": "PostalAddress",
                        "addressRegion": "DE",
                        "addressCountry": "US"
                      }
                    }
                  },
                  "serviceType": [
                    "Home Maintenance Subscriptions",
                    "Preventative Home Care",
                    "Routine Home Inspections",
                    "Scheduled Maintenance",
                    "Residential Upkeep Services",
                    "Home Maintenance Plans"
                  ]
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://homemaxrg.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Locations",
                      "item": "https://homemaxrg.com/locations"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Bridgeville",
                      "item": "https://homemaxrg.com/locations/bridgeville"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "Maintenance Subscriptions",
                      "item": "https://homemaxrg.com/locations/bridgeville/capabilities/maintenance-subscriptions"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </main>
    </>
  );
}

