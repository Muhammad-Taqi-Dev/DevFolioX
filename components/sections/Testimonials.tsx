"use client";

import { useState } from "react";
import { testimonials, type Testimonial } from "@/lib/testimonials";
import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";

const LINKEDIN_URL = "https://www.linkedin.com/in/taqih1/";
const CLAMP_AT = 320; // characters before "Read more" appears

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.text.length > CLAMP_AT;

  return (
    <figure className="flex flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-line-strong">
      <span aria-hidden="true" className="font-serif text-4xl leading-none text-accent">
        &ldquo;
      </span>
      <blockquote
        className={`mt-2 text-ink-soft ${isLong && !expanded ? "line-clamp-6" : ""}`}
      >
        {testimonial.text}
      </blockquote>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-2 self-start text-sm text-ink-muted transition-colors hover:text-accent"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
      <figcaption className="mt-6 border-t border-line pt-4">
        {testimonial.linkedinUrl ? (
          <a
            href={testimonial.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link font-medium"
          >
            {testimonial.name}
          </a>
        ) : (
          <span className="font-medium text-ink">{testimonial.name}</span>
        )}
        <p className="text-sm text-ink-muted">
          {testimonial.title} · {testimonial.company}
        </p>
      </figcaption>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeader
        label="Recommendations"
        title="Recommendations"
        intro="What managers and colleagues wrote about working with me, from LinkedIn."
        aside={
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link text-sm"
          >
            See them on LinkedIn ↗
          </a>
        }
      />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
