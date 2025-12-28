import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgBroadBand from '@/assets/images/broadband.webp';

export default function SmyrnaServicesPage() {  
  return (
    <>
      <main className="grow">
        <Hero image={imgBroadBand} title='HOME SERVICES IN SMYRNA, DE' />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Home Services in Smyrna</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Smyrna Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Electrical installation and repair</li>
                    <li>• Kitchen and bathroom remodeling</li>
                    <li>• Energy efficiency upgrades</li>
                    <li>• Generator installation and service</li>
                    <li>• Smart home technology</li>
                    <li>• Safety system installation</li>
                    <li>• HVAC services</li>
                    <li>• Flooring and tile work</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Why Choose HomeMax in Smyrna</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Local Delaware expertise</li>
                    <li>• Licensed and insured contractors</li>
                    <li>• Quality workmanship guarantee</li>
                    <li>• Competitive pricing</li>
                    <li>• Emergency service available</li>
                    <li>• Free estimates and consultations</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Serving Smyrna and Surrounding Areas</h3>
                <p className="text-gray-700">
                  Smyrna is a thriving community in Kent County, Delaware, known for its small-town charm and growing residential areas. 
                  HomeMax is proud to serve Smyrna residents with reliable, professional home services that enhance comfort and property value.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactUs topic='SMYRNA SERVICES' />
      </main>
    </>
  )
}
