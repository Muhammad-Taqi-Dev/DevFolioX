"use client";

import { useState, useEffect, useRef } from "react";
import { testimonials, type Testimonial } from "@/lib/testimonials";
import { Quote, Linkedin, Award, CheckCircle, Calendar } from "lucide-react";
import Image from "next/image";

type FilterType = "All" | "Mentor" | "Colleague";

// Component for individual testimonial card with read more/less and animations
function TestimonialCard({ 
  testimonial, 
  index 
}: { 
  testimonial: typeof testimonials[0];
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const CHARACTER_LIMIT = 200;
  const shouldTruncate = testimonial.text.length > CHARACTER_LIMIT;
  const displayText = isExpanded || !shouldTruncate 
    ? testimonial.text 
    : testimonial.text.slice(0, CHARACTER_LIMIT) + "...";

  // Generate avatar URL using ui-avatars.com
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&size=80&background=3b82f6&color=fff&bold=true`;

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  // Check if testimonial is recent (within 2 months)
  const isRecent = () => {
    const testimonialDate = new Date(testimonial.date);
    const twoMonthsAgo = new Date();
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
    return testimonialDate >= twoMonthsAgo;
  };

  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-500 flex flex-col ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Trust Indicators */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
          <CheckCircle className="w-4 h-4" />
          <span className="text-xs font-medium">Verified</span>
        </div>
        {isRecent() && (
          <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
            <Calendar className="w-4 h-4" />
            <span className="text-xs font-medium">Recent</span>
          </div>
        )}
      </div>

      {/* Header with Avatar, Company Logo and Quote Icon */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={avatarUrl}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full"
          />
          {testimonial.companyLogo && (
            <Image
              src={testimonial.companyLogo}
              alt={testimonial.company}
              width={40}
              height={40}
              className="object-contain"
            />
          )}
        </div>
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
          {testimonial.skills.map((skill: string, idx: number) => (
            <span
              key={idx}
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

// Featured Testimonial Component
function FeaturedTestimonial({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&size=120&background=3b82f6&color=fff&bold=true`;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl shadow-xl p-8 mb-12 border-2 border-blue-200 dark:border-blue-800">
      <div className="flex items-center gap-2 mb-4">
        <Award className="w-6 h-6 text-yellow-500" />
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
          Featured Recommendation
        </span>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <img
          src={avatarUrl}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full shadow-lg"
        />
        
        <div className="flex-grow">
          <Quote className="w-10 h-10 text-blue-600 dark:text-blue-400 opacity-30 mb-3" />
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed italic">
            &quot;{testimonial.text}&quot;
          </p>
          
          {/* Skills Tags */}
          {testimonial.skills && testimonial.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {testimonial.skills.map((skill: string, idx: number) => (
                <span
                  key={idx}
                  className="px-4 py-2 text-sm font-medium bg-blue-600 dark:bg-blue-700 text-white rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h4 className="font-bold text-xl text-gray-900 dark:text-white">
                {testimonial.name}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                {testimonial.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonial.company}
              </p>
            </div>
            
            {testimonial.linkedinUrl && (
              <a
                href={testimonial.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                View Profile
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [filter, setFilter] = useState<FilterType>("All");
  const [animate, setAnimate] = useState(false);

  const mentorCount = testimonials.filter((t: Testimonial) => t.relationship === "Mentor").length;
  const colleagueCount = testimonials.filter((t: Testimonial) => t.relationship === "Colleague").length;
  
  const featuredTestimonial = testimonials.find((t: Testimonial) => t.featured);
  const regularTestimonials = testimonials.filter((t: Testimonial) => !t.featured);

  const filteredTestimonials = regularTestimonials.filter((testimonial: Testimonial) => {
    if (filter === "All") return true;
    return testimonial.relationship === filter;
  });

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Stats Badge */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-2 px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full mb-6 transition-all duration-700 ${animate ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <Award className="w-5 h-5" />
            <span className="font-bold text-lg">{testimonials.length}+ LinkedIn Recommendations</span>
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What colleagues and mentors say about working with me
          </p>
        </div>

        {/* Featured Testimonial */}
        {featuredTestimonial && (
          <FeaturedTestimonial testimonial={featuredTestimonial} />
        )}

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setFilter("All")}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === "All"
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            All ({testimonials.length})
          </button>
          <button
            onClick={() => setFilter("Mentor")}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === "Mentor"
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            Mentors ({mentorCount})
          </button>
          <button
            onClick={() => setFilter("Colleague")}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              filter === "Colleague"
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            Colleagues ({colleagueCount})
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial: Testimonial, idx: number) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={idx} />
          ))}
        </div>

        {/* LinkedIn CTAs */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            Want to see more recommendations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/taqih1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5" />
              View my LinkedIn Profile
            </a>
            <a
              href="https://www.linkedin.com/in/taqih1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg transition-colors duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
