import React from 'react'

export default function LocationMap() {
  return (
    <section className="location-map-section py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Us in Seaford, Delaware
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Located in Seaford, DE, we're proud to serve the Delmarva Peninsula 
            and surrounding communities with exceptional electrical and remodeling services.
          </p>
        </div>
        
        <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98566.88847286745!2d-75.68932799999999!3d38.641362899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8b1c7f0e7f8e3%3A0x7c3e5e5c1e5c5c5c!2sSeaford%2C%20DE!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HomeMax Premier Era Innovations - Seaford, Delaware Location"
            aria-label="Map showing Seaford, Delaware location"
          />
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Contact Information
            </h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Seaford, Delaware</span>
              </p>
              <p className="text-sm text-gray-500">
                Serving Sussex County and the Greater Delmarva Region
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

