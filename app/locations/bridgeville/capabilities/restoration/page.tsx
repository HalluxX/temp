import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import type { Metadata } from 'next'
import Link from 'next/link'

import imgRestoration from '@/assets/images/speciality.webp';

export const metadata: Metadata = {
  title: 'Home Restoration Services in Bridgeville, DE | Property Repair & Recovery',
  description: 'Professional home restoration services in Bridgeville, DE. Residential property repair, structural restoration, damage recovery, and safety improvements from HomeMax.',
  keywords: [
    'home restoration services Bridgeville DE',
    'residential restoration Bridgeville',
    'property restoration Bridgeville Delaware',
    'home repair services Bridgeville',
    'structural restoration Bridgeville DE',
    'property damage repair Bridgeville',
    'home restoration company Bridgeville Delaware',
    'residential property repair Bridgeville',
  ],
  openGraph: {
    title: 'Home Restoration Services in Bridgeville, DE',
    description: 'Professional home restoration services for Bridgeville homes. Structural repair, property damage recovery, and residential restoration from trusted local experts.',
    url: 'https://homemaxrg.com/locations/bridgeville/capabilities/restoration',
    siteName: 'HomeMax Premier Era Innovations',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://homemaxrg.com/locations/bridgeville/capabilities/restoration',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Bridgeville, Delaware',
  },
}

export default function BridgevilleRestorationPage() {
  return (
    <>
      <main className="grow">
        <Hero 
          image={imgRestoration} 
          title='HOME RESTORATION SERVICES IN BRIDGEVILLE, DE' 
        />

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Home Restoration Services in Bridgeville, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Damage to your home is never planned. Whether it's sudden structural issues, aging materials, or unexpected 
                property damage, knowing who to call can make all the difference. At HomeMax, we provide professional home 
                restoration services in Bridgeville, DE, helping homeowners restore safety, comfort, and value to their properties.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We understand how stressful property damage can be. That's why our restoration team focuses on practical 
                solutions, honest communication, and quality workmanship—so you can move forward with confidence and peace of mind.
              </p>
              <p className="text-lg text-gray-700 font-medium">
                From small residential repairs to full property restoration, HomeMax is a trusted local partner for Bridgeville 
                homeowners.
              </p>
            </div>
          </div>
        </section>

        {/* Local Restoration Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Restoration Solutions for Bridgeville Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homes in Bridgeville face a unique mix of challenges, from aging structures to seasonal wear caused by 
                Delaware's changing weather. Over time, these conditions can lead to damage that requires professional 
                restoration—not just cosmetic fixes.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our residential restoration services in Bridgeville are designed to address damage at its source. We don't 
                believe in shortcuts. Every restoration project starts with a thorough assessment so we can identify structural 
                concerns, safety risks, and long-term solutions that protect your home.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  HomeMax provides restoration services that help homeowners:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start bg-blue-50 rounded-lg p-5">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Repair damaged areas of the home</h4>
                      <p className="text-gray-600">Professional repair work that addresses both visible and hidden damage</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-green-50 rounded-lg p-5">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Restore structural integrity</h4>
                      <p className="text-gray-600">Strengthen and stabilize your home's essential structural components</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-red-50 rounded-lg p-5">
                    <svg className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Improve safety and livability</h4>
                      <p className="text-gray-600">Make your home safe, comfortable, and functional again</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-purple-50 rounded-lg p-5">
                    <svg className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Preserve property value</h4>
                      <p className="text-gray-600">Protect and maintain the long-term value of your investment</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center font-medium">
                  As a local home restoration company in Delaware, we understand Bridgeville homes and build solutions that last.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Services Cover */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Our Home Restoration Services Cover
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Restoration is more than repair—it's about returning your home to a safe, functional, and reliable condition. 
                HomeMax offers comprehensive property restoration services for residential properties in Bridgeville and 
                surrounding areas.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Our restoration work commonly includes:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <svg className="w-7 h-7 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-gray-700 font-medium">Structural repair and stabilization</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <svg className="w-7 h-7 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-gray-700 font-medium">Interior and exterior restoration</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <svg className="w-7 h-7 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Repair of worn, damaged, or compromised materials</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <svg className="w-7 h-7 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Safety and compliance upgrades</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <svg className="w-7 h-7 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Long-term durability improvements</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  Whether damage has developed gradually or appeared suddenly, our team takes the time to restore your home 
                  properly—so you don't have to worry about recurring issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety and Stability Focus */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Residential Restoration Focused on Safety and Stability
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                One of the biggest concerns after home damage is safety. Hidden structural issues, weakened materials, or 
                outdated systems can pose risks if left unaddressed. HomeMax prioritizes safe, code-conscious restoration 
                for Bridgeville homeowners.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our team evaluates:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start p-5 bg-red-50 rounded-lg border-l-4 border-red-600">
                    <svg className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Structural soundness</h4>
                      <p className="text-gray-600 text-sm">Ensuring your home's foundation and framework are secure</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                    <svg className="w-8 h-8 text-orange-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Load-bearing components</h4>
                      <p className="text-gray-600 text-sm">Checking critical supports that carry your home's weight</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                    <svg className="w-8 h-8 text-yellow-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Electrical and safety considerations</h4>
                      <p className="text-gray-600 text-sm">Identifying electrical hazards and safety concerns</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Areas vulnerable to future damage</h4>
                      <p className="text-gray-600 text-sm">Preventing problems before they occur</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 font-medium">
                  By addressing both visible and underlying problems, we help homeowners avoid costly repairs later. If you're 
                  searching for home restoration services near Bridgeville, DE, our approach ensures your home is not only 
                  restored—but protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Protects Long-Term Value */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Restoration That Protects Long-Term Home Value
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Property damage can quickly reduce the value of your home if it isn't handled correctly. Professional 
                restoration plays a critical role in preserving—and often improving—your home's market value.
              </p>
              
              <div className="bg-green-50 rounded-lg shadow-md p-8 border-l-4 border-green-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">HomeMax focuses on:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white rounded-lg p-4">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">Durable repair solutions</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-4">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">Quality materials</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-4">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">Professional workmanship</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-4">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">Long-term performance</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700">
                  Our home restoration services in Bridgeville are designed to strengthen your property, not just make it 
                  look better temporarily. This is especially important for homeowners planning to stay long-term or 
                  considering resale in the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-12 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't Wait for Small Issues to Turn Into Major Problems
            </h2>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              If your home in Bridgeville needs professional restoration, HomeMax is here to help.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg text-lg"
            >
              Schedule a Restoration Assessment
            </Link>
          </div>
        </section>

        {/* Why Homeowners Trust HomeMax */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Local Homeowners in Bridgeville Trust HomeMax
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Choosing the right restoration company matters. HomeMax has earned the trust of Delaware homeowners by 
                delivering dependable service and honest solutions—without unnecessary upsells or rushed work.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Bridgeville homeowners choose HomeMax because we offer:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700"><strong>Local restoration expertise</strong> - We understand Bridgeville homes and Delaware conditions</span>
                  </li>
                  <li className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-gray-700"><strong>Clear communication throughout the project</strong> - You always know what's happening</span>
                  </li>
                  <li className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-gray-700"><strong>Skilled residential contractors</strong> - Professional team with restoration expertise</span>
                  </li>
                  <li className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700"><strong>Timely project completion</strong> - We respect your schedule and complete work efficiently</span>
                  </li>
                  <li className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700"><strong>Restoration solutions built to last</strong> - Quality work that stands the test of time</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700 text-center font-medium">
                  We treat every home as if it were our own, ensuring restoration work meets both practical needs and 
                  long-term expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personalized Restoration Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Personalized Restoration Process from Start to Finish
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Every restoration project is different. That's why HomeMax follows a personalized process designed around 
                your home's condition and your goals.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">On-site evaluation and damage assessment</h3>
                      <p className="text-gray-700">Thorough inspection to understand the full scope of damage</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-md p-6 border-l-4 border-green-600">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Clear explanation of findings and options</h3>
                      <p className="text-gray-700">Honest communication about what needs to be done and why</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Customized restoration plan</h3>
                      <p className="text-gray-700">Tailored approach designed specifically for your home</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg shadow-md p-6 border-l-4 border-orange-600">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional repair and restoration work</h3>
                      <p className="text-gray-700">Skilled execution by experienced restoration professionals</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg shadow-md p-6 border-l-4 border-indigo-600">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Final walkthrough and quality check</h3>
                      <p className="text-gray-700">Ensuring your complete satisfaction with the restoration results</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-lg text-gray-700 text-center font-medium">
                This approach ensures homeowners in Bridgeville always know what's happening—and why. No confusion, no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Supporting Homeowners */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Supporting Bridgeville Homeowners Through Every Step
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We know restoration can feel overwhelming, especially when you're unsure where to start. HomeMax guides 
                homeowners through the process with transparency and care.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Our team is always available to:
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center p-5 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Answer questions</span>
                  </div>
                  <div className="flex items-center p-5 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Explain repair options</span>
                  </div>
                  <div className="flex items-center p-5 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Provide realistic timelines</span>
                  </div>
                  <div className="flex items-center p-5 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Offer practical recommendations</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  If you're searching for a trusted residential restoration company in Bridgeville, DE, HomeMax is committed 
                  to making the experience as smooth and stress-free as possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Designed for Delaware Homes */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Restoration Services Designed for Delaware Homes
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Delaware homes require restoration solutions that account for local conditions, building styles, and climate. 
                HomeMax designs restoration services specifically for Bridgeville and surrounding Delaware communities.
              </p>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">We focus on:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Long-term durability</h4>
                      <p className="text-gray-600 text-sm">Restoration that lasts for years to come</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Weather-resistant materials</h4>
                      <p className="text-gray-600 text-sm">Built to withstand Delaware's climate</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Code-compliant repairs</h4>
                      <p className="text-gray-600 text-sm">Meeting all local building standards</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Safe residential environments</h4>
                      <p className="text-gray-600 text-sm">Prioritizing your family's safety</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  Our restoration services help homeowners protect their property today while preparing it for the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Consider Restoration */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                When Should You Consider Home Restoration?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Many homeowners delay restoration because damage doesn't always appear urgent. However, early action can 
                prevent larger, more expensive repairs down the road.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  You may need home restoration if you notice:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                    <svg className="w-7 h-7 text-yellow-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Structural wear or damage</h4>
                      <p className="text-gray-600 text-sm">Cracks, sagging, or visible structural issues</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                    <svg className="w-7 h-7 text-orange-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Aging or compromised materials</h4>
                      <p className="text-gray-600 text-sm">Deteriorating surfaces, worn components</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                    <svg className="w-7 h-7 text-red-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Safety concerns in the home</h4>
                      <p className="text-gray-600 text-sm">Hazards or potential risks to occupants</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                    <svg className="w-7 h-7 text-purple-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Declining property condition</h4>
                      <p className="text-gray-600 text-sm">Overall deterioration affecting home value</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 font-medium">
                  If something doesn't feel right about your home, it's worth having a professional assessment. HomeMax 
                  provides reliable home restoration services in Bridgeville to help you make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Restoration Partner */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Local Restoration Partner in Bridgeville, DE
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax is proud to serve Bridgeville homeowners with dependable restoration services rooted in quality, 
                integrity, and local expertise. We're not a national franchise—we're a local home improvement company 
                committed to helping our community maintain safe, comfortable homes.
              </p>
              <p className="text-lg text-gray-700 font-medium">
                From initial assessment to final repair, our team is here to support you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactUs topic='HOME RESTORATION SERVICES IN BRIDGEVILLE, DE' />

        {/* Capabilities List Section */}
        <LocationCapabilitiesList 
          location="bridgeville" 
          locationName="Bridgeville"
          currentCapability="restoration"
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
                  "@id": "https://homemaxrg.com/locations/bridgeville/capabilities/restoration#service",
                  "name": "Home Restoration Services in Bridgeville, DE",
                  "description": "Professional home restoration services including residential property repair, structural restoration, damage recovery, interior and exterior restoration, safety improvements, and long-term durability enhancements for homes in Bridgeville, Delaware.",
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
                    "Home Restoration Services",
                    "Residential Property Repair",
                    "Structural Restoration",
                    "Property Damage Recovery",
                    "Interior Restoration",
                    "Exterior Restoration"
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
                      "name": "Restoration",
                      "item": "https://homemaxrg.com/locations/bridgeville/capabilities/restoration"
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

