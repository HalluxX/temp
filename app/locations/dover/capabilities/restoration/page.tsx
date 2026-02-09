import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/ui/capabilities-service/hero';
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list';

import imgRestoration from '@/assets/images/speciality.webp';

export const metadata: Metadata = {
  title: 'Home Restoration Services in Dover, DE | HomeMax',
  description: 'Professional home restoration services in Dover, DE. HomeMax provides structural repair, property damage restoration, and residential recovery for Dover homes.',
  keywords: [
    'home restoration Dover DE',
    'residential restoration Dover',
    'property damage restoration Dover Delaware',
    'structural repair Dover',
    'home repair Dover DE',
    'restoration contractor Kent County',
    'home recovery services Dover',
    'restoration services Dover DE',
  ],
  openGraph: {
    title: 'Home Restoration Services in Dover, DE | HomeMax',
    description: 'Professional home restoration services in Dover, DE. Structural repair, property damage restoration, and residential recovery.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/dover/capabilities/restoration',
    siteName: 'HomeMax Delaware',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Restoration Services in Dover, DE | HomeMax',
    description: 'Professional home restoration services in Dover, DE. Structural repair and property damage restoration for Dover homes.',
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
    canonical: 'https://www.homemaxrg.com/locations/dover/capabilities/restoration',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Dover, Delaware',
    'geo.position': '39.1582;-75.5244',
  },
};

export default function DoverRestorationPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/restoration#service',
        name: 'Home Restoration Services',
        description: 'Professional home restoration services including structural repair, property damage restoration, and residential recovery in Dover, DE',
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
          name: 'Dover',
          '@id': 'https://en.wikipedia.org/wiki/Dover,_Delaware',
        },
        serviceType: 'Home Restoration',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Restoration Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structural Repair and Restoration' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Property Damage Repair' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior and Exterior Restoration' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical and Safety-Related Repairs' } },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/restoration#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, item: { '@id': 'https://www.homemaxrg.com', name: 'Home' } },
          { '@type': 'ListItem', position: 2, item: { '@id': 'https://www.homemaxrg.com/locations', name: 'Locations' } },
          { '@type': 'ListItem', position: 3, item: { '@id': 'https://www.homemaxrg.com/locations/dover', name: 'Dover' } },
          { '@type': 'ListItem', position: 4, item: { '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/restoration', name: 'Home Restoration Services' } },
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
        <Hero image={imgRestoration} title="HOME RESTORATION SERVICES IN DOVER, DE" />

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Home Restoration Services in Dover, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Damage to your home can happen when you least expect it. A burst pipe, storm intrusion, electrical issue, or long-term wear can quickly turn into a stressful situation if not handled correctly. That's where HomeMax comes in. We provide professional home restoration services in Dover, DE, helping homeowners recover, repair, and restore their properties with care and efficiency.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our restoration work isn't rushed, generic, or one-size-fits-all. We focus on practical solutions that bring your home back to safe, livable condition while protecting its long-term value. Whether you're dealing with visible damage or hidden structural issues, our team understands how to restore Delaware homes the right way.
              </p>
            </div>
          </div>
        </section>

        {/* Local Restoration Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Restoration Services Built for Dover Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homes in Dover face unique challenges. Seasonal storms, humidity, aging construction materials, and unexpected utility failures can all lead to property damage. At HomeMax, we understand the local housing landscape and tailor our residential restoration services to match the needs of Dover homeowners.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We don't just fix surface problems. We look deeper—identifying underlying damage, addressing safety concerns, and making sure repairs hold up over time. Our approach combines technical skill with a clear, honest process so you always know what's happening in your home.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                HomeMax proudly serves homeowners throughout Dover and nearby communities with restoration solutions designed to restore both structure and peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* Complete Residential Restoration Solutions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Residential Restoration Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When something goes wrong in your home, you need a restoration company that can handle the full scope of the problem. HomeMax offers complete home restoration services in Dover, DE, managing everything from initial assessment to final repair.
              </p>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our restoration services include:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Structural repair and restoration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Property damage repair</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Interior and exterior restoration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Electrical and safety-related repairs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Home recovery after unexpected damage</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each project starts with a detailed evaluation of your home. We identify what needs immediate attention and what should be addressed to prevent future problems. This allows us to create a restoration plan that's efficient, realistic, and tailored to your situation.
              </p>
            </div>
          </div>
        </section>

        {/* Restoring Safety and Structural Integrity */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Restoring Safety and Structural Integrity
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                One of the most important goals of any restoration project is safety. Damage—especially when left unaddressed—can compromise a home's structural integrity and create risks for occupants.
              </p>
              <p className="text-lg text-gray-700 mb-4">Our team focuses on restoring:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Load-bearing structures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Damaged interior spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Electrical and power-related systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Areas affected by moisture or deterioration</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                For homeowners in Dover, safety restoration isn't just about repairs—it's about ensuring your home meets modern standards and remains reliable for years to come.
              </p>
            </div>
          </div>
        </section>

        {/* Thoughtful Repairs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Thoughtful Repairs, Not Quick Fixes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Some restoration companies rush through repairs, focusing on speed over quality. At HomeMax, we take a more thoughtful approach. We believe restoration should solve problems, not temporarily cover them.
              </p>
              <p className="text-lg text-gray-700 mb-4">Our team:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Uses durable materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Follows proper repair processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Addresses root causes, not symptoms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Communicates clearly throughout the project</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                This approach helps Dover homeowners avoid repeat issues and unexpected costs down the road. When we restore a home, we do it with long-term performance in mind.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Has Your Dover Home Been Damaged?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If your Dover home has been damaged or needs professional restoration, don't wait for the problem to get worse.
              </p>
              <p className="text-lg text-gray-700 font-semibold mb-8">
                Contact HomeMax today to schedule a home restoration assessment and get clear, honest guidance on the next steps.
              </p>
              <a
                href="/contact"
                className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg text-lg"
              >
                Schedule Your Assessment
              </a>
            </div>
          </div>
        </section>

        {/* Restoration Services for Older and Modern Homes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Restoration Services for Older and Modern Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dover is home to a wide range of properties—from older residences with aging systems to newer builds that still experience unexpected damage. Our experience allows us to work confidently with both.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">For older homes, we focus on:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">►</span>
                      <span>Preserving structural integrity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">►</span>
                      <span>Updating compromised areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">►</span>
                      <span>Improving safety without unnecessary demolition</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">For newer homes, we address:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">►</span>
                      <span>Hidden damage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">►</span>
                      <span>Installation or material failures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">►</span>
                      <span>Preventative repairs that protect newer systems</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                No matter the age of your home, our restoration services are designed to match its construction and condition.
              </p>
            </div>
          </div>
        </section>

        {/* Coordinated Restoration */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Coordinated Restoration with Other Home Improvements
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                One advantage of working with HomeMax is our ability to coordinate restoration work with other home improvement services. If damage impacts multiple areas of your home, we can integrate restoration with remodeling, safety upgrades, or energy efficiency improvements.
              </p>
              <p className="text-lg text-gray-700 mb-4">This coordinated approach:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Reduces downtime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Prevents overlapping repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Saves time and cost</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Ensures consistent workmanship</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Many Dover homeowners choose HomeMax because we provide restoration as part of a broader home improvement strategy, not as a standalone patch job.
              </p>
            </div>
          </div>
        </section>

        {/* Clear Communication */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Clear Communication from Start to Finish
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Restoration work can be stressful, especially when you're unsure what to expect. Our team prioritizes communication at every stage of the process.
              </p>
              <p className="text-lg text-gray-700 mb-4">You can expect:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Clear explanations of damage and repair options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Honest recommendations without pressure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Realistic timelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Respect for your home and schedule</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe trust is built through transparency, and that's exactly what we aim to deliver to every homeowner we serve in Dover.
              </p>
            </div>
          </div>
        </section>

        {/* Why Homeowners Choose HomeMax */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Homeowners in Dover Choose HomeMax
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax has built a strong reputation by delivering reliable restoration services with a personal, local approach. We don't treat homeowners like project numbers—we treat every home as if it were our own.
              </p>
              <p className="text-lg text-gray-700 mb-4">Dover homeowners choose HomeMax because we offer:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Local restoration expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Skilled residential professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Quality workmanship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Practical, long-term solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Responsive and respectful service</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our goal is to help you move forward with confidence after damage, knowing your home has been restored properly.
              </p>
            </div>
          </div>
        </section>

        {/* Supporting Dover Homeowners Beyond Restoration */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Supporting Dover Homeowners Beyond Restoration
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Restoration doesn't end when repairs are complete. We also help homeowners understand how to protect their homes moving forward. From maintenance planning to safety upgrades, HomeMax provides guidance that helps prevent future damage.
              </p>
              <p className="text-lg text-gray-700 mb-4">Many of our Dover clients continue working with us through:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Preventative home maintenance services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Safety and electrical upgrades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Energy efficiency improvements</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We see restoration as the beginning of a stronger, safer home—not just a repair job.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule Your Dover Home Restoration Consultation Today
              </h2>
              <p className="text-xl text-red-100 mb-6 leading-relaxed">
                If your home has experienced damage or needs professional restoration, HomeMax is ready to help. We proudly provide home restoration services in Dover, DE, backed by experience, integrity, and attention to detail.
              </p>
              <p className="text-lg text-red-100 font-semibold mb-8">
                Contact HomeMax today to schedule a restoration consultation and take the first step toward restoring your home's safety, comfort, and value. We're here to help you move forward—confidently and without unnecessary stress.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-red-600 font-bold py-4 px-10 rounded-lg hover:bg-red-50 transition-colors duration-300 shadow-xl text-lg"
              >
                Contact HomeMax
              </a>
            </div>
          </div>
        </section>

        <LocationCapabilitiesList location="dover" currentCapability="restoration" />
      </main>
    </>
  );
}
