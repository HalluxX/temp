import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgConcreteSolution from '@/assets/images/concrete-solution.webp';

export default function BridgevilleServicesPage() {  
  return (
    <>
      <main className="grow">
        <Hero image={imgConcreteSolution} title='HOME SERVICES IN BRIDGEVILLE, DE' />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Home Services in Bridgeville</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Complete Home Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Electrical installation and repair</li>
                    <li>• Home remodeling and renovation</li>
                    <li>• Energy efficiency solutions</li>
                    <li>• Generator installation and service</li>
                    <li>• Safety and security systems</li>
                    <li>• Restoration and repair services</li>
                    <li>• Maintenance subscriptions</li>
                    <li>• Custom home improvements</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Small Town Service</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Personalized customer service</li>
                    <li>• Community-focused approach</li>
                    <li>• Local expertise and knowledge</li>
                    <li>• Reliable and trustworthy</li>
                    <li>• Competitive small-town pricing</li>
                    <li>• Long-term customer relationships</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Serving Bridgeville</h3>
                <p className="text-gray-700">
                  Bridgeville is a charming small town in Sussex County, Delaware, known for its tight-knit community and annual Apple Scrapple Festival. 
                  HomeMax is committed to providing Bridgeville residents with reliable, professional home services that support the community's 
                  quality of life and property values.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactUs topic='BRIDGEVILLE SERVICES' />
      </main>
    </>
  )
}
