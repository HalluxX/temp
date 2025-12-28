import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgEngineering from '@/assets/images/engineering.webp';

export default function MilfordServicesPage() {  
  return (
    <>
      <main className="grow">
        <Hero image={imgEngineering} title='HOME SERVICES IN MILFORD, DE' />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Home Services in Milford</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Full-Service Solutions</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Complete electrical services</li>
                    <li>• Kitchen and bathroom remodeling</li>
                    <li>• Basement finishing and additions</li>
                    <li>• Energy efficiency improvements</li>
                    <li>• Generator installation and maintenance</li>
                    <li>• Smart home automation</li>
                    <li>• Safety and security systems</li>
                    <li>• Emergency repair services</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Milford Advantages</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Central Delaware location</li>
                    <li>• Historic and modern properties</li>
                    <li>• Residential and commercial services</li>
                    <li>• Established community relationships</li>
                    <li>• Quick response times</li>
                    <li>• Local building code expertise</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">About Milford</h3>
                <p className="text-gray-700">
                  Milford is a vibrant city straddling Kent and Sussex counties in Delaware, known for its historic downtown, growing business community, 
                  and diverse residential neighborhoods. HomeMax is proud to serve Milford's residents and businesses with comprehensive home services 
                  that support the community's continued growth and prosperity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactUs topic='MILFORD SERVICES' />
      </main>
    </>
  )
}
