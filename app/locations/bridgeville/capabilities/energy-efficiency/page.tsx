import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import type { Metadata } from 'next'
import Link from 'next/link'

import imgEnergyEfficiency from '@/assets/images/underground-utility.webp';

export const metadata: Metadata = {
  title: 'Energy Efficiency Upgrades in Bridgeville, DE | Home Energy Solutions',
  description: 'Professional energy efficiency upgrades in Bridgeville, DE. Lower utility costs, improve comfort, and reduce energy waste with expert home efficiency solutions from HomeMax.',
  keywords: [
    'energy efficiency upgrades Bridgeville DE',
    'home energy efficiency Bridgeville',
    'energy efficient home improvements Bridgeville',
    'reduce energy bills Bridgeville Delaware',
    'home efficiency upgrades Bridgeville',
    'energy saving improvements Bridgeville DE',
    'residential energy efficiency Bridgeville',
    'lower utility costs Bridgeville Delaware',
  ],
  openGraph: {
    title: 'Energy Efficiency Upgrades in Bridgeville, DE',
    description: 'Professional energy efficiency upgrades for Bridgeville homes. Lower costs, improve comfort, and reduce energy waste.',
    url: 'https://homemaxrg.com/locations/bridgeville/capabilities/energy-efficiency',
    siteName: 'HomeMax Remodeling Group',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://homemaxrg.com/locations/bridgeville/capabilities/energy-efficiency',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Bridgeville, Delaware',
  },
}

export default function BridgevilleEnergyEfficiencyPage() {
  return (
    <>
      <main className="grow">
        <Hero 
          image={imgEnergyEfficiency} 
          title='ENERGY EFFICIENCY UPGRADES IN BRIDGEVILLE, DE' 
        />

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Energy Efficiency Upgrades for Homes in Bridgeville, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Living in Bridgeville means experiencing every season Delaware has to offer—from humid summers to cold 
                winter nights. If your home struggles to stay comfortable or your energy bills keep climbing, it's often 
                a sign that your house isn't operating as efficiently as it should. That's where HomeMax comes in.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We provide energy efficiency upgrades for Bridgeville, DE homeowners who want better comfort, lower utility 
                costs, and a home that works smarter year-round. Our approach focuses on practical improvements that make 
                a real difference—not gimmicks or one-size-fits-all solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether your home is newer or decades old, energy efficiency improvements can dramatically improve how it 
                feels, functions, and performs.
              </p>
            </div>
          </div>
        </section>

        {/* Why Energy Efficiency Matters */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Energy Efficiency Matters for Bridgeville Homes
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Many homes in Bridgeville were built before modern efficiency standards became the norm. Over time, small 
                inefficiencies add up—air leaks, outdated systems, and poorly performing components quietly drain energy 
                and money every month.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Energy efficiency isn't just about saving on electric bills. It's about:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Keeping your home consistently comfortable</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Reducing strain on heating and cooling systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Improving indoor air quality</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Increasing long-term property value</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Lowering your home's environmental footprint</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700">
                  HomeMax helps Bridgeville homeowners identify where energy is being wasted and apply upgrades that deliver 
                  measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Efficiency Solutions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Efficiency Solutions Designed for Real Homes
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At HomeMax, we don't push unnecessary upgrades. We focus on energy-efficient home improvements that make 
                sense for your property, your budget, and your lifestyle.
              </p>
              
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Our energy efficiency services in Bridgeville, DE may include:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Targeted home efficiency upgrades
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Improvements that reduce heating and cooling loss
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Electrical efficiency enhancements
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Power usage optimization
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Comfort-focused performance improvements
                  </li>
                </ul>
                <p className="mt-6 text-gray-700 italic">
                  Each recommendation is based on how your home actually performs—not assumptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reducing Energy Bills */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Reducing Energy Bills Without Sacrificing Comfort
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                One of the biggest misconceptions about energy efficiency is that it requires major sacrifices. In reality, 
                the right upgrades make your home more comfortable, not less.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Bridgeville homeowners often notice:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Fewer hot and cold spots</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">More consistent indoor temperatures</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Reduced reliance on heating and cooling systems</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Lower monthly utility costs</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700">
                  By improving how your home uses energy, you get better performance without constantly adjusting the thermostat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upgrades That Pay Off */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Efficiency Upgrades That Pay Off Over Time
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Energy efficiency improvements are an investment that continues to deliver returns long after the work is done. 
                While the upfront cost varies depending on the scope of work, many upgrades help offset expenses through 
                reduced energy usage month after month.
              </p>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Some benefits include:</h3>
                <div className="space-y-4">
                  <div className="flex items-start bg-white rounded-lg p-4">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Long-term utility cost reduction</h4>
                      <p className="text-gray-600 text-sm">Save money month after month on energy bills</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white rounded-lg p-4">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Less wear and tear on home systems</h4>
                      <p className="text-gray-600 text-sm">Extend the life of your HVAC and electrical systems</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white rounded-lg p-4">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Increased home resale appeal</h4>
                      <p className="text-gray-600 text-sm">More attractive to energy-conscious buyers</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white rounded-lg p-4">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Improved day-to-day living comfort</h4>
                      <p className="text-gray-600 text-sm">Enjoy a more comfortable home environment</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700">
                  Homeowners in Bridgeville who plan to stay in their homes long-term often see energy upgrades as one of 
                  the smartest improvements they can make.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Approach */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Local Approach to Energy Efficiency in Bridgeville, DE
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homes in Bridgeville face different challenges than properties closer to the coast or in more urban areas. 
                Seasonal weather changes, older construction styles, and varying energy demands all play a role in how a 
                home performs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                HomeMax brings local experience and regional knowledge to every energy efficiency project. We understand what 
                works in Bridgeville homes and tailor solutions accordingly. That local insight allows us to recommend upgrades 
                that are realistic, effective, and built for Delaware living.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-12 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Lower Your Energy Bills?
            </h2>
            <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
              If you're noticing high energy bills, uneven temperatures, or rooms that never feel quite right, now is the 
              time to act.
            </p>
            <p className="text-lg text-green-100 mb-8 max-w-3xl mx-auto">
              Schedule an energy efficiency consultation with HomeMax in Bridgeville, DE and find out where your home is 
              losing energy—and how to fix it. Our team will walk you through practical solutions designed to improve 
              comfort and reduce ongoing costs.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-green-600 font-semibold px-8 py-4 rounded-lg hover:bg-green-50 transition-colors shadow-lg text-lg"
            >
              Schedule Your Energy Consultation
            </Link>
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
                Beyond monthly savings, energy efficiency plays an increasing role in home value. Buyers today are more aware 
                of operating costs and long-term performance. Homes with documented efficiency improvements often stand out 
                in the market.
              </p>
              
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Energy-efficient upgrades can:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span>Make your home more attractive to future buyers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Reduce inspection concerns related to energy loss</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Position your property as lower-maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span>Support higher resale confidence</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700">
                  For Bridgeville homeowners thinking ahead, efficiency improvements offer both immediate and future benefits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Supporting Sustainable Home */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Supporting a More Sustainable Home
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Energy efficiency isn't just good for your wallet—it's good for the environment. Reducing energy waste lowers 
                overall demand and helps limit unnecessary resource use.
              </p>
              
              <div className="bg-green-50 rounded-lg shadow-md p-8 border-l-4 border-green-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  By improving how your home consumes power, you contribute to:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Reduced energy consumption</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <span>Lower emissions tied to electricity production</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span>More responsible household energy use</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700">
                  HomeMax helps Bridgeville residents take meaningful steps toward sustainability without compromising comfort 
                  or convenience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Combining with Other Improvements */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Combining Energy Efficiency With Other Home Improvements
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Energy efficiency works best when it's part of a larger home improvement strategy. Many Bridgeville homeowners 
                choose to pair efficiency upgrades with interior remodeling, electrical improvements, or exterior renovations.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">When projects are coordinated properly, you benefit from:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Better overall system performance</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Fewer future disruptions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Smarter long-term planning</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Improved return on investment</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-600 text-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Integrated Solutions</h3>
                  <p className="mb-4">
                    HomeMax offers integrated services so efficiency improvements align seamlessly with other home upgrades.
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Homeowners Trust HomeMax */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Bridgeville Homeowners Trust HomeMax
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HomeMax is known throughout Delaware for dependable service, honest recommendations, and quality workmanship. 
                We don't believe in pushing unnecessary upgrades or confusing homeowners with technical jargon.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Bridgeville homeowners choose HomeMax because we offer:
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Clear Explanations</h4>
                      <p className="text-gray-600 text-sm">Transparent guidance you can understand</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Local Experience</h4>
                      <p className="text-gray-600 text-sm">Deep knowledge of Delaware homes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Results-Driven Solutions</h4>
                      <p className="text-gray-600 text-sm">Practical improvements that work</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Respectful Service</h4>
                      <p className="text-gray-600 text-sm">Respect for your time, home, and budget</p>
                    </div>
                  </div>
                </div>
                <p className="mt-8 text-center text-gray-700 font-medium">
                  Our goal is to help you make informed decisions that improve your home for the long term.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Not One-Size-Fits-All */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Efficiency Is Not One-Size-Fits-All
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Every home in Bridgeville is different. Age, layout, usage patterns, and existing systems all affect how 
                energy is consumed. That's why HomeMax avoids generic solutions.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">We focus on:</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <span className="text-3xl font-bold text-blue-600 mr-4">1</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Understanding how your household uses energy</h4>
                      <p className="text-gray-600 text-sm">Every family has different needs and patterns</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <span className="text-3xl font-bold text-blue-600 mr-4">2</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Identifying realistic improvement opportunities</h4>
                      <p className="text-gray-600 text-sm">Solutions that fit your budget and goals</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <span className="text-3xl font-bold text-blue-600 mr-4">3</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Prioritizing upgrades with the most impact</h4>
                      <p className="text-gray-600 text-sm">Maximum results for your investment</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <span className="text-3xl font-bold text-blue-600 mr-4">4</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Delivering improvements that fit your lifestyle</h4>
                      <p className="text-gray-600 text-sm">Solutions designed around how you live</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  This personalized approach leads to better outcomes and lasting satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactUs topic='ENERGY EFFICIENCY UPGRADES IN BRIDGEVILLE, DE' />

        {/* Capabilities List Section */}
        <LocationCapabilitiesList 
          location="bridgeville" 
          locationName="Bridgeville"
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
                  "@id": "https://homemaxrg.com/locations/bridgeville/capabilities/energy-efficiency#service",
                  "name": "Energy Efficiency Upgrades in Bridgeville, DE",
                  "description": "Professional energy efficiency upgrades including home efficiency improvements, utility cost reduction, electrical efficiency enhancements, and comfort optimization for residential homes in Bridgeville, Delaware.",
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
                    "Energy Efficiency Upgrades",
                    "Home Energy Efficiency",
                    "Energy Efficient Home Improvements",
                    "Utility Cost Reduction",
                    "Home Efficiency Upgrades",
                    "Electrical Efficiency Enhancements"
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
                      "name": "Energy Efficiency Services",
                      "item": "https://homemaxrg.com/locations/bridgeville/capabilities/energy-efficiency"
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

