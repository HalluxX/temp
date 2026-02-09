import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/ui/capabilities-service/hero';
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list';

import imgRestoration from '@/assets/images/speciality.webp';

export const metadata: Metadata = {
  title: 'Home Restoration Services in Dagsboro, DE | HomeMax',
  description: 'Professional home restoration services in Dagsboro, DE. HomeMax provides residential restoration, property damage repair, and structural restoration for Delaware homes.',
  keywords: [
    'home restoration services Dagsboro DE',
    'residential restoration Dagsboro',
    'property damage restoration Delaware',
    'home repair services Dagsboro',
    'structural restoration Sussex County',
    'restoration contractor Dagsboro DE',
    'property restoration services',
    'home recovery services Delaware',
    'restoration services near me',
    'residential restoration company'
  ],
  openGraph: {
    title: 'Home Restoration Services in Dagsboro, DE | HomeMax',
    description: 'Professional home restoration services in Dagsboro, DE. Residential restoration, property damage repair, and structural restoration for Delaware homes.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/dagsboro/capabilities/restoration',
    siteName: 'HomeMax Delaware',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Restoration Services in Dagsboro, DE | HomeMax',
    description: 'Professional home restoration services in Dagsboro, DE. Residential restoration, property damage repair, and structural restoration for Delaware homes.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.homemaxrg.com/locations/dagsboro/capabilities/restoration',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Dagsboro, Delaware',
    'geo.position': '38.5485;-75.2460',
  },
};

export default function DagsboroRestorationPage() {
  // Structured Data for Local Business Service
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/restoration#service',
        name: 'Home Restoration Services',
        description: 'Professional home restoration services including structural repair, property damage restoration, and residential recovery services in Dagsboro, DE',
        provider: {
          '@type': 'LocalBusiness',
          '@id': 'https://www.homemaxrg.com/#organization',
          name: 'HomeMax',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '8 The Green #23065',
            addressLocality: 'Dover',
            addressRegion: 'DE',
            postalCode: '19901',
            addressCountry: 'US',
          },
          telephone: '+1-302-XXX-XXXX',
          url: 'https://www.homemaxrg.com',
        },
        areaServed: {
          '@type': 'City',
          name: 'Dagsboro',
          '@id': 'https://en.wikipedia.org/wiki/Dagsboro,_Delaware',
        },
        serviceType: 'Home Restoration',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Restoration Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Structural Repair and Stabilization',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Property Damage Restoration',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Interior and Exterior Restoration',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Safety-Related Restoration Upgrades',
              },
            },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/restoration#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': 'https://www.homemaxrg.com',
              name: 'Home',
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': 'https://www.homemaxrg.com/locations',
              name: 'Locations',
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@id': 'https://www.homemaxrg.com/locations/dagsboro',
              name: 'Dagsboro',
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/restoration',
              name: 'Home Restoration Services',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="grow">
        <Hero image={imgRestoration} title="HOME RESTORATION SERVICES IN DAGSBORO, DE" />

        {/* Local Restoration Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Restoration Services You Can Rely On
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homes in Dagsboro face unique challenges—from coastal weather patterns to aging construction and seasonal wear. Restoration work isn't just about fixing what's broken; it's about understanding how local conditions affect your home and addressing the root of the problem.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At HomeMax, we take a practical, detail-driven approach to residential restoration. We look beyond surface damage to ensure the structure, systems, and materials of your home are stable, safe, and built to last.
              </p>
              <div className="bg-orange-50 rounded-lg p-8 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our restoration services in Dagsboro are designed to:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">✓</span>
                    <span>Repair damaged or deteriorating areas of your home</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">✓</span>
                    <span>Restore safety and functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">✓</span>
                    <span>Prevent future issues from developing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">✓</span>
                    <span>Protect your property's long-term value</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                You'll never feel rushed or left in the dark. We explain what's happening, why it matters, and what your options are—so you can make informed decisions about your home.
              </p>
            </div>
          </div>
        </section>

        {/* Residential Restoration Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Residential Restoration for Real-Life Situations
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                No two restoration projects are exactly alike. Some homeowners contact us after sudden damage, while others need help restoring areas that have gradually worn down over time. Either way, our team approaches every project with the same level of care and professionalism.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our residential restoration services in Dagsboro, DE commonly include:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">►</span>
                    <span>Structural repair and stabilization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">►</span>
                    <span>Property damage restoration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">►</span>
                    <span>Home repair and recovery services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">►</span>
                    <span>Interior and exterior restoration work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">►</span>
                    <span>Safety-related restoration upgrades</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work on primary residences, vacation homes, and long-term properties, always tailoring our approach to the home's condition and the homeowner's goals.
              </p>
            </div>
          </div>
        </section>

        {/* Thoughtful Approach Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Thoughtful Approach to Home Restoration
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Restoration isn't just construction—it's problem-solving. Before any work begins, we take time to fully assess the condition of your home. That means identifying visible damage as well as underlying issues that could lead to future repairs if left unaddressed.
              </p>
              <div className="bg-orange-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our restoration process typically includes:
                </h3>
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">•</span>
                    <span>A detailed home evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">•</span>
                    <span>Clear recommendations based on your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">•</span>
                    <span>A realistic scope of work and timeline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">•</span>
                    <span>Skilled execution using proven methods</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                This approach allows us to deliver restoration solutions that make sense, not quick fixes that lead to recurring problems.
              </p>
            </div>
          </div>
        </section>

        {/* Helping Homeowners Recover Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Helping Dagsboro Homeowners Recover with Confidence
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Living in Dagsboro means enjoying a quieter pace of life, but when your home needs restoration, the disruption can be significant. Our goal is to reduce that stress by providing dependable service and steady communication from start to finish.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Homeowners trust HomeMax because we:
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Show up when we say we will</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Respect your home and property</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Communicate clearly throughout the project</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Focus on quality, not shortcuts</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-6 font-semibold">
                  Whether your home needs targeted repairs or more extensive restoration work, we're committed to helping you restore comfort and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                If your home in Dagsboro needs professional restoration services, don't wait for the problem to get worse.
              </h2>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Contact HomeMax today to schedule a consultation and get honest guidance on the best path forward for your property.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-lg hover:bg-orange-50 transition-colors duration-300 shadow-lg"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Protects Home Value Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Restoration That Protects Your Home's Value
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Unaddressed damage can quickly reduce a home's value and lead to costly future repairs. Professional restoration helps protect your investment by ensuring your home remains structurally sound and safe to live in.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our home restoration services in Dagsboro, DE focus on long-term durability. We don't just restore appearances—we reinforce the integrity of your home so it continues to perform as it should.
              </p>
              <div className="bg-orange-50 rounded-lg p-8 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  This is especially important for:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">+</span>
                    <span>Older homes requiring updates or repairs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">+</span>
                    <span>Properties exposed to moisture or weather damage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-2">+</span>
                    <span>Homes preparing for sale or long-term ownership</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                By restoring your home properly, you're not just fixing today's issue—you're preventing tomorrow's.
              </p>
            </div>
          </div>
        </section>

        {/* Local Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Restoration Team That Understands Local Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Working with a local restoration company matters. Homes in Dagsboro are built differently than homes in other parts of Delaware, and local experience plays a major role in doing the job right.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">HomeMax understands:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 font-bold mr-2">►</span>
                      <span>Local building standards and expectations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 font-bold mr-2">►</span>
                      <span>Common restoration challenges in Sussex County</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 font-bold mr-2">►</span>
                      <span>Materials and methods suited for the area</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-600 text-white rounded-lg shadow-md p-6 flex flex-col justify-center">
                  <p className="text-xl font-bold mb-4">Local Expertise Matters</p>
                  <p className="text-orange-50">
                    Because we serve Dagsboro and surrounding communities regularly, we're able to deliver restoration solutions that fit local homes—not generic, one-size-fits-all fixes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clear Communication Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Clear Communication from Start to Finish
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                One of the biggest frustrations homeowners face during restoration projects is uncertainty. We believe communication is just as important as the work itself.
              </p>
              <div className="bg-orange-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  From the first conversation to the final walkthrough, we make sure you understand:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">What work is being done</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Why it's necessary</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">How long it will take</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">What to expect at each stage</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-6 font-semibold">
                  You'll always know where your project stands and who to contact if you have questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Restoration Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                More Than Repairs—Real Restoration
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                True restoration goes beyond surface repairs. It's about restoring confidence in your home. When we complete a project, we want you to feel secure knowing your home is safe, functional, and ready for the future.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="text-xl text-gray-900 font-semibold mb-4">
                  HomeMax provides property restoration services in Dagsboro, DE that help homeowners move past damage and focus on what matters most—living comfortably in their home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose HomeMax Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose HomeMax for Restoration in Dagsboro, DE?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homeowners choose HomeMax because we combine craftsmanship, local knowledge, and a commitment to doing things the right way.
              </p>
              <div className="bg-orange-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  When you work with us, you can expect:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Skilled residential restoration professionals</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Honest recommendations—not upsells</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Quality materials and workmanship</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Respect for your time and property</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-6 font-semibold">
                  We treat every home as if it were our own, delivering restoration services built on trust and experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule Your Home Restoration Consultation Today
              </h2>
              <p className="text-xl text-orange-100 mb-6 leading-relaxed">
                If your home in Dagsboro needs restoration—whether from damage, wear, or age—HomeMax is ready to help. Our team provides reliable, professional home restoration services in Dagsboro, DE, focused on safety, durability, and long-term value.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
                <p className="text-lg text-orange-100">
                  Contact HomeMax today to schedule a consultation and take the first step toward restoring your home with confidence.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-block bg-white text-orange-600 font-bold py-4 px-10 rounded-lg hover:bg-orange-50 transition-colors duration-300 shadow-xl text-lg"
              >
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Location-Specific Capabilities List */}
        <LocationCapabilitiesList location="dagsboro" currentCapability="restoration" />
      </main>
    </>
  );
}

