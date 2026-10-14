// ============================================================
//  categoryPagesDataNexzell.js
//  ONE data file for ALL category detail pages.
//
//  HOW TO CHANGE IMAGES
//  --------------------
//  Every page has its own `images: { ... }` block.
//  Replace the value of any slot with your own image:
//
//     hero: "/images/furniture/hero.jpg"          <- file inside /public/images/furniture/
//     hero: "https://your-site.com/hero.jpg"      <- full URL
//
//  Right now every slot uses pic("seed", width, height), a random
//  placeholder. Just delete the pic(...) and write your own path.
//
//  Recommended sizes:
//     hero 1800x1000 | built 1400x1000 | thumbs 240x240 (x4)
//     featureVariants / featureInventory / featureMarketing /
//     featureStorefront 700x460 | advantage 1400x1000 | cta 1600x800
//     avatars 120x120 (x3)
// ============================================================

const pic = (seed, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;
const avatar = (n) => `https://i.pravatar.cc/120?img=${n}`;

const buildTestimonials = (cfg) => [
  {
    name: "Sarah Ahmed",
    role: `Founder, ${cfg.brands[0]}`,
    avatar: cfg.images.avatars[0],
    quote: cfg.quotes[0],
  },
  {
    name: "James Carter",
    role: `CEO, ${cfg.brands[1]}`,
    avatar: cfg.images.avatars[1],
    quote: "Our sales grew 3x within 6 months thanks to Nexzell's inventory and marketing tools.",
  },
  {
    name: "Daniel Kim",
    role: `Owner, ${cfg.brands[2]}`,
    avatar: cfg.images.avatars[2],
    quote: "From product variants to global shipping, everything works smoothly. Highly recommended!",
  },
];

/* Factory – builds a full page object from a config (images come from c.images) */
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
    image: c.images.hero,
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
    image: c.images.built,
    product: {
      name: c.product.name,
      price: c.product.price,
      rating: 5,
      colors: c.product.colors,
      optionLabel: c.product.optionLabel,
      options: c.product.options,
      thumbs: c.images.thumbs,
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
        image: c.images.featureVariants,
      },
      {
        id: "inventory",
        type: "image",
        title: "Inventory Management",
        description: "Track stock across warehouses and locations.",
        image: c.images.featureInventory,
      },
      {
        id: "marketing",
        type: "promo",
        title: "Marketing & Promotions",
        description: "Run seasonal campaigns, discounts and loyalty programs.",
        image: c.images.featureMarketing,
        promo: { small: c.promoSmall, big: "50%", tail: "OFF" },
      },
      {
        id: "storefront",
        type: "image",
        title: "Custom Storefronts",
        description: `Create stunning, conversion-focused ${c.storeWord} stores.`,
        image: c.images.featureStorefront,
      },
      {
        id: "global",
        type: "map",
        title: "Global Selling",
        description: "Sell in multiple countries with multi-currency support.",
        pins: c.mapPins,
      },
      {
        id: "analytics",
        type: "chart",
        title: "Analytics & Reports",
        description: "Get real-time insights to grow your brand.",
        chart: c.chart,
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
    image: c.images.advantage,
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
    image: c.images.cta,
  },
});

/* ------------------------------------------------------------
   THE 6 CATEGORY PAGES
   slug here MUST match the link used in the cards component.
------------------------------------------------------------ */
export const categoryPagesDataNexzell = {
  /* ====================== 1) FURNITURE & HOME ====================== */
  "furniture-home": buildIndustry({
    slug: "furniture-home",
    badge: "FURNITURE & HOME",
    name: "Furniture",
    joinLabel: "furniture and home",

    images: {
      hero: '/CategoryImages/NexzellFurnitureHome/NexzellFurnitureHomeSliderImage.png',
      built: '/CategoryImages/NexzellFurnitureHome/AdvancedCommerceTools.png ',
      thumbs: [
        '/CategoryImages/NexzellFurnitureHome/AdvancedCommerceToolsSelections1.jpg',
        '/CategoryImages/NexzellFurnitureHome/AdvancedCommerceToolsSelections2.jpg',
        '/CategoryImages/NexzellFurnitureHome/AdvancedCommerceToolsSelections3.jpg',
        '/CategoryImages/NexzellFurnitureHome/AdvancedCommerceToolsSelections4.jpg',
      ],
      featureVariants: '/CategoryImages/NexzellFurnitureHome/FurnitureBusinessNeeds1.png',
      featureInventory:'/CategoryImages/NexzellFurnitureHome/FurnitureBusinessNeeds2.png',
      featureMarketing: '/CategoryImages/NexzellFurnitureHome/FurnitureBusinessNeeds3.png',
      featureStorefront: '/CategoryImages/NexzellFurnitureHome/FurnitureBusinessNeeds4.png',
      advantage: '/CategoryImages/NexzellFurnitureHome/MoreThenGrowthNxzellFurniture.png',
      cta: '/CategoryImages/NexzellFurnitureHome/FurnitureHomeBottomCTABackground.png',
      avatars: [avatar(47), avatar(12), avatar(33)],
    },

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
    mapPins: [
      { name: "USA", lon: -100, lat: 39 },
      { name: "Italy", lon: 12.5, lat: 42 },
      { name: "UAE", lon: 54, lat: 24 },
      { name: "Vietnam", lon: 106, lat: 16 },
      { name: "Australia", lon: 134, lat: -26 },
    ],
    chart: {
      title: "Monthly Sales",
      prefix: "$",
      suffix: "K",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      values: [18, 24, 21, 33, 38, 35, 46],
    },
    brands: ["Modern Living Co.", "HomeStyle Brands", "Urban Decor"],
    quotes: [
      "Nexzell helped us scale our online furniture store with ease. The platform is powerful and simple to use.",
    ],
  }),

  /* ====================== 2) FASHION & APPAREL ====================== */
  "fashion-apparel": buildIndustry({
    slug: "fashion-apparel",
    badge: "FASHION & APPAREL",
    name: "Fashion",
    joinLabel: "fashion",

    images: {
      hero: '/CategoryImages/NexzellFashionAndAppearal/FasionAndApearalMainSlider.png',
      built: '/CategoryImages/NexzellFashionAndAppearal/FAACommerceToolBacground.png',
      thumbs: [
        '/CategoryImages/NexzellFashionAndAppearal/FAACommerceToolBacgroundproduct4.jpg',
        '/CategoryImages/NexzellFashionAndAppearal/FAACommerceToolBacgroundproduct1.jpg',
        '/CategoryImages/NexzellFashionAndAppearal/FAACommerceToolBacgroundproduct3.jpg',
        '/CategoryImages/NexzellFashionAndAppearal/FAACommerceToolBacgroundproduct2.jpg',
      ],
      featureVariants: '/CategoryImages/NexzellFashionAndAppearal/FAAFashionBusiness4.jpg',
      featureInventory: '/CategoryImages/NexzellFashionAndAppearal/FAAFashionBusiness5.jpg',
      featureMarketing: '/CategoryImages/NexzellFashionAndAppearal/FAAFashionBusiness2.jpg',
      featureStorefront: '/CategoryImages/NexzellFashionAndAppearal/FAAFashionBusiness1.jpg',
      advantage: '/CategoryImages/NexzellFashionAndAppearal/FAAFashionBusiness3.jpg',
      cta: '/CategoryImages/NexzellFashionAndAppearal/FAABottomCTASection.png',
      avatars: [avatar(47), avatar(12), avatar(33)],
    },

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
    mapPins: [
      { name: "UK", lon: -1, lat: 52 },
      { name: "France", lon: 2, lat: 47 },
      { name: "Turkey", lon: 35, lat: 39 },
      { name: "India", lon: 78, lat: 22 },
      { name: "Japan", lon: 138, lat: 36 },
      { name: "Brazil", lon: -52, lat: -12 },
    ],
    chart: {
      title: "Weekly Orders",
      prefix: "",
      suffix: "",
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      values: [320, 410, 380, 520, 610, 720, 840],
    },
    brands: ["StyleCraft", "Urban Threads", "Moda Line"],
    quotes: [
      "Nexzell helped us scale our online fashion store with ease. The platform is powerful and simple to use.",
    ],
  }),

  /* ====================== 3) ELECTRONICS & GADGETS ====================== */
  "electronics-gadgets": buildIndustry({
    slug: "electronics-gadgets",
    badge: "ELECTRONICS & GADGETS",
    name: "Electronics",
    joinLabel: "electronics",

    images: {
      hero: '/CategoryImages/NexzellElectronicsAndGadgets/ElectroincsMainSliderImage.png',
      built: '/CategoryImages/NexzellElectronicsAndGadgets/EAGCommerceTools.png',
      thumbs: [
        '/CategoryImages/NexzellElectronicsAndGadgets/EAGCommerceToolProducts1.jpg',
        '/CategoryImages/NexzellElectronicsAndGadgets/EAGCommerceToolProducts2.jpg',
        '/CategoryImages/NexzellElectronicsAndGadgets/EAGCommerceToolProducts3.jpg',
        '/CategoryImages/NexzellElectronicsAndGadgets/EAGCommerceToolProducts4.jpg',
      ],
      featureVariants: '/CategoryImages/NexzellElectronicsAndGadgets/ElectroincsNeeds1.jpg',
      featureInventory: '/CategoryImages/NexzellElectronicsAndGadgets/ElectroincsNeeds2.jpg',
      featureMarketing: '/CategoryImages/NexzellElectronicsAndGadgets/ElectroincsNeeds3.jpg',
      featureStorefront: '/CategoryImages/NexzellElectronicsAndGadgets/ElectroincsNeeds4.png',
      advantage: '/CategoryImages/NexzellElectronicsAndGadgets/EAGGrowthPartner.png',
      cta: '/CategoryImages/NexzellElectronicsAndGadgets/EAGBottomCtaSection.png',
      avatars: [avatar(47), avatar(12), avatar(33)],
    },

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
    mapPins: [
      { name: "USA", lon: -100, lat: 39 },
      { name: "Germany", lon: 10, lat: 51 },
      { name: "UAE", lon: 54, lat: 24 },
      { name: "China", lon: 104, lat: 35 },
      { name: "Singapore", lon: 103.8, lat: 1.3 },
    ],
    chart: {
      title: "Revenue",
      prefix: "$",
      suffix: "K",
      labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"],
      values: [62, 58, 74, 70, 91, 88, 112, 126],
    },
    brands: ["TechWorld", "GadgetHub", "ElectroMart"],
    quotes: [
      "Nexzell helped us scale our online electronics store with ease. The platform is powerful and simple to use.",
    ],
  }),

  /* ====================== 4) BEAUTY & PERSONAL CARE ====================== */
  "beauty-personal-care": buildIndustry({
    slug: "beauty-personal-care",
    badge: "BEAUTY & PERSONAL CARE",
    name: "Beauty",
    joinLabel: "beauty and personal care",

    images: {
      hero:'/CategoryImages/NexzellBeauty/NexzellBeautyMainSliderImage.png',
      built: '/CategoryImages/NexzellBeauty/NexzellBeautyCommerceTools.png',
      thumbs: [
       '/CategoryImages/NexzellBeauty/NexzellBeautyProduct1.jpg',
        '/CategoryImages/NexzellBeauty/NexzellBeautyProduct2.jpg',
       '/CategoryImages/NexzellBeauty/NexzellBeautyProduct3.jpg',
       '/CategoryImages/NexzellBeauty/NexzellBeautyProduct4.jpg',
      ],
      featureVariants:'/CategoryImages/NexzellBeauty/NexzellBeautyEverythingNeed3.jpg',
      featureInventory:'/CategoryImages/NexzellBeauty/NexzellBeautyEverythingNeed2.jpg',
      featureMarketing: '/CategoryImages/NexzellBeauty/NexzellBeautyEverythingNeed1.png',
      featureStorefront: '/CategoryImages/NexzellBeauty/NexzellBeautyEverythingNeed4.png',
      advantage:'/CategoryImages/NexzellBeauty/NexzellBeautyGrowthPartner.png',
      cta: '/CategoryImages/NexzellBeauty/NexzellBeautyBottomCTA.png',
      avatars: [avatar(47), avatar(12), avatar(33)],
    },

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
    mapPins: [
      { name: "USA", lon: -100, lat: 39 },
      { name: "France", lon: 2, lat: 47 },
      { name: "UAE", lon: 54, lat: 24 },
      { name: "South Korea", lon: 128, lat: 36 },
      { name: "Brazil", lon: -52, lat: -12 },
    ],
    chart: {
      title: "Repeat Customers",
      prefix: "",
      suffix: "%",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      values: [12, 15, 19, 18, 26, 31],
    },
    brands: ["GlowBeauty", "PureSkin", "BeautyNest"],
    quotes: [
      "Nexzell helped us scale our online beauty store with ease. The platform is powerful and simple to use.",
    ],
  }),

  /* ====================== 5) SPORTS & OUTDOORS ====================== */
  "sports-outdoors": buildIndustry({
    slug: "sports-outdoors",
    badge: "SPORTS & OUTDOORS",
    name: "Sports",
    joinLabel: "sports and outdoor",

    images: {
      hero:'/CategoryImages/NexzellSportsAndFintess/SportsFitnessNexzellMainSliderImage.png',
      built: '/CategoryImages/NexzellSportsAndFintess/SportsFitnessNexzellCommerceTools.png',
      thumbs: [
       '/CategoryImages/NexzellSportsAndFintess/SportsFitnessNexzellProduct1.jpg',
       '/CategoryImages/NexzellSportsAndFintess/SportsFitnessNexzellProduct2.jpg',
        '/CategoryImages/NexzellSportsAndFintess/SportsFitnessNexzellProduct3.jpg',
        '/CategoryImages/NexzellSportsAndFintess/SportsFitnessNexzellProduct4.jpg',
      ],
      featureVariants:'/CategoryImages/NexzellSportsAndFintess/EveryThingNeedSportFintess1.jpg',
      featureInventory: '/CategoryImages/NexzellSportsAndFintess/EveryThingNeedSportFintess2.jpg',
      featureMarketing: '/CategoryImages/NexzellSportsAndFintess/EveryThingNeedSportFintess3.jpg',
      featureStorefront: '/CategoryImages/NexzellSportsAndFintess/EveryThingNeedSportFintess4.png',
      advantage: '/CategoryImages/NexzellSportsAndFintess/SportsFitnessNexzellGrowthPartner.png',
      cta: '/CategoryImages/NexzellSportsAndFintess/SportsFitnessNexzellBottomCTA.png',
      avatars: [avatar(47), avatar(12), avatar(33)],
    },

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
    mapPins: [
      { name: "USA", lon: -100, lat: 39 },
      { name: "UK", lon: -1, lat: 52 },
      { name: "Pakistan", lon: 70, lat: 30 },
      { name: "Japan", lon: 138, lat: 36 },
      { name: "South Africa", lon: 25, lat: -29 },
    ],
    chart: {
      title: "Conversion Rate",
      prefix: "",
      suffix: "%",
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      values: [2.1, 2.4, 2.2, 3.0, 3.6, 3.4, 4.2],
    },
    brands: ["RunPeak", "ActiveWorld", "SportifyCo"],
    quotes: [
      "Nexzell helped us scale our online sports store with ease. The platform is powerful and simple to use.",
    ],
  }),

  /* ====================== 6) TOYS & KIDS ====================== */
  "toys-kids": buildIndustry({
    slug: "toys-kids",
    badge: "TOYS & KIDS",
    name: "Toys & Kids",
    joinLabel: "toys and kids",

    images: {
      hero: '/CategoryImages/ToysAndKidsNexzellCategory/ToysAndKidsNexzellMainSlider.png',
      built: '/CategoryImages/ToysAndKidsNexzellCategory/ToysAndKidsNexzellCommerceTools.png',
      thumbs: [
       '/CategoryImages/ToysAndKidsNexzellCategory/ToysAndKidsNexzellProducts1.jpg',
       '/CategoryImages/ToysAndKidsNexzellCategory/ToysAndKidsNexzellProducts4.jpg',
        '/CategoryImages/ToysAndKidsNexzellCategory/ToysAndKidsNexzellProducts3.jpg',
        '/CategoryImages/ToysAndKidsNexzellCategory/ToysAndKidsNexzellProducts2.jpg',
      ],
      featureVariants:'/CategoryImages/ToysAndKidsNexzellCategory/ToysAndKidsNexzellNeeds1.png',
      featureInventory: '/CategoryImages/ToysAndKidsNexzellCategory/ToysAndKidsNexzellNeeds2.png',
      featureMarketing: '/CategoryImages/ToysAndKidsNexzellCategory/ToysAndKidsNexzellNeeds3.png',
      featureStorefront:'/CategoryImages/ToysAndKidsNexzellCategory/ToysAndKidsNexzellNeeds4.png',
      advantage: '/CategoryImages/ToysAndKidsNexzellCategory/ToysAndKidsNexzellGrowthPartner.png',
      cta: '/CategoryImages/ToysAndKidsNexzellCategory/ToysAndKidsNexzellBottomCTA.png',
      avatars: [avatar(47), avatar(12), avatar(33)],
    },

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
    mapPins: [
      { name: "Mexico", lon: -102, lat: 23 },
      { name: "Spain", lon: -3.7, lat: 40 },
      { name: "Saudi Arabia", lon: 45, lat: 24 },
      { name: "Indonesia", lon: 113, lat: -2 },
      { name: "Japan", lon: 138, lat: 36 },
    ],
    chart: {
      title: "Holiday Sales",
      prefix: "$",
      suffix: "K",
      labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      values: [12, 15, 19, 27, 52, 78],
    },
    brands: ["PlayNest", "KiddoWorld", "LittleJoy"],
    quotes: [
      "Nexzell helped us scale our online toys store with ease. The platform is powerful and simple to use.",
    ],
  }),
};

export const categorySlugsNexzell = Object.keys(categoryPagesDataNexzell);