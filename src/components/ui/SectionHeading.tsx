type Props = {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
  invert?: boolean;
};

export function SectionHeading({ eyebrow, title, copy, invert = false }: Props) {
  return (
    <header className={`section-heading ${invert ? "section-heading--invert" : ""}`} data-reveal>
      <p className="eyebrow"><span aria-hidden="true" />{eyebrow}</p>
      <div className="section-heading__body">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </header>
  );
}
