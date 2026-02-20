import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import type { Metadata } from 'next'
import Link from 'next/link'

import imgSafety from '@/assets/images/speciality.webp';

export const metadata: Metadata = {
  title: 'Home Safety Improvement Services in Bridgeville, DE | Residential Safety Upgrades',
  description: 'Professional home safety improvement services in Bridgeville, DE. Electrical safety upgrades, hazard prevention, structural safety improvements, and residential safety inspections from HomeMax.',
  keywords: [
    'home safety services Bridgeville DE',
    'residential safety upgrades Bridgeville',
    'electrical safety improvements Bridgeville Delaware',
    'home safety inspections Bridgeville',
    'safety improvement services Bridgeville DE',
    'household safety upgrades Bridgeville',
    'home safety company Bridgeville Delaware',
    'residential safety solutions Bridgeville',
  ],
  openGraph: {
    title: 'Home Safety Improvement Services in Bridgeville, DE',
    description: 'Professional home safety improvement services for Bridgeville homes. Electrical safety upgrades, hazard prevention, structural improvements, and safety inspections.',
    url: 'https://homemaxrg.com/locations/bridgeville/capabilities/safety',
    siteName: 'HomeMax Remodeling Group',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://homemaxrg.com/locations/bridgeville/capabilities/safety',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Bridgeville, Delaware',
  },
}

export default function BridgevilleSafetyPage() {
  return (
    <>
      <main className="grow">
        <Hero 
          image={imgSafety} 
          title='HOME SAFETY IMPROVEMENT SERVICES IN BRIDGEVILLE, DE' 
        />

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Home Safety Improvement Services in Bridgeville, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Keeping your home safe isn't just about alarms or locks—it's about making sure every system in your house 
                works the way it should, day in and day out. At HomeMax, we provide professional home safety improvement 
                services in Bridgeville, DE, helping homeowners reduce risks, prevent accidents, and protect their families 
                and property.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From aging electrical systems to overlooked structural concerns, many safety issues develop quietly over time. 
                Our role is to identify those risks early and correct them with smart, long-lasting solutions. Whether you live 
                in an older home near downtown Bridgeville or a newer property outside town, our team delivers safety upgrades 
                designed for real homes and real people.
              </p>
            </div>
          </div>
        </section>

        {/* Why Safety Matters */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Home Safety Improvements Matter More Than Ever
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Many homes in Bridgeville were built decades ago, and while they have character, they may not meet today's 
                safety standards. Electrical loads have increased, appliances draw more power, and building codes have evolved. 
                What worked years ago may now be a hidden hazard.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Home safety improvements help:</h3>
                <div className="space-y-4">
                  <div className="flex items-start bg-red-50 rounded-lg p-5 border-l-4 border-red-600">
                    <svg className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Reduce fire and electrical risks</h4>
                      <p className="text-gray-600">Prevent electrical hazards that could lead to fires or power failures</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-orange-50 rounded-lg p-5 border-l-4 border-orange-600">
                    <svg className="w-8 h-8 text-orange-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Prevent trips, falls, and accidents</h4>
                      <p className="text-gray-600">Address hazards that could cause injuries, especially for children and seniors</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-yellow-50 rounded-lg p-5 border-l-4 border-yellow-600">
                    <svg className="w-8 h-8 text-yellow-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Protect your home from structural issues</h4>
                      <p className="text-gray-600">Identify and fix structural concerns before they become serious problems</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-green-50 rounded-lg p-5 border-l-4 border-green-600">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Improve overall peace of mind</h4>
                      <p className="text-gray-600">Live comfortably knowing your home is safe for your family</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 font-medium text-center">
                  Ignoring small safety issues can lead to expensive repairs—or worse—down the line. Addressing them early 
                  is one of the smartest investments a homeowner can make.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Safety Solutions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Safety Solutions for Bridgeville Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At HomeMax, we take a whole-home approach to residential safety. Instead of focusing on just one issue, we 
                look at how different systems interact and where risks are most likely to occur.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our home safety services in Bridgeville, DE are designed to be practical, effective, and tailored to the 
                specific layout and condition of your home. We don't believe in one-size-fits-all solutions—every home has 
                its own story, and every safety plan should reflect that.
              </p>
            </div>
          </div>
        </section>

        {/* Electrical Safety Upgrades */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Safety Upgrades for Modern Living
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Electrical issues are one of the most common—and dangerous—safety concerns in residential homes. Outdated 
                wiring, overloaded panels, or improper connections can increase the risk of fire and power failures.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our electrical safety services include:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-blue-50 rounded-lg p-4">
                    <svg className="w-7 h-7 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700 font-medium">Electrical system inspections</span>
                  </div>
                  <div className="flex items-center bg-blue-50 rounded-lg p-4">
                    <svg className="w-7 h-7 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Circuit and load evaluations</span>
                  </div>
                  <div className="flex items-center bg-blue-50 rounded-lg p-4">
                    <svg className="w-7 h-7 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Electrical safety upgrades</span>
                  </div>
                  <div className="flex items-center bg-blue-50 rounded-lg p-4">
                    <svg className="w-7 h-7 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Power capacity improvements</span>
                  </div>
                </div>
                <div className="mt-6 p-5 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-gray-700">
                    <strong>Warning Signs:</strong> If your lights flicker, breakers trip frequently, or outlets feel warm, 
                    those are signs your home may need attention. Homeowners in Bridgeville trust HomeMax for residential 
                    electrical safety upgrades that bring peace of mind without unnecessary disruption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Preventing Household Hazards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Preventing Household Hazards Before They Become Problems
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Many home hazards aren't obvious until an accident happens. Loose railings, uneven flooring, poor lighting, 
                or aging fixtures can all create safety risks—especially for children and older adults.
              </p>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  We help Bridgeville homeowners address:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start bg-white rounded-lg p-5 shadow-sm">
                    <svg className="w-8 h-8 text-orange-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Trip and fall hazards</h4>
                      <p className="text-gray-600 text-sm">Uneven surfaces, loose flooring, and obstacles</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white rounded-lg p-5 shadow-sm">
                    <svg className="w-8 h-8 text-orange-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Unsafe stairways and walkways</h4>
                      <p className="text-gray-600 text-sm">Loose railings, poor traction, inadequate support</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white rounded-lg p-5 shadow-sm">
                    <svg className="w-8 h-8 text-orange-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Poorly lit interior and exterior areas</h4>
                      <p className="text-gray-600 text-sm">Dark hallways, entryways, and outdoor spaces</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white rounded-lg p-5 shadow-sm">
                    <svg className="w-8 h-8 text-orange-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Structural wear that affects safety</h4>
                      <p className="text-gray-600 text-sm">Aging components that create risk</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center font-medium">
                  Our goal is simple: make your home safer to move through, day and night, in every season.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Structural Safety */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Structural Safety and Stability Improvements
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A home's structure plays a major role in overall safety. Over time, small structural issues can affect doors, 
                walls, flooring, and even electrical or plumbing systems.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  HomeMax provides safety-focused improvements that help maintain:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center bg-green-50 rounded-lg p-5 border-l-4 border-green-600">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-gray-700 font-medium text-lg">Structural integrity</span>
                  </div>
                  <div className="flex items-center bg-green-50 rounded-lg p-5 border-l-4 border-green-600">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700 font-medium text-lg">Secure load-bearing elements</span>
                  </div>
                  <div className="flex items-center bg-green-50 rounded-lg p-5 border-l-4 border-green-600">
                    <svg className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 font-medium text-lg">Long-term durability</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700">
                  For homeowners seeking structural safety improvements in Bridgeville, DE, our team focuses on preventative 
                  solutions that protect both your home and your investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-12 bg-red-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Take Action Before Safety Becomes an Emergency
            </h2>
            <p className="text-xl text-red-100 mb-6 max-w-3xl mx-auto">
              If you're unsure whether your home has hidden safety risks, now is the time to find out.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-red-600 font-semibold px-8 py-4 rounded-lg hover:bg-red-50 transition-colors shadow-lg text-lg"
            >
              Schedule a Home Safety Evaluation
            </Link>
            <p className="text-red-100 mt-4">
              Talk with the HomeMax team and get clear, professional guidance on how to improve your home's safety—before 
              small issues turn into costly emergencies.
            </p>
          </div>
        </section>

        {/* Safety Inspections */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Home Safety Inspections with Real Answers
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A proper safety inspection should give you clarity, not confusion. At HomeMax, we take the time to explain 
                what we find, why it matters, and what your options are.
              </p>
              
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our home safety inspections focus on:</h3>
                <div className="space-y-4">
                  <div className="flex items-start bg-white rounded-lg p-5 shadow-sm">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Identifying immediate risks</h4>
                      <p className="text-gray-600 text-sm">Finding hazards that need prompt attention</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white rounded-lg p-5 shadow-sm">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Highlighting preventative improvements</h4>
                      <p className="text-gray-600 text-sm">Recommending upgrades that prevent future issues</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-white rounded-lg p-5 shadow-sm">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Prioritizing safety upgrades based on your home</h4>
                      <p className="text-gray-600 text-sm">Customized recommendations for your specific situation</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  Bridgeville homeowners appreciate our honest, no-pressure approach. We believe informed homeowners make 
                  better decisions—and safer homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety and Comfort */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safety Improvements That Support Daily Comfort
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Safety and comfort often go hand in hand. Improving lighting, upgrading electrical systems, and correcting 
                layout issues doesn't just make a home safer—it makes it more enjoyable to live in.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our safety-focused improvements can help:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <svg className="w-12 h-12 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <h4 className="font-semibold text-gray-900 mb-2">Improve visibility and accessibility</h4>
                    <p className="text-gray-600 text-sm">Better lighting and layout for easier navigation</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <svg className="w-12 h-12 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h4 className="font-semibold text-gray-900 mb-2">Support reliable power use</h4>
                    <p className="text-gray-600 text-sm">Upgraded systems that handle modern demands</p>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <svg className="w-12 h-12 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <h4 className="font-semibold text-gray-900 mb-2">Create safer living spaces for all ages</h4>
                    <p className="text-gray-600 text-sm">Especially for children and seniors</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center">
                  These upgrades are especially valuable for families planning to stay in their home long-term or homeowners 
                  preparing for aging-in-place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose HomeMax */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Bridgeville Homeowners Choose HomeMax
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Homeowners in Bridgeville choose HomeMax because we understand local homes, local conditions, and local 
                expectations. We don't rush through projects or recommend unnecessary work—we focus on what truly improves safety.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  When you work with HomeMax, you get:
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Local home safety expertise</h4>
                      <p className="text-gray-600 text-sm">Understanding of Bridgeville homes and Delaware conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Skilled residential professionals</h4>
                      <p className="text-gray-600 text-sm">Experienced team with safety-focused training</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Clear communication and honest recommendations</h4>
                      <p className="text-gray-600 text-sm">No pressure, just practical guidance</p>
                    </div>
                  </div>
                  <div className="flex items-start p-5 bg-white rounded-lg shadow-sm">
                    <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Safety solutions built to last</h4>
                      <p className="text-gray-600 text-sm">Long-term improvements that protect your home</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 text-center font-medium">
                  Our reputation is built on trust, quality workmanship, and a genuine commitment to homeowner safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety as Part of Larger Plan */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safety Upgrades as Part of a Larger Home Plan
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Many Bridgeville homeowners include safety improvements as part of a broader home improvement plan. Whether 
                you're remodeling, upgrading systems, or maintaining your property, safety should always be part of the conversation.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  HomeMax integrates safety considerations into:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center bg-indigo-50 rounded-lg p-5">
                    <svg className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-gray-700 font-medium">Interior remodeling projects</span>
                  </div>
                  <div className="flex items-center bg-indigo-50 rounded-lg p-5">
                    <svg className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-gray-700 font-medium">Electrical and power upgrades</span>
                  </div>
                  <div className="flex items-center bg-indigo-50 rounded-lg p-5">
                    <svg className="w-8 h-8 text-indigo-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <span className="text-gray-700 font-medium">Ongoing home maintenance plans</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-700">
                  This approach ensures your home remains safe, functional, and compliant as it evolves over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Serving Bridgeville */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Serving Bridgeville, DE with Reliable Home Safety Services
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We proudly provide home safety improvement services in Bridgeville, Delaware, supporting homeowners with 
                dependable solutions and responsive local service. Our team understands the needs of Bridgeville properties 
                and delivers improvements designed for long-term protection.
              </p>
              <p className="text-lg text-gray-700 font-medium">
                If you're looking for residential safety upgrades near Bridgeville DE, HomeMax is ready to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactUs topic='HOME SAFETY IMPROVEMENT SERVICES IN BRIDGEVILLE, DE' />

        {/* Capabilities List Section */}
        <LocationCapabilitiesList 
          location="bridgeville" 
          locationName="Bridgeville"
          currentCapability="safety"
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
                  "@id": "https://homemaxrg.com/locations/bridgeville/capabilities/safety#service",
                  "name": "Home Safety Improvement Services in Bridgeville, DE",
                  "description": "Professional home safety improvement services including electrical safety upgrades, hazard prevention, structural safety improvements, home safety inspections, and residential safety solutions for homes in Bridgeville, Delaware.",
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
                    "Home Safety Improvement Services",
                    "Electrical Safety Upgrades",
                    "Hazard Prevention",
                    "Structural Safety Improvements",
                    "Home Safety Inspections",
                    "Residential Safety Solutions"
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
                      "name": "Safety",
                      "item": "https://homemaxrg.com/locations/bridgeville/capabilities/safety"
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

