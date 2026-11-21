"use client";

import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";

interface Credential {
  title: string;
  issuer: string;
  /** "Mon YYYY", or just "YYYY" when the month isn't known. */
  date: string;
  /** `/`-rooted path to a PDF in public/, or an external URL. */
  href: string;
  /** Optional small image (e.g. a badge) shown next to the title. */
  image?: string;
  kind: "pdf" | "link";
}

const certifications: Credential[] = [
  { title: "Claude 101", issuer: "Anthropic", date: "Sep 2026", href: "/Claude - 101.pdf", kind: "pdf" },
  {
    title: "Application Development using Microservices and Serverless",
    issuer: "Coursera, IBM",
    date: "Aug 2026",
    href: "/Application Development using Microservices and Serverless.pdf",
    kind: "pdf",
  },
  {
    title: "Java Programming for Beginners",
    issuer: "Coursera, IBM",
    date: "Aug 2026",
    href: "/Java Programming for Beginners.pdf",
    kind: "pdf",
  },
  {
    title: "Software Design Patterns: Best Practices for Software Developers",
    issuer: "Educative",
    date: "Feb 2026",
    href: "/Software_Design_Patterns_Best_Practices_Certificate.pdf",
    kind: "pdf",
  },
  {
    title: ".NET Full Stack Foundation",
    issuer: "Coursera, Board Infinity",
    date: "2025",
    href: "/NET Full Stack Foundation.pdf",
    kind: "pdf",
  },
  {
    title: "Back-End Development with .NET",
    issuer: "Coursera, Microsoft",
    date: "2025",
    href: "/Back-End Development with .NET.pdf",
    kind: "pdf",
  },
  {
    title: "Intro to Web Development (HTML, CSS, JS)",
    issuer: "Coursera, IBM",
    date: "2024",
    href: "/Introduction to Web Development with HTML, CSS, JAVASCRIPT.pdf",
    kind: "pdf",
  },
  { title: "CSS Certificate", issuer: "HackerRank", date: "2024", href: "/css certificate.pdf", kind: "pdf" },
  {
    title: "Software Engineer Intern Certificate",
    issuer: "HackerRank",
    date: "2024",
    href: "/software_engineer_intern certificate.pdf",
    kind: "pdf",
  },
  {
    title: "Programming Fundamentals",
    issuer: "Coursera, Duke University",
    date: "2023",
    href: "/Programming Fundamentals.pdf",
    kind: "pdf",
  },
  {
    title: "Python Basics",
    issuer: "Coursera, University of Michigan",
    date: "2023",
    href: "/Python Basics.pdf",
    kind: "pdf",
  },
  {
    title: "Python Basic Certificate",
    issuer: "HackerRank",
    date: "2023",
    href: "/python_basic certificate.pdf",
    kind: "pdf",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "2023",
    href: "/problem_solving_basic certificate.pdf",
    kind: "pdf",
  },
];

const workshops: Credential[] = [
  {
    title: "Angular Workshop",
    issuer: "NED University",
    date: "2024",
    href: "/Angular Workshop.pdf",
    kind: "pdf",
  },
];

const leetcodeBadges: Credential[] = [
  {
    title: "100 Days Badge",
    issuer: "LeetCode · 100 consecutive days of problem solving",
    date: "2024",
    href: "https://leetcode.com/medal/?showImg=0&id=4138988&isLevel=false",
    image: "/LeetCode 100 Days Badge.png",
    kind: "link",
  },
  {
    title: "50 Days Badge",
    issuer: "LeetCode · 50 consecutive days of problem solving",
    date: "2024",
    href: "https://leetcode.com/medal/?showImg=0&id=3862454&isLevel=false",
    image: "/LeetCode 50 Days Badge.png",
    kind: "link",
  },
];

const groups: { label: string; items: Credential[] }[] = [
  { label: "Certificates", items: certifications },
  { label: "Workshops", items: workshops },
  { label: "LeetCode badges · 240+ problems solved", items: leetcodeBadges },
];

const CredentialRow = ({ item }: { item: Credential }) => (
  <li className="flex items-center justify-between gap-4 border-t border-line py-4">
    <div className="flex min-w-0 items-center gap-3">
      {item.image && (
        <Image
          src={item.image}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 object-contain"
        />
      )}
      <div className="min-w-0">
        <p className="text-ink">{item.title}</p>
        <p className="text-sm text-ink-muted">
          {item.issuer} · {item.date}
        </p>
      </div>
    </div>
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${item.title} certificate`}
      className="link shrink-0 whitespace-nowrap text-sm"
    >
      {item.kind === "pdf" ? "View PDF ↗" : "View ↗"}
    </a>
  </li>
);

const Certifications = () => {
  return (
    <SectionWrapper id="certifications">
      <SectionHeader
        label="Certifications"
        title="Courses & certifications"
        intro="Courses, workshops and LeetCode badges I've completed."
      />

      <div className="space-y-12">
        {groups
          .filter((g) => g.items.length > 0)
          .map((group) => (
            <div key={group.label}>
              <h3 className="mb-2 font-mono text-sm text-ink-muted">
                {group.label}
              </h3>
              <ul className="border-b border-line">
                {group.items.map((item) => (
                  <CredentialRow key={item.href} item={item} />
                ))}
              </ul>
            </div>
          ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
