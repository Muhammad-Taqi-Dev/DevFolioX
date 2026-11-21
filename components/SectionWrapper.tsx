interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

/**
 * Standard section shell: anchor id, top divider, vertical rhythm and the
 * page-width container. Deliberately has no scroll-triggered fade: content
 * must be visible in the server HTML (crawlers, slow phones, link previews).
 */
const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => (
  <section id={id} className={`border-t border-line py-20 sm:py-24 ${className}`}>
    <div className="mx-auto max-w-page px-5 sm:px-8">{children}</div>
  </section>
);

export default SectionWrapper;
