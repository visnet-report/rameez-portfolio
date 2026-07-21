import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { Work } from "@/components/sections/Work";
import { Capabilities } from "@/components/sections/Capabilities";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rameez Majeed",
  jobTitle: "Digital Marketing Specialist",
  address: { "@type": "PostalAddress", addressLocality: "Liverpool", addressCountry: "GB" },
  email: "mailto:meramiz@gmail.com",
  sameAs: ["https://linkedin.com/in/rameez-majeed", "https://seosearchlight.com/rameez-majeed"],
  knowsAbout: ["Digital Marketing", "SEO", "Paid Media", "Marketing Automation", "Analytics"],
};

export default function Home() {
  return (
    <MotionProvider>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Journey />
        <Work />
        <Capabilities />
        <Services />
        <CTA />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <CommandMenu />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </MotionProvider>
  );
}
