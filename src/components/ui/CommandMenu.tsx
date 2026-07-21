"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { navItems } from "@/content/site";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    const openMenu = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command", openMenu);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command", openMenu);
    };
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30);
    else setQuery("");
  }, [open]);

  if (!open) return null;
  const filtered = navItems.filter(([, label]) => label.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="command-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
      <div className="command-menu" role="dialog" aria-modal="true" aria-label="Quick navigation" onMouseDown={(event) => event.stopPropagation()}>
        <div className="command-search">
          <Search size={18} />
          <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Jump to a section…" aria-label="Search sections" />
          <button onClick={() => setOpen(false)} aria-label="Close quick navigation"><X size={17} /></button>
        </div>
        <div className="command-results">
          {filtered.map(([id, label], index) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<ArrowRight size={17} /></a>
          ))}
        </div>
        <p>Type to filter · esc to close</p>
      </div>
    </div>
  );
}
