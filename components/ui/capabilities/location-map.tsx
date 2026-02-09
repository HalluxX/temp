import React from 'react'

interface LocationMapProps {
  locationName: string;
  locationSlug: string;
  county: string;
  embedUrl: string;
  address?: {
    street?: string;
    city: string;
    state: string;
    zip: string;
  };
}

const LOCATION_MAPS: { [key: string]: string } = {
  'dover': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.0234567891234!2d-75.52432368464872!3d39.158167979539896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c764e90e0e0e0e%3A0x0!2s8%20The%20Green%2C%20Dover%2C%20DE%2019901!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
  'bridgeville': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98566.88847286745!2d-75.60932799999999!3d38.741362899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8b1c7f0e7f8e3%3A0x7c3e5e5c1e5c5c5c!2sBridgeville%2C%20DE!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
  'millsboro': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98566.88847286745!2d-75.29932799999999!3d38.591362899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8b1c7f0e7f8e3%3A0x7c3e5e5c1e5c5c5c!2sMillsboro%2C%20DE!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
  'lewes': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98566.88847286745!2d-75.13932799999999!3d38.781362899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8b1c7f0e7f8e3%3A0x7c3e5e5c1e5c5c5c!2sLewes%2C%20DE!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
  'smyrna': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98566.88847286745!2d-75.60932799999999!3d39.301362899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8b1c7f0e7f8e3%3A0x7c3e5e5c1e5c5c5c!2sSmyrna%2C%20DE!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
  'milford': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98566.88847286745!2d-75.42932799999999!3d38.921362899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8b1c7f0e7f8e3%3A0x7c3e5e5c1e5c5c5c!2sMilford%2C%20DE!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
  'laurel': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98566.88847286745!2d-75.57932799999999!3d38.561362899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8b1c7f0e7f8e3%3A0x7c3e5e5c1e5c5c5c!2sLaurel%2C%20DE!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
  'dagsboro': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98566.88847286745!2d-75.24932799999999!3d38.551362899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8b1c7f0e7f8e3%3A0x7c3e5e5c1e5c5c5c!2sDagsboro%2C%20DE!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
};

export default function LocationMap({ locationName, locationSlug, county, embedUrl, address }: LocationMapProps) {
  const mapUrl = embedUrl || LOCATION_MAPS[locationSlug.toLowerCase()] || LOCATION_MAPS['dover'];
  
  return (
    <section className="location-map-section py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serving {locationName}, Delaware
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proudly serving homeowners in {locationName} and throughout {county} with professional 
            home improvement services you can trust.
          </p>
        </div>
        
        <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`HomeMax Premier Era Innovations - ${locationName}, Delaware Location`}
            aria-label={`Map showing HomeMax Premier Era Innovations service area in ${locationName}, Delaware`}
          />
        </div>
        
        {address && (
          <div className="mt-8 text-center">
            <div className="inline-block bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Service Area
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">{locationName}, {address.state}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Serving {county}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

