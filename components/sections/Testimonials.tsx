"use client";

import { useState } from "react";
import { testimonials } from "@/lib/testimonials";
import { Quote, Linkedin } from "lucide-react";

// Component for individual testimonial card with read more/less
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const CHARACTER_LIMIT = 200;
  const shouldTruncate = testimonial.text.length > CHARACTER_LIMIT;
  const displayText = isExpanded || !shouldTruncate 
    ? testimonial.text 
    : testimonial.text.slice(0, CHARACTER_LIMIT) + "...";

  // Generate avatar URL using ui-avatars.com
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&size=80&background=3b82f6&color=fff&bold=true`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Header with Avatar and Quote Icon */}
      <div className="flex items-start justify-between mb-4">
        <img
          src={avatarUrl}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full"
        />
        <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 opacity-50" />
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow leading-relaxed">
        &quot;{displayText}&quot;
      </p>

      {/* Read More/Less Button */}
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mb-4 text-left"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}

      {/* Skills Tags */}
      {testimonial.skills && testimonial.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {testimonial.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Author Info */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex items-start justify-between">
          <div className="flex-grow">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.title}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.company}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              {testimonial.relationship} • {testimonial.date}
            </p>
          </div>

          {/* LinkedIn Link */}
          {testimonial.linkedinUrl && (
            <a
              href={testimonial.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors ml-2"
              aria-label={`View ${testimonial.name}'s LinkedIn profile`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What colleagues and mentors say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more recommendations?
          </p>
          <a
            href="https://www.linkedin.com/in/taqih1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
            View my LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
