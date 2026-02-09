export const metadata = {
  title: 'HomeMax Premier Era Innovations | Dover, Delaware | Electrical & Remodeling Services',
  description: 'Leading electrical, remodeling, and generator installation services in Dover, Delaware. Located at 8 The Green, Dover DE 19901. Serving Kent County and the Greater Delmarva Peninsula with expert craftsmanship and reliable service.',
}

import Hero from '@/components/ui/home/hero'
import BetterFeature from '@/components/ui/home/better-feature'
import Career from '@/components/ui/home/career'
import News from '@/components/ui/home/news'
import LocationMap from '@/components/ui/home/location-map'

export default function Home() {
  return (
    <>
      <Hero />
      <BetterFeature />
      {/* <Career /> */}
      <News />
      <LocationMap />
    </>
  )
}
