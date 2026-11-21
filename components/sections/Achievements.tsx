"use client";

import { SiHackerrank, SiLeetcode } from "react-icons/si";
import SectionWrapper from "../SectionWrapper";
import SectionHeader from "../SectionHeader";

const competitions = [
  {
    title: "KODERZ COMBAT",
    result: "Advanced to Round 2",
    description:
      "Competed against developers solving real-time algorithmic challenges under competitive conditions.",
  },
  {
    title: "Game of Codes V",
    result: "Participated",
    description:
      "Solved complex programming problems in Python and C++ during the competitive event.",
  },
];

// Keep "240+" in sync with the LeetCode badge group in Certifications.tsx.
const codingStats = [
  {
    platform: "LeetCode",
    icon: SiLeetcode,
    value: "240+",
    label: "problems solved on LeetCode",
    link: "https://leetcode.com/u/taqi_haider1/",
  },
  {
    platform: "HackerRank",
    icon: SiHackerrank,
    value: "50+",
    label: "problems solved on HackerRank, mostly DSA and Python",
    link: "https://www.hackerrank.com/profile/taqihaider591",
  },
];

const Achievements = () => {
  return (
    <SectionWrapper id="achievements">
      <SectionHeader
        label="Competitions"
        title="Competitions & practice"
        intro="Programming contests I've entered, and my numbers on coding platforms."
      />

      <div className="space-y-12">
        <div>
          <h3 className="mb-2 font-mono text-sm text-ink-muted">Contests</h3>
          <ul className="border-b border-line">
            {competitions.map((comp) => (
              <li
                key={comp.title}
                className="flex flex-col gap-1 border-t border-line py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div className="min-w-0">
                  <p className="text-ink">{comp.title}</p>
                  <p className="text-sm text-ink-muted">{comp.description}</p>
                </div>
                <p className="shrink-0 font-mono text-sm text-ink-soft">
                  {comp.result}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-sm text-ink-muted">
            Coding platforms
          </h3>
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {codingStats.map((stat) => (
              <div key={stat.platform} className="bg-canvas p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                    {stat.value}
                  </p>
                  <stat.icon className="text-xl text-ink-muted" aria-hidden="true" />
                </div>
                <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
                <a
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${stat.platform} profile`}
                  className="link mt-3 inline-block text-sm"
                >
                  Profile ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
