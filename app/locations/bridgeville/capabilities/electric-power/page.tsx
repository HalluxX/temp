import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import type { Metadata } from 'next'
import Link from 'next/link'

import imgElectricPower from '@/assets/images/renewables.webp';

export const metadata: Metadata = {
  title: 'Electric Power Services in Bridgeville, DE | Electrical Upgrades & Panel Services',
  description: 'Professional electric power services in Bridgeville, DE. Expert electrical panel upgrades, whole-home electrical systems, power capacity improvements, and safety upgrades for residential homes.',
  keywords: [
    'electric power services Bridgeville DE',
    'electrical panel upgrades Bridgeville',
    'residential electrical services Bridgeville DE',
    'electrical upgrades Bridgeville Delaware',
    'electrical safety improvements Bridgeville',
    'power capacity improvements Bridgeville',
    'whole-home electrical upgrades Bridgeville',
    'local electrical service provider Bridgeville DE',
  ],
  openGraph: {
    title: 'Electric Power Services in Bridgeville, DE',
    description: 'Professional electric power services, electrical panel upgrades, and safety improvements for Bridgeville, Delaware homes.',
    url: 'https://homemaxrg.com/locations/bridgeville/capabilities/electric-power',
    siteName: 'HomeMax Remodeling Group',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://homemaxrg.com/locations/bridgeville/capabilities/electric-power',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Bridgeville, Delaware',
  },
}

export default function BridgevilleElectricPowerPage() {
  return (
    <>
      <main className="grow">
        <Hero 
          image={imgElectricPower} 
          title='ELECTRIC POWER SERVICES IN BRIDGEVILLE, DE' 
        />

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Electric Power Services in Bridgeville, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Reliable electric power is something most homeowners don't think about—until it becomes a problem. 
                Flickering lights, overloaded panels, tripped breakers, or outdated wiring can quickly turn into safety 
                risks and daily frustrations. At HomeMax, we provide professional electric power services in Bridgeville, DE 
                designed to keep your home safe, efficient, and ready for modern living.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you live in an older home that needs electrical upgrades or a newer property that requires added 
                power capacity, our team delivers dependable residential electrical solutions built around real homeowner 
                needs. We don't just fix problems—we improve the way your home functions.
              </p>
            </div>
          </div>
        </section>

        {/* Local Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Residential Electrical Services You Can Depend On
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bridgeville homeowners deserve electrical systems that work reliably day after day. HomeMax offers 
                residential electrical services that focus on safety, performance, and long-term value. Our approach 
                is straightforward: assess the condition of your electrical system, explain your options clearly, and 
                complete the work the right way.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We understand the electrical demands of today's homes—from high-powered appliances to smart home 
                technology—and we help homeowners stay ahead of those needs. As a local electrical service provider in 
                Bridgeville, DE, we bring experience, precision, and accountability to every project.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our electrical services are tailored for:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Single-family homes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Rental properties</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Older homes with outdated wiring</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Homes undergoing remodeling or renovation</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700 font-medium">
                  No shortcuts. No guesswork. Just solid electrical work you can trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Panel Upgrades Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Panel Upgrades for Modern Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                One of the most common electrical issues we see in Bridgeville homes is an outdated or overloaded 
                electrical panel. Older panels were never designed to handle today's power usage, and that can lead to 
                frequent breaker trips, limited capacity, and potential fire hazards.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HomeMax provides electrical panel upgrades in Bridgeville, DE to safely increase your home's power capacity. 
                A modern panel helps support:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    <svg className="w-8 h-8 text-blue-600 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    New Appliances & HVAC
                  </h3>
                  <p className="text-gray-700">Support for modern appliances and HVAC systems that demand more power</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    <svg className="w-8 h-8 text-blue-600 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Remodeling Projects
                  </h3>
                  <p className="text-gray-700">Adequate capacity for interior remodeling and renovation projects</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    <svg className="w-8 h-8 text-blue-600 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    EV Chargers
                  </h3>
                  <p className="text-gray-700">Power for electric vehicle chargers and charging infrastructure</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    <svg className="w-8 h-8 text-blue-600 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Home Office & Entertainment
                  </h3>
                  <p className="text-gray-700">Support for home office equipment and entertainment systems</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Upgrading your panel isn't just about convenience—it's about protecting your home and preparing it for 
                future needs.
              </p>
            </div>
          </div>
        </section>

        {/* Whole-Home Upgrades Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Whole-Home Electrical Upgrades That Improve Performance
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Electrical systems don't fail overnight. They wear down over time. Loose connections, aging wiring, and 
                outdated components can slowly reduce performance and increase risk. That's why HomeMax offers whole-home 
                electrical upgrades designed to bring everything up to current safety standards.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our residential electrical upgrades help:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Improve overall system reliability</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Reduce electrical hazards</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Support increased power demand</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Enhance home resale value</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700">
                  For homeowners planning renovations or additions, electrical upgrades are often a critical first step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Thinking About Upgrading Your Home's Electrical System?
            </h2>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              If your home struggles to keep up with modern power demands, now is the right time to act. HomeMax provides 
              professional evaluations and clear recommendations so you can make informed decisions without pressure.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg text-lg"
            >
              Schedule Your Electric Power Consultation
            </Link>
          </div>
        </section>

        {/* Safety Improvements Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Safety Improvements for Bridgeville Homes
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Electrical safety should never be an afterthought. Faulty wiring, overloaded circuits, and outdated components 
                can create serious risks if left unaddressed. HomeMax specializes in electrical safety upgrades that help protect 
                your family and property.
              </p>
              
              <div className="bg-red-50 rounded-lg shadow-md p-8 border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our safety-focused services include:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Electrical inspections</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Circuit and breaker improvements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Wiring corrections</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>Grounding and bonding upgrades</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700">
                  These improvements are especially important in older Bridgeville homes, where original electrical systems 
                  may no longer meet modern safety expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Power Capacity for Remodeling */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Power Capacity Improvements for Remodeling Projects
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If you're planning an interior remodel, electrical capacity often becomes an issue faster than expected. 
                Kitchens, bathrooms, and living spaces now rely on multiple high-draw appliances, lighting systems, and 
                smart features.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HomeMax works closely with homeowners to provide power capacity improvements that support remodeling projects 
                without future limitations. By addressing electrical needs early, we help prevent delays, rework, and added 
                costs later.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">This service is ideal for:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-gray-700 font-medium">Kitchen and bathroom renovations</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-gray-700 font-medium">Home additions</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                    <span className="text-gray-700 font-medium">Basement and garage conversions</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Whole-home remodeling projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Efficiency Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Supporting Energy-Efficient Electrical Systems
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Modern electrical improvements go hand in hand with energy efficiency. While power capacity matters, efficiency 
                helps keep utility costs under control. HomeMax helps Bridgeville homeowners balance performance with smart 
                electrical solutions that support energy-efficient living.
              </p>
              
              <div className="bg-green-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our electrical work often complements:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>Energy-efficient lighting upgrades</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>Smart home systems</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>Improved electrical load distribution</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700">
                  The result is a home that uses power more effectively while staying reliable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Experience Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Experience Matters in Electrical Work
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Working with a local contractor makes a difference—especially for something as important as your home's 
                electrical system. HomeMax understands Bridgeville homes, local construction styles, and the expectations 
                of Delaware homeowners.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Because we're local, we offer:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-start mb-3">
                      <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Responsive service</h4>
                        <p className="text-gray-600 text-sm">Quick response times when you need us</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start mb-3">
                      <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Clear communication</h4>
                        <p className="text-gray-600 text-sm">Direct contact with local professionals</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start mb-3">
                      <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Local standards</h4>
                        <p className="text-gray-600 text-sm">Work that aligns with Delaware requirements</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start mb-3">
                      <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-900">Long-term support</h4>
                        <p className="text-gray-600 text-sm">Ongoing service after job completion</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 font-medium">
                  Our goal is to be the trusted residential electrical service provider in Bridgeville, DE that homeowners 
                  call again—not just once.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose HomeMax */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Why Bridgeville Homeowners Choose HomeMax
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
                Homeowners choose HomeMax because we take electrical work seriously—and treat customers with honesty and 
                respect. We don't oversell. We don't rush. We deliver electrical solutions that make sense for your home.
              </p>
              
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  When you work with HomeMax, you get:
                </h3>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Skilled residential electrical professionals</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Clear recommendations and pricing</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Quality workmanship</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Long-term reliability</span>
                  </li>
                </ul>
                <p className="mt-6 text-center text-gray-700 font-medium">
                  Our reputation is built on trust, not volume.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactUs topic='ELECTRIC POWER SERVICES IN BRIDGEVILLE, DE' />

        {/* Capabilities List Section */}
        <LocationCapabilitiesList 
          location="bridgeville" 
          locationName="Bridgeville"
          currentCapability="electric-power"
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
                  "@id": "https://homemaxrg.com/locations/bridgeville/capabilities/electric-power#service",
                  "name": "Electric Power Services in Bridgeville, DE",
                  "description": "Professional electric power services including electrical panel upgrades, whole-home electrical systems, power capacity improvements, and safety upgrades for residential homes in Bridgeville, Delaware.",
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
                    "Electric Power Services",
                    "Electrical Panel Upgrades",
                    "Whole-Home Electrical Upgrades",
                    "Electrical Safety Improvements",
                    "Power Capacity Improvements",
                    "Residential Electrical Services"
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
                      "name": "Electric Power Services",
                      "item": "https://homemaxrg.com/locations/bridgeville/capabilities/electric-power"
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

