import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import type { Metadata } from 'next'
import Link from 'next/link'

import imgEnergyEfficiency from '@/assets/images/underground-utility.webp';

export const metadata: Metadata = {
  title: 'Energy Efficiency Services in Dagsboro, DE | Home Energy Upgrades',
  description: 'Professional energy efficiency services in Dagsboro, DE. Lower utility bills, improve home comfort, and reduce energy waste with smart home upgrades from HomeMax.',
  keywords: [
    'energy efficiency Dagsboro DE',
    'home energy upgrades Dagsboro',
    'energy efficient home improvements Dagsboro Delaware',
    'lower energy bills Dagsboro',
    'home insulation Dagsboro DE',
    'energy saving services Dagsboro',
    'energy efficiency contractor Dagsboro Delaware',
    'home energy efficiency Dagsboro',
  ],
  openGraph: {
    title: 'Energy Efficiency Services in Dagsboro, DE',
    description: 'Professional energy efficiency services for Dagsboro homes. Smart upgrades that lower bills, improve comfort, and reduce energy waste.',
    url: 'https://homemaxrg.com/locations/dagsboro/capabilities/energy-efficiency',
    siteName: 'HomeMax Remodeling Group',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://homemaxrg.com/locations/dagsboro/capabilities/energy-efficiency',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Dagsboro, Delaware',
  },
}

export default function DagsboroEnergyEfficiencyPage() {
  return (
    <>
      <main className="grow">
        <Hero 
          image={imgEnergyEfficiency} 
          title='ENERGY EFFICIENCY SERVICES IN DAGSBORO, DE' 
        />

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Energy Efficiency Services in Dagsboro, DE
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                Smart Home Upgrades That Lower Bills and Improve Comfort
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If your energy bills keep rising or certain rooms in your home never feel quite comfortable, you're not alone. 
                Many homeowners in Dagsboro, DE live in houses that weren't designed for today's energy demands. Drafts, 
                inefficient systems, and outdated materials quietly waste energy every day—costing you money month after month.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At HomeMax, we help homeowners take control of their energy usage with practical, cost-effective energy 
                efficiency upgrades designed specifically for Delaware homes. Our approach isn't about pushing unnecessary 
                upgrades—it's about making smart improvements that actually reduce energy waste, improve comfort, and protect 
                your home long-term.
              </p>
            </div>
          </div>
        </section>

        {/* Why Energy Efficiency Matters */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Energy Efficiency Matters for Homes in Dagsboro
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Dagsboro's mix of seasonal temperature swings, coastal humidity, and older residential construction makes 
                energy efficiency especially important. Homes that aren't properly sealed or upgraded often struggle with:
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="space-y-4">
                  <div className="flex items-start bg-red-50 rounded-lg p-5 border-l-4 border-red-600">
                    <svg className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">High heating and cooling costs</h4>
                      <p className="text-gray-600">Wasted energy translates directly to higher monthly bills</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-blue-50 rounded-lg p-5 border-l-4 border-blue-600">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Uneven indoor temperatures</h4>
                      <p className="text-gray-600">Hot and cold spots throughout your home</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-teal-50 rounded-lg p-5 border-l-4 border-teal-600">
                    <svg className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Excess moisture and humidity issues</h4>
                      <p className="text-gray-600">Poor efficiency can lead to indoor air quality problems</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-orange-50 rounded-lg p-5 border-l-4 border-orange-600">
                    <svg className="w-8 h-8 text-orange-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Overworked HVAC and electrical systems</h4>
                      <p className="text-gray-600">Systems working harder lead to premature wear and failure</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 font-medium text-center">
                  Energy-efficient home improvements solve these problems by addressing the root causes—not just the symptoms. 
                  Instead of constantly adjusting the thermostat, homeowners enjoy more stable indoor temperatures and lower 
                  utility bills year-round.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Approach to Energy Efficiency Upgrades
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At HomeMax, we believe energy efficiency should feel simple and worthwhile, not overwhelming. We focus on 
                upgrades that deliver real results without disrupting your daily life.
              </p>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Our energy efficiency services in Dagsboro, DE are designed to:
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Reduce unnecessary energy consumption</h4>
                      <p className="text-gray-600 text-sm">Cut waste and lower your carbon footprint</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Improve overall home comfort</h4>
                      <p className="text-gray-600 text-sm">Consistent temperatures and better air quality</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Support long-term cost savings</h4>
                      <p className="text-gray-600 text-sm">Investments that pay for themselves over time</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Increase home value and performance</h4>
                      <p className="text-gray-600 text-sm">Boost property appeal and resale potential</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  We evaluate how energy moves through your home and recommend improvements that make sense for your space, 
                  usage, and budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Energy Problems */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Common Energy Problems We Fix in Dagsboro Homes
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Many homeowners assume high energy bills are unavoidable. In reality, most homes lose energy in predictable 
                ways. Some of the most common issues we address include:
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="space-y-4">
                  <div className="flex items-start p-5 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                    <svg className="w-8 h-8 text-yellow-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Poor insulation</h4>
                      <p className="text-gray-600">Allowing heat loss in winter and heat gain in summer</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                    <svg className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Air leaks</h4>
                      <p className="text-gray-600">Around doors, windows, and attic spaces draining conditioned air</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-red-50 rounded-lg border-l-4 border-red-600">
                    <svg className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Outdated systems</h4>
                      <p className="text-gray-600">Working harder than necessary to maintain comfort</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-indigo-50 rounded-lg border-l-4 border-indigo-600">
                    <svg className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Inefficient electrical setups</h4>
                      <p className="text-gray-600">Contributing to energy waste throughout your home</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center font-medium">
                  By targeting these problem areas, we help homeowners see noticeable improvements without unnecessary upgrades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Efficiency Upgrades */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Efficiency Upgrades That Make a Real Difference
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Energy efficiency isn't about one single fix—it's about improving how your home functions as a system. HomeMax 
                offers a range of energy-saving home improvements that work together to reduce waste and improve comfort.
              </p>
              
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">These upgrades may include:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <svg className="w-7 h-7 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Improving insulation performance</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <svg className="w-7 h-7 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Reducing air leakage throughout the home</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <svg className="w-7 h-7 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Enhancing system efficiency</span>
                  </div>
                  <div className="flex items-center bg-white rounded-lg p-4 shadow-sm">
                    <svg className="w-7 h-7 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Supporting better indoor climate control</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  Each recommendation is based on how your home actually performs, not a one-size-fits-all checklist.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Homeowners Choose */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Homeowners in Dagsboro Choose Energy Efficiency Improvements
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Energy-efficient homes don't just cost less to run—they're more comfortable to live in. Homeowners often 
                notice improvements immediately, including:
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="space-y-4">
                  <div className="flex items-start p-5 bg-green-50 rounded-lg">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">More consistent room temperatures</h4>
                      <p className="text-gray-600 text-sm">No more hot spots or cold corners</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Reduced strain on heating and cooling systems</h4>
                      <p className="text-gray-600 text-sm">Systems last longer with less maintenance</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-purple-50 rounded-lg">
                    <svg className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Lower monthly utility bills</h4>
                      <p className="text-gray-600 text-sm">Savings you can see every billing cycle</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-teal-50 rounded-lg">
                    <svg className="w-8 h-8 text-teal-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Quieter, more efficient home operation</h4>
                      <p className="text-gray-600 text-sm">Less noise from overworked systems</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  Over time, these upgrades also help prevent wear and tear on major systems, saving money on future repairs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-12 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tired of High Energy Bills or an Uncomfortable Home?
            </h2>
            <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
              If you're tired of high energy bills or an uncomfortable home, now is the right time to act.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-green-600 font-semibold px-8 py-4 rounded-lg hover:bg-green-50 transition-colors shadow-lg text-lg"
            >
              Schedule an Energy Efficiency Consultation
            </Link>
            <p className="text-green-100 mt-4">
              Find out how simple upgrades can make a real difference in your Dagsboro home.
            </p>
          </div>
        </section>

        {/* Energy Efficiency and Home Value */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Efficiency and Home Value
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Energy efficiency upgrades don't just improve daily comfort—they also add long-term value to your home. Buyers 
                increasingly look for homes with lower operating costs and efficient systems already in place.
              </p>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Making improvements now can:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Increase property appeal</h4>
                      <p className="text-gray-600 text-sm">Stand out in the real estate market</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Reduce future maintenance needs</h4>
                      <p className="text-gray-600 text-sm">Less wear on systems means fewer repairs</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Support higher resale value</h4>
                      <p className="text-gray-600 text-sm">Energy-efficient homes command premium prices</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Set your home apart in the local market</h4>
                      <p className="text-gray-600 text-sm">Differentiate from other properties</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  For homeowners planning to stay long-term or sell in the future, energy efficiency is a smart investment 
                  either way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Supporting Sustainable Living */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Supporting Sustainable Living in Dagsboro
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                More homeowners are looking for ways to reduce energy use without sacrificing comfort. Energy-efficient 
                upgrades support a more sustainable lifestyle by lowering overall energy demand and reducing unnecessary waste.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">These improvements allow homeowners to:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="font-semibold text-gray-900 mb-2">Use energy more responsibly</h4>
                    <p className="text-gray-600 text-sm">Lower your environmental footprint</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                    <h4 className="font-semibold text-gray-900 mb-2">Reduce environmental impact</h4>
                    <p className="text-gray-600 text-sm">Contribute to a healthier planet</p>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <h4 className="font-semibold text-gray-900 mb-2">Maintain comfort without overconsumption</h4>
                    <p className="text-gray-600 text-sm">Live comfortably and sustainably</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  It's a practical step toward sustainability that also benefits your household budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Expertise */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Expertise You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax isn't a national chain—we're a local home improvement company that understands Delaware homes. We know 
                the building styles, weather challenges, and efficiency concerns common in Dagsboro and surrounding areas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                That local knowledge allows us to recommend upgrades that actually work for homes in this region—not generic 
                solutions that miss the mark.
              </p>
            </div>
          </div>
        </section>

        {/* Straightforward Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Straightforward, No-Pressure Process
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Home improvement should feel manageable, not stressful. When you work with HomeMax, you can expect:
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="space-y-4">
                  <div className="flex items-center bg-blue-50 rounded-lg p-5">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      1
                    </div>
                    <span className="text-gray-700 font-medium">Clear explanations without technical overload</span>
                  </div>
                  <div className="flex items-center bg-blue-50 rounded-lg p-5">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      2
                    </div>
                    <span className="text-gray-700 font-medium">Honest recommendations based on your home's needs</span>
                  </div>
                  <div className="flex items-center bg-blue-50 rounded-lg p-5">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      3
                    </div>
                    <span className="text-gray-700 font-medium">A focus on practical, affordable improvements</span>
                  </div>
                  <div className="flex items-center bg-blue-50 rounded-lg p-5">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                      4
                    </div>
                    <span className="text-gray-700 font-medium">Respect for your time, space, and budget</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  Our goal is to help you make informed decisions—not push unnecessary services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Part of Bigger Picture */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Efficiency Works Best as Part of a Bigger Picture
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many homeowners start with energy efficiency and later expand into other home improvements. That's why HomeMax 
                integrates energy efficiency with other services like electrical upgrades, safety improvements, and home maintenance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This approach ensures your home improvements work together, not against each other.
              </p>
            </div>
          </div>
        </section>

        {/* Serving Dagsboro */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Serving Dagsboro, DE and Nearby Communities
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                HomeMax proudly provides energy efficiency services in Dagsboro, DE, along with nearby areas across Sussex County. 
                Our team is committed to helping local homeowners improve comfort, reduce energy costs, and protect their homes 
                for the future.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactUs topic='ENERGY EFFICIENCY SERVICES IN DAGSBORO, DE' />

        {/* Capabilities List Section */}
        <LocationCapabilitiesList 
          location="dagsboro" 
          locationName="Dagsboro"
          currentCapability="energy-efficiency"
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
                  "@id": "https://homemaxrg.com/locations/dagsboro/capabilities/energy-efficiency#service",
                  "name": "Energy Efficiency Services in Dagsboro, DE",
                  "description": "Professional energy efficiency services including home energy upgrades, insulation improvements, air sealing, system efficiency enhancements, and energy-saving solutions for homes in Dagsboro, Delaware.",
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "HomeMax Remodeling Group",
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
                    "Energy Efficiency Services",
                    "Home Energy Upgrades",
                    "Insulation Improvements",
                    "Air Sealing",
                    "Energy-Saving Solutions",
                    "Home Energy Audits"
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
                      "name": "Energy Efficiency",
                      "item": "https://homemaxrg.com/locations/dagsboro/capabilities/energy-efficiency"
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

