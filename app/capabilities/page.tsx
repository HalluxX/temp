import Hero from '@/components/ui/capabilities/hero'
import List from '@/components/ui/capabilities/list'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home Improvement & Remodeling Services in Delaware | HomeMax',
  description: 'Full-service home improvement and renovation company in Delaware. Professional interior remodeling, exterior upgrades, energy efficiency, electrical services, restoration, and maintenance in Millsboro, Dover, Lewes, Bridgeville, and surrounding areas.',
  keywords: [
    'home improvement services Delaware',
    'home remodeling Delaware',
    'residential renovation Delaware',
    'interior remodeling DE',
    'exterior remodeling DE',
    'energy efficiency upgrades Delaware',
    'home restoration services Delaware',
    'home improvement contractor Delaware',
  ],
  openGraph: {
    title: 'Home Improvement & Remodeling Services in Delaware',
    description: 'Full-service home improvement and renovation company serving Delaware homeowners with professional remodeling, electrical, energy efficiency, and restoration services.',
    url: 'https://homemaxrg.com/capabilities',
    siteName: 'HomeMax Premier Era Innovations',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://homemaxrg.com/capabilities',
  },
}

export default function CapabilitiesLayout() {  

  return (
    <>
      <main className="grow">
        <Hero />
        
        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
                Home Improvement & Remodeling Services in Delaware
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When homeowners across Delaware need reliable, high-quality home improvement services, they turn to HomeMax. 
                We are a full-service home improvement and renovation company providing professional solutions for interior remodeling, 
                exterior upgrades, energy efficiency improvements, electrical power services, safety enhancements, restoration work, 
                and ongoing home maintenance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From Millsboro and Lewes to Dover, Smyrna, Milford, Laurel, Dagsboro, and Bridgeville, HomeMax proudly serves local 
                homeowners who want dependable workmanship, clear communication, and long-term value. Whether you are planning a 
                complete home renovation or need targeted residential upgrades, our experienced team is ready to help you improve, 
                protect, and power your home.
              </p>
            </div>
          </div>
        </section>

        {/* Full-Service Company Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Full-Service Home Improvement Company You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax was built to simplify home improvement by offering comprehensive residential renovation services under one roof. 
                Instead of coordinating multiple contractors, homeowners work with a single trusted partner who understands the full 
                scope of property improvement.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our services are designed to support every stage of home ownership—from upgrades that improve comfort and energy 
                efficiency to repairs that protect your investment. As a local home improvement contractor in Delaware, we focus on 
                solutions that meet regional building standards, weather conditions, and homeowner needs.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">We proudly provide:</h3>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Residential remodeling and renovation services</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Interior and exterior home improvements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Electrical and power upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Energy-saving home solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Safety and compliance improvements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Home restoration services</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Backup power and generator systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Preventative maintenance subscriptions</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-700 italic">
                  Every project begins with understanding your goals and delivering improvements that enhance both function and value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities List */}
        <List />

        {/* Service Details Sections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Interior Remodeling */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Interior Remodeling Designed for Comfort and Function
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Interior spaces should support the way you live. HomeMax provides interior remodeling services that modernize your 
                  home while improving daily comfort and usability. From layout improvements to full interior renovations, our team 
                  delivers results that reflect your vision.
                </p>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our interior remodeling solutions include:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Kitchen and bathroom remodeling</li>
                    <li>• Living space upgrades</li>
                    <li>• Flooring and wall improvements</li>
                    <li>• Lighting and electrical enhancements</li>
                    <li>• Functional layout changes</li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    Homeowners seeking interior remodeling in Millsboro DE, Lewes DE, or Dover DE rely on HomeMax for quality 
                    workmanship and attention to detail. We help transform outdated interiors into comfortable, efficient living 
                    spaces that add long-term value.
                  </p>
                </div>
              </div>

              {/* Exterior Remodeling */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Exterior Remodeling That Enhances Curb Appeal
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Your home's exterior plays a critical role in protection, efficiency, and curb appeal. HomeMax offers exterior home 
                  remodeling services designed to improve durability while enhancing your property's appearance.
                </p>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our exterior home improvement solutions include:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Exterior upgrades and renovations</li>
                    <li>• Weather-resistant improvements</li>
                    <li>• Curb appeal enhancements</li>
                    <li>• Structural and surface improvements</li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    Homeowners across Milford, Bridgeville, and Smyrna trust HomeMax for exterior renovations that withstand 
                    Delaware's climate while increasing resale value and visual appeal.
                  </p>
                </div>
              </div>

              {/* Energy Efficiency */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Energy Efficiency Upgrades That Reduce Utility Costs
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Energy efficiency is one of the most valuable investments a homeowner can make. HomeMax provides home energy 
                  efficiency upgrades that reduce energy consumption, improve comfort, and lower monthly utility bills.
                </p>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our energy-saving home improvements include:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Energy-efficient home upgrades</li>
                    <li>• Utility cost reduction solutions</li>
                    <li>• Sustainable home improvements</li>
                    <li>• Efficient home system enhancements</li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    If you're searching for energy efficiency upgrades in Delaware, our team delivers practical solutions that make 
                    a noticeable difference year-round.
                  </p>
                </div>
              </div>

              {/* Electrical Power & Safety */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Electrical Power & Home Safety Improvements
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Reliable power and household safety go hand in hand. HomeMax offers residential electrical services and safety 
                  upgrades that help protect your family and property.
                </p>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our services include:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Home electrical upgrades</li>
                    <li>• Electrical system improvements</li>
                    <li>• Power capacity enhancements</li>
                    <li>• Residential safety upgrades</li>
                    <li>• Home safety inspections</li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    Homeowners in Dagsboro, Laurel, and Dover depend on HomeMax for electrical safety upgrades that meet modern 
                    standards and support today's power demands.
                  </p>
                </div>
              </div>

              {/* Home Restoration */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Home Restoration Services When You Need Them Most
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  When unexpected damage impacts your home, fast and reliable restoration is essential. HomeMax provides home 
                  restoration services in Delaware to help homeowners recover and rebuild with confidence.
                </p>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our restoration solutions include:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Residential restoration services</li>
                    <li>• Property repair and recovery</li>
                    <li>• Structural restoration work</li>
                    <li>• Home repair solutions</li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    We support homeowners across Millsboro, Milford, and Lewes with restoration services designed to return 
                    properties to safe, functional condition as quickly as possible.
                  </p>
                </div>
              </div>

              {/* Backup Power & Generators */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Backup Power & Generator Solutions
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Power outages can disrupt daily life and put your home at risk. HomeMax offers home generator installation 
                  services that provide reliable backup power during emergencies.
                </p>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our generator services include:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Residential generator installation</li>
                    <li>• Backup power systems</li>
                    <li>• Standby generator solutions</li>
                    <li>• Generator maintenance services</li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    Homeowners searching for home generators in Delaware trust HomeMax for dependable emergency power solutions 
                    tailored to residential needs.
                  </p>
                </div>
              </div>

              {/* Preventative Maintenance */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Preventative Home Maintenance Subscriptions
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Routine maintenance helps prevent costly repairs and protects your investment. HomeMax offers home maintenance 
                  plans that provide scheduled care and preventative services for your property.
                </p>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our maintenance subscriptions include:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Ongoing home maintenance services</li>
                    <li>• Preventative maintenance plans</li>
                    <li>• Routine property care</li>
                    <li>• Scheduled home upkeep</li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    Homeowners in Bridgeville, Smyrna, and Dover choose our residential maintenance subscriptions for peace of 
                    mind and long-term home protection.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Why Choose HomeMax */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Why Delaware Homeowners Choose HomeMax
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
                Homeowners across Delaware choose HomeMax because we combine professional expertise, local knowledge, and 
                dependable service. Every project is completed with attention to quality, safety, and long-term performance.
              </p>
              
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  When you work with HomeMax, you benefit from:
                </h3>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Local home improvement expertise</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Skilled residential contractors</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Transparent communication</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Reliable project timelines</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Quality materials and workmanship</span>
                  </li>
                </ul>
                <p className="mt-6 text-center text-gray-700 font-medium">
                  Our goal is to be the trusted home improvement company in Delaware that homeowners return to for every 
                  stage of property improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Schedule Your Home Improvement Consultation Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              If you're ready to improve, renovate, or protect your home, HomeMax is here to help. We proudly serve homeowners 
              throughout Millsboro, Lewes, Dover, Smyrna, Dagsboro, Laurel, Milford, and Bridgeville, DE with dependable home 
              improvement solutions.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors shadow-lg text-lg"
            >
              Get Your Free Consultation
            </Link>
          </div>
        </section>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "HomeMax Premier Era Innovations",
              "description": "Full-service home improvement and renovation company serving Delaware with professional remodeling, electrical, energy efficiency, and restoration services.",
              "url": "https://homemaxrg.com/capabilities",
              "areaServed": [
                { "@type": "City", "name": "Millsboro, DE" },
                { "@type": "City", "name": "Dover, DE" },
                { "@type": "City", "name": "Lewes, DE" },
                { "@type": "City", "name": "Bridgeville, DE" },
                { "@type": "City", "name": "Smyrna, DE" },
                { "@type": "City", "name": "Milford, DE" },
                { "@type": "City", "name": "Laurel, DE" },
                { "@type": "City", "name": "Dagsboro, DE" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Home Improvement Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Remodeling" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Remodeling" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Energy Efficiency Upgrades" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical Services" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Restoration" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generator Installation" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maintenance Subscriptions" } }
                ]
              }
            })
          }}
        />
      </main>
    </>
  )
}