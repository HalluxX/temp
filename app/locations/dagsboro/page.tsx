import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'

import imgSpecialty from '@/assets/images/speciality.webp';

export default function DagsboroServicesPage() {  
  return (
    <>
      <main className="grow">
        <Hero image={imgSpecialty} title='HOME SERVICES IN DAGSBORO, DE' />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Home Services in Dagsboro</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Dagsboro Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Complete electrical services</li>
                    <li>• Home remodeling and renovation</li>
                    <li>• Energy efficiency solutions</li>
                    <li>• Generator installation</li>
                    <li>• Safety and security systems</li>
                    <li>• Maintenance subscriptions</li>
                    <li>• Emergency repair services</li>
                    <li>• Custom home improvements</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Understanding of local building codes</li>
                    <li>• Coastal weather considerations</li>
                    <li>• Quick response times</li>
                    <li>• Established local relationships</li>
                    <li>• Community-focused service</li>
                    <li>• Reliable and trustworthy</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">About Dagsboro</h3>
                <p className="text-gray-700">
                  Dagsboro is a small town in Sussex County, Delaware, offering a quiet, rural lifestyle while being close to Delaware's beaches. 
                  HomeMax provides comprehensive home services to help Dagsboro residents maintain and improve their properties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities List with Interactive Map */}
        <LocationCapabilitiesList 
          location="dagsboro" 
          locationName="Dagsboro"
        />

        <ContactUs topic='DAGSBORO SERVICES' />
      </main>
    </>
  )
}
