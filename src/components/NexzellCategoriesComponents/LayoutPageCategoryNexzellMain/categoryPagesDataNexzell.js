// ============================================================
//  categoryPagesDataNexzell.js
//  ONE data file for ALL category detail pages.
//  Layout is the same for every page – only this content changes.
//  Images below are random placeholders (picsum). Replace any
//  `pic("seed", w, h)` call with your own image URL later.
// ============================================================

const pic = (seed, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;
const avatar = (n) => `https://i.pravatar.cc/120?img=${n}`;

/* Shared testimonial people (same people on every page, brand/role changes) */
const buildTestimonials = (cfg) => [
  {
    name: "Sarah Ahmed",
    role: `Founder, ${cfg.brands[0]}`,
    avatar: avatar(47),
    quote: cfg.quotes[0],
  },
  {
    name: "James Carter",
    role: `CEO, ${cfg.brands[1]}`,
    avatar: avatar(12),
    quote: "Our sales grew 3x within 6 months thanks to Nexzell's inventory and marketing tools.",
  },
  {
    name: "Daniel Kim",
    role: `Owner, ${cfg.brands[2]}`,
    avatar: avatar(33),
    quote: "From product variants to global shipping, everything works smoothly. Highly recommended!",
  },
];

/* Factory – builds a full page object from a small config */
const buildIndustry = (c) => ({
  slug: c.slug,
  badge: c.badge,
  name: c.name,

  hero: {
    title: `Grow Your ${c.name} Business`,
    highlight: "with Nexzell",
    description: c.heroDescription,
    primaryCta: { label: "Start Free Demo", href: "/consultation" },
    secondaryCta: { label: "Explore Features", href: "/features" },
    image: pic(`${c.slug}-hero`, 1800, 1000),
    revenue: { prefix: "$", value: c.revenue, growth: c.growth },
    stats: [
      { icon: "Tag", value: c.brandCount.value, suffix: c.brandCount.suffix, label: `${c.name} Brands` },
      { icon: "Users", value: 95, suffix: "%", label: "Client Satisfaction" },
      { icon: "TrendingUp", value: 3, suffix: "x", label: "Business Growth" },
    ],
    topCategories: c.topCategories,
  },

  builtFor: {
    badge: `BUILT FOR ${c.name.toUpperCase()} BRANDS`,
    title: `Power Your ${c.name} Store with Advanced`,
    highlight: "Commerce Tools",
    description: `From product catalogs to seamless checkout, Nexzell gives you everything you need to sell ${c.sellNoun} online, manage inventory, and deliver exceptional shopping experiences.`,
    checklist: [
      `Product Variants (${c.variantList})`,
      "Inventory & Order Management",
      "Flexible Pricing & Promotions",
      "Multiple Payment & Delivery Options",
    ],
    cta: { label: "Explore Dashboard", href: "/product" },
    image: pic(`${c.slug}-built`, 1400, 1000),
    product: {
      name: c.product.name,
      price: c.product.price,
      rating: 5,
      colors: c.product.colors,
      optionLabel: c.product.optionLabel,
      options: c.product.options,
      thumbs: [
        pic(`${c.slug}-thumb-1`, 240, 240),
        pic(`${c.slug}-thumb-2`, 240, 240),
        pic(`${c.slug}-thumb-3`, 240, 240),
        pic(`${c.slug}-thumb-4`, 240, 240),
      ],
    },
  },

  features: {
    badge: "INDUSTRY-FOCUSED FEATURES",
    title: `Everything You Need to Grow Your ${c.name} Business`,
    cards: [
      {
        id: "variants",
        type: "image",
        title: "Product Variants",
        description: c.variantsCardDesc,
        image: pic(`${c.slug}-feature-variants`, 700, 460),
      },
      {
        id: "inventory",
        type: "image",
        title: "Inventory Management",
        description: "Track stock across warehouses and locations.",
        image: pic(`${c.slug}-feature-inventory`, 700, 460),
      },
      {
        id: "marketing",
        type: "promo",
        title: "Marketing & Promotions",
        description: "Run seasonal campaigns, discounts and loyalty programs.",
        image: pic(`${c.slug}-feature-marketing`, 700, 460),
        promo: { small: c.promoSmall, big: "50%", tail: "OFF" },
      },
      {
        id: "storefront",
        type: "image",
        title: "Custom Storefronts",
        description: `Create stunning, conversion-focused ${c.storeWord} stores.`,
        image: pic(`${c.slug}-feature-storefront`, 700, 460),
      },
      {
        id: "global",
        type: "map",
        title: "Global Selling",
        description: "Sell in multiple countries with multi-currency support.",
      },
      {
        id: "analytics",
        type: "chart",
        title: "Analytics & Reports",
        description: "Get real-time insights to grow your brand.",
      },
    ],
  },

  advantage: {
    badge: "THE NEXZELL ADVANTAGE",
    title: "More Than an Ecommerce Platform – A Growth Partner",
    description: c.advantageDescription,
    checklist: [
      c.channelItem,
      "Global Shipping & Fulfillment",
      "Flexible Pricing & Payment Solutions",
      "Dedicated Support for Your Business",
    ],
    cta: { label: `Grow Your ${c.name} Brand`, href: "/consultation" },
    image: pic(`${c.slug}-advantage`, 1400, 1000),
    stats: [
      { icon: "BarChart3", value: 32, prefix: "+", suffix: "%", label: "Sales Growth" },
      { icon: "UserCheck", value: 98, suffix: "%", label: "Customer Retention" },
    ],
  },

  testimonials: {
    badge: `TRUSTED BY LEADING ${c.name.toUpperCase()} BRANDS`,
    title: "Real Businesses. Real Growth.",
    subtitle: `Join thousands of ${c.joinLabel} brands growing with Nexzell.`,
    items: buildTestimonials(c),
  },

  cta: {
    title: `Ready to Take Your ${c.name} Brand`,
    highlight: "Global?",
    description: `Start your journey with Nexzell today and build a stronger, more profitable ${c.joinLabel} business.`,
    primary: { label: "Book a Free Demo", href: "/consultation" },
    secondary: { label: "Talk to Our Experts", href: "/contact-us" },
    image: pic(`${c.slug}-cta`, 1600, 800),
  },
});

/* ------------------------------------------------------------
   THE 6 CATEGORY PAGES
   slug here MUST match the link used in the cards component.
------------------------------------------------------------ */
export const categoryPagesDataNexzell = {
  "furniture-home": buildIndustry({
    slug: "furniture-home",
    badge: "FURNITURE & HOME",
    name: "Furniture",
    joinLabel: "furniture and home",
    heroDescription:
      "From elegant furniture to home décor and lifestyle essentials, Nexzell gives you a complete commerce platform to manage products, orders, customers, and fulfillment — all in one place.",
    revenue: 684230,
    growth: "+ 28%",
    brandCount: { value: 120, suffix: "+" },
    topCategories: [
      { label: "Living Room", icon: "Sofa" },
      { label: "Bedroom", icon: "BedDouble" },
      { label: "Office", icon: "Briefcase" },
      { label: "Outdoor", icon: "Trees" },
      { label: "Décor & Lighting", icon: "Lamp" },
    ],
    sellNoun: "furniture",
    variantList: "Size, Color, Material",
    variantsCardDesc: "Manage sizes, colors, materials and collections.",
    promoSmall: "SALE",
    storeWord: "furniture",
    product: {
      name: "Modern Sofa",
      price: "$899",
      colors: ["#f5a623", "#e6e6e6", "#1b1b1b", "#2f7f7a"],
      optionLabel: "Size",
      options: ["2 Seater", "3 Seater", "L-Shape"],
    },
    advantageDescription:
      "Whether you're a furniture retailer, home décor brand or multi-store enterprise, Nexzell helps you reach more customers, manage your operations efficiently, and scale faster.",
    channelItem: "Multi-channel Selling (Web, Marketplaces)",
    brands: ["Modern Living Co.", "HomeStyle Brands", "Urban Decor"],
    quotes: [
      "Nexzell helped us scale our online furniture store with ease. The platform is powerful and simple to use.",
    ],
  }),

  "fashion-apparel": buildIndustry({
    slug: "fashion-apparel",
    badge: "FASHION & APPAREL",
    name: "Fashion",
    joinLabel: "fashion",
    heroDescription:
      "Launch, manage and scale your fashion brand with a powerful commerce platform built for modern retail. From product variants to global sales — everything you need in one place.",
    revenue: 248930,
    growth: "+ 30%",
    brandCount: { value: 12, suffix: "K+" },
    topCategories: [
      { label: "Women's Wear", icon: "Shirt" },
      { label: "Men's Wear", icon: "Shirt" },
      { label: "Accessories", icon: "Glasses" },
      { label: "Activewear", icon: "Dumbbell" },
      { label: "Kids' Fashion", icon: "Baby" },
    ],
    sellNoun: "fashion",
    variantList: "Size, Color, Material",
    variantsCardDesc: "Manage sizes, colors, materials and collections.",
    promoSmall: "SALE",
    storeWord: "fashion",
    product: {
      name: "Premium Hoodie",
      price: "$129",
      colors: ["#4caf7d", "#2f4f4f", "#3b3b3b"],
      optionLabel: "Size",
      options: ["S", "M", "L", "3L"],
    },
    advantageDescription:
      "Whether you're a D2C fashion brand or a multi-store retailer, Nexzell helps you reach more customers, manage your operations efficiently, and scale faster.",
    channelItem: "Multi-channel Selling (Web, Mobile, Marketplaces)",
    brands: ["StyleCraft", "Urban Threads", "Moda Line"],
    quotes: [
      "Nexzell helped us scale our online fashion store with ease. The platform is powerful and simple to use.",
    ],
  }),

  "electronics-gadgets": buildIndustry({
    slug: "electronics-gadgets",
    badge: "ELECTRONICS & GADGETS",
    name: "Electronics",
    joinLabel: "electronics",
    heroDescription:
      "Launch, manage and scale your electronics brand with a powerful commerce platform built for modern retailers. From product variants to global sales — everything you need in one place.",
    revenue: 684230,
    growth: "+ 28%",
    brandCount: { value: 10, suffix: "K+" },
    topCategories: [
      { label: "Smartphones", icon: "Smartphone" },
      { label: "Laptops & Computers", icon: "Laptop" },
      { label: "Audio & Headphones", icon: "Headphones" },
      { label: "Cameras & Accessories", icon: "Camera" },
      { label: "Smart Home Devices", icon: "Home" },
      { label: "Gaming & Consoles", icon: "Gamepad2" },
    ],
    sellNoun: "electronics",
    variantList: "Color, Storage, Model",
    variantsCardDesc: "Manage models, colors, storage options and bundles.",
    promoSmall: "UP TO",
    storeWord: "electronics",
    product: {
      name: "Wireless Headphones",
      price: "$199",
      colors: ["#5b6b8c", "#9bb7e8", "#d9d9d9", "#8c6bd9"],
      optionLabel: "Storage",
      options: ["64GB", "128GB", "256GB"],
    },
    advantageDescription:
      "Whether you're an electronics retailer, gadget brand or multi-store enterprise, Nexzell helps you reach more customers, manage your operations efficiently, and scale faster.",
    channelItem: "Multi-channel Selling (Web, Marketplaces)",
    brands: ["TechWorld", "GadgetHub", "ElectroMart"],
    quotes: [
      "Nexzell helped us scale our online electronics store with ease. The platform is powerful and simple to use.",
    ],
  }),

  "beauty-personal-care": buildIndustry({
    slug: "beauty-personal-care",
    badge: "BEAUTY & PERSONAL CARE",
    name: "Beauty",
    joinLabel: "beauty and personal care",
    heroDescription:
      "Launch, manage and scale your beauty brand with a powerful commerce platform built for modern retailers. From product variants to global sales — everything you need in one place.",
    revenue: 684230,
    growth: "+ 28%",
    brandCount: { value: 8, suffix: "K+" },
    topCategories: [
      { label: "Skincare", icon: "Droplets" },
      { label: "Makeup", icon: "Palette" },
      { label: "Hair Care", icon: "Scissors" },
      { label: "Fragrances", icon: "Flower2" },
      { label: "Personal Care", icon: "Sparkles" },
      { label: "Beauty Tools & Accessories", icon: "Brush" },
    ],
    sellNoun: "beauty products",
    variantList: "Size, Color, Shade",
    variantsCardDesc: "Manage sizes, colors, shades and collections.",
    promoSmall: "UP TO",
    storeWord: "beauty",
    product: {
      name: "Hydrating Face Serum",
      price: "$49.00",
      colors: ["#d98c85", "#f2d9c9", "#d9847d", "#c9605f"],
      optionLabel: "Size",
      options: ["30ml", "50ml", "100ml"],
    },
    advantageDescription:
      "Whether you're a skincare brand, cosmetics retailer or personal care business, Nexzell helps you reach more customers, manage your operations efficiently, and scale faster.",
    channelItem: "Multi-channel Selling (Web, Marketplaces)",
    brands: ["GlowBeauty", "PureSkin", "BeautyNest"],
    quotes: [
      "Nexzell helped us scale our online beauty store with ease. The platform is powerful and simple to use.",
    ],
  }),

  "sports-outdoors": buildIndustry({
    slug: "sports-outdoors",
    badge: "SPORTS & OUTDOORS",
    name: "Sports",
    joinLabel: "sports and outdoor",
    heroDescription:
      "Launch, manage and scale your sports and outdoor brand with a powerful commerce platform built for modern retailers. From product variants to global sales — everything you need in one place.",
    revenue: 684230,
    growth: "+ 28%",
    brandCount: { value: 15, suffix: "K+" },
    topCategories: [
      { label: "Sports Shoes", icon: "Footprints" },
      { label: "Activewear", icon: "Shirt" },
      { label: "Outdoor Gear", icon: "Backpack" },
      { label: "Fitness Equipment", icon: "Dumbbell" },
      { label: "Sports Accessories", icon: "Watch" },
      { label: "Camping & Hiking", icon: "Tent" },
    ],
    sellNoun: "sports and outdoor products",
    variantList: "Size, Color, Model",
    variantsCardDesc: "Manage sizes, colors, models and collections.",
    promoSmall: "UP TO",
    storeWord: "sports",
    product: {
      name: "Running Shoes",
      price: "$129.00",
      colors: ["#dcdcdc", "#2d6f6f", "#1f4e8c", "#e8643c"],
      optionLabel: "Size",
      options: ["7", "8", "9", "10"],
    },
    advantageDescription:
      "Whether you're a sports retailer, outdoor gear brand or fitness enterprise, Nexzell helps you reach more customers, manage your operations efficiently, and scale faster.",
    channelItem: "Multi-channel Selling (Web, Marketplaces)",
    brands: ["RunPeak", "ActiveWorld", "SportifyCo"],
    quotes: [
      "Nexzell helped us scale our online sports store with ease. The platform is powerful and simple to use.",
    ],
  }),

  "toys-kids": buildIndustry({
    slug: "toys-kids",
    badge: "TOYS & KIDS",
    name: "Toys & Kids",
    joinLabel: "toys and kids",
    heroDescription:
      "Launch, manage and scale your toys and kids brand with a powerful commerce platform built for modern retailers. From product variants to global sales — everything you need in one place.",
    revenue: 684230,
    growth: "+ 28%",
    brandCount: { value: 6, suffix: "K+" },
    topCategories: [
      { label: "Toys & Games", icon: "Puzzle" },
      { label: "Educational Toys", icon: "GraduationCap" },
      { label: "Baby Care", icon: "Baby" },
      { label: "Kids Apparel", icon: "Shirt" },
      { label: "Outdoor Play", icon: "Bike" },
      { label: "Kids Accessories", icon: "Backpack" },
    ],
    sellNoun: "toys, kids apparel, and baby products",
    variantList: "Age, Color, Style",
    variantsCardDesc: "Manage age groups, colors, styles and collections.",
    promoSmall: "UP TO",
    storeWord: "toys and kids",
    product: {
      name: "Wooden Toy Train",
      price: "$29.99",
      colors: ["#d93636", "#3aa0d9", "#f2b824", "#e9a89b"],
      optionLabel: "Age Group",
      options: ["0-2", "3-5", "6-8", "9+"],
    },
    advantageDescription:
      "Whether you're a toy retailer, kids apparel brand or baby care business, Nexzell helps you reach more customers, manage your operations efficiently, and scale faster.",
    channelItem: "Multi-channel Selling (Web, Marketplaces)",
    brands: ["PlayNest", "KiddoWorld", "LittleJoy"],
    quotes: [
      "Nexzell helped us scale our online toys store with ease. The platform is powerful and simple to use.",
    ],
  }),
};

export const categorySlugsNexzell = Object.keys(categoryPagesDataNexzell);