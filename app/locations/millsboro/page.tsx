import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'

import imgElectricPower from '@/assets/images/electric-power.webp';

export default function MillsboroServicesPage() {  
  return (
    <>
      <main className="grow">
        <Hero image={imgElectricPower} title='HOME SERVICES IN MILLSBORO, DE' />
        
        {/* Local Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Home Services in Millsboro</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Electrical Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Fixture installation and repair</li>
                    <li>• Electrical panel upgrades</li>
                    <li>• Wiring and rewiring</li>
                    <li>• Outlet and switch installation</li>
                    <li>• Electrical safety inspections</li>
                    <li>• Generator installation</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Remodeling Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Kitchen remodeling</li>
                    <li>• Bathroom renovations</li>
                    <li>• Basement finishing</li>
                    <li>• Flooring installation</li>
                    <li>• Interior and exterior painting</li>
                    <li>• Custom carpentry</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Energy Efficiency</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Window installation</li>
                    <li>• Attic insulation</li>
                    <li>• Energy audits</li>
                    <li>• Smart home installation</li>
                    <li>• LED lighting upgrades</li>
                    <li>• HVAC services</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-red-800">Why Choose HomeMax in Millsboro?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Local Expertise</h4>
                    <p className="text-gray-700 mb-4">
                      We understand Millsboro's unique needs, from coastal weather challenges to local building codes and regulations.
                    </p>
                    
                    <h4 className="font-semibold mb-2">Fast Response</h4>
                    <p className="text-gray-700">
                      Our local team provides quick response times for emergency services and routine maintenance throughout Millsboro and surrounding areas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quality Guarantee</h4>
                    <p className="text-gray-700 mb-4">
                      All our work comes with a comprehensive warranty and satisfaction guarantee. We stand behind our craftsmanship.
                    </p>
                    
                    <h4 className="font-semibold mb-2">Licensed & Insured</h4>
                    <p className="text-gray-700">
                      Fully licensed Delaware contractors with comprehensive insurance coverage for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">About Millsboro</h3>
                <p className="text-gray-700">
                  Millsboro is a growing community in Sussex County, Delaware, known for its small-town charm and proximity to Delaware's beautiful beaches. 
                  As the area continues to grow, HomeMax is proud to serve both longtime residents and newcomers with reliable, professional home services 
                  that enhance comfort, safety, and property value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities List with Interactive Map */}
        <LocationCapabilitiesList 
          location="millsboro" 
          locationName="Millsboro"
        />

        <ContactUs topic='MILLSBORO SERVICES' />
      </main>
    </>
  )
}
