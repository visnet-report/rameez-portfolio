import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/space-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rameez Majeed - Digital Marketing & Marketing Engineering",
  description:
    "Digital marketing specialist combining 14+ years of campaign leadership with analytics, attribution, automation and product-minded marketing technology.",
  keywords: [
    "digital marketing specialist",
    "marketing engineering",
    "SEO",
    "paid media",
    "marketing automation",
    "analytics",
    "Liverpool",
  ],
  openGraph: {
    title: "Rameez Majeed - Digital Marketing, engineered to perform",
    description:
      "Campaign strategy, paid media, SEO, analytics, automation and the systems that connect them.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
