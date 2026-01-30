export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  companyLogo?: string;
  relationship: string;
  date: string;
  text: string;
  linkedinUrl?: string;
  image?: string;
  skills?: string[];
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Syed Tanees Ahmed",
    title: "Associate Software Engineer",
    company: "QBSCo",
    companyLogo: "/QBSCo.png",
    relationship: "Colleague",
    date: "December 2025",
    text: "I had the pleasure of working closely with Muhammad Taqi Haider at QBS, where we collaborated on multiple projects together. Taqi consistently demonstrated strong backend engineering skills, with a clear understanding of system design, APIs, and data flow. What stood out most was his attention to detail and reliability—his work was well-structured, scalable, and required very little rework. He approached challenges with a calm and solution-oriented mindset, which made collaboration smooth and efficient.",
    linkedinUrl: "https://www.linkedin.com/in/syed-tanees-ahmed-974960269/",
    skills: ["Backend Engineering", "System Design", "APIs", "Scalability"]
  },
  {
    id: 2,
    name: "Usaid Bin Rehan",
    title: "Engineering Lead",
    company: ".NET / K8s Microservices",
    relationship: "Mentor",
    date: "December 2025",
    text: "I had the pleasure of mentoring Taqi as one of my first three mentees on project Ajeek-KSA, and I was genuinely impressed by their clever logic in building business process flows and their passion for learning system design. Their independent work consistently demonstrated fast delivery without compromising quality, showing both skill and dedication. I highly recommend Taqi for any team looking for a talented .NET developer with strong analytical thinking, rapid learning ability, and a commitment to delivering high-quality work.",
    linkedinUrl: "https://www.linkedin.com/in/usaid-bin-rehan",
    featured: true,
    skills: [".NET", "System Design", "Business Logic", "Fast Delivery"]
  },
  {
    id: 3,
    name: "Muhammad Nabeel Hussain",
    title: "Software Engineer",
    company: "Koderlabs",
    companyLogo: "/KoderLabs.jpg",
    relationship: "Mentor",
    date: "December 2025",
    text: "I mentored Taqi on multiple projects where he worked on backend development using .NET. He quickly understood requirements, built clear and efficient application logic, and translated business needs into practical technical solutions. He is reliable, open to feedback, and shows strong potential as a backend engineer.",
    linkedinUrl: "https://www.linkedin.com/in/nabeel-hussain27/",
    skills: [".NET", "Backend Development", "Application Logic"]
  },
  {
    id: 4,
    name: "Basit Tariq",
    title: "Software Engineer",
    company: "KoderLabs",
    companyLogo: "/KoderLabs.jpg",
    relationship: "Mentor",
    date: "December 2025",
    text: "I had the opportunity to mentor Taqi while he worked as an Associate Software Engineer on our service-based projects, Real Estate and 10XeD. He consistently delivered his assigned tasks on time and demonstrated a strong ability to quickly grasp project requirements. Taqi is a fast learner, reliable team member, and a valuable resource who adapts well to new challenges.",
    linkedinUrl: "https://www.linkedin.com/in/basit-tariq-497022186/",
    skills: ["Fast Learner", "Reliable", "On-Time Delivery"]
  },
  {
    id: 5,
    name: "Abbas Dossa",
    title: "Test Automation Engineer",
    company: "QBS Co",
    companyLogo: "/QBSCo.png",
    relationship: "Colleague",
    date: "December 2025",
    text: "I worked with him on the Ajeek project, where he consistently identified and resolved issues at the earliest stages, helping the team stay on track. Despite it being his first opportunity, he demonstrated a high level of professionalism, ownership, and technical competence as a .NET developer. His proactive mindset and reliability made a strong positive impact on the project's overall success.",
    linkedinUrl: "https://www.linkedin.com/in/abbasdossa/",
    skills: [".NET", "Problem Solving", "Ownership", "Proactive"]
  },
  {
    id: 6,
    name: "Muhammad Osama",
    title: "Software Engineer",
    company: "Koderlabs",
    companyLogo: "/KoderLabs.jpg",
    relationship: "Colleague",
    date: "December 2025",
    text: "It was an amazing experience to work with him, we contributed on more than 2 projects and I found him quite supportive, technically sound and team maker.",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-osama-509983229/",
    skills: ["Team Collaboration", "Technical Skills", "Supportive"]
  }
];
