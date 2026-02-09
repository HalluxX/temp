import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import type { Metadata } from 'next'
import Link from 'next/link'

import imgGenerators from '@/assets/images/concrete-solution.webp';

export const metadata: Metadata = {
  title: 'Home Generator Installation in Bridgeville, DE | Backup Power Systems',
  description: 'Professional home generator installation in Bridgeville, DE. Expert standby generator installation, backup power systems, automatic transfer switches, and generator maintenance from HomeMax.',
  keywords: [
    'home generator installation Bridgeville DE',
    'residential generators Bridgeville',
    'standby generator installation Bridgeville Delaware',
    'backup power systems Bridgeville',
    'whole-home generator Bridgeville DE',
    'generator installation Sussex County',
    'emergency power Bridgeville Delaware',
    'automatic transfer switch Bridgeville',
  ],
  openGraph: {
    title: 'Home Generator Installation in Bridgeville, DE',
    description: 'Professional home generator installation and backup power systems for Bridgeville homes. Reliable standby generators installed by experts.',
    url: 'https://homemaxrg.com/locations/bridgeville/capabilities/generators',
    siteName: 'HomeMax Premier Era Innovations',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://homemaxrg.com/locations/bridgeville/capabilities/generators',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Bridgeville, Delaware',
  },
}

export default function BridgevilleGeneratorsPage() {
  return (
    <>
      <main className="grow">
        <Hero 
          image={imgGenerators} 
          title='HOME GENERATOR INSTALLATION IN BRIDGEVILLE, DE' 
        />

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Home Generator Installation in Bridgeville, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Living in Bridgeville means enjoying a quieter pace of life—but when the power goes out, everything from 
                heating and cooling to food storage and medical devices can be affected fast. Storms, grid overloads, and 
                unexpected outages are part of life in Delaware, and being prepared makes all the difference.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                HomeMax provides professional home generator installation in Bridgeville, DE, helping homeowners protect 
                their homes with dependable backup power solutions. Whether you want peace of mind during severe weather or 
                need reliable electricity for essential systems, our team delivers generator solutions designed specifically 
                for residential homes in this area.
              </p>
            </div>
          </div>
        </section>

        {/* Why Backup Power Matters */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Backup Power Matters for Bridgeville Homeowners
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Power outages don't just cause inconvenience—they can quickly turn into costly or unsafe situations. In 
                Bridgeville and surrounding Sussex County communities, outages often happen during storms, extreme 
                temperatures, or infrastructure maintenance.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">A home generator helps you:</h3>
                <div className="space-y-4">
                  <div className="flex items-start bg-blue-50 rounded-lg p-4">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Keep heating and air conditioning running</h4>
                      <p className="text-gray-600 text-sm">Maintain comfortable temperatures year-round</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-green-50 rounded-lg p-4">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Prevent food spoilage</h4>
                      <p className="text-gray-600 text-sm">Protect refrigerators and freezers during outages</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-purple-50 rounded-lg p-4">
                    <svg className="w-8 h-8 text-purple-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Power sump pumps and well systems</h4>
                      <p className="text-gray-600 text-sm">Keep critical home systems operational</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-yellow-50 rounded-lg p-4">
                    <svg className="w-8 h-8 text-yellow-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Maintain lighting, security, and communications</h4>
                      <p className="text-gray-600 text-sm">Stay connected and secure during power loss</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-red-50 rounded-lg p-4">
                    <svg className="w-8 h-8 text-red-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Support medical equipment and essential devices</h4>
                      <p className="text-gray-600 text-sm">Protect health and safety-critical systems</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center font-medium">
                  Instead of scrambling during an outage, a properly installed backup generator automatically restores power 
                  and keeps your household running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Residential Generator Solutions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Residential Generator Solutions Built for Real Homes
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At HomeMax, we don't believe in one-size-fits-all systems. Every home has different electrical demands, 
                layouts, and priorities. That's why we design custom residential generator solutions based on how you 
                actually use power.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Our generator services in Bridgeville include:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center bg-white rounded-lg p-3">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span><strong>Whole-home standby generator installation</strong></span>
                  </li>
                  <li className="flex items-center bg-white rounded-lg p-3">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span><strong>Partial-load backup power systems</strong></span>
                  </li>
                  <li className="flex items-center bg-white rounded-lg p-3">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <span><strong>Automatic transfer switch installation</strong></span>
                  </li>
                  <li className="flex items-center bg-white rounded-lg p-3">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span><strong>Generator replacements and upgrades</strong></span>
                  </li>
                  <li className="flex items-center bg-white rounded-lg p-3">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span><strong>Ongoing generator maintenance</strong></span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700 text-center">
                  Whether you want to power your entire home or just critical circuits, we help you choose a system that 
                  fits your needs—not more, not less.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Standby vs Portable */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Standby Generators vs. Portable Options
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Many homeowners ask whether a portable generator is enough. While portable units can help in short 
                emergencies, they require manual setup, fuel handling, and constant monitoring.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">A standby generator, on the other hand:</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-green-50 rounded-lg">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Turns on automatically when power is lost</h4>
                      <p className="text-gray-600 text-sm">No manual intervention required</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-green-50 rounded-lg">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Powers key systems or the entire home</h4>
                      <p className="text-gray-600 text-sm">Flexible power capacity options</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-green-50 rounded-lg">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Operates safely outdoors</h4>
                      <p className="text-gray-600 text-sm">Permanent installation with proper ventilation</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-green-50 rounded-lg">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Runs on natural gas or propane</h4>
                      <p className="text-gray-600 text-sm">No fuel storage or refilling concerns</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-green-50 rounded-lg">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Requires minimal homeowner involvement</h4>
                      <p className="text-gray-600 text-sm">Set it and forget it convenience</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 font-medium text-center">
                  For Bridgeville homeowners who want reliability and convenience, standby generators are often the better 
                  long-term solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Generator Installation Process
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Installing a generator is more than placing equipment outside—it requires electrical expertise, planning, 
                and compliance with local codes. HomeMax manages the entire process from start to finish, making it simple 
                for homeowners.
              </p>
              
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our process includes:</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <span className="text-3xl font-bold text-blue-600 mr-4">1</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Home power assessment and load calculation</h4>
                      <p className="text-gray-600 text-sm">Determine exact power requirements for your home</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <span className="text-3xl font-bold text-blue-600 mr-4">2</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Generator size and system recommendation</h4>
                      <p className="text-gray-600 text-sm">Right-sized solution for your specific needs</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <span className="text-3xl font-bold text-blue-600 mr-4">3</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Electrical and safety planning</h4>
                      <p className="text-gray-600 text-sm">Code-compliant design and placement</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <span className="text-3xl font-bold text-blue-600 mr-4">4</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Professional generator installation</h4>
                      <p className="text-gray-600 text-sm">Expert installation by licensed electricians</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-start">
                    <span className="text-3xl font-bold text-blue-600 mr-4">5</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">System testing and homeowner walkthrough</h4>
                      <p className="text-gray-600 text-sm">Ensure everything works perfectly and you understand operation</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  We handle the details so you don't have to, ensuring your generator works exactly when you need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-12 bg-yellow-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-yellow-900 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h2 className="text-3xl font-bold text-gray-900">
                Thinking About Backup Power for Your Home?
              </h2>
            </div>
            <p className="text-xl text-gray-800 mb-6 max-w-3xl mx-auto">
              If you're looking for home generator installation in Bridgeville, DE, HomeMax is ready to help. Our team will 
              evaluate your home's power needs and recommend a solution that fits your budget and lifestyle.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-gray-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg text-lg"
            >
              Schedule Your Generator Consultation
            </Link>
          </div>
        </section>

        {/* Safe, Code-Compliant */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safe, Code-Compliant Generator Installations
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Safety is a major concern when installing backup power systems. Improper generator installations can lead 
                to electrical hazards, carbon monoxide risks, or damage to your home's electrical system.
              </p>
              
              <div className="bg-red-50 rounded-lg shadow-md p-8 border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">HomeMax ensures:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span><strong>Code-compliant electrical connections</strong> - Meet all local and state requirements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span><strong>Proper generator placement</strong> - Safe distance from windows, doors, and vents</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <span><strong>Safe ventilation and clearances</strong> - Prevent carbon monoxide buildup</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <span><strong>Reliable transfer switch integration</strong> - Seamless automatic power switching</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span><strong>Secure fuel system connections</strong> - Leak-free gas or propane lines</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700 font-medium">
                  Our residential generator installations in Bridgeville meet current safety standards and local requirements, 
                  giving homeowners confidence that their system is both effective and safe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Generator Maintenance */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Generator Maintenance for Long-Term Reliability
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A generator is an investment—and like any system, it needs routine care to perform when it matters most. 
                HomeMax offers generator maintenance services to keep your backup power system ready year-round.
              </p>
              
              <div className="bg-purple-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Maintenance services include:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 flex items-center">
                    <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="text-gray-700 font-medium">Routine inspections</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center">
                    <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">System testing</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center">
                    <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Battery checks</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center">
                    <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Performance verification</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 flex items-center">
                    <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Preventative maintenance</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  Regular maintenance helps extend the life of your generator and ensures it starts instantly during an outage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Delaware Weather Conditions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Backup Power for Delaware Weather Conditions
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bridgeville homeowners experience everything from summer heat waves to winter storms and heavy rain. These 
                conditions can put stress on the power grid, making outages more likely.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our generator systems are selected and installed with local conditions in mind, providing dependable 
                emergency power solutions that support your home regardless of the season.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Serve in Bridgeville and Nearby Areas
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HomeMax proudly serves homeowners throughout Bridgeville, DE, as well as nearby communities in Sussex County. 
                Whether you live in town or in a more rural area, we provide generator solutions tailored to your property 
                and electrical setup.
              </p>
              
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">If you're searching for:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Residential generators in Bridgeville DE</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Backup power systems near Bridgeville</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Whole-home generator installation Sussex County</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700 text-center font-medium">
                  You can count on HomeMax for responsive service and professional results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Homeowners Choose HomeMax */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Why Homeowners Choose HomeMax for Generators
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
                Homeowners choose HomeMax because we focus on real solutions—not sales pressure. Our team takes the time to 
                explain options clearly and recommend what makes sense for your home.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">What sets us apart:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Local Delaware Expertise</h4>
                      <p className="text-gray-600 text-sm">Understanding of local weather and power grid</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Residential-Focused Solutions</h4>
                      <p className="text-gray-600 text-sm">Systems designed for home use, not commercial</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Honest Recommendations</h4>
                      <p className="text-gray-600 text-sm">No pressure, just practical advice</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Professional Workmanship</h4>
                      <p className="text-gray-600 text-sm">Licensed electricians with generator expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Long-Term Support</h4>
                      <p className="text-gray-600 text-sm">Maintenance and service after installation</p>
                    </div>
                  </div>
                </div>
                <p className="mt-8 text-center text-gray-700 font-medium">
                  Our goal is to deliver backup power systems that homeowners trust when the lights go out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reliable Power Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Reliable Power Starts with the Right Partner
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Choosing a generator is about more than equipment—it's about choosing a company that stands behind its work. 
                HomeMax is committed to providing reliable generator installation services in Bridgeville, DE, backed by 
                experience and local knowledge.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We help homeowners protect their comfort, safety, and peace of mind with backup power systems built to last.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactUs topic='HOME GENERATOR INSTALLATION IN BRIDGEVILLE, DE' />

        {/* Capabilities List Section */}
        <LocationCapabilitiesList 
          location="bridgeville" 
          locationName="Bridgeville"
          currentCapability="generators"
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
                  "@id": "https://homemaxrg.com/locations/bridgeville/capabilities/generators#service",
                  "name": "Home Generator Installation in Bridgeville, DE",
                  "description": "Professional home generator installation services including whole-home standby generators, backup power systems, automatic transfer switches, generator maintenance, and emergency power solutions for residential homes in Bridgeville, Delaware.",
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
                    "Home Generator Installation",
                    "Standby Generator Installation",
                    "Backup Power Systems",
                    "Automatic Transfer Switch Installation",
                    "Generator Maintenance",
                    "Emergency Power Solutions",
                    "Whole-Home Generators"
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
                      "name": "Generator Installation",
                      "item": "https://homemaxrg.com/locations/bridgeville/capabilities/generators"
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

