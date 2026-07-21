import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark" | "outline";
  className?: string;
};

export function ButtonLink({ href, children, variant = "light", className = "" }: Props) {
  const external = href.startsWith("http");
  return (
    <a
      className={`button button--${variant} ${className}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
    </a>
  );
}
