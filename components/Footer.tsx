import { site } from "@/lib/site";

const LAST_UPDATED = "Nov 2026";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-5 py-10 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {site.name}
          <span className="mx-2 text-ink-faint">·</span>
          Last updated {LAST_UPDATED}
        </p>
        <nav aria-label="Elsewhere" className="flex flex-wrap gap-x-5 gap-y-2">
          <a className="link" href={`mailto:${site.email}`}>
            Email
          </a>
          <a className="link" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="link" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="link" href={site.resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
