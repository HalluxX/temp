import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgBroadBand from '@/assets/images/broadband.webp';

export default function KitchenRemodelingServicePage() {  
  return (
    <>
      <main className="grow">
        <Hero image={imgBroadBand} title='KITCHEN REMODELING' />
        
        {/* Service Details Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Kitchen Renovation Services</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Kitchen Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Custom cabinet installation</li>
                    <li>• Countertop installation (granite, quartz, marble)</li>
                    <li>• Flooring installation and refinishing</li>
                    <li>• Electrical and plumbing updates</li>
                    <li>• Lighting design and installation</li>
                    <li>• Appliance installation</li>
                    <li>• Backsplash installation</li>
                    <li>• Complete kitchen design</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Why Choose HomeMax</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Full-service design and build</li>
                    <li>• Licensed contractors and electricians</li>
                    <li>• Quality materials and workmanship</li>
                    <li>• Project management from start to finish</li>
                    <li>• Competitive pricing and financing options</li>
                    <li>• Local Delaware expertise</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">1</div>
                    <h4 className="font-semibold">Design Consultation</h4>
                    <p className="text-sm text-gray-600">Free in-home consultation and design planning</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">2</div>
                    <h4 className="font-semibold">Material Selection</h4>
                    <p className="text-sm text-gray-600">Choose from premium materials and finishes</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">3</div>
                    <h4 className="font-semibold">Professional Installation</h4>
                    <p className="text-sm text-gray-600">Expert installation with quality guarantee</p>
                  </div>
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

        <ContactUs topic='KITCHEN REMODELING' />
      </main>
    </>
  )
}
