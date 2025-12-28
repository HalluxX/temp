import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgElectricPower from '@/assets/images/electric-power.webp';

export default function FixturesServicePage() {  
  return (
    <>
      <main className="grow">
        <Hero image={imgElectricPower} title='FIXTURE INSTALLATION & REPAIR' />
        
        {/* Service Details Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Fixture Services</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Light fixture installation</li>
                    <li>• Ceiling fan installation</li>
                    <li>• Chandelier mounting</li>
                    <li>• Fixture repair and maintenance</li>
                    <li>• Electrical safety inspections</li>
                    <li>• Custom fixture solutions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Why Choose HomeMax</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Licensed and insured electricians</li>
                    <li>• Quality workmanship guarantee</li>
                    <li>• Competitive pricing</li>
                    <li>• Same-day service available</li>
                    <li>• Free estimates</li>
                    <li>• Local Delaware expertise</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                <p className="text-gray-700">
                  We proudly serve Millsboro, Lewes, Dover, Smyrna, Dagsboro, Laurel, Milford, Bridgeville, and surrounding Delaware communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactUs topic='FIXTURE SERVICES' />
      </main>
    </>
  )
}
