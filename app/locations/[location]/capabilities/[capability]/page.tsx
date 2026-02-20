import Hero from '@/components/ui/capabilities-service/hero'
import Introduction from '@/components/ui/capabilities-service/introduction'
import Project from '@/components/ui/capabilities-service/project'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'
import type { Metadata } from 'next'

import imgRenewables from '@/assets/images/renewables.webp';

// Location and capability configurations
const LOCATIONS = {
  'bridgeville': { name: 'Bridgeville', county: 'Sussex County' },
  'dagsboro': { name: 'Dagsboro', county: 'Sussex County' },
  'dover': { name: 'Dover', county: 'Kent County' },
  'laurel': { name: 'Laurel', county: 'Sussex County' },
  'lewes': { name: 'Lewes', county: 'Sussex County' },
  'milford': { name: 'Milford', county: 'Kent and Sussex Counties' },
  'millsboro': { name: 'Millsboro', county: 'Sussex County' },
  'smyrna': { name: 'Smyrna', county: 'Kent and New Castle Counties' },
} as const;

const CAPABILITIES = {
  'safety': { name: 'Home Safety Services', index: 2 },
  'electric-power': { name: 'Electric Power Services', index: 0 },
  'energy-efficiency': { name: 'Energy Efficiency Services', index: 1 },
  'generators': { name: 'Generator Installation', index: 3 },
  'restoration': { name: 'Restoration Services', index: 4 },
  'exterior-remodeling': { name: 'Exterior Remodeling', index: 5 },
  'interior-remodeling': { name: 'Interior Remodeling', index: 6 },
  'maintenance-subscriptions': { name: 'Maintenance Subscriptions', index: 7 },
} as const;

type LocationKey = keyof typeof LOCATIONS;
type CapabilityKey = keyof typeof CAPABILITIES;

interface PageProps {
  params: {
    location: string;
    capability: string;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = LOCATIONS[params.location as LocationKey];
  const capability = CAPABILITIES[params.capability as CapabilityKey];
  
  if (!location || !capability) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

  return {
    title: `${capability.name} in ${location.name}, DE | HomeMax Remodeling Group`,
    description: `Professional ${capability.name.toLowerCase()} in ${location.name}, Delaware. Serving ${location.county} with expert craftsmanship and reliable service.`,
    keywords: [
      `${capability.name.toLowerCase()} ${location.name} DE`,
      `${capability.name.toLowerCase()} ${location.county}`,
      `${location.name} Delaware ${capability.name.toLowerCase()}`,
      `home services ${location.name} DE`,
    ],
    openGraph: {
      title: `${capability.name} in ${location.name}, DE`,
      description: `Professional ${capability.name.toLowerCase()} in ${location.name}, Delaware`,
      url: `https://homemaxrg.com/locations/${params.location}/capabilities/${params.capability}`,
      siteName: 'HomeMax Remodeling Group',
      locale: 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `https://homemaxrg.com/locations/${params.location}/capabilities/${params.capability}`,
    },
    other: {
      'geo.region': 'US-DE',
      'geo.placename': `${location.name}, Delaware`,
    },
  };
}

// Generate static params for all location/capability combinations
export async function generateStaticParams() {
  const locations = Object.keys(LOCATIONS);
  const capabilities = Object.keys(CAPABILITIES);
  
  const params = [];
  for (const location of locations) {
    for (const capability of capabilities) {
      params.push({ location, capability });
    }
  }
  
  return params;
}

export default function LocationCapabilityPage({ params }: PageProps) {
  const location = LOCATIONS[params.location as LocationKey];
  const capability = CAPABILITIES[params.capability as CapabilityKey];
  
  if (!location || !capability) {
    return (
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p>The requested location or capability could not be found.</p>
      </div>
    );
  }

  return (
    <>
      <main className="grow">
        <Hero 
          image={imgRenewables} 
          title={`${capability.name.toUpperCase()} IN ${location.name.toUpperCase()}, DE`} 
        />
        <Introduction currentIndex={capability.index} />
        <Project currentIndex={capability.index} />
        <ContactUs topic={`${capability.name} in ${location.name}`} />
        
        {/* Capabilities List Section */}
        <LocationCapabilitiesList 
          location={params.location} 
          locationName={location.name}
          currentCapability={params.capability}
        />
        
        {/* Structured Data - LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  "@id": `https://homemaxrg.com/locations/${params.location}/capabilities/${params.capability}#service`,
                  "name": `${capability.name} in ${location.name}, DE`,
                  "description": `Professional ${capability.name.toLowerCase()} serving ${location.name}, Delaware and ${location.county}.`,
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "HomeMax Remodeling Group",
                    "@id": "https://homemaxrg.com/#organization",
                  },
                  "areaServed": {
                    "@type": "City",
                    "name": location.name,
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
                  "serviceType": capability.name
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
                      "name": location.name,
                      "item": `https://homemaxrg.com/locations/${params.location}`
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": capability.name,
                      "item": `https://homemaxrg.com/locations/${params.location}/capabilities/${params.capability}`
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

