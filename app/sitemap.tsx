const URL = 'https://homemaxrg.com'

const LOCATIONS = [
  'bridgeville',
  'dagsboro',
  'dover',
  'laurel',
  'lewes',
  'milford',
  'millsboro',
  'smyrna',
] as const

const CAPABILITIES = [
  'electric-power',
  'energy-efficiency',
  'safety',
  'interior-remodeling',
  'exterior-remodeling',
  'restoration',
  'generators',
  'maintenance-subscriptions',
] as const

export default async function sitemap() {
  const coreRoutes = [
    '',
    '/culture',
    '/capabilities',
    '/contact',
    '/blog',
    '/capabilities-catalog',
    '/capabilities/electric-power',
    '/capabilities/energy-efficiency',
    '/capabilities/safety',
    '/capabilities/interior-remodeling',
    '/capabilities/exterior-remodeling',
    '/capabilities/restoration',
    '/capabilities/generators',
    '/capabilities/maintenance-subscriptions',
    '/culture/leadership',
    '/aboutus',
    '/diversity-inclusion',
    '/locations',
  ]

  const locationRoutes = LOCATIONS.map((location) => `/locations/${location}`)

  const locationCapabilityRoutes = LOCATIONS.flatMap((location) =>
    CAPABILITIES.map((capability) => `/locations/${location}/capabilities/${capability}`)
  )

  const routes = [...coreRoutes, ...locationRoutes, ...locationCapabilityRoutes].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return routes
}
