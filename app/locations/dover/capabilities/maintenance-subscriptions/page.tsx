import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/ui/capabilities-service/hero';
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list';

import imgMaintenance from '@/assets/images/speciality.webp';

export const metadata: Metadata = {
  title: 'Home Maintenance Subscription Services in Dover, DE | HomeMax',
  description: 'Professional home maintenance subscription services in Dover, DE. HomeMax offers preventative residential maintenance plans designed to protect your home year-round.',
  keywords: [
    'home maintenance subscriptions Dover DE',
    'residential maintenance plans Dover',
    'preventative home maintenance Dover Delaware',
    'home maintenance services Dover',
    'maintenance subscription Dover DE',
    'routine home care Kent County',
    'home upkeep services Dover',
    'maintenance plans Delaware',
  ],
  openGraph: {
    title: 'Home Maintenance Subscription Services in Dover, DE | HomeMax',
    description: 'Professional home maintenance subscription services in Dover, DE. Preventative residential maintenance plans that protect your home year-round.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.homemaxrg.com/locations/dover/capabilities/maintenance-subscriptions',
    siteName: 'HomeMax Delaware',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Maintenance Subscription Services in Dover, DE | HomeMax',
    description: 'Professional home maintenance subscription services in Dover, DE. Preventative maintenance plans for Dover homes.',
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
    canonical: 'https://www.homemaxrg.com/locations/dover/capabilities/maintenance-subscriptions',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Dover, Delaware',
    'geo.position': '39.1582;-75.5244',
  },
};

export default function DoverMaintenanceSubscriptionsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/maintenance-subscriptions#service',
        name: 'Home Maintenance Subscription Services',
        description: 'Professional home maintenance subscription services and preventative residential maintenance plans in Dover, DE',
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
        serviceType: 'Home Maintenance Subscription',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Maintenance Subscription Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Routine Home Inspections' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical & Safety Monitoring' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Energy Efficiency Support' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior & Exterior Maintenance' } },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/maintenance-subscriptions#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, item: { '@id': 'https://www.homemaxrg.com', name: 'Home' } },
          { '@type': 'ListItem', position: 2, item: { '@id': 'https://www.homemaxrg.com/locations', name: 'Locations' } },
          { '@type': 'ListItem', position: 3, item: { '@id': 'https://www.homemaxrg.com/locations/dover', name: 'Dover' } },
          { '@type': 'ListItem', position: 4, item: { '@id': 'https://www.homemaxrg.com/locations/dover/capabilities/maintenance-subscriptions', name: 'Home Maintenance Subscription Services' } },
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
        <Hero image={imgMaintenance} title="HOME MAINTENANCE SUBSCRIPTIONS IN DOVER, DE" />

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Home Maintenance Subscription Services in Dover, DE
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Owning a home in Dover comes with pride—and responsibility. Between changing seasons, aging systems, and everyday wear and tear, small issues can quietly turn into expensive problems if they're not addressed early. That's where HomeMax's Home Maintenance Subscription Services in Dover, DE make a real difference.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Instead of reacting to breakdowns and unexpected repairs, our maintenance plans help homeowners stay ahead of problems. With routine inspections, preventative care, and scheduled service, HomeMax gives Dover homeowners peace of mind and long-term protection for their most valuable investment.
              </p>
            </div>
          </div>
        </section>

        {/* Why Ongoing Home Maintenance Matters */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Ongoing Home Maintenance Matters in Dover, DE
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Homes in Dover face a unique mix of challenges. Hot, humid summers, cold winter snaps, heavy rain, and fluctuating temperatures all put stress on your home's systems. Electrical components, interior finishes, exterior surfaces, and energy systems can slowly decline without obvious warning signs.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many homeowners wait until something fails. By then, repairs are often more disruptive and costly. A preventative home maintenance plan helps catch issues early—before they affect comfort, safety, or property value.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                HomeMax's maintenance subscriptions are designed for Dover homeowners who want fewer surprises and better control over home upkeep.
              </p>
            </div>
          </div>
        </section>

        {/* What Is a Home Maintenance Subscription */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Is a Home Maintenance Subscription?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A home maintenance subscription is a scheduled, proactive service plan that keeps your home running smoothly year-round. Instead of calling different contractors when problems arise, you have an ongoing relationship with one trusted local provider.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With HomeMax, our residential maintenance services in Dover, DE focus on prevention, safety, and performance. We monitor key areas of your home, perform routine checks, and recommend solutions before small issues turn into major repairs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This approach saves time, reduces stress, and helps extend the life of your home's systems.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What's Included in HomeMax's Maintenance Plans
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our maintenance subscriptions are flexible and designed to support a wide range of home needs. Services may vary based on your home's size, age, and systems, but commonly include:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Routine home inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Electrical system checks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Safety and compliance assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Energy efficiency monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Interior and exterior condition reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Preventative maintenance recommendations</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                We don't believe in one-size-fits-all plans. Every Dover home is different, and our maintenance approach reflects that.
              </p>
            </div>
          </div>
        </section>

        {/* Electrical & Safety Monitoring */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical & Safety Monitoring for Peace of Mind
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Electrical issues are one of the most common—and dangerous—problems in residential properties. Loose connections, overloaded circuits, and outdated components can go unnoticed until they cause serious damage.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As part of our home maintenance services in Dover, HomeMax monitors electrical systems for safety, efficiency, and reliability. Regular inspections help reduce fire risk and ensure your home's power systems meet modern demands.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Safety checks also extend beyond electrical work. We help identify potential hazards and recommend upgrades that improve overall household safety.
              </p>
            </div>
          </div>
        </section>

        {/* Energy Efficiency Support */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Energy Efficiency Support That Pays Off Over Time
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Energy costs continue to rise, and many homes lose efficiency without homeowners realizing it. Small inefficiencies—poor airflow, outdated components, or neglected systems—can quietly increase utility bills.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our preventative home maintenance in Dover, DE includes monitoring for energy efficiency issues and recommending improvements that help reduce monthly costs. Over time, this proactive approach supports a more comfortable home and better long-term savings.
              </p>
            </div>
          </div>
        </section>

        {/* Interior & Exterior Maintenance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Interior & Exterior Maintenance That Protects Value
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Interior finishes and exterior surfaces take daily abuse from weather, moisture, and regular use. Cracks, wear, and minor damage may seem cosmetic at first, but they can lead to deeper structural problems if ignored.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                HomeMax's maintenance subscriptions help Dover homeowners stay on top of both interior and exterior conditions. By addressing small issues early, we help preserve your home's appearance, functionality, and resale value.
              </p>
            </div>
          </div>
        </section>

        {/* Ideal for Busy Homeowners */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ideal for Busy Homeowners & Rental Properties
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If you're a busy homeowner, landlord, or property manager in Dover, keeping up with maintenance can feel overwhelming. A maintenance subscription removes the guesswork and reduces emergency calls.
              </p>
              <p className="text-lg text-gray-700 mb-4">Our residential maintenance plans in Dover, DE are especially helpful for:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Homeowners with limited time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Rental property owners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Second-home or investment property owners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">►</span>
                  <span>Aging homes that need closer monitoring</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                With scheduled service and a reliable local team, your property stays protected—even when you're not thinking about it.
              </p>
            </div>
          </div>
        </section>

        {/* A Local Maintenance Partner */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Local Maintenance Partner You Can Trust
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                HomeMax isn't a national chain or a call-center service. We're a local home services provider, serving Dover and surrounding Delaware communities with hands-on expertise and responsive support.
              </p>
              <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                We understand local building standards, weather conditions, and homeowner concerns. That local knowledge allows us to deliver maintenance solutions that actually make sense for Dover homes.
              </p>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tired of Surprise Repairs and Last-Minute Service Calls?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If you're tired of surprise repairs and last-minute service calls, now is the time to switch to a smarter approach.
              </p>
              <p className="text-lg text-gray-700 font-semibold mb-8">
                Schedule a Home Maintenance Consultation in Dover, DE today and learn how a HomeMax maintenance subscription can help protect your home, reduce long-term costs, and give you peace of mind year-round.
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

        {/* Preventative Maintenance vs. Reactive Repairs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Preventative Maintenance vs. Reactive Repairs
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                One of the biggest advantages of a maintenance subscription is predictability. Instead of reacting to emergencies, you plan for upkeep. This leads to:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Fewer unexpected expenses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Longer system lifespans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Improved safety and reliability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">✓</span>
                  <span>Better budgeting and planning</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                For Dover homeowners, preventative maintenance is not just convenient—it's financially smart.
              </p>
            </div>
          </div>
        </section>

        {/* Customized Plans */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Customized Plans for Dover Homes
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                No two homes are exactly alike. That's why HomeMax offers customized home maintenance plans based on your property's specific needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether your home is newer or decades old, we tailor your maintenance schedule to focus on the systems and areas that matter most. Our goal is not to upsell services, but to provide consistent care that delivers real value.
              </p>
            </div>
          </div>
        </section>

        {/* Serving Dover and Nearby */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Serving Dover, DE and Nearby Communities
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                While this page focuses on Dover, DE, HomeMax also supports homeowners throughout surrounding areas. Our maintenance subscriptions are designed to grow with you, whether you own one home or multiple properties across Delaware.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Home Maintenance Subscription in Dover, DE
              </h2>
              <p className="text-xl text-red-100 mb-6 leading-relaxed">
                Protecting your home doesn't have to be stressful or time-consuming. With HomeMax's Home Maintenance Subscription Services in Dover, DE, you gain a trusted partner who helps you stay ahead of problems instead of reacting to them.
              </p>
              <p className="text-lg text-red-100 font-semibold mb-8">
                Contact HomeMax today to start your maintenance subscription and enjoy reliable, preventative home care designed specifically for Dover homeowners.
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

        <LocationCapabilitiesList location="dover" currentCapability="maintenance-subscriptions" />
      </main>
    </>
  );
}
