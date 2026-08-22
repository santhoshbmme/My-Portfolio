/**
 * TypeScript interfaces representing the core content types in the portfolio.
 */

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string; // Placeholder or gradient design to represent the project
  link: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
  details: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

/**
 * Static portfolio data for Santhosh M.
 * Decouples website content from UI display logic to allow easy maintenance.
 */
export const portfolioData = {
  personalInfo: {
    name: "Santhosh M",
    title: "Web Developer & Creative Developer",
    subtitle: "Focusing on high-quality websites, interactive products and digital experiences.",
    location: "Coimbatore, India",
    email: "santhoshwebsstudio@gmail.com",
    whatsapp: "https://wa.me/9345055815",
    linkedin: "https://www.linkedin.com/in/santhosh01?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/santhoshm-dev", // Placeholder
    instagram: "https://www.instagram.com/_santhoshmurali/",
    tagline: "I combine design thinking, frontend engineering, and visual storytelling to create websites that communicate clearly and leave a strong impression."
  },
  
  services: [
    {
      id: "web-dev",
      num: "01",
      title: "Website Development",
      description: "Modern, ultra-responsive websites built for speed, performance, and search engine visibility.",
      details: ["Vite & React", "TypeScript", "Performance Optimization", "Clean Codebases"]
    },
    {
      id: "ui-ux",
      num: "02",
      title: "UI / UX Design",
      description: "Clean, functional interfaces structured around user behavior, visual clarity, and design systems.",
      details: ["Figma Prototyping", "Design Systems", "Typography & Rhythm", "Wireframing"]
    },
    {
      id: "landing-pages",
      num: "03",
      title: "Landing Pages",
      description: "High-conversion landing pages optimized for products, campaigns, and lead generation.",
      details: ["Conversion Strategy", "A/B Test Ready", "Fast Load Times", "Call-to-Action Flow"]
    },
    {
      id: "web-apps",
      num: "04",
      title: "Web Applications",
      description: "Feature-rich web applications built with scalable architectures and polished user flows.",
      details: ["React Ecosystems", "State Management", "API Integrations", "Secure Authentication"]
    },
    {
      id: "creative-experiences",
      num: "05",
      title: "Creative Web Experiences",
      description: "Interactive websites utilizing fluid animations, layout motion, and unique visual designs.",
      details: ["Framer Motion", "Micro-interactions", "Interactive Canvas", "Storytelling Scroll"]
    }
  ] as ServiceItem[],

  projects: [
    {
      id: "mithraa-studio",
      num: "01",
      title: "Mithraa Studio",
      category: "Creative E-Commerce",
      description: "A premium art studio and personalized gifting platform featuring fluid transitions, custom product selections, and a minimalist design.",
      tags: ["React", "Vite", "Framer Motion", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop", // Art studio concept
      link: "https://mithstudio.netlify.app/"
    },
    {
      id: "mani-sports",
      num: "02",
      title: "Mani Sports Academy",
      category: "Service Presentation",
      description: "A service-oriented, bold sports academy website with class scheduling, registration forms, and an action-focused modern visual design.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop", // Sports theme
      link: "https://mani-sports-academy.netlify.app/"
    },
    {
      id: "creative-landing",
      num: "03",
      title: "Creative Landing Page",
      category: "Design Concept",
      description: "An experimental, interactive single-page website focusing on typography layouts, image hover reveals, and micro-interactions.",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop", // Creative dev mockup
      link: "#"
    }
  ] as ProjectItem[],

  process: [
    {
      num: "01",
      title: "Discover",
      description: "Goal Definition & Research",
      details: "Before writing any code, we identify the project goals, target audience, brand aesthetic, and core visual requirements. This ensures alignment between business strategy and digital layout design."
    },
    {
      num: "02",
      title: "Plan",
      description: "Information Architecture",
      details: "We define page structure, outline user navigation flows, and draft layout systems. This maps the visual narrative and highlights where key interactive components should sit."
    },
    {
      num: "03",
      title: "Design",
      description: "Visual System & Prototyping",
      details: "Creating high-fidelity UI systems in Figma. We define grid layouts, typography hierarchies, and curated color palettes, establishing the complete look and feel before entering development."
    },
    {
      num: "04",
      title: "Build",
      description: "Clean Frontend Engineering",
      details: "Developing the experience using React, TypeScript, and Tailwind CSS. We implement structural semantic HTML, modular components, and premium micro-interactions with Framer Motion."
    },
    {
      num: "05",
      title: "Refine",
      description: "Optimization & Quality Check",
      details: "We optimize asset loading, perform performance audits, test form validation, check responsive behaviors, and ensure smooth interactive transitions on all browser viewports."
    }
  ] as ProcessStep[],

  skills: [
    {
      title: "Development",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript (Strict)", "React", "Next.js", "Vite", "Tailwind CSS", "Git / GitHub"]
    },
    {
      title: "Creative & Design",
      skills: ["UI/UX Design", "Figma", "Framer Motion", "Interactive Grids", "Typography Systems", "Visual Hierarchy"]
    },
    {
      title: "Tools & Optimization",
      skills: ["SEO Best Practices", "Performance Optimization", "Responsive Breakpoints", "Website Audits", "Deployment CI/CD"]
    }
  ] as SkillCategory[],

  testimonials: [
    {
      id: "t1",
      quote: "Santhosh understands frontend structure like a seasoned engineer but designs with the eye of a creative director. He built a high-fidelity experience that blew our expectations away.",
      author: "Elena Rodriguez",
      role: "Founder",
      company: "Mithraa Art Collective"
    },
    {
      id: "t2",
      quote: "The interface Santhosh delivered for WiseWealth was visually stunning, lightweight, and incredibly responsive. The dashboard layout is clean and intuitive, which our clients love.",
      author: "Marcus Chen",
      role: "Product Lead",
      company: "WiseWealth FinTech"
    },
    {
      id: "t3",
      quote: "Working with Santhosh was seamless. He has a structured process from plan to deployment. He took our complex sports academy schedule and presented it in a clean, conversion-focused flow.",
      author: "Mani K",
      role: "Director",
      company: "Mani Sports Academy"
    }
  ] as TestimonialItem[]
};
