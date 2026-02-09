import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'

import imgUndergroundUtility from '@/assets/images/underground-utility.webp';

export default function LewesServicesPage() {  
  return (
    <>
      <main className="grow">
        <Hero image={imgUndergroundUtility} title='HOME SERVICES IN LEWES, DE' />
        
        {/* Local Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Home Services in Lewes</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Coastal Home Protection</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Storm-resistant electrical systems</li>
                    <li>• Whole-house surge protection</li>
                    <li>• Generator installation for outages</li>
                    <li>• Weatherproofing services</li>
                    <li>• Saltwater-resistant materials</li>
                    <li>• Emergency restoration services</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Historic Home Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Electrical system modernization</li>
                    <li>• Historic preservation compliance</li>
                    <li>• Energy efficiency upgrades</li>
                    <li>• Custom millwork and restoration</li>
                    <li>• Period-appropriate fixtures</li>
                    <li>• Careful renovation planning</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Modern Upgrades</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Smart home technology</li>
                    <li>• Energy-efficient lighting</li>
                    <li>• Modern kitchen and bath</li>
                    <li>• Home automation systems</li>
                    <li>• Security system installation</li>
                    <li>• EV charging stations</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Lewes: Where History Meets Modern Living</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Historic District Expertise</h4>
                    <p className="text-gray-700 mb-4">
                      Lewes is Delaware's "First Town," and we understand the unique requirements for working on historic properties 
                      while maintaining their character and charm.
                    </p>
                    
                    <h4 className="font-semibold mb-2">Coastal Resilience</h4>
                    <p className="text-gray-700">
                      Our coastal expertise helps protect your Lewes home from salt air, storms, and flooding with appropriate 
                      materials and installation techniques.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tourism & Rental Properties</h4>
                    <p className="text-gray-700 mb-4">
                      We help vacation rental owners maintain their properties with reliable electrical systems, efficient HVAC, 
                      and attractive interior spaces that guests love.
                    </p>
                    
                    <h4 className="font-semibold mb-2">Year-Round Service</h4>
                    <p className="text-gray-700">
                      Whether you're a year-round resident or seasonal visitor, we provide consistent, reliable service 
                      throughout the year.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">About Lewes</h3>
                <p className="text-gray-700">
                  Founded in 1631, Lewes is a charming coastal town at the mouth of the Delaware Bay. Known for its historic district, 
                  beautiful beaches, and vibrant downtown, Lewes attracts both permanent residents and seasonal visitors. HomeMax understands 
                  the unique needs of this historic coastal community and provides services that respect its heritage while embracing modern convenience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities List with Interactive Map */}
        <LocationCapabilitiesList 
          location="lewes" 
          locationName="Lewes"
        />

        <ContactUs topic='LEWES SERVICES' />
      </main>
    </>
  )
}
