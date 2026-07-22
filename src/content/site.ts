const publicPath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const navItems = [
  ["hero", "Home"],
  ["about", "About me"],
  ["projects", "Projects"],
  ["overview", "What you get"],
  ["skills", "Skills"],
  ["recommendations", "Recommendations"],
  ["faq", "FAQ"],
] as const;

export const milestones = [
  {
    year: "2011",
    period: "2011 - 2015",
    role: "Digital foundations",
    jobTitle: "Digital Marketing Executive",
    company: "C-Cubed Solutions Pvt Ltd",
    location: "India",
    text: "Started in agency-side SEO and PPC, learning the discipline of campaign optimisation and accountable client reporting.",
    detail: "Started in agency-side SEO and PPC - keyword research, link building, campaign optimisation and client reporting.",
  },
  {
    year: "2015",
    period: "2015 - 2017",
    role: "B2B lead generation",
    jobTitle: "Digital Marketing Manager",
    company: "Organize Technologies",
    location: "Muscat, Oman",
    text: "Managed client acquisition campaigns across search, social and display with clear ownership of strategy, budgets and reporting.",
    detail: "Managed client campaigns across search, social and display - strategy, budgets and reporting.",
  },
  {
    year: "2017",
    period: "2017 - 2021",
    role: "Acquisition leadership",
    jobTitle: "Digital Marketing Manager",
    company: "Muscat Higher Education",
    location: "Muscat, Oman",
    text: "Directed digital acquisition for diverse student audiences and improved enquiry generation through joined-up campaign analytics.",
    detail: "Led digital for a higher-education group - enrolment campaigns, search marketing, analytics and the web estate.",
  },
  {
    year: "2021",
    period: "2021 - 2023",
    role: "Multi-channel delivery",
    jobTitle: "Digital Marketing Specialist",
    company: "MESDAC Solutions LLC",
    location: "Muscat, Oman",
    text: "Coordinated designers, developers and client stakeholders across SEO, PPC, email, content, social and web.",
    detail: "Full-stack B2B digital across paid search, SEO and marketing automation - planning, executing and measuring campaigns end to end.",
  },
  {
    year: "Now",
    period: "2023 - now",
    role: "Marketing systems at scale",
    jobTitle: "Digital Marketing Specialist",
    company: "EA Technology Ltd",
    location: "Liverpool, UK",
    text: "Connected campaign execution to CRM, attribution and reporting across UK, US and Australian markets.",
    detail: "Built or co-built the marketing infrastructure most teams outsource: the internal reporting dashboard powering 46+ embedded Looker Studio reports, a HubSpot pipeline-and-attribution dashboard for a long-cycle B2B sales motion, and AI workflows that take days of work down to minutes.",
  },
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
  { no: "01", title: "Integrated campaign systems", text: "PPC, SEO, email, web, social and content shaped around one commercial outcome - not isolated channel activity.", points: ["Campaign architecture", "Channel planning", "Shared measurement", "Commercial alignment"] },
  { no: "02", title: "Measurement & attribution", text: "GA4, Looker Studio, CRM and advertising data connected into reporting stakeholders can actually use.", points: ["End-to-end tracking", "Multi-touch attribution", "Custom dashboards", "Decision-ready reporting"] },
  { no: "03", title: "SEO & AI search", text: "Evidence-led search strategy that connects technical health, content opportunity, user intent and emerging AI discovery.", points: ["Technical SEO", "AI search visibility", "Content opportunity", "Citation readiness"] },
  { no: "04", title: "Marketing automation", text: "Lifecycle journeys, AI-assisted content operations and reliable API workflows that reduce repetitive work.", points: ["Lifecycle journeys", "AI-assisted workflows", "API integrations", "Process automation"] },
  { no: "05", title: "Data quality & CRM", text: "Contact governance, company mapping, matching pipelines and practical tools that help sales teams follow up.", points: ["CRM governance", "Data quality", "Audience mapping", "Sales enablement"] },
];

export const skillDisciplines = [
  { name: "Search & AI", glyph: "⌕", skills: ["Search Engine Optimisation (SEO)", "Technical SEO", "Local SEO", "Link Building", "Keyword Research", "Generative Engine Optimisation (GEO)", "Answer Engine Optimisation (AEO)", "AI-Driven Content", "AI Search Optimisation", "Search Engine Marketing (SEM)"] },
  { name: "Paid Media", glyph: "↗", skills: ["Google Ads", "Microsoft Advertising", "LinkedIn Ads", "Pay Per Click (PPC)", "Display Advertising", "Remarketing", "Paid Social", "Performance Marketing", "Budget Management", "Campaign Management"] },
  { name: "Analytics & Data", glyph: "▥", skills: ["Google Analytics 4", "Looker Studio", "BigQuery", "Google Tag Manager", "Google Search Console", "Microsoft Clarity", "Web Analytics", "Marketing Attribution", "A/B Testing", "Conversion Rate Optimisation", "Data Visualization", "Report Writing"] },
  { name: "Automation & CRM", glyph: "⚙", skills: ["Marketing Automation", "HubSpot", "ClickDimensions", "Dynamics 365", "Email Marketing", "Lead Generation", "Lead Nurturing", "Customer Segmentation", "Account-Based Marketing (ABM)", "CRM & Lifecycle Marketing"] },
  { name: "Web & Engineering", glyph: "</>", skills: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Vercel", "GitHub", "Claude Code", "WordPress", "Umbraco", "Landing Page Optimisation", "Marketing Engineering"] },
  { name: "Strategy", glyph: "◇", skills: ["Digital Strategy", "B2B Demand Generation", "Content Marketing", "Social Media Marketing", "Brand Awareness", "Competitor Research", "Forecasting", "Growth Strategies", "Marketing Funnel Optimisation", "Advertising Strategies"] },
];

export const testimonials = [
  { person: "Naveen Raj", role: "Co-Founder & Managing Director of Loonyheads Digital Marketing Company", relationship: "April 26, 2024 - worked with Rameez on the same team", quote: "Rameez Majeed is a top-notch digital marketing specialist whom I've had the pleasure of collaborating with. His expertise in digital marketing strategies and tactics is truly impressive. Rameez consistently delivers outstanding results, driving significant growth and engagement for our campaigns.", image: `${publicPath}/recommendations/naveen.jpg`, linkedin: "https://www.linkedin.com/in/naveen-raj-3283381a7/" },
  { person: "Rahul Bhasi", role: "DevOps Engineer | DevSecOps | GitOps | AWS | Azure | Kubernetes | Ansible | CI/CD | Jenkins", relationship: "April 23, 2024 - was Rameez's client", quote: "It is my pleasure to recommend Rameez for any digital marketing specialist position. I had the pleasure of working with Rameez for my website, where he consistently impressed me with his expertise in SEO/PPC, ability to develop and execute data-driven marketing campaigns and strong analytical skills. Please feel free to reach out to me if you have any questions.", image: `${publicPath}/recommendations/rahul.jpg`, linkedin: "https://www.linkedin.com/in/rahulbhasi/" },
  { person: "Manas Xavier", role: "Operations Head at Mesdac Solutions LLC", relationship: "April 23, 2024 - managed Rameez directly", quote: "I had the opportunity to work with Rameez at Mesdac Solutions LLC, where he served as our Digital Marketing Specialist. Rameez excelled in this role, demonstrating a deep understanding of digital marketing strategies and a talent for delivering measurable results. He was responsible for our social media management, digital campaigns, and SEO optimization. His creativity and technical expertise significantly improved our brand visibility. His excellent communication skills and collaborative attitude made him a valuable team member. I highly recommend Rameez for any digital marketing role.", image: `${publicPath}/recommendations/manas.jpg`, linkedin: "https://www.linkedin.com/in/manas-xavier/" },
  { person: "Shariq Mohamed Yusuf", role: "AEO & SEO Strategist | GEO & AI Search Visibility | B2B Content & Editorial Operations | 13+ Years | Remote", relationship: "April 21, 2024 - worked with Rameez on the same team", quote: "It's my absolute pleasure to recommend Rameez Majeed, a highly accomplished digital marketing and business development executive. Rameez consistently demonstrated exceptional expertise in devising and executing innovative digital marketing strategies that drove significant business growth. His strategic mindset, ability to leverage emerging trends and technologies, dedication to results and strong leadership skills make him an invaluable asset to any organization.", image: null, linkedin: "https://www.linkedin.com/in/shariqmohamed/" },
  { person: "Natalia Quiroga Ferreira", role: "Global Marketing Analyst Tech | Net Zero | Property | Bilingual | Team Leader | Politóloga | Westminster Uni Mentor", relationship: "March 3, 2024 - worked with Rameez on the same team", quote: "Working with Rameez was truly delightful. His expertise in digital marketing shone through as he guided us through the intricacies of the customer journey and engagement. Rameez significantly elevated our ranking score, showcasing his exceptional skills. His unwavering responsibility and remarkable productivity make him an invaluable asset to any team. He is an outstanding professional.", image: `${publicPath}/recommendations/natalia.jpg`, linkedin: "https://www.linkedin.com/in/natalia-quiroga-ferreira-39026b93/" },
];

export const certifications = [
  { title: "Claude Code in Action", issuer: "Anthropic", url: "https://verify.skilljar.com/c/zi8xk3744zym", mark: "AI" },
  { title: "AI-Powered Performance Ads", issuer: "Google Skillshop", url: "https://skillshop.credential.net/9aeba12b-ebfc-4aed-a7c2-9d390d4c3c97", mark: "G" },
  { title: "Google Ads Search Certification", issuer: "Google Skillshop", url: "https://skillshop.credential.net/302f4dfa-2e65-4f25-a98f-023ece086249#acc.RxkoW8c4", mark: "G" },
  { title: "Google Analytics Certification", issuer: "Google Skillshop", url: "https://skillshop.credential.net/302f4dfa-2e65-4f25-a98f-023ece086249", mark: "GA" },
  { title: "Digital Marketing", issuer: "HubSpot Academy", url: "https://app-eu1.hubspot.com/academy/achievements/b9k78knv/en/1/rameez-majeed/digital-marketing", mark: "H" },
  { title: "Social Media Marketing", issuer: "HubSpot Academy", url: "https://app-eu1.hubspot.com/academy/achievements/38mv8xfs/en/1/rameez-majeed/social-media-marketing", mark: "H" },
  { title: "Inbound Marketing", issuer: "HubSpot Academy", url: "https://app-eu1.hubspot.com/academy/achievements/vjj73vwz/en/1/rameez-majeed/inbound-marketing", mark: "H" },
  { title: "Google Ads Essential Training", issuer: "LinkedIn Learning", url: "https://www.linkedin.com/learning/certificates/9a80cfedf61b23b134fe1006de4c867b907cba469d0207091d562c4fb63f59fe", mark: "in" },
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
