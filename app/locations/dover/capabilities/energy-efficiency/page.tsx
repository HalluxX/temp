import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/ui/capabilities-service/hero';
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list';

import imgEnergyEfficiency from '@/assets/images/underground-utility.webp';

export const metadata: Metadata = {
  title: 'Energy Efficiency Upgrades for Homes in Dover, DE | HomeMax',
  description: 'Professional energy efficiency upgrades in Dover, DE. HomeMax provides home energy improvements, utility cost reduction, and sustainable solutions for Dover homes.',
  keywords: [
    'energy efficiency Dover DE',
    'home energy upgrades Dover',
    'energy efficient improvements Dover Delaware',
    'lower utility bills Dover',
    'home efficiency Dover DE',
    'energy saving upgrades Dover',
    'residential energy efficiency Kent County',
    'energy efficiency contractor Dover DE',
  ],
  openGraph: {
    title: 'Energy Efficiency Upgrades for Homes in Dover, DE | HomeMax',
    description: 'Professional energy efficiency upgrades in Dover, DE. Lower utility bills, improve comfort, and reduce energy waste.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/dover/capabilities/energy-efficiency',
    siteName: 'HomeMax Delaware',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Energy Efficiency Upgrades for Homes in Dover, DE | HomeMax',
    description: 'Professional energy efficiency upgrades in Dover, DE. Lower utility bills and improve comfort.',
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
    canonical: 'https://www.homemaxrg.com/locations/dover/capabilities/energy-efficiency',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Dover, Delaware',
    'geo.position': '39.1582;-75.5244',
  },
};

export default function DoverEnergyEfficiencyPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/energy-efficiency#service',
        name: 'Energy Efficiency Upgrades',
        description: 'Professional energy efficiency upgrades including home energy improvements, utility cost reduction, and sustainable solutions in Dover, DE',
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
        serviceType: 'Energy Efficiency',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Energy Efficiency Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Energy Efficiency Upgrades' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical and Power Optimization' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Utility Cost Reduction' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sustainable Home Solutions' } },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/energy-efficiency#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, item: { '@id': 'https://www.homemaxrg.com', name: 'Home' } },
          { '@type': 'ListItem', position: 2, item: { '@id': 'https://www.homemaxrg.com/locations', name: 'Locations' } },
          { '@type': 'ListItem', position: 3, item: { '@id': 'https://www.homemaxrg.com/locations/dover', name: 'Dover' } },
          { '@type': 'ListItem', position: 4, item: { '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/energy-efficiency', name: 'Energy Efficiency Upgrades' } },
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
        <Hero image={imgEnergyEfficiency} title="ENERGY EFFICIENCY UPGRADES IN DOVER, DE" />

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Energy Efficiency Upgrades for Homes in Dover, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Energy costs in Delaware continue to rise, and many homeowners in Dover are feeling it month after month. Drafty rooms, uneven temperatures, outdated systems, and high utility bills are often signs that a home is no longer operating efficiently. At HomeMax, we help homeowners take control of those issues through smart, practical energy efficiency upgrades designed specifically for Dover, DE homes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Energy efficiency isn't about one quick fix. It's about improving how your home functions as a whole—how it retains heat, uses power, and supports everyday comfort. Our team focuses on real improvements that make a noticeable difference, not generic solutions that promise savings but don't deliver.
              </p>
            </div>
          </div>
        </section>

        {/* Why Energy Efficiency Matters */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Energy Efficiency Matters for Dover Homeowners
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homes in Dover face unique challenges. Seasonal temperature swings, coastal humidity, and aging housing stock all contribute to higher energy consumption. Many homes were built before modern efficiency standards, meaning they lose conditioned air faster and rely more heavily on heating and cooling systems.
              </p>
              <p className="text-lg text-gray-700 mb-4">Energy-efficient home upgrades help:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Lower monthly utility bills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Improve indoor comfort year-round</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Reduce strain on electrical and HVAC systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Increase property value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Support long-term home durability</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Homeowners searching for energy efficiency upgrades in Dover DE often start because of cost concerns—but the benefits go far beyond savings. A more efficient home simply feels better to live in.
              </p>
            </div>
          </div>
        </section>

        {/* Common Signs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Common Signs Your Home Needs Energy Efficiency Improvements
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many homeowners don't realize how much energy their home is wasting until the problem becomes obvious. If any of these sound familiar, your home may benefit from professional energy efficiency solutions:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Rooms that feel colder or hotter than the rest of the house</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Rising electric bills without increased usage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Older lighting, insulation, or electrical systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Frequent HVAC cycling or uneven airflow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Drafts near windows, doors, or walls</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                At HomeMax, we look at the entire home system, not just one component. That approach allows us to recommend upgrades that actually work together to reduce energy loss and improve comfort.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Approach to Energy-Efficient Home Improvements
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every home in Dover is different, which is why we don't use one-size-fits-all solutions. Our energy efficiency services are designed around how your home is built, how it's used, and where energy loss is occurring.
              </p>
              <p className="text-lg text-gray-700 mb-4">We focus on:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Improving how your home retains heat and cooled air</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Reducing unnecessary power consumption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Supporting safer, more reliable electrical systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Making upgrades that deliver long-term value</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether your home needs targeted improvements or a broader efficiency plan, we help you prioritize upgrades that make sense for your budget and goals.
              </p>
            </div>
          </div>
        </section>

        {/* Energy Efficiency Upgrades That Deliver Real Results */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Efficiency Upgrades That Deliver Real Results
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Energy efficiency isn't about trends—it's about performance. HomeMax provides practical energy-saving home improvements that homeowners in Dover can rely on.
              </p>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our services include:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Home energy efficiency upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Electrical and power optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Energy-saving system improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Sustainable home solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 font-bold mr-2">✓</span>
                    <span>Utility cost reduction strategies</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                We focus on upgrades that improve daily comfort while reducing long-term operating costs. The goal is a home that works smarter, not harder.
              </p>
            </div>
          </div>
        </section>

        {/* Why Local Expertise Matters */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Local Expertise Matters in Dover, DE
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Energy efficiency upgrades work best when they account for local conditions. Dover homes experience humid summers, cold winters, and fluctuating energy demands throughout the year. Our local experience allows us to recommend improvements that align with Delaware climate conditions and building standards.
              </p>
              <p className="text-lg text-gray-700 mb-4">As a local home improvement contractor serving Dover DE, HomeMax understands:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Regional construction styles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Common energy loss issues in local homes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Local electrical and safety requirements</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                That local knowledge helps us deliver energy-efficient solutions that actually perform well in Dover homes—not just in theory.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Lower Your Energy Bills?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If your energy bills keep climbing or your home never feels quite comfortable, now is the right time to act.
              </p>
              <p className="text-lg text-gray-700 font-semibold mb-8">
                Schedule a home energy efficiency consultation with HomeMax today and find out where your home is losing energy—and how to fix it.
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

        {/* Energy Efficiency and Electrical Power */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Efficiency and Electrical Power Go Hand in Hand
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many efficiency issues stem from outdated electrical systems. Older panels, inefficient wiring, and overloaded circuits force homes to use more energy than necessary. As part of our energy efficiency services, we evaluate how your electrical system supports your home's power needs.
              </p>
              <p className="text-lg text-gray-700 mb-4">Energy-efficient electrical improvements help:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Reduce unnecessary power draw</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Improve system reliability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Support modern appliances and systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Increase overall home safety</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                For homeowners in Dover looking for long-term energy solutions, addressing electrical efficiency is often a key part of the process.
              </p>
            </div>
          </div>
        </section>

        {/* Improving Comfort */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Improving Comfort Without Sacrificing Performance
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                One of the biggest misconceptions about energy efficiency is that it means sacrificing comfort. In reality, the opposite is true. A properly upgraded home maintains consistent temperatures, reduces drafts, and creates a healthier indoor environment.
              </p>
              <p className="text-lg text-gray-700 mb-4">Energy-efficient homes offer:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>More even room temperatures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Reduced hot and cold spots</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Improved indoor air quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Quieter system operation</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                These improvements are especially noticeable in older Dover homes where efficiency was never a design priority.
              </p>
            </div>
          </div>
        </section>

        {/* Long-Term Value */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Long-Term Value for Dover Homeowners
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Energy efficiency upgrades are an investment that continues to pay off. In addition to monthly savings, efficient homes often command higher resale value and appeal to future buyers who prioritize lower operating costs.
              </p>
              <p className="text-lg text-gray-700 mb-4">For homeowners planning to stay long-term or improve resale potential, energy-efficient home improvements provide:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Reduced maintenance costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Improved system lifespan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Increased buyer appeal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Greater overall home value</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                It's one of the few home upgrades that improves comfort today while protecting your investment tomorrow.
              </p>
            </div>
          </div>
        </section>

        {/* Why HomeMax Is Trusted */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why HomeMax Is Trusted for Energy Efficiency in Dover
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homeowners choose HomeMax because we focus on clear communication, practical solutions, and quality workmanship. We don't oversell upgrades or recommend unnecessary services. Instead, we help you understand your options and choose improvements that align with your goals.
              </p>
              <p className="text-lg text-gray-700 mb-4">When you work with HomeMax, you get:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Local Dover DE service and expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Honest recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Skilled residential professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Energy efficiency solutions that make sense</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our reputation is built on helping homeowners make informed decisions—not pushing quick fixes.
              </p>
            </div>
          </div>
        </section>

        {/* Serving Dover and Surrounding */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Serving Dover and Surrounding Delaware Communities
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                While this page focuses on energy efficiency in Dover DE, HomeMax also serves nearby areas including Smyrna, Milford, Bridgeville, Millsboro, Lewes, Dagsboro, and Laurel. Our team provides consistent quality and reliable service across all service areas.
              </p>
              <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                If you're searching for energy efficiency upgrades near Dover, HomeMax is ready to help.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule Your Dover, DE Energy Efficiency Consultation
              </h2>
              <p className="text-xl text-red-100 mb-6 leading-relaxed">
                Your home shouldn't cost more to operate than it needs to. With the right energy efficiency upgrades, you can reduce utility bills, improve comfort, and protect your home for years to come.
              </p>
              <p className="text-lg text-red-100 font-semibold mb-8">
                Contact HomeMax today to schedule your Dover, DE energy efficiency consultation and take the first step toward a smarter, more efficient home.
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

        <LocationCapabilitiesList location="dover" currentCapability="energy-efficiency" />
      </main>
    </>
  );
}
