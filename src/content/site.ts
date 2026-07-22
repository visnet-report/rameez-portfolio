const publicPath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const navItems = [
  ["hero", "Home"],
  ["about", "About me"],
  ["projects", "Projects"],
  ["overview", "What you get"],
  ["services", "Services"],
  ["testimonial", "Clients"],
  ["faq", "FAQ"],
] as const;

export const milestones = [
  { year: "2011", role: "Digital foundations", company: "C-Cubed Solutions", text: "Started hands-on across SEO, paid search, social, email and websites - learning the discipline of testing and continuous improvement." },
  { year: "2015", role: "B2B lead generation", company: "Organize Technologies", text: "Led search, social, email and web campaigns, combining competitor research, content planning and conversion optimisation." },
  { year: "2017", role: "Acquisition leadership", company: "Muscat Higher Education", text: "Directed digital acquisition for diverse student audiences and improved enquiry generation through joined-up campaign analytics." },
  { year: "2021", role: "Multi-channel delivery", company: "MESDAC Solutions", text: "Coordinated designers, developers and client stakeholders to deliver campaigns across SEO, PPC, email, content, social and web." },
  { year: "2023", role: "Marketing systems at scale", company: "EA Technology", text: "Connected campaign execution to CRM, attribution and reporting across UK, US and Australian markets." },
  { year: "Now", role: "Marketing engineering", company: "Searchlight + applied AI", text: "Building tools, API-led pipelines and AI-assisted workflows that turn scattered marketing data into decisions and action." },
];

export const projects = [
  {
    no: "01",
    title: "Searchlight",
    client: "Independent product",
    description: "An SEO and developer-tools platform with 148+ free tools, secure Google Search Console access and opportunity-finding workflows.",
    tags: ["NEXT.JS", "GSC API", "SUPABASE", "SEO"],
    url: "https://seosearchlight.com",
    visual: `${publicPath}/projects/searchlight.svg`,
  },
  {
    no: "02",
    title: "Marketing Data Hub",
    client: "EA Technology · Internal",
    description: "A secure reporting environment centralising 46+ reports and data from CRM, advertising, web and analytics platforms.",
    tags: ["HUBSPOT", "DYNAMICS 365", "GA4", "ATTRIBUTION"],
    url: "#contact",
    visual: `${publicPath}/projects/data-hub.svg`,
  },
  {
    no: "03",
    title: "Content Intelligence",
    client: "EA Technology + VisNet",
    description: "A ranked keyword and content workflow combining Ahrefs, DataForSEO and GSC evidence across three markets.",
    tags: ["DATAFORSEO", "AHREFS", "PYTHON", "STRATEGY"],
    url: "#contact",
    visual: `${publicPath}/projects/content-intelligence.svg`,
  },
  {
    no: "04",
    title: "AI Publishing Engine",
    client: "Marketing engineering",
    description: "AI-assisted briefs, SEO recommendations, metadata, calls to action and internal links with one-click WordPress publishing.",
    tags: ["CLAUDE", "REST API", "WORDPRESS", "AUTOMATION"],
    url: "#contact",
    visual: `${publicPath}/projects/ai-publishing.svg`,
  },
  {
    no: "05",
    title: "Paid Media Gap Analysis",
    client: "Marketing engineering",
    description: "A decision tool that benchmarks campaign and competitor performance, finds coverage gaps and prioritises spend opportunities.",
    tags: ["GOOGLE ADS", "MICROSOFT ADS", "LINKEDIN", "LOOKER"],
    url: "#contact",
    visual: `${publicPath}/projects/paid-media.svg`,
  },
];

export const capabilities = [
  { no: "01", title: "Integrated campaigns", text: "PPC, SEO, email, web, social and content shaped around one commercial outcome - not isolated channel activity." },
  { no: "02", title: "Measurement & attribution", text: "GA4, Looker Studio, CRM and advertising data connected into reporting stakeholders can actually use." },
  { no: "03", title: "SEO & AI search", text: "Evidence-led search strategy that connects technical health, content opportunity, user intent and emerging AI discovery." },
  { no: "04", title: "Marketing automation", text: "Lifecycle journeys, AI-assisted content operations and reliable API workflows that reduce repetitive work." },
  { no: "05", title: "Data quality & CRM", text: "Contact governance, company mapping, matching pipelines and practical tools that help sales teams follow up." },
  { no: "06", title: "Products & platforms", text: "Next.js, TypeScript and Supabase builds that turn a repeatable marketing problem into a useful internal or public product." },
];

export const services = [
  { label: "01 / CONTINUOUS", name: "Growth partner", text: "Ongoing campaign planning, optimisation and reporting across your priority channels.", features: ["Monthly planning cycle", "Channel optimisation", "Measurement & reporting", "Stakeholder reviews"], price: "Custom retainer" },
  { label: "02 / FOCUSED", name: "Performance sprint", text: "A defined audit and action sprint for paid media, SEO, analytics or conversion performance.", features: ["Discovery workshop", "Evidence-led audit", "Prioritised roadmap", "Implementation handoff"], price: "Scoped project", featured: true },
  { label: "03 / BUILD", name: "Marketing system", text: "A reporting hub, workflow, data pipeline or lightweight product built around your operational need.", features: ["Requirements mapping", "Prototype + build", "API integration", "Documentation"], price: "Custom build" },
];

export const testimonials = [
  { quote: "Placeholder - add an approved client quote about Rameez’s ability to connect campaign thinking with practical delivery.", person: "Client name", role: "Role · Company" },
  { quote: "Placeholder - add an approved collaborator quote about reporting clarity, stakeholder communication and measurable outcomes.", person: "Collaborator name", role: "Role · Company" },
  { quote: "Placeholder - add an approved testimonial about automation, data quality or the impact of a marketing system.", person: "Stakeholder name", role: "Role · Company" },
];

export const faqs = [
  ["What kinds of projects are the best fit?", "Integrated campaign programmes, SEO or paid-media performance work, attribution/reporting systems and marketing workflows that need both strategic and technical thinking."],
  ["Do you work as a strategist or a hands-on specialist?", "Both. I can translate business goals into a plan, then work directly in the platforms, data and delivery details needed to move it forward."],
  ["Which platforms do you use?", "HubSpot, Dynamics 365, Google Ads, Microsoft Ads, LinkedIn Ads, GA4, Search Console, Looker Studio, BigQuery, GTM, Clarity, Ahrefs and DataForSEO - plus Next.js, TypeScript and Supabase for custom builds."],
  ["Can you work with an existing team or agency?", "Yes. Much of my work involves aligning marketing, sales, product, IT, agencies and senior stakeholders around clear requirements and measurable priorities."],
  ["Do you support international campaigns?", "Yes. I currently support activity tailored to UK, US and Australian markets and have worked with varied audience needs throughout my career."],
  ["How do projects usually start?", "With a focused conversation about the commercial objective, current data, delivery constraints and the decision the work needs to improve."],
  ["What are your rates and availability?", "Rates and timing are currently placeholders and depend on scope. Email me with a short outline and I’ll reply with the most practical next step."],
] as const;
