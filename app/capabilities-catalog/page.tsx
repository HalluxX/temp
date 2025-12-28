import Search from '@/components/ui/capabilities-catalog/search';
import Offering from '@/components/ui/capabilities-catalog/offering';
import FindCareer from '@/components/ui/global/find-career';
import { CallToAction } from '@/components/utils';

export default function ContactLayout() {  

  return (
    <>
      <main className="grow">
        <Search />
        <Offering />
        
        {/* Call to Action Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <CallToAction variant="default" />
          </div>
        </section>
        
        {/* <FindCareer /> */}
      </main>
    </>
  )
}