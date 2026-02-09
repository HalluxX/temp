import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'
import LocationCapabilitiesList from '@/components/ui/capabilities/location-capabilities-list'

import imgUtilityPerformance from '@/assets/images/utility-performance.webp';

export default function LaurelServicesPage() {  
  return (
    <>
      <main className="grow">
        <Hero image={imgUtilityPerformance} title='HOME SERVICES IN LAUREL, DE' />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Home Services in Laurel</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Comprehensive Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Electrical installation and repair</li>
                    <li>• Kitchen and bathroom remodeling</li>
                    <li>• Interior and exterior renovations</li>
                    <li>• Energy efficiency upgrades</li>
                    <li>• Generator installation and service</li>
                    <li>• Safety system installation</li>
                    <li>• Restoration services</li>
                    <li>• Maintenance programs</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Rural Community Focus</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Agricultural property services</li>
                    <li>• Outbuilding electrical work</li>
                    <li>• Well pump and irrigation systems</li>
                    <li>• Barn and workshop electrical</li>
                    <li>• Rural internet and connectivity</li>
                    <li>• Property maintenance services</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Serving Laurel's Community</h3>
                <p className="text-gray-700">
                  Laurel is a historic town in Sussex County, Delaware, with a strong agricultural heritage and growing residential community. 
                  HomeMax understands the unique needs of rural and suburban properties and provides reliable services to enhance your home and property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities List with Interactive Map */}
        <LocationCapabilitiesList 
          location="laurel" 
          locationName="Laurel"
        />

        <ContactUs topic='LAUREL SERVICES' />
      </main>
    </>
  )
}
