interface SectionHeaderProps {
  /** Short mono label above the heading, e.g. "Work". */
  label: string;
  title: string;
  intro?: React.ReactNode;
  /** Optional element aligned to the right of the heading on wide screens. */
  aside?: React.ReactNode;
}

/** Left-aligned section heading used by every section. */
const SectionHeader = ({ label, title, intro, aside }: SectionHeaderProps) => (
  <header className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
    <div className="max-w-prose">
      <p className="font-mono text-sm text-accent">{label}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-ink-muted">{intro}</p>}
    </div>
    {aside && <div className="shrink-0">{aside}</div>}
  </header>
);

export default SectionHeader;
