// Single source of truth for Header + Footer links
// Place this file at: app/navData.js

export const productLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Integrations', href: '/integrations' },
  // Pricing is also a top-level header link, so it must not highlight "Product"
  { label: 'Pricing', href: '/pricing', skipParentActive: true },
];

export const solutionsLinks = [
  { label: 'For Startups', href: '/for-startups' },
  { label: 'For Growing Brands', href: '/for-growing-brands' },
  { label: 'For Enterprises', href: '/global-enterprise' },
  { label: 'Global Commerce', href: '/global-commerce' },
];

export const resourcesLinks = [
  { label: 'Blogs', href: '/blogs' },
  { label: 'Case Studies', href: '/case-studies' },
];

export const companyLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact', href: '/contact-us' },
];

// Header navigation (dropdown children come from the footer groups)
export const navLinks = [
  { href: '/product', label: 'Product', children: productLinks },
  { href: '/solutions', label: 'Solutions', children: solutionsLinks },
  { href: '/pricing', label: 'Pricing' },
  { href: '/resources', label: 'Resources', children: resourcesLinks },
  { href: '/about-us', label: 'About', children: companyLinks },
];

// Footer groups
export const footerLinkGroups = [
  { id: 'product', heading: 'Product', links: productLinks },
  { id: 'solutions', heading: 'Solutions', links: solutionsLinks },
  { id: 'resources', heading: 'Resources', links: resourcesLinks },
  { id: 'company', heading: 'Company', links: companyLinks },
];