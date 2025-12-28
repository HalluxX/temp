import Hero from '@/components/ui/capabilities/hero'

export default function LocationsLayout() {  
  return (
    <>
      <main className="grow">
        <Hero />
        
        {/* Locations Grid Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Service Areas in Delaware</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Millsboro', slug: 'millsboro' },
                  { name: 'Lewes', slug: 'lewes' },
                  { name: 'Dover', slug: 'dover' },
                  { name: 'Smyrna', slug: 'smyrna' },
                  { name: 'Dagsboro', slug: 'dagsboro' },
                  { name: 'Laurel', slug: 'laurel' },
                  { name: 'Milford', slug: 'milford' },
                  { name: 'Bridgeville', slug: 'bridgeville' }
                ].map((location) => (
                  <a 
                    key={location.slug}
                    href={`/locations/${location.slug}`}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{location.name}, DE</h3>
                    <p className="text-gray-600 text-sm">Professional home services and electrical solutions</p>
                    <div className="mt-4 text-red-600 font-medium">Learn More →</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
