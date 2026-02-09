import React from 'react'
import type { Metadata } from 'next'
import Hero from '@/components/ui/capabilities-service/hero'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgMaintenance from '@/assets/images/speciality.webp'

export const metadata: Metadata = {
  title: 'Home Maintenance Subscriptions in Laurel, DE | HomeMax',
  description:
    'HomeMax Maintenance Subscriptions in Laurel, DE provide proactive, year-round home care with inspections, preventative maintenance, and priority service.',
  keywords: [
    'home maintenance subscriptions Laurel DE',
    'residential maintenance plans Laurel',
    'preventative home maintenance Laurel Delaware',
    'home maintenance services Laurel',
    'property maintenance plans Laurel',
    'routine home care Laurel DE',
    'home upkeep services Sussex County',
    'maintenance subscription Laurel',
    'preventative maintenance Laurel',
    'home care plans Delaware',
  ],
  openGraph: {
    title: 'Home Maintenance Subscriptions in Laurel, DE | HomeMax',
    description:
      'Proactive home maintenance subscriptions in Laurel, DE from HomeMax. Routine inspections, preventative care, and priority service to protect your home year-round.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/laurel/capabilities/maintenance-subscriptions',
    siteName: 'HomeMax Premier Era Innovations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Maintenance Subscriptions in Laurel, DE | HomeMax',
    description:
      'HomeMax Maintenance Subscriptions provide proactive, year-round home care for Laurel, DE homeowners.',
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
    canonical:
      'https://www.homemaxrg.com/locations/laurel/capabilities/maintenance-subscriptions',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Laurel, Delaware',
  },
}

export default function LaurelMaintenanceSubscriptionsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id':
          'https://www.homemaxrg.com/locations/laurel/capabilities/maintenance-subscriptions#service',
        name: 'Home Maintenance Subscriptions in Laurel, DE',
        description:
          'HomeMax home maintenance subscriptions in Laurel, DE provide preventative residential maintenance, routine inspections, and priority service to protect your home year-round.',
        provider: {
          '@type': 'LocalBusiness',
          '@id': 'https://www.homemaxrg.com/#organization',
          name: 'HomeMax Premier Era Innovations',
        },
        areaServed: {
          '@type': 'City',
          name: 'Laurel',
          '@id': 'https://en.wikipedia.org/wiki/Laurel,_Delaware',
        },
        serviceType: 'Home Maintenance Subscription',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.homemaxrg.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Locations',
            item: 'https://www.homemaxrg.com/locations',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Laurel',
            item: 'https://www.homemaxrg.com/locations/laurel',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Maintenance Subscriptions',
            item:
              'https://www.homemaxrg.com/locations/laurel/capabilities/maintenance-subscriptions',
          },
        ],
      },
    ],
  }

  return (
    <>
      <main className="grow">
        <Hero
          image={imgMaintenance}
          title="HOME MAINTENANCE SUBSCRIPTIONS IN LAUREL, DE"
        />

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Home Maintenance Subscriptions in Laurel, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Owning a home in Laurel, Delaware comes with pride—but it also comes with responsibility. From seasonal wear and
                tear to unexpected repairs, even well-built homes need consistent attention. That&apos;s where HomeMax Maintenance
                Subscriptions come in.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Instead of waiting for problems to show up at the worst possible time, our home maintenance plans in Laurel, DE are
                designed to keep your property running smoothly all year long. With routine checkups, preventative care, and
                priority service, we help homeowners stay ahead of costly repairs while protecting their investment. If you&apos;re
                tired of surprise breakdowns, last-minute contractor searches, or neglected maintenance tasks piling up, a HomeMax
                maintenance subscription offers a simpler, smarter way to care for your home.
              </p>
            </div>
          </div>
        </section>

        {/* Why Preventative Home Maintenance Matters */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Preventative Home Maintenance Matters in Laurel
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Laurel&apos;s changing seasons—hot summers, cold winters, and heavy storms—can quietly impact your home&apos;s
                systems and structure. Small issues like loose connections, worn components, or minor exterior damage often go
                unnoticed until they turn into expensive problems. Preventative home maintenance is about catching those issues
                early.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Our residential maintenance services in Laurel, DE focus on identifying potential risks before they affect your
                  comfort, safety, or budget. With scheduled inspections and routine upkeep, homeowners gain peace of mind knowing
                  their home is being professionally monitored throughout the year.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Regular maintenance doesn&apos;t just prevent breakdowns—it extends the life of your home&apos;s systems,
                  improves efficiency, and helps maintain property value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What a HomeMax Maintenance Subscription Includes */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What a HomeMax Maintenance Subscription Includes
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HomeMax maintenance subscriptions are designed to be practical, flexible, and homeowner-friendly. We don&apos;t
                believe in one-size-fits-all plans. Instead, we tailor our services based on your home&apos;s size, age, and
                specific needs.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">
                  Our maintenance subscriptions may include:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Routine home inspections</li>
                  <li>Electrical system checks</li>
                  <li>Safety and compliance reviews</li>
                  <li>Energy efficiency monitoring</li>
                  <li>Minor adjustments and preventative fixes</li>
                  <li>Priority scheduling for service calls</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  By providing ongoing home maintenance in Laurel, we reduce the risk of emergency repairs while helping you plan
                  ahead for future improvements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proactive vs Reactive */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Smarter Alternative to Reactive Repairs
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Most homeowners only call for help once something breaks. Unfortunately, by that point, damage has already
                occurred—and repair costs are often higher than expected. A home maintenance subscription shifts that approach from
                reactive to proactive.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Instead of scrambling to find help during an emergency, you already have a trusted local provider monitoring your
                  home. Our team keeps detailed service records, tracks recurring issues, and ensures small concerns don&apos;t
                  escalate into major disruptions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For Laurel homeowners who value consistency, reliability, and long-term savings, a maintenance subscription simply
                  makes sense.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Designed for Busy Homeowners */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Designed for Busy Homeowners and Property Owners
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you live in your home full-time, manage a rental property, or own a second residence near Laurel, keeping up
                with maintenance can be overwhelming. Scheduling inspections, remembering service intervals, and coordinating
                contractors takes time most people don&apos;t have. HomeMax maintenance subscriptions remove that burden.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  We handle the scheduling, monitoring, and follow-ups—so you don&apos;t have to. You&apos;ll always know your home
                  is being cared for by professionals who understand local construction standards and environmental conditions.
                </p>
                <p className="font-semibold text-gray-900 mb-2">This is especially valuable for:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Busy families</li>
                  <li>Retirees</li>
                  <li>Rental property owners</li>
                  <li>Homeowners planning future renovations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-12 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Take the stress out of home upkeep.
            </h2>
            <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
              If you&apos;re ready for dependable, ongoing home maintenance in Laurel, DE, contact HomeMax today to learn which
              maintenance plan fits your home best. Our team will walk you through your options—no pressure, no confusion.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-green-700 font-semibold px-8 py-4 rounded-lg hover:bg-green-50 transition-colors shadow-lg text-lg"
            >
              Schedule a Maintenance Subscription Consultation
            </a>
          </div>
        </section>

        {/* Plans That Grow With Your Home */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Maintenance Plans That Grow With Your Home
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Homes change over time. Systems age, upgrades are added, and usage patterns shift. That&apos;s why our home
                maintenance plans in Laurel, DE are built to evolve with your property. As part of your subscription, we monitor
                trends, identify long-term needs, and make recommendations that align with your goals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you plan to stay in your home for decades or prepare it for resale, proactive maintenance supports smarter
                decision-making. Instead of reacting to problems, you&apos;re planning improvements with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Local Service You Can Rely On */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Local Service You Can Rely On in Laurel, DE
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                HomeMax isn&apos;t a national call center or a rotating list of subcontractors. We&apos;re a local home service
                provider serving Laurel and surrounding Delaware communities.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">That means:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Faster response times</li>
                  <li>Familiarity with local housing styles</li>
                  <li>Knowledge of regional weather impacts</li>
                  <li>Consistent service from a trusted team</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  When you sign up for a HomeMax maintenance subscription, you&apos;re not just buying a service—you&apos;re
                  building a long-term relationship with professionals who care about your home as much as you do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reduce Long-Term Costs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Reduce Long-Term Costs and Protect Property Value
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                One of the biggest advantages of routine maintenance is cost control. Small adjustments and early detection often
                prevent major repairs that strain budgets and disrupt daily life.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">
                  By investing in preventative home maintenance, Laurel homeowners can:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Reduce emergency repair costs</li>
                  <li>Improve system efficiency</li>
                  <li>Extend the lifespan of home components</li>
                  <li>Preserve long-term property value</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Maintenance subscriptions aren&apos;t an expense—they&apos;re a strategy for protecting what you&apos;ve already
                  invested in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal for Older and Newer Homes */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ideal for Older Homes and Newer Builds Alike
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Older homes benefit from routine monitoring, but newer homes need maintenance too. Even modern systems require
                adjustments, inspections, and performance checks to operate at their best.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">
                  HomeMax maintenance subscriptions are ideal for:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Older homes needing consistent oversight</li>
                  <li>Newer homes requiring performance tracking</li>
                  <li>Homes with recent upgrades or renovations</li>
                  <li>Properties preparing for future remodeling</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  No matter the age of your home, consistent maintenance helps ensure everything continues to function safely and
                  efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Simple, Transparent, and Hassle-Free */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Simple, Transparent, and Hassle-Free
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We believe home maintenance should be straightforward. Our subscription plans are designed to be clear, flexible,
                and easy to manage.
              </p>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">With HomeMax, you can expect:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Clear service schedules</li>
                  <li>Transparent communication</li>
                  <li>Honest recommendations</li>
                  <li>No unnecessary upsells</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  Our goal is to make home maintenance in Laurel, DE something you never have to worry about again.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Laurel Homeowners Choose HomeMax */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Laurel Homeowners Choose HomeMax
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Homeowners in Laurel choose HomeMax because we focus on long-term care—not quick fixes. We understand that a
                well-maintained home is safer, more comfortable, and more valuable.
              </p>
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <p className="font-semibold text-gray-900 mb-4">What sets us apart:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>Local Delaware expertise</li>
                  <li>Reliable residential maintenance services</li>
                  <li>Preventative, homeowner-first approach</li>
                  <li>Professional and consistent service</li>
                </ul>
                <p className="mt-6 text-gray-700">
                  We don&apos;t just show up when something breaks—we help make sure it doesn&apos;t.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Started With a Home Maintenance Subscription in Laurel, DE
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If you&apos;re ready to stop reacting to problems and start protecting your home proactively, a HomeMax maintenance
                subscription is the next step.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you want peace of mind, predictable upkeep, or long-term savings, our home maintenance plans in Laurel, DE
                are designed to support your home year after year.
              </p>
              <a
                href="/contact"
                className="inline-block bg-green-600 text-white font-semibold px-10 py-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg text-lg"
              >
                Contact HomeMax About Maintenance Subscriptions in Laurel, DE
              </a>
            </div>
          </div>
        </section>

        {/* Contact + Capabilities List */}
        <ContactUs topic="HOME MAINTENANCE SUBSCRIPTIONS IN LAUREL, DE" />

        <LocationCapabilitiesList
          location="laurel"
          locationName="Laurel"
          currentCapability="maintenance-subscriptions"
        />

        {/* Structured Data Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </main>
    </>
  )
}

