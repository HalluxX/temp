import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import type { Metadata } from 'next'
import Link from 'next/link'

import imgExterior from '@/assets/images/speciality.webp';

export const metadata: Metadata = {
  title: 'Exterior Remodeling Services in Dagsboro, DE | Home Exterior Upgrades',
  description: 'Professional exterior remodeling services in Dagsboro, DE. Weather-resistant exterior upgrades, curb appeal improvements, and structural enhancements from HomeMax.',
  keywords: [
    'exterior remodeling Dagsboro DE',
    'home exterior upgrades Dagsboro',
    'exterior renovation Dagsboro Delaware',
    'siding replacement Dagsboro',
    'exterior home improvement Dagsboro DE',
    'curb appeal Dagsboro',
    'exterior remodeling contractor Dagsboro Delaware',
    'home exterior services Dagsboro',
  ],
  openGraph: {
    title: 'Exterior Remodeling Services in Dagsboro, DE',
    description: 'Professional exterior remodeling services for Dagsboro homes. Weather-resistant upgrades, curb appeal improvements, and structural enhancements built for Delaware.',
    url: 'https://homemaxrg.com/locations/dagsboro/capabilities/exterior-remodeling',
    siteName: 'HomeMax Premier Era Innovations',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://homemaxrg.com/locations/dagsboro/capabilities/exterior-remodeling',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Dagsboro, Delaware',
  },
}

export default function DagsboroExteriorRemodelingPage() {
  return (
    <>
      <main className="grow">
        <Hero 
          image={imgExterior} 
          title='EXTERIOR REMODELING SERVICES IN DAGSBORO, DE' 
        />

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Exterior Remodeling Services in Dagsboro, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your home's exterior does more than make a first impression. In a town like Dagsboro, where coastal weather, 
                humidity, and seasonal storms all take their toll, the outside of your home plays a critical role in protecting 
                everything inside it. When siding fades, trim rots, or exterior elements start to fail, it's not just a 
                cosmetic issue—it's a warning sign.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At HomeMax, we provide professional exterior remodeling services in Dagsboro, DE designed to strengthen, protect, 
                and refresh your home. Whether you're dealing with aging materials, storm-related wear, or simply want to improve 
                curb appeal, our team delivers exterior home improvements built to last in Delaware's climate.
              </p>
            </div>
          </div>
        </section>

        {/* Built for Delaware Homes */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Remodeling Built for Delaware Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homes in Dagsboro face a unique mix of conditions—coastal air, moisture, heat, wind, and sudden weather changes. 
                Generic exterior upgrades don't always hold up here. That's why HomeMax focuses on exterior remodeling solutions 
                specifically suited for Delaware properties.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We don't believe in surface-level fixes. Every exterior remodeling project begins with a careful evaluation of 
                your home's current condition, structural integrity, and exposure points. From there, we recommend improvements 
                that enhance durability, efficiency, and appearance—without overcomplicating the process.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Our exterior remodeling services are designed to:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Improve weather resistance</h4>
                      <p className="text-gray-600">Stand up to coastal conditions and seasonal storms</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-green-50 rounded-lg p-5 border-l-4 border-green-600">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Increase property value</h4>
                      <p className="text-gray-600">Boost home worth with quality exterior improvements</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-purple-50 rounded-lg p-5 border-l-4 border-purple-600">
                    <svg className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Enhance curb appeal</h4>
                      <p className="text-gray-600">Create a polished, welcoming exterior appearance</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-yellow-50 rounded-lg p-5 border-l-4 border-yellow-600">
                    <svg className="w-8 h-8 text-yellow-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Reduce long-term maintenance needs</h4>
                      <p className="text-gray-600">Durable solutions that require less ongoing care</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-red-50 rounded-lg p-5 border-l-4 border-red-600">
                    <svg className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Protect the structure of your home</h4>
                      <p className="text-gray-600">Shield critical components from damage</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center font-medium">
                  Whether your home is decades old or relatively new, exterior upgrades help extend its lifespan and preserve 
                  its value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Exterior Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Exterior Home Improvement Services in Dagsboro
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HomeMax offers full-service exterior remodeling, meaning you don't need to coordinate multiple contractors or 
                worry about gaps in responsibility. Our team handles projects from start to finish with clear communication and 
                dependable workmanship.
              </p>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Exterior remodeling services include:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <svg className="w-7 h-7 text-teal-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-gray-700 font-medium">Exterior home renovations</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <svg className="w-7 h-7 text-teal-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-gray-700 font-medium">Structural exterior improvements</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <svg className="w-7 h-7 text-teal-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Weather-resistant upgrades</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <svg className="w-7 h-7 text-teal-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Curb appeal enhancements</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm col-span-2">
                    <svg className="w-7 h-7 text-teal-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Exterior repair and replacement work</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  We work with homeowners throughout Dagsboro who want their homes to look better, perform better, and hold up 
                  against Delaware's demanding weather conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Exterior Remodeling Matters More Than You Think
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many homeowners put off exterior remodeling because the issues don't always feel urgent. A small crack, minor 
                rot, or faded surface can seem harmless at first. Over time, though, these small problems can lead to moisture 
                intrusion, insulation issues, and structural damage.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Exterior remodeling isn't just about appearance—it's about prevention. Proper exterior improvements help:
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="space-y-4">
                  <div className="flex items-start p-5 bg-red-50 rounded-lg border-l-4 border-red-600">
                    <svg className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700 font-medium text-lg">Reduce water damage risks</span>
                  </div>
                  <div className="flex items-start p-5 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-gray-700 font-medium text-lg">Improve energy efficiency</span>
                  </div>
                  <div className="flex items-start p-5 bg-green-50 rounded-lg border-l-4 border-green-600">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700 font-medium text-lg">Prevent mold and rot</span>
                  </div>
                  <div className="flex items-start p-5 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                    <svg className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-gray-700 font-medium text-lg">Protect framing and insulation</span>
                  </div>
                  <div className="flex items-start p-5 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                    <svg className="w-8 h-8 text-yellow-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium text-lg">Lower future repair costs</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center font-medium">
                  For homeowners in Dagsboro, staying ahead of exterior wear can save thousands in long-term repairs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curb Appeal */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Curb Appeal That Adds Real Value
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Curb appeal isn't just about looks—it directly impacts your home's value and how it's perceived. A clean, 
                updated exterior makes your home feel cared for and solid. It also increases resale appeal if you plan to sell 
                in the future.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our exterior home remodeling services in Dagsboro, DE focus on balanced improvements that elevate your home 
                without making it look overdone or out of place. The goal is to enhance—not overpower—your property's character.
              </p>
              
              <div className="bg-indigo-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Exterior improvements often include:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Updated exterior finishes</h4>
                      <p className="text-gray-600 text-sm">Fresh, modern materials and colors</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Clean, consistent lines and surfaces</h4>
                      <p className="text-gray-600 text-sm">Cohesive design throughout</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Durable materials designed for local conditions</h4>
                      <p className="text-gray-600 text-sm">Built to withstand Dagsboro weather</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Improvements that complement the surrounding neighborhood</h4>
                      <p className="text-gray-600 text-sm">Fits naturally with local aesthetics</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center font-medium">
                  A well-maintained exterior tells a clear story: this home is protected, updated, and worth investing in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-12 bg-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not Sure What Your Home's Exterior Needs?
            </h2>
            <p className="text-xl text-orange-100 mb-6 max-w-3xl mx-auto">
              Schedule a professional exterior evaluation with HomeMax today.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-orange-600 font-semibold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors shadow-lg text-lg"
            >
              Schedule an Exterior Evaluation
            </Link>
            <p className="text-orange-100 mt-4">
              We'll assess your home, explain your options clearly, and help you plan improvements that make sense for your 
              budget and your property in Dagsboro.
            </p>
          </div>
        </section>

        {/* Coastal Conditions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Remodeling That Stands Up to Coastal Conditions
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Living near the coast brings advantages—but it also means homes face constant exposure to moisture, wind, and 
                fluctuating temperatures. Exterior materials need to be chosen carefully, and installation has to be done right.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="text-lg text-gray-700 mb-6">
                  HomeMax specializes in weather-resistant exterior remodeling for Delaware homes. We focus on solutions that 
                  hold up over time instead of quick fixes that fail after a few seasons.
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our approach includes:</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-5 bg-teal-50 rounded-lg">
                    <svg className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Materials selected for durability</span>
                  </div>
                  <div className="flex items-start p-5 bg-teal-50 rounded-lg">
                    <svg className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Proper sealing and moisture control</span>
                  </div>
                  <div className="flex items-start p-5 bg-teal-50 rounded-lg">
                    <svg className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Attention to vulnerable areas like trim, joints, and transitions</span>
                  </div>
                  <div className="flex items-start p-5 bg-teal-50 rounded-lg">
                    <svg className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Installation methods that reduce future maintenance</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  These details matter, especially in Dagsboro, where environmental exposure is a constant factor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Older Homes */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Remodeling for Older Homes in Dagsboro
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Many homes in Dagsboro have great character but outdated or worn exterior components. Exterior remodeling allows 
                you to preserve the charm of your home while improving performance and safety.
              </p>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">For older homes, we often address:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Aging exterior materials</h4>
                      <p className="text-gray-600 text-sm">Updating worn surfaces and components</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Structural wear and tear</h4>
                      <p className="text-gray-600 text-sm">Reinforcing weakened areas</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Moisture penetration risks</h4>
                      <p className="text-gray-600 text-sm">Sealing vulnerable entry points</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Inefficient exterior elements</h4>
                      <p className="text-gray-600 text-sm">Upgrading to modern standards</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  Our team understands how to update older properties without stripping away what makes them unique. The result 
                  is an exterior that feels solid, refreshed, and built for modern living.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Company Trust */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Local Exterior Remodeling Company You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Choosing the right contractor matters just as much as choosing the right materials. HomeMax is a local exterior 
                remodeling company serving Dagsboro, DE, and we take that responsibility seriously.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Homeowners choose us because we offer:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-blue-50 rounded-lg p-4">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Clear, honest recommendations</span>
                  </div>
                  <div className="flex items-center bg-blue-50 rounded-lg p-4">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Reliable timelines</span>
                  </div>
                  <div className="flex items-center bg-blue-50 rounded-lg p-4">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Skilled workmanship</span>
                  </div>
                  <div className="flex items-center bg-blue-50 rounded-lg p-4">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Respect for your property</span>
                  </div>
                  <div className="flex items-center bg-blue-50 rounded-lg p-4 col-span-2">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Consistent communication</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  We don't believe in pressure sales or unnecessary upgrades. Our goal is to provide exterior home improvements 
                  that genuinely benefit your home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Management */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Seamless Project Management From Start to Finish
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Exterior remodeling can feel overwhelming if it's not handled properly. That's why HomeMax manages every phase 
                of your project—from planning to completion.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our process is simple:</h3>
                <div className="space-y-4">
                  <div className="flex items-center bg-white rounded-lg p-5 shadow-sm">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      1
                    </div>
                    <span className="text-gray-700 font-medium">Evaluate your home's exterior condition</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-5 shadow-sm">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      2
                    </div>
                    <span className="text-gray-700 font-medium">Discuss your goals and concerns</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-5 shadow-sm">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      3
                    </div>
                    <span className="text-gray-700 font-medium">Recommend practical exterior improvements</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-5 shadow-sm">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      4
                    </div>
                    <span className="text-gray-700 font-medium">Complete the work with attention to detail</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-5 shadow-sm">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      5
                    </div>
                    <span className="text-gray-700 font-medium">Walk through the finished project with you</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  This approach keeps projects moving smoothly and ensures you know exactly what to expect at every stage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Serving Dagsboro */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Serving Dagsboro Homeowners With Pride
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're proud to work with homeowners throughout Dagsboro and nearby Delaware communities. We understand local 
                building expectations, weather challenges, and homeowner priorities—and we use that knowledge to deliver better results.
              </p>
              <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                Whether you're upgrading for comfort, protection, or resale value, HomeMax provides exterior remodeling services 
                in Dagsboro, DE that are built around real homeowner needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactUs topic='EXTERIOR REMODELING SERVICES IN DAGSBORO, DE' />

        {/* Capabilities List Section */}
        <LocationCapabilitiesList 
          location="dagsboro" 
          locationName="Dagsboro"
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
                  "@id": "https://homemaxrg.com/locations/dagsboro/capabilities/exterior-remodeling#service",
                  "name": "Exterior Remodeling Services in Dagsboro, DE",
                  "description": "Professional exterior remodeling services including exterior home renovations, structural improvements, weather-resistant upgrades, curb appeal enhancements, and exterior repair work for homes in Dagsboro, Delaware.",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "HomeMax Premier Era Innovations",
                    "@id": "https://homemaxrg.com/#organization",
                  },
                  "areaServed": {
                    "@type": "City",
                    "name": "Dagsboro",
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
                    "Exterior Remodeling Services",
                    "Exterior Home Renovations",
                    "Structural Exterior Improvements",
                    "Weather-Resistant Upgrades",
                    "Curb Appeal Enhancements",
                    "Exterior Repair and Replacement"
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
                      "name": "Dagsboro",
                      "item": "https://homemaxrg.com/locations/dagsboro"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "Exterior Remodeling",
                      "item": "https://homemaxrg.com/locations/dagsboro/capabilities/exterior-remodeling"
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

