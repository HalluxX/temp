import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/ui/capabilities-service/hero';
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list';

import imgExterior from '@/assets/images/speciality.webp';

export const metadata: Metadata = {
  title: 'Exterior Remodeling Services in Dover, DE | HomeMax',
  description: 'Professional exterior remodeling services in Dover, DE. HomeMax provides weather-resistant exterior upgrades, curb appeal improvements, and structural exterior solutions for Dover homes.',
  keywords: [
    'exterior remodeling Dover DE',
    'exterior home improvements Dover',
    'curb appeal Dover Delaware',
    'exterior renovation Dover',
    'weather-resistant exterior Dover DE',
    'exterior remodeling contractor Dover',
    'residential exterior upgrades Kent County',
    'exterior remodeling Dover DE',
  ],
  openGraph: {
    title: 'Exterior Remodeling Services in Dover, DE | HomeMax',
    description: 'Professional exterior remodeling services in Dover, DE. Weather-resistant upgrades, curb appeal, and structural improvements.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/dover/capabilities/exterior-remodeling',
    siteName: 'HomeMax Delaware',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exterior Remodeling Services in Dover, DE | HomeMax',
    description: 'Professional exterior remodeling services in Dover, DE. Weather-resistant upgrades and curb appeal improvements.',
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
    canonical: 'https://www.homemaxrg.com/locations/dover/capabilities/exterior-remodeling',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Dover, Delaware',
    'geo.position': '39.1582;-75.5244',
  },
};

export default function DoverExteriorRemodelingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/exterior-remodeling#service',
        name: 'Exterior Remodeling Services',
        description: 'Professional exterior remodeling services including weather-resistant upgrades, curb appeal improvements, and structural exterior solutions in Dover, DE',
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
        serviceType: 'Exterior Remodeling',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Exterior Remodeling Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Exterior Home Renovations' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Curb Appeal Enhancements' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Weather-Resistant Improvements' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structural Exterior Upgrades' } },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/exterior-remodeling#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, item: { '@id': 'https://www.homemaxrg.com', name: 'Home' } },
          { '@type': 'ListItem', position: 2, item: { '@id': 'https://www.homemaxrg.com/locations', name: 'Locations' } },
          { '@type': 'ListItem', position: 3, item: { '@id': 'https://www.homemaxrg.com/locations/dover', name: 'Dover' } },
          { '@type': 'ListItem', position: 4, item: { '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/exterior-remodeling', name: 'Exterior Remodeling Services' } },
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
        <Hero image={imgExterior} title="EXTERIOR REMODELING SERVICES IN DOVER, DE" />

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Exterior Remodeling Services in Dover, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your home's exterior does more than make a first impression—it protects everything inside it. In Dover, where changing weather, humidity, and seasonal storms are part of everyday life, having a durable, well-maintained exterior isn't optional. It's essential.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At HomeMax, we provide professional exterior remodeling services in Dover, DE designed to strengthen, modernize, and enhance residential properties. Whether your home needs a visual refresh, structural upgrades, or weather-resistant improvements, our team delivers exterior solutions that balance appearance, performance, and long-term value.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work with homeowners throughout Dover who want reliable craftsmanship, honest recommendations, and exterior upgrades that actually last.
              </p>
            </div>
          </div>
        </section>

        {/* Exterior Remodeling Built for Dover Homes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Remodeling Built for Dover Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homes in Dover face unique challenges—from moisture exposure and temperature swings to normal wear that comes with time. That's why exterior remodeling should never be one-size-fits-all.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax approaches every project with a clear understanding of local building conditions, neighborhood styles, and homeowner priorities. Our exterior remodeling services focus on protecting your home while improving curb appeal and overall functionality.
              </p>
              <p className="text-lg text-gray-700 mb-4">We help Dover homeowners with:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Exterior home renovations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Structural exterior upgrades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Weather-resistant improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Curb appeal enhancements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Long-term exterior protection</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our goal is simple: make sure your home's exterior looks great and performs even better.
              </p>
            </div>
          </div>
        </section>

        {/* Improving Curb Appeal */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Improving Curb Appeal Without Sacrificing Durability
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Curb appeal matters—but it should never come at the cost of durability. A beautiful exterior that can't withstand Dover's climate will only lead to ongoing repairs and frustration.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                HomeMax specializes in exterior home improvements that combine visual upgrades with long-lasting performance. We focus on materials, finishes, and construction methods that enhance your home's appearance while improving resistance to weather and aging.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether your home needs subtle updates or a more noticeable transformation, we help you choose exterior solutions that align with both your style and your budget.
              </p>
            </div>
          </div>
        </section>

        {/* Exterior Renovations That Add Real Value */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Renovations That Add Real Value
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Exterior remodeling isn't just about how your home looks today—it's also about how it performs and holds value over time. Thoughtful exterior upgrades can significantly increase property value while reducing future maintenance costs.
              </p>
              <p className="text-lg text-gray-700 mb-4">Our exterior renovation services in Dover, DE are designed to:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Improve energy efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Enhance weather protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Reduce long-term repair needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Increase resale appeal</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work closely with homeowners to prioritize improvements that offer the strongest return on investment, especially for those planning to sell or refinance in the future.
              </p>
            </div>
          </div>
        </section>

        {/* Tailored Exterior Remodeling */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tailored Exterior Remodeling for Every Home Style
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                No two homes in Dover are exactly alike, and exterior remodeling should respect that. From traditional residential properties to more modern builds, HomeMax adapts our approach to fit your home's structure, layout, and architectural character.
              </p>
              <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                We don't push unnecessary upgrades or generic designs. Instead, we focus on customized exterior remodeling solutions that complement your home and meet your goals—whether that's improved protection, updated aesthetics, or both.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Improve Your Home's Exterior?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If you're considering exterior remodeling in Dover, DE, now is the perfect time to explore your options. HomeMax offers professional guidance, transparent pricing, and quality workmanship from start to finish.
              </p>
              <p className="text-lg text-gray-700 font-semibold mb-8">
                Contact HomeMax today to schedule your exterior remodeling consultation and discover how the right upgrades can protect and transform your home.
              </p>
              <a
                href="/contact"
                className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg text-lg"
              >
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Weather-Resistant Exterior Improvements */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Weather-Resistant Exterior Improvements for Delaware Conditions
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Delaware weather can be unpredictable. Wind, rain, humidity, and temperature changes all take a toll on exterior surfaces over time. That's why durability is a key focus of every exterior remodeling project we take on.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax provides weather-resistant exterior upgrades that help protect your home against moisture damage, surface deterioration, and structural stress. Our team carefully selects materials and installation methods that are well-suited for local conditions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By investing in the right exterior improvements now, homeowners can avoid repeated repairs and enjoy greater peace of mind year-round.
              </p>
            </div>
          </div>
        </section>

        {/* Exterior Remodeling That Supports Energy Efficiency */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Remodeling That Supports Energy Efficiency
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many homeowners don't realize how much energy loss occurs through exterior surfaces. Gaps, outdated materials, and worn finishes can all contribute to higher heating and cooling costs.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our exterior remodeling services often work hand-in-hand with energy efficiency improvements, helping Dover homeowners reduce utility expenses while increasing indoor comfort.
              </p>
              <p className="text-lg text-gray-700 mb-4">When done correctly, exterior upgrades can:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Improve insulation performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Reduce air leakage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Support efficient heating and cooling systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Create a more comfortable living environment</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We focus on exterior solutions that improve performance without compromising aesthetics.
              </p>
            </div>
          </div>
        </section>

        {/* A Clear, Stress-Free Remodeling Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Clear, Stress-Free Remodeling Process
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Exterior remodeling can feel overwhelming—especially if you've never tackled a project of this scale before. HomeMax simplifies the process by providing clear communication, realistic timelines, and dependable project management.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From the initial consultation to the final walkthrough, our team keeps you informed and involved. We explain your options, answer questions honestly, and make sure you're comfortable with every step of the project.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Homeowners across Dover choose HomeMax because we respect their time, property, and investment.
              </p>
            </div>
          </div>
        </section>

        {/* Why Dover Homeowners Trust HomeMax */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Dover Homeowners Trust HomeMax
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Choosing the right exterior remodeling contractor makes all the difference. HomeMax has earned the trust of Dover homeowners by delivering consistent quality and dependable service.
              </p>
              <p className="text-lg text-gray-700 mb-4">Clients choose us because we offer:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Local exterior remodeling expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Skilled residential professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Transparent recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>High-quality materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Reliable workmanship</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We take pride in helping homeowners protect and enhance their properties with exterior solutions they can rely on.
              </p>
            </div>
          </div>
        </section>

        {/* Exterior Remodeling for Long-Term Peace of Mind */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Remodeling for Long-Term Peace of Mind
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Exterior remodeling isn't just about today—it's about protecting your home for years to come. With the right upgrades, your home becomes more resilient, efficient, and visually appealing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                HomeMax is committed to providing exterior remodeling services in Dover, DE that stand the test of time. We don't cut corners or rush projects. Instead, we focus on delivering results that homeowners can feel confident about long after the work is complete.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule Your Exterior Remodeling Consultation in Dover, DE
              </h2>
              <p className="text-xl text-red-100 mb-6 leading-relaxed">
                If your home's exterior needs attention—whether it's for appearance, protection, or performance—HomeMax is ready to help. We proudly serve homeowners throughout Dover, DE, delivering exterior remodeling solutions built for local conditions and real-world living.
              </p>
              <p className="text-lg text-red-100 font-semibold mb-8">
                Contact HomeMax today to schedule your exterior remodeling consultation and take the first step toward a stronger, more attractive home exterior.
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

        <LocationCapabilitiesList location="dover" currentCapability="exterior-remodeling" />
      </main>
    </>
  );
}
