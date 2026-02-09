import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/ui/capabilities-service/hero';
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list';

import imgMaintenance from '@/assets/images/speciality.webp';

export const metadata: Metadata = {
  title: 'Home Maintenance Subscription Services in Dagsboro, DE | HomeMax',
  description: 'Professional home maintenance subscription services in Dagsboro, DE. HomeMax offers preventative residential maintenance plans designed to protect your home year-round.',
  keywords: [
    'home maintenance subscriptions Dagsboro DE',
    'residential maintenance plans Dagsboro',
    'preventative home maintenance Delaware',
    'home maintenance services Dagsboro',
    'property maintenance plans',
    'routine home care Dagsboro DE',
    'home upkeep services Sussex County',
    'maintenance subscription Delaware',
    'preventative maintenance Dagsboro',
    'home care plans Delaware'
  ],
  openGraph: {
    title: 'Home Maintenance Subscription Services in Dagsboro, DE | HomeMax',
    description: 'Professional home maintenance subscription services in Dagsboro, DE. Preventative residential maintenance plans that protect your home year-round.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/dagsboro/capabilities/maintenance-subscriptions',
    siteName: 'HomeMax Delaware',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Maintenance Subscription Services in Dagsboro, DE | HomeMax',
    description: 'Professional home maintenance subscription services in Dagsboro, DE. Preventative residential maintenance plans that protect your home year-round.',
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
    canonical: 'https://www.homemaxrg.com/locations/dagsboro/capabilities/maintenance-subscriptions',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Dagsboro, Delaware',
    'geo.position': '38.5485;-75.2460',
  },
};

export default function DagsboroMaintenanceSubscriptionsPage() {
  // Structured Data for Local Business Service
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/maintenance-subscriptions#service',
        name: 'Home Maintenance Subscription Services',
        description: 'Professional home maintenance subscription services and preventative residential maintenance plans for properties in Dagsboro, DE',
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
        serviceType: 'Home Maintenance Subscription',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Maintenance Subscription Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Preventative Home Maintenance Plans',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Routine Home Inspections',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Electrical System Maintenance',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Home Safety & Compliance Reviews',
              },
            },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/maintenance-subscriptions#breadcrumb',
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
              '@id': 'https://www.homemaxrg.com/locations/dagsboro/capabilities/maintenance-subscriptions',
              name: 'Home Maintenance Subscriptions',
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
        <Hero image={imgMaintenance} title="HOME MAINTENANCE SUBSCRIPTIONS IN DAGSBORO, DE" />

        {/* Why Preventative Maintenance Matters Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Preventative Home Maintenance Matters in Dagsboro
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homes in coastal and near-coastal Delaware communities like Dagsboro are exposed to changing temperatures, humidity, storms, and seasonal shifts that can impact structural components, electrical systems, and interior spaces. Without consistent upkeep, minor issues—loose fixtures, electrical strain, moisture buildup—can quietly escalate.
              </p>
              <div className="bg-green-50 rounded-lg p-8 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Preventative maintenance helps:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Reduce unexpected repair costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Extend the lifespan of home systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Improve energy efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Maintain home safety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Protect property value</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A home maintenance plan ensures these tasks don't fall through the cracks. Instead of remembering dozens of upkeep items, you have a reliable team handling them for you.
              </p>
            </div>
          </div>
        </section>

        {/* What Is a Maintenance Subscription Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Is a Home Maintenance Subscription?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A home maintenance subscription is a scheduled service plan that provides routine inspections, minor adjustments, and preventative care throughout the year. It's designed to catch problems early, keep systems functioning properly, and give homeowners peace of mind.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  HomeMax maintenance subscriptions are ideal for:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">►</span>
                    <span>Busy homeowners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">►</span>
                    <span>Rental property owners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">►</span>
                    <span>Seasonal or second-home owners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">►</span>
                    <span>Aging homes that require regular attention</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a structured maintenance plan in place, your home receives consistent care—without the hassle of scheduling individual service calls.
              </p>
            </div>
          </div>
        </section>

        {/* Our Maintenance Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Home Maintenance Services in Dagsboro, DE
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax provides residential maintenance services tailored to the needs of Dagsboro homeowners. Each plan focuses on essential systems and components that directly impact safety, comfort, and reliability.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our maintenance services may include:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Routine home inspections</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Electrical system checks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Safety and compliance reviews</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Interior and exterior maintenance tasks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Preventative repairs and adjustments</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-600 text-white rounded-lg p-6 flex flex-col justify-center">
                  <p className="text-lg font-semibold mb-2">Early Detection = Cost Savings</p>
                  <p className="text-green-50">
                    By identifying issues early, we help homeowners avoid emergency repairs and unexpected expenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Electrical System Maintenance Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical & Power System Maintenance
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Electrical systems are one of the most common sources of home issues when left unchecked. As homes rely more heavily on appliances, devices, and backup power systems, regular electrical maintenance becomes even more important.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our maintenance plans include electrical safety checks that help:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Identify overloaded circuits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Detect early signs of wear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Reduce fire and safety risks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span>Support reliable power performance</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                For homeowners in Dagsboro, ongoing electrical maintenance is a proactive way to protect both property and family.
              </p>
            </div>
          </div>
        </section>

        {/* Interior Maintenance Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Interior Maintenance That Keeps Your Home Comfortable
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Interior components see daily use, and small issues can add up over time. Maintenance subscriptions help preserve the condition and function of your living spaces.
              </p>
              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Interior maintenance services may cover:
                </h3>
                <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Lighting and fixture checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Functional assessments of key systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Minor adjustments and preventative fixes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">•</span>
                    <span>Early detection of moisture or wear</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Instead of waiting for something to break, regular upkeep keeps your home comfortable and functional year-round.
              </p>
            </div>
          </div>
        </section>

        {/* Exterior Maintenance Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exterior Maintenance for Long-Term Protection
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your home's exterior is its first line of defense against the elements. Routine exterior maintenance helps prevent damage caused by weather exposure, seasonal changes, and normal aging.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Exterior maintenance may include:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">►</span>
                    <span>Visual inspections of exterior surfaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">►</span>
                    <span>Preventative care recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">►</span>
                    <span>Identification of weather-related wear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">►</span>
                    <span>Early detection of structural concerns</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                For Dagsboro homeowners, proactive exterior care helps avoid costly repairs while maintaining curb appeal.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tired of dealing with surprise repairs and constant upkeep?
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                A HomeMax maintenance subscription takes the stress out of home ownership.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-green-600 font-bold py-4 px-8 rounded-lg hover:bg-green-50 transition-colors duration-300 shadow-lg"
              >
                Schedule a Maintenance Consultation
              </a>
              <p className="text-green-100 mt-4">
                Find out how a customized home maintenance plan can protect your Dagsboro home year-round.
              </p>
            </div>
          </div>
        </section>

        {/* Ideal for Different Properties Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ideal for Primary Homes, Rentals, and Seasonal Properties
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Maintenance subscriptions aren't just for full-time residents. They're especially valuable for:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Rental Properties</h3>
                  <p className="text-gray-700">Keep investment properties maintained and tenants happy</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">🏖️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vacation Homes</h3>
                  <p className="text-gray-700">Protect second homes even when you're not there</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-4">📅</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vacant Properties</h3>
                  <p className="text-gray-700">Ensure homes sitting vacant are monitored regularly</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you're not always present to monitor your property, a residential maintenance plan in Dagsboro, DE ensures your home is still being cared for consistently.
              </p>
            </div>
          </div>
        </section>

        {/* Predictable Costs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Predictable Costs, Fewer Emergencies
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                One of the biggest benefits of a maintenance subscription is predictability. Instead of dealing with sudden repair bills, homeowners benefit from:
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold text-2xl mr-3">✓</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Scheduled service intervals</h3>
                      <p className="text-gray-700">Know exactly when maintenance is happening</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold text-2xl mr-3">✓</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Early issue detection</h3>
                      <p className="text-gray-700">Catch problems before they become expensive</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold text-2xl mr-3">✓</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Reduced emergency repairs</h3>
                      <p className="text-gray-700">Fewer surprise breakdowns and urgent calls</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold text-2xl mr-3">✓</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Better long-term budgeting</h3>
                      <p className="text-gray-700">Plan your home expenses with confidence</p>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-6 font-semibold">
                  By addressing small problems before they escalate, maintenance plans often pay for themselves over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Knowledge Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Knowledge Makes the Difference
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                HomeMax isn't a national call center or out-of-state service provider. We understand the specific needs of Delaware homes and the environmental factors that affect properties in Dagsboro.
              </p>
              <div className="bg-green-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our local expertise means:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Maintenance recommendations that make sense for the area</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Faster response times</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Personalized service</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Clear communication</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-6 font-semibold">
                  We don't believe in one-size-fits-all maintenance. Every home is different, and every plan should be too.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Smarter Way to Care Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Smarter Way to Care for Your Home
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Home ownership doesn't have to feel overwhelming. With a maintenance subscription, you're not constantly reacting—you're staying ahead.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits of a HomeMax maintenance plan:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">+</span>
                      <span>Ongoing home care without the hassle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">+</span>
                      <span>Improved home safety and reliability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">+</span>
                      <span>Extended lifespan of systems and components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">+</span>
                      <span>Peace of mind knowing your home is monitored</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-600 text-white rounded-lg shadow-md p-6 flex flex-col justify-center">
                  <p className="text-2xl font-bold mb-4">Stay Ahead, Not Behind</p>
                  <p className="text-lg text-green-50">
                    For many Dagsboro homeowners, a maintenance subscription becomes an essential part of responsible home ownership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose HomeMax Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Dagsboro Homeowners Choose HomeMax
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homeowners choose HomeMax because we focus on long-term care, not quick fixes. Our maintenance subscriptions are built around trust, consistency, and quality service.
              </p>
              <div className="bg-green-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What sets us apart:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Local, residential-focused service</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Preventative, not reactive, approach</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Clear service plans</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold text-xl mr-3">✓</span>
                    <span className="text-gray-700">Professional, reliable technicians</span>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-6 font-semibold">
                  We treat your home like it matters—because it does.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Started With a Home Maintenance Subscription in Dagsboro, DE
              </h2>
              <p className="text-xl text-green-100 mb-6 leading-relaxed">
                If you're ready to stop worrying about what might go wrong next, a HomeMax maintenance subscription is the solution. Whether your goal is prevention, safety, or long-term value, our plans are designed to support your home every step of the way.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
                <p className="text-lg text-green-100 mb-6">
                  📞 Contact HomeMax today to learn more about our home maintenance subscription services in Dagsboro, DE, and schedule your consultation.
                </p>
                <p className="text-xl font-bold text-white">
                  Protect your home now—and enjoy peace of mind all year long.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-block bg-white text-green-600 font-bold py-4 px-10 rounded-lg hover:bg-green-50 transition-colors duration-300 shadow-xl text-lg"
              >
                Schedule Your Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Location-Specific Capabilities List */}
        <LocationCapabilitiesList location="dagsboro" currentCapability="maintenance-subscriptions" />
      </main>
    </>
  );
}

