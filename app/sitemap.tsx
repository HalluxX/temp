const URL = "https://homemaxrg.com";

export default async function sitemap() {
  const routes = [
    // Core pages
    "",
    "/culture",
    "/capabilities",
    "/contact",
    "/capabilities-catalog",
    "/capabilities/electric-power",
    "/capabilities/energy-efficiency",
    "/capabilities/safety",
    "/capabilities/interior-remodeling",
    "/capabilities/exterior-remodeling",
    "/capabilities/restoration",
    "/capabilities/generators",
    "/capabilities/maintenance-subscriptions",
    "/culture/leadership",
    "/aboutus",
    "/diversity-inclusion",

    // Location index
    "/locations",

    // Location pages
    "/locations/bridgeville",
    "/locations/dagsboro",
    "/locations/dover",
    "/locations/laurel",
    "/locations/lewes",
    "/locations/milford",
    "/locations/millsboro",
    "/locations/smyrna",

    // Bridgeville capabilities
    "/locations/bridgeville/capabilities/electric-power",
    "/locations/bridgeville/capabilities/energy-efficiency",
    "/locations/bridgeville/capabilities/exterior-remodeling",
    "/locations/bridgeville/capabilities/generators",
    "/locations/bridgeville/capabilities/interior-remodeling",
    "/locations/bridgeville/capabilities/maintenance-subscriptions",
    "/locations/bridgeville/capabilities/restoration",
    "/locations/bridgeville/capabilities/safety",

    // Dagsboro capabilities
    "/locations/dagsboro/capabilities/electric-power",
    "/locations/dagsboro/capabilities/energy-efficiency",
    "/locations/dagsboro/capabilities/exterior-remodeling",
    "/locations/dagsboro/capabilities/generators",
    "/locations/dagsboro/capabilities/interior-remodeling",
    "/locations/dagsboro/capabilities/maintenance-subscriptions",
    "/locations/dagsboro/capabilities/restoration",
    "/locations/dagsboro/capabilities/safety",

    // Dover capabilities
    "/locations/dover/capabilities/electric-power",
    "/locations/dover/capabilities/energy-efficiency",
    "/locations/dover/capabilities/exterior-remodeling",
    "/locations/dover/capabilities/generators",
    "/locations/dover/capabilities/interior-remodeling",
    "/locations/dover/capabilities/maintenance-subscriptions",
    "/locations/dover/capabilities/restoration",
    "/locations/dover/capabilities/safety",

    // Laurel capabilities
    "/locations/laurel/capabilities/electric-power",
    "/locations/laurel/capabilities/energy-efficiency",
    "/locations/laurel/capabilities/exterior-remodeling",
    "/locations/laurel/capabilities/generators",
    "/locations/laurel/capabilities/interior-remodeling",
    "/locations/laurel/capabilities/maintenance-subscriptions",
    "/locations/laurel/capabilities/safety",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}