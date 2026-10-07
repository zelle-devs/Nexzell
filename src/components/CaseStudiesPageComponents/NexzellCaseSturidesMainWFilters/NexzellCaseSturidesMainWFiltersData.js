export const caseStudiesData = [
  {
    id: 1,
    category: "E-Commerce",
    title: "Furniture Mecca",
    shortDescription: "Built a high-performing eCommerce platform for a leading furniture store with custom design, inventory management and SEO.",
    date: "Apr 2025",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
    heroMetric: { value: "+45%", label: "Mobile conversion" },
    client: "Furniture Mecca",
    industry: "Furniture Retail",
    duration: "5 months",
    services: ["eCommerce Development", "Inventory Management", "Technical SEO", "3D Product Previews"],
    tags: ["Next.js", "Shopify Plus", "SEO"],
    techStack: ["Next.js", "Shopify Plus", "GraphQL", "Three.js", "Algolia", "Vercel"],
    overview: "Furniture Mecca is a well-known furniture retailer with thousands of products, each available in multiple sizes, fabrics and finishes. They wanted an online store that felt as polished as their showroom and could grow with their catalog.",
    details: {
      challenge: "The client was struggling with a slow, outdated WooCommerce site that couldn't handle large inventories or complex product variations, leading to high bounce rates.",
      challengePoints: [
        "Pages took over 6 seconds to load on mobile, and most visitors left before the first product appeared.",
        "Products with many size, fabric and colour combinations were hard to browse, so shoppers couldn't find what they wanted.",
        "Stock levels were updated by hand, which led to overselling and frustrated customers."
      ],
      solution: "We rebuilt the entire platform using a modern headless commerce architecture (Next.js & Shopify Plus). We implemented advanced filtering, real-time inventory syncing, and dynamic 3D product previews.",
      approach: [
        { title: "Audit and discovery", text: "We reviewed analytics, heatmaps and the product catalog to find where shoppers dropped off and which variations caused the most confusion." },
        { title: "Headless architecture", text: "We separated the storefront from the commerce engine so the front end could be fast, flexible and easy to improve without touching checkout." },
        { title: "Smart browsing", text: "We built faceted filtering, instant search and a simple variant selector that updates price, image and stock as the shopper chooses." },
        { title: "Launch and tuning", text: "We migrated the catalog with 301 redirects, tested under peak load and kept tuning Core Web Vitals after go-live." }
      ],
      results: "Increased mobile conversion rates by 45%, reduced page load times to under 1.5s, and boosted organic search traffic by 60% within the first 3 months.",
      metrics: [
        { value: "+45%", label: "Mobile conversion rate" },
        { value: "<1.5s", label: "Average page load" },
        { value: "+60%", label: "Organic traffic in 3 months" },
        { value: "0", label: "Overselling incidents since launch" }
      ]
    },
    testimonial: {
      quote: "The new store feels like our showroom, only faster. Our customers find what they need and our team no longer worries about stock errors.",
      author: "Operations Director",
      role: "Furniture Mecca"
    }
  },
  {
    id: 2,
    category: "Web Development",
    title: "The Furniture Depots",
    shortDescription: "Redesigned the entire website with a modern UI, faster performance and seamless shopping experience.",
    date: "Mar 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    heroMetric: { value: "-32%", label: "Cart abandonment" },
    client: "The Furniture Depots",
    industry: "Furniture Retail",
    duration: "4 months",
    services: ["UI/UX Redesign", "Frontend Development", "Checkout Optimisation", "Backend Performance"],
    tags: ["React", "UI/UX", "Checkout"],
    techStack: ["React", "Node.js", "Stripe", "Redis", "Tailwind CSS", "AWS"],
    overview: "The Furniture Depots serves customers across several regions, and its website had grown by patchwork over the years. The goal was a single, consistent experience that made buying a sofa as easy as buying a book.",
    details: {
      challenge: "The brand lacked a cohesive visual identity and suffered from a fragmented checkout process that caused significant cart abandonment.",
      challengePoints: [
        "Each section of the site looked different, which made the brand feel less trustworthy.",
        "Checkout was spread across five pages and asked for the same details more than once.",
        "Traffic spikes during sales slowed the site and sometimes caused failed orders."
      ],
      solution: "Conducted a complete UI/UX overhaul focusing on mobile-first design. We integrated a one-page checkout system and optimized the backend routing to ensure zero latency during peak traffic.",
      approach: [
        { title: "Design system first", text: "We created a shared set of colours, type, components and spacing so every page looks and behaves the same way." },
        { title: "Mobile-first layouts", text: "Over 70% of visits came from phones, so we designed for small screens first and scaled up for desktop." },
        { title: "One-page checkout", text: "We merged five steps into one with address lookup, saved details and clear delivery options." },
        { title: "Peak traffic readiness", text: "We added caching and optimised routing, then load-tested the site at several times the busiest sale day." }
      ],
      results: "Cart abandonment dropped by 32% and average session duration increased by 2.5 minutes.",
      metrics: [
        { value: "-32%", label: "Cart abandonment" },
        { value: "+2.5 min", label: "Average session duration" },
        { value: "5 to 1", label: "Checkout steps" },
        { value: "100%", label: "Uptime during the next sale" }
      ]
    },
    testimonial: {
      quote: "Checkout used to be our biggest leak. Now it is the smoothest part of the journey, and the whole brand finally looks consistent.",
      author: "E-Commerce Manager",
      role: "The Furniture Depots"
    }
  },
  {
    id: 3,
    category: "Digital Marketing",
    title: "Travel & Tourism Brand",
    shortDescription: "Boosted organic traffic by 240% with a complete SEO and content marketing strategy for a travel brand.",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    heroMetric: { value: "+240%", label: "Organic traffic" },
    client: "Travel & Tourism Brand",
    industry: "Travel and Hospitality",
    duration: "9 months",
    services: ["Content Strategy", "Technical SEO", "Programmatic SEO", "Link Building"],
    tags: ["Content", "SEO", "Growth"],
    techStack: ["Ahrefs", "Semrush", "Google Search Console", "Screaming Frog", "Next.js", "Schema.org"],
    overview: "A travel agency specialising in curated trips wanted to win back search visibility after the pandemic and reduce its reliance on paid ads and booking platforms.",
    details: {
      challenge: "The travel agency lost significant visibility post-pandemic and was being outranked by OTA giants for critical destination keywords.",
      challengePoints: [
        "Large booking sites dominated the first page for almost every destination keyword.",
        "The website had thin destination pages and technical issues that held back rankings.",
        "Paid ads were the main source of leads, which kept acquisition costs high."
      ],
      solution: "Deployed a topical authority content strategy, revamped technical SEO (schema markup, core web vitals), and launched targeted programmatic SEO pages for over 500 local destinations.",
      approach: [
        { title: "Keyword and gap analysis", text: "We mapped what travellers search for at every stage, from inspiration to booking, and found topics competitors had ignored." },
        { title: "Topical authority", text: "We built content clusters around key regions, each with expert guides, itineraries and practical tips written by real travellers." },
        { title: "Technical clean-up", text: "We fixed crawl issues, added structured data and improved Core Web Vitals so search engines could understand every page." },
        { title: "Programmatic scale", text: "We created templates for over 500 local destination pages with unique data, so scale did not mean thin content." }
      ],
      results: "Achieved a 240% increase in organic traffic, secured 15 featured snippets, and reduced customer acquisition cost (CAC) by 40%.",
      metrics: [
        { value: "+240%", label: "Organic traffic" },
        { value: "15", label: "Featured snippets won" },
        { value: "-40%", label: "Customer acquisition cost" },
        { value: "500+", label: "Destination pages launched" }
      ]
    },
    testimonial: {
      quote: "We went from competing on ads to being found naturally. The leads are better, and they cost us much less.",
      author: "Marketing Head",
      role: "Travel & Tourism Brand"
    }
  },
  {
    id: 4,
    category: "Web Development",
    title: "Zelle Furniture Cloud",
    shortDescription: "Developed a React-based furniture platform with inventory management, GTIN and Google Merchant Center integration.",
    date: "Nov 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    heroMetric: { value: "+150%", label: "Google Shopping ROAS" },
    client: "Zelle Furniture",
    industry: "Furniture Wholesale and Retail",
    duration: "6 months",
    services: ["Custom Web Application", "ERP Integration", "Google Merchant Center Feed", "GTIN Management"],
    tags: ["React", "Node.js", "Automation"],
    techStack: ["React", "Node.js", "PostgreSQL", "Google Content API", "Docker", "AWS"],
    overview: "Zelle sells to both businesses and homeowners and manages thousands of SKUs across several suppliers. They needed one platform that kept the website, the ERP and Google Shopping in sync.",
    details: {
      challenge: "The client needed a custom B2B/B2C hybrid portal to manage thousands of SKUs and seamlessly push data to Google Shopping without manual CSV uploads.",
      challengePoints: [
        "Product data lived in the ERP, spreadsheets and the website, and the three often disagreed.",
        "Missing GTINs and outdated prices caused product disapprovals in Google Merchant Center.",
        "Business customers needed tiered pricing, while homeowners needed a simple retail experience."
      ],
      solution: "Engineered a custom React/Node.js dashboard linking their ERP to the web storefront. Automated the Google Merchant feed API to update prices and stock levels in real-time.",
      approach: [
        { title: "Data mapping", text: "We mapped every product field across the ERP, supplier files and the website, and defined one source of truth." },
        { title: "Sync engine", text: "We built a Node.js service that syncs products, prices and stock in near real time and flags errors before they go live." },
        { title: "Merchant Center automation", text: "We connected the Content API so GTINs, prices and availability reach Google automatically, with validation for every feed item." },
        { title: "Dual-audience storefront", text: "We built a React storefront that shows tiered pricing to approved business accounts and standard pricing to everyone else." }
      ],
      results: "Eliminated 20+ hours of manual data entry per week and increased Google Shopping ROAS by 150% due to accurate, real-time pricing feeds.",
      metrics: [
        { value: "20+ hrs", label: "Manual work removed weekly" },
        { value: "+150%", label: "Google Shopping ROAS" },
        { value: "98%", label: "Feed approval rate" },
        { value: "Real-time", label: "Price and stock updates" }
      ]
    },
    testimonial: {
      quote: "What used to take our team days each week now runs by itself. Our ads finally show the right prices and the right stock.",
      author: "Head of Digital",
      role: "Zelle Furniture"
    }
  },
  {
    id: 5,
    category: "SEO",
    title: "E-commerce Product SEO",
    shortDescription: "Optimized 500+ product pages with keyword strategy, meta data and high-quality content to increase rankings and sales.",
    date: "Oct 2024",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1200&auto=format&fit=crop",
    heroMetric: { value: "+300%", label: "Product impressions" },
    client: "Online Home Store",
    industry: "Home and Living Retail",
    duration: "6 months",
    services: ["Content Audit", "Keyword Strategy", "Structured Data", "Product Copywriting"],
    tags: ["Product SEO", "Schema", "Content"],
    techStack: ["Ahrefs", "Google Search Console", "Screaming Frog", "Schema.org", "Shopify", "Looker Studio"],
    overview: "An online home store with a large catalog was getting most of its traffic from its brand name. We were asked to make individual product pages rank for what shoppers actually type into Google.",
    details: {
      challenge: "Despite having a massive product catalog, the client's individual product pages were not ranking on page 1 of Google due to thin content and duplicate metadata.",
      challengePoints: [
        "Hundreds of product pages shared manufacturer descriptions that appeared on many other sites.",
        "Titles and meta descriptions were duplicated or auto-generated without any keyword research.",
        "No structured data, so listings lacked ratings, price and availability in search results."
      ],
      solution: "Conducted a massive content audit, rewrote meta descriptions, implemented automated structured data for products/reviews, and injected high-intent long-tail keywords into product copy.",
      approach: [
        { title: "Content audit", text: "We scored every product page for content quality, duplication and search potential, then ranked them by revenue opportunity." },
        { title: "Intent-led keywords", text: "We matched each product to the long-tail phrases shoppers use when they are ready to buy, such as size, material and use case." },
        { title: "Rewrite at scale", text: "We wrote unique titles, descriptions and product copy for 500+ pages, following a clear template that editors could reuse." },
        { title: "Rich results", text: "We added automated Product, Review and Breadcrumb schema so listings display price, stock and ratings directly in search." }
      ],
      results: "Product page organic impressions surged by 300%, driving a direct revenue increase of $120k/month from non-branded search terms.",
      metrics: [
        { value: "+300%", label: "Product page impressions" },
        { value: "$120k", label: "Added monthly revenue" },
        { value: "500+", label: "Pages optimised" },
        { value: "2.4x", label: "Click-through rate from search" }
      ]
    },
    testimonial: {
      quote: "We always thought our products were hard to rank. It turns out they just needed real content and a clear plan.",
      author: "Founder",
      role: "Online Home Store"
    }
  },
  {
    id: 6,
    category: "UI/UX Design",
    title: "CC Monitoring Portal",
    shortDescription: "Designed a modern monitoring dashboard with interactive maps, real-time data and smooth user experience.",
    date: "Aug 2024",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
    heroMetric: { value: "3 days", label: "Staff onboarding" },
    client: "CC Monitoring",
    industry: "Operations and Monitoring",
    duration: "4 months",
    services: ["UX Research", "Dashboard Design", "Interactive Maps", "Design System"],
    tags: ["Dashboard", "Maps", "Dark UI"],
    techStack: ["Figma", "React", "WebGL", "Mapbox", "WebSockets", "Storybook"],
    overview: "CC Monitoring runs a control room where operators watch live data from many locations. The tool they used every day was powerful but hard to learn, and mistakes were costly.",
    details: {
      challenge: "The client's internal monitoring tool was cluttered, confusing, and required weeks of training for new staff to understand how to operate it.",
      challengePoints: [
        "Every screen showed all available data at once, so operators missed the alerts that mattered.",
        "Operators work long shifts, and the bright interface caused eye strain.",
        "New hires needed around three weeks of training before working on their own."
      ],
      solution: "Completely reimagined the user interface with a dark-mode focus to reduce eye strain. Introduced modular widgets, drag-and-drop customization, and intuitive data visualizations using WebGL maps.",
      approach: [
        { title: "Shadowing operators", text: "We spent time in the control room to see which tasks happen most often, which alerts are urgent and where people get stuck." },
        { title: "Information hierarchy", text: "We reorganised screens so critical alerts come first, with details revealed only when an operator asks for them." },
        { title: "Modular widgets", text: "We built drag-and-drop widgets so each operator can arrange their own workspace and save it for the next shift." },
        { title: "Live maps", text: "We used WebGL maps with clustering and colour-coded status so thousands of live points stay readable and fast." }
      ],
      results: "User onboarding time dropped from 3 weeks to 3 days, and internal task completion efficiency improved by 60%.",
      metrics: [
        { value: "3 days", label: "Onboarding, down from 3 weeks" },
        { value: "+60%", label: "Task completion efficiency" },
        { value: "-45%", label: "Operator errors" },
        { value: "60 fps", label: "Map performance on live data" }
      ]
    },
    testimonial: {
      quote: "New team members are confident in days instead of weeks. The dark interface has made long shifts far more comfortable.",
      author: "Control Room Supervisor",
      role: "CC Monitoring"
    }
  },
  {
    id: 7,
    category: "Branding",
    title: "Lumora Skincare Rebrand",
    shortDescription: "Created a complete visual identity, packaging direction and brand guidelines for a growing skincare label.",
    date: "Jul 2024",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    heroMetric: { value: "+70%", label: "Brand recall" },
    client: "Lumora Skincare",
    industry: "Beauty and Personal Care",
    duration: "3 months",
    services: ["Brand Strategy", "Logo and Identity", "Packaging Design", "Brand Guidelines"],
    tags: ["Identity", "Packaging", "Guidelines"],
    techStack: ["Figma", "Adobe Illustrator", "Adobe InDesign", "Blender", "Notion"],
    overview: "Lumora started as a small online shop and grew quickly, but its look had not kept up. We were asked to build an identity that felt premium, honest and consistent everywhere customers meet it.",
    details: {
      challenge: "The brand's visuals were put together over time by different freelancers, so the logo, packaging and social media all looked unrelated and did not reflect the quality of the products.",
      challengePoints: [
        "Customers could not tell it was the same brand on the website, the packaging and Instagram.",
        "Packaging looked similar to many competitors and did not communicate the clean, science-led approach.",
        "The team had no guidelines, so every new campaign started from scratch."
      ],
      solution: "We defined the brand's positioning first, then designed a flexible identity system with a refined logo, a calm colour palette, a clear type system and packaging that works across the entire product range.",
      approach: [
        { title: "Brand strategy", text: "We interviewed customers and the founders to define what Lumora stands for, who it speaks to and how it should sound." },
        { title: "Identity design", text: "We designed a simple wordmark, a colour palette inspired by natural ingredients and a typographic system that stays readable at any size." },
        { title: "Packaging system", text: "We created a modular packaging layout so new products fit the family without needing a redesign." },
        { title: "Guidelines and toolkit", text: "We delivered a brand book and ready-to-use templates so the team can create consistent social, email and print content." }
      ],
      results: "The new identity gave Lumora a clear, premium presence, which improved recognition and helped the brand move into new retail partnerships.",
      metrics: [
        { value: "+70%", label: "Aided brand recall" },
        { value: "+38%", label: "Social engagement" },
        { value: "3", label: "New retail partners signed" },
        { value: "100%", label: "Touchpoints now consistent" }
      ]
    },
    testimonial: {
      quote: "For the first time, everything we put out looks like it comes from one brand. Retailers noticed straight away.",
      author: "Co-founder",
      role: "Lumora Skincare"
    }
  },
  {
    id: 8,
    category: "Digital Marketing",
    title: "Home Decor Paid Growth",
    shortDescription: "Scaled paid acquisition across Google and Meta with creative testing and conversion tracking that actually reflects revenue.",
    date: "Jun 2024",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop",
    heroMetric: { value: "4.8x", label: "Return on ad spend" },
    client: "Home Decor Brand",
    industry: "Home and Living Retail",
    duration: "8 months",
    services: ["Google Ads", "Meta Ads", "Creative Testing", "Conversion Tracking"],
    tags: ["Paid Media", "Meta Ads", "Tracking"],
    techStack: ["Google Ads", "Meta Ads Manager", "GA4", "Google Tag Manager", "Looker Studio", "Klaviyo"],
    overview: "A home decor brand was spending more each month on ads but seeing flat sales. We rebuilt their paid strategy from measurement upwards so every pound of spend could be tied to real revenue.",
    details: {
      challenge: "Ad spend kept rising while revenue stayed flat, and the team could not tell which campaigns and creatives were actually driving sales.",
      challengePoints: [
        "Conversion tracking was incomplete, so platforms optimised for the wrong events.",
        "Campaigns mixed new and returning customers, which hid the true cost of acquiring a buyer.",
        "Creatives were refreshed rarely, and ad fatigue was pushing up costs."
      ],
      solution: "We fixed tracking first, restructured campaigns by customer stage and introduced a steady creative testing programme to find what resonates and scale it.",
      approach: [
        { title: "Tracking foundation", text: "We set up server-side tracking and clean GA4 events so every purchase and its value reached the ad platforms accurately." },
        { title: "Account restructure", text: "We separated prospecting, retargeting and brand campaigns so budget and reporting match how customers actually buy." },
        { title: "Creative testing", text: "We ran weekly tests of hooks, formats and offers, and moved budget to winners within days instead of weeks." },
        { title: "Reporting clarity", text: "We built a simple live dashboard showing spend, revenue and acquisition cost by channel, shared with the whole team." }
      ],
      results: "Return on ad spend rose to 4.8x while monthly revenue from paid channels more than doubled, with a lower cost to acquire each new customer.",
      metrics: [
        { value: "4.8x", label: "Return on ad spend" },
        { value: "+112%", label: "Paid revenue per month" },
        { value: "-31%", label: "Cost per acquisition" },
        { value: "24", label: "Winning creatives scaled" }
      ]
    },
    testimonial: {
      quote: "We finally know exactly what each campaign earns. That confidence let us grow spend without guessing.",
      author: "Marketing Lead",
      role: "Home Decor Brand"
    }
  },
  {
    id: 9,
    category: "UI/UX Design",
    title: "Fintech Mobile App Redesign",
    shortDescription: "Redesigned a mobile banking experience around clarity, trust and faster first-time setup.",
    date: "May 2024",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    heroMetric: { value: "+38%", label: "Account activation" },
    client: "Fintech Startup",
    industry: "Financial Technology",
    duration: "5 months",
    services: ["Product Research", "App UX and UI", "Prototyping", "Usability Testing"],
    tags: ["Mobile App", "Fintech", "Onboarding"],
    techStack: ["Figma", "Maze", "React Native", "Lottie", "Hotjar", "Amplitude"],
    overview: "A fintech startup had strong demand but lost many new users during sign-up. We redesigned the app so people understand what is happening with their money from the very first screen.",
    details: {
      challenge: "Many users downloaded the app but never finished verification, and those who did often struggled to find basic features like transfers and statements.",
      challengePoints: [
        "Identity verification asked for documents without explaining why, which caused people to leave.",
        "The home screen had too many options and buried the most common actions.",
        "Error messages were technical and gave no clear way to fix the problem."
      ],
      solution: "We simplified the journey around a few core actions, rewrote the language in plain terms and designed an onboarding flow that builds trust at each step.",
      approach: [
        { title: "Research and testing", text: "We interviewed users and tested the current app to find the exact moments where people hesitated or gave up." },
        { title: "Guided onboarding", text: "We split verification into short steps with progress, clear reasons for each request and the option to continue later." },
        { title: "Simpler home", text: "We rebuilt the home screen around balance, recent activity and the three actions people use most." },
        { title: "Prototype and validate", text: "We tested interactive prototypes with real users and refined the design over three rounds before development." }
      ],
      results: "More new users now complete verification and start using the app, with fewer support requests and higher ratings in the app stores.",
      metrics: [
        { value: "+38%", label: "Account activation" },
        { value: "-52%", label: "Support tickets about setup" },
        { value: "4.7", label: "App store rating, up from 3.9" },
        { value: "2 min", label: "Average sign-up time" }
      ]
    },
    testimonial: {
      quote: "The redesign made the app feel trustworthy. People complete sign-up and actually come back to use it.",
      author: "Head of Product",
      role: "Fintech Startup"
    }
  }
];

export const categoriesList = [
  "All",
  "E-Commerce",
  "Web Development",
  "Digital Marketing",
  "SEO",
  "UI/UX Design",
  "Branding"
];