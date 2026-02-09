import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'

import imgRenewables from '@/assets/images/renewables.webp';

export default function DoverServicesPage() {  
  return (
    <>
      <main className="grow">
        <Hero image={imgRenewables} title='HOME SERVICES IN DOVER, DE' />
        
        {/* Local Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Home Services in Dover</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Residential Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Complete electrical services</li>
                    <li>• Kitchen and bathroom remodeling</li>
                    <li>• Basement finishing</li>
                    <li>• Energy efficiency upgrades</li>
                    <li>• Generator installation</li>
                    <li>• Smart home automation</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Government & Commercial</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Government facility maintenance</li>
                    <li>• Commercial electrical systems</li>
                    <li>• Office building services</li>
                    <li>• Emergency repair services</li>
                    <li>• Code compliance inspections</li>
                    <li>• Preventive maintenance programs</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Historic Properties</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Historic home restoration</li>
                    <li>• Electrical system upgrades</li>
                    <li>• Period-appropriate solutions</li>
                    <li>• Preservation-compliant work</li>
                    <li>• Energy efficiency improvements</li>
                    <li>• Custom restoration services</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-green-800">Serving Delaware's Capital City</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Government Hub Expertise</h4>
                    <p className="text-gray-700 mb-4">
                      As Delaware's capital, Dover has unique needs. We work with government facilities, historic buildings, 
                      and modern residential developments throughout the city.
                    </p>
                    
                    <h4 className="font-semibold mb-2">Dover Air Force Base Area</h4>
                    <p className="text-gray-700">
                      We proudly serve military families and base housing with reliable electrical and home improvement services 
                      that meet military standards and timelines.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Growing Community</h4>
                    <p className="text-gray-700 mb-4">
                      Dover's growth brings new construction and renovation opportunities. We support both new developments 
                      and established neighborhoods with comprehensive services.
                    </p>
                    
                    <h4 className="font-semibold mb-2">Educational Institutions</h4>
                    <p className="text-gray-700">
                      From Delaware State University to local schools, we provide electrical and maintenance services 
                      to educational facilities throughout Dover.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibent mb-4">About Dover</h3>
                <p className="text-gray-700">
                  Dover, Delaware's capital city and second-largest city, is home to government offices, Dover Air Force Base, 
                  Delaware State University, and a growing residential community. With its mix of historic buildings, government 
                  facilities, and modern developments, Dover requires versatile service providers who understand diverse needs. 
                  HomeMax is proud to serve this important Delaware community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities List with Interactive Map */}
        <LocationCapabilitiesList 
          location="dover" 
          locationName="Dover"
        />

        <ContactUs topic='DOVER SERVICES' />
      </main>
    </>
  )
}
