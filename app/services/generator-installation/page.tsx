import Hero from '@/components/ui/capabilities-service/hero'
import ContactUs from '@/components/ui/capabilities-service/contactus'

import imgEngineering from '@/assets/images/engineering.webp';

export default function GeneratorInstallationServicePage() {  
  return (
    <>
      <main className="grow">
        <Hero image={imgEngineering} title='GENERATOR INSTALLATION & SERVICE' />
        
        {/* Service Details Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Reliable Backup Power Solutions</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Generator Services</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Standby generator installation</li>
                    <li>• Portable generator setup</li>
                    <li>• Generator maintenance and service</li>
                    <li>• Emergency repair services</li>
                    <li>• Load calculation and sizing</li>
                    <li>• Automatic transfer switch installation</li>
                    <li>• Fuel system installation (natural gas/propane)</li>
                    <li>• Generator testing and commissioning</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Generator Types</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Standby Generators:</strong> Automatic backup power</li>
                    <li>• <strong>Portable Generators:</strong> Flexible power solutions</li>
                    <li>• <strong>Whole House:</strong> Complete home backup</li>
                    <li>• <strong>Commercial:</strong> Business continuity solutions</li>
                    <li>• <strong>Natural Gas:</strong> Clean, reliable fuel source</li>
                    <li>• <strong>Propane:</strong> Efficient backup option</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-red-800">Why You Need a Generator in Delaware</h3>
                <p className="text-gray-700 mb-4">
                  Delaware's coastal location makes it susceptible to severe weather events including hurricanes, nor'easters, and thunderstorms that can cause extended power outages.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Protect your family during emergencies</li>
                  <li>• Keep essential appliances running</li>
                  <li>• Maintain home security systems</li>
                  <li>• Preserve food and medications</li>
                  <li>• Enable remote work capabilities</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                <p className="text-gray-700">
                  We proudly serve Millsboro, Lewes, Dover, Smyrna, Dagsboro, Laurel, Milford, Bridgeville, and surrounding Delaware communities with professional generator installation and service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactUs topic='GENERATOR SERVICES' />
      </main>
    </>
  )
}
