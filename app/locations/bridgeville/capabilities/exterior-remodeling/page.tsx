import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import type { Metadata } from 'next'
import Link from 'next/link'

import imgExteriorRemodeling from '@/assets/images/speciality.webp';

export const metadata: Metadata = {
  title: 'Exterior Remodeling Services in Bridgeville, DE | Home Exterior Upgrades',
  description: 'Professional exterior remodeling services in Bridgeville, DE. Expert exterior home upgrades, curb appeal improvements, weather-resistant solutions, and structural enhancements from HomeMax.',
  keywords: [
    'exterior remodeling Bridgeville DE',
    'exterior home remodeling Bridgeville',
    'home exterior upgrades Bridgeville Delaware',
    'curb appeal improvements Bridgeville',
    'exterior renovations Bridgeville DE',
    'exterior home improvements Bridgeville',
    'residential exterior remodeling Bridgeville',
    'weather-resistant exterior Bridgeville Delaware',
  ],
  openGraph: {
    title: 'Exterior Remodeling Services in Bridgeville, DE',
    description: 'Professional exterior remodeling for Bridgeville homes. Improve curb appeal, durability, and weather resistance with expert solutions.',
    url: 'https://homemaxrg.com/locations/bridgeville/capabilities/exterior-remodeling',
    siteName: 'HomeMax Remodeling Group',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://homemaxrg.com/locations/bridgeville/capabilities/exterior-remodeling',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Bridgeville, Delaware',
  },
}

export default function BridgevilleExteriorRemodelingPage() {
  return (
    <>
      <main className="grow">
        <Hero 
          image={imgExteriorRemodeling} 
          title='EXTERIOR REMODELING SERVICES IN BRIDGEVILLE, DE' 
        />

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Exterior Remodeling Services in Bridgeville, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your home's exterior is the first thing people notice—but more importantly, it's what protects everything 
                inside. In Bridgeville, Delaware, where seasonal weather, humidity, and temperature shifts take a toll on 
                homes year after year, exterior remodeling isn't just about appearance. It's about durability, efficiency, 
                and long-term value.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At HomeMax, we provide professional exterior remodeling services in Bridgeville, DE, designed for homeowners 
                who want their property to look better, last longer, and perform the way it should. Whether your exterior 
                needs a visual refresh, structural improvements, or weather-resistant upgrades, our team delivers solutions 
                that fit both your home and your lifestyle.
              </p>
            </div>
          </div>
        </section>

        {/* Built for Bridgeville Homes */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Remodeling Built for Bridgeville Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bridgeville homes come in many styles—from long-standing family residences to newer builds and investment 
                properties. Each one faces unique exterior challenges, including moisture exposure, sun damage, and normal 
                wear over time. That's why our approach to exterior remodeling is never one-size-fits-all.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We take the time to evaluate your home's current condition and recommend exterior improvements that make 
                sense for your property. Our goal is to enhance curb appeal while strengthening your home's exterior 
                envelope—helping protect against future repairs and rising maintenance costs.
              </p>
              
              <div className="bg-blue-600 text-white rounded-lg shadow-md p-8">
                <p className="text-xl font-medium text-center">
                  Homeowners choose HomeMax for exterior remodeling in Bridgeville because we focus on practical upgrades 
                  that deliver visible and lasting results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* More Than Looks */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                More Than Looks: Why Exterior Upgrades Matter
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A well-maintained exterior does more than improve appearance. It plays a direct role in your home's energy 
                efficiency, weather resistance, and resale value. Small exterior issues left unaddressed can quickly turn 
                into larger, more expensive problems.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Our exterior remodeling services help Bridgeville homeowners:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start bg-white rounded-lg p-4">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-gray-700 font-medium">Improve curb appeal and property value</span>
                  </div>
                  <div className="flex items-start bg-white rounded-lg p-4">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Strengthen protection against weather and moisture</span>
                  </div>
                  <div className="flex items-start bg-white rounded-lg p-4">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Reduce long-term repair and maintenance costs</span>
                  </div>
                  <div className="flex items-start bg-white rounded-lg p-4">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Increase overall home efficiency</span>
                  </div>
                  <div className="flex items-start bg-white rounded-lg p-4">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="text-gray-700 font-medium">Modernize the appearance of aging exteriors</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  By addressing exterior improvements early, you protect your investment and extend the life of your home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Remodeling Services We Offer in Bridgeville, DE
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HomeMax provides a full range of exterior home remodeling services, allowing homeowners to complete upgrades 
                without juggling multiple contractors. Our team handles both functional and aesthetic improvements with 
                careful attention to detail.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our exterior remodeling services include:</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Exterior home upgrades and renovations</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Structural exterior improvements</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Weather-resistant enhancements</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Curb appeal upgrades</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Exterior surface improvements</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Whether you need targeted improvements or a complete exterior refresh, we deliver results that align with 
                  Bridgeville building standards and homeowner expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Delaware Weather Conditions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Designed for Delaware Weather Conditions
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Exterior remodeling in Bridgeville requires an understanding of local climate conditions. Seasonal rain, 
                humidity, and temperature changes can wear down exterior materials over time if they're not properly selected 
                or installed.
              </p>
              
              <div className="bg-blue-50 rounded-lg shadow-md p-8 border-l-4 border-blue-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  We prioritize exterior remodeling solutions that:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Hold up against moisture and humidity</h4>
                      <p className="text-gray-600 text-sm">Protect against Delaware's humid climate</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Resist cracking, warping, and fading</h4>
                      <p className="text-gray-600 text-sm">Materials built to withstand the elements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Improve overall weather resistance</h4>
                      <p className="text-gray-600 text-sm">Protection from rain, wind, and sun</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Support long-term durability</h4>
                      <p className="text-gray-600 text-sm">Built to last for years to come</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700">
                  By choosing the right materials and installation methods, we help Bridgeville homeowners avoid repeat 
                  repairs and premature replacements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curb Appeal That Adds Value */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Curb Appeal That Adds Real Value
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Curb appeal isn't just about making your home look good—it directly impacts how your property is perceived 
                and valued. Whether you plan to stay long-term or sell in the future, exterior improvements are one of the 
                most effective ways to increase home value.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our curb appeal upgrades are designed to:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Refresh outdated exteriors
                    </h4>
                    <p className="text-gray-600 text-sm">Modernize aging homes with updated materials and finishes</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                      Create a clean, cohesive appearance
                    </h4>
                    <p className="text-gray-600 text-sm">Unified design that enhances your home's character</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Highlight architectural features
                    </h4>
                    <p className="text-gray-600 text-sm">Showcase your home's unique design elements</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      Improve first impressions
                    </h4>
                    <p className="text-gray-600 text-sm">Make a lasting positive impact on visitors and buyers</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  Homeowners throughout Bridgeville rely on HomeMax to deliver exterior remodeling that feels intentional, 
                  balanced, and built to last.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-12 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Thinking About Upgrading Your Home's Exterior?
            </h2>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              If you're unsure where to start or want expert guidance, HomeMax is here to help. Our Bridgeville exterior 
              remodeling consultations focus on practical solutions, honest recommendations, and long-term results.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg text-lg"
            >
              Schedule Your Exterior Remodeling Consultation
            </Link>
          </div>
        </section>

        {/* Exterior Improvements That Protect */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Improvements That Protect Your Home
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Exterior remodeling isn't just cosmetic. Many homeowners contact us after noticing signs of wear that could 
                lead to larger issues if ignored. Addressing these concerns early helps prevent damage to interior spaces 
                and structural components.
              </p>
              
              <div className="bg-red-50 rounded-lg shadow-md p-8 border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Exterior improvements can help:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span><strong>Reduce moisture intrusion</strong> - Prevent water damage and mold growth</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span><strong>Protect structural elements</strong> - Safeguard the foundation and framing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span><strong>Improve insulation performance</strong> - Better energy efficiency and comfort</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Extend the lifespan of exterior materials</strong> - Get more years from your investment</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Our team evaluates potential problem areas and recommends exterior upgrades that protect your home from 
                  the outside in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Company You Can Trust */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Local Exterior Remodeling Company You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HomeMax is proud to serve Bridgeville homeowners with reliable, professional service. As a local home 
                improvement contractor, we understand the importance of trust, communication, and accountability—especially 
                when working on the exterior of your home.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  When you choose HomeMax, you can expect:
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Clear project timelines</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Honest assessments and recommendations</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Skilled workmanship</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Respect for your property</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Consistent communication</span>
                  </div>
                </div>
                <p className="mt-8 text-center text-gray-700 font-medium">
                  We approach every exterior remodeling project with the same care we'd expect for our own homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* For Long-Term Homeowners */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Remodeling for Long-Term Homeowners
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Many Bridgeville homeowners aren't looking for quick fixes—they want exterior improvements that last. That's 
                why we focus on quality workmanship and durable materials that support long-term home ownership.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Exterior remodeling with HomeMax is ideal for homeowners who want to:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Reduce ongoing maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Avoid frequent repairs</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Improve comfort and efficiency</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Protect their investment</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Built for Longevity</h3>
                  <p className="text-gray-700 mb-4">
                    Our exterior upgrades are designed with longevity in mind, so you can enjoy peace of mind year after year.
                  </p>
                  <p className="text-gray-700">
                    We don't cut corners—we build better homes that stand the test of time and Delaware's weather conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supporting Other Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Supporting Other Home Improvement Services
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                One of the benefits of working with HomeMax is access to additional home improvement capabilities. Exterior 
                remodeling often pairs well with other upgrades, allowing homeowners to improve multiple areas of their 
                property efficiently.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our services can complement:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/locations/bridgeville/capabilities/energy-efficiency" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-gray-700">Energy efficiency improvements</span>
                  </Link>
                  <Link href="/locations/bridgeville/capabilities/electric-power" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-gray-700">Electrical and power upgrades</span>
                  </Link>
                  <Link href="/locations/bridgeville/capabilities/safety" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700">Home safety enhancements</span>
                  </Link>
                  <Link href="/locations/bridgeville/capabilities/maintenance-subscriptions" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <svg className="w-6 h-6 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700">Preventative maintenance plans</span>
                  </Link>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  By coordinating improvements, we help Bridgeville homeowners maximize results while minimizing disruption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Homeowners Choose HomeMax */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Why Bridgeville Homeowners Choose HomeMax
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
                Homeowners in Bridgeville choose HomeMax because we prioritize results that make sense—not upsells or 
                unnecessary work. We listen, assess, and deliver exterior remodeling solutions that match your goals and budget.
              </p>
              
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">What sets us apart:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Local Delaware Expertise
                    </h4>
                    <p className="text-gray-600 text-sm">Deep understanding of Bridgeville homes and local conditions</p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Full-Service Solutions
                    </h4>
                    <p className="text-gray-600 text-sm">Complete home improvement capabilities under one roof</p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Reliable Service
                    </h4>
                    <p className="text-gray-600 text-sm">Dependable workmanship you can count on</p>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      Quality & Durability
                    </h4>
                    <p className="text-gray-600 text-sm">Focus on lasting results and long-term performance</p>
                  </div>
                </div>
                <p className="mt-8 text-center text-gray-700 font-medium">
                  We don't believe in cutting corners—only in building better homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactUs topic='EXTERIOR REMODELING SERVICES IN BRIDGEVILLE, DE' />

        {/* Capabilities List Section */}
        <LocationCapabilitiesList 
          location="bridgeville" 
          locationName="Bridgeville"
          currentCapability="exterior-remodeling"
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
                  "@id": "https://homemaxrg.com/locations/bridgeville/capabilities/exterior-remodeling#service",
                  "name": "Exterior Remodeling Services in Bridgeville, DE",
                  "description": "Professional exterior remodeling services including home exterior upgrades, curb appeal improvements, weather-resistant solutions, structural enhancements, and exterior renovations for residential homes in Bridgeville, Delaware.",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "HomeMax Remodeling Group",
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
                    "Exterior Remodeling",
                    "Exterior Home Upgrades",
                    "Curb Appeal Improvements",
                    "Weather-Resistant Enhancements",
                    "Structural Exterior Improvements",
                    "Exterior Renovations"
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
                      "name": "Exterior Remodeling Services",
                      "item": "https://homemaxrg.com/locations/bridgeville/capabilities/exterior-remodeling"
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

