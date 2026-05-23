export const portfolioData = {
  personal: {
    name: "Sandeep Yadav",
    role: "Frontend Developer",
    experience: "1+ Year",
    description:
      "Crafting scalable and performant web applications with a focus on user experience and clean code architecture.",
    bio: "I'm a passionate frontend developer with 1+ year of professional experience building production-grade applications. I specialize in creating performant, accessible, and visually stunning web interfaces using modern technologies.",
    location: "Khargone",
    email: "your.sandeep26062004@gmail.com",
    phone: "+91 8319969143",
  },

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "UI Libraries",
      items: [
        { name: "Ant Design", level: 80 },
        { name: "Shadcn UI", level: 85 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      category: "State Management",
      items: [
        { name: "Redux", level: 80 },
        { name: "Context API", level: 85 },
        { name: "Zustand", level: 75 },
      ],
    },
    {
      category: "Architecture",
      items: [
        { name: "Monorepo", level: 80 },
        { name: "Microservices", level: 75 },
        { name: "Component Design", level: 90 },
      ],
    },
    {
      category: "Tools & Other",
      items: [
        { name: "Git", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript", level: 90 },
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Salon Appointment System",
      description:
        "A comprehensive booking system designed with UI-focused approach and real-world use cases. Features include appointment scheduling, customer management, and service catalog.",
      longDescription:
        "Built a complete salon appointment system with a focus on user experience and performance. The system includes real-time availability checking, automated notifications, and a beautiful admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
      tech: ["React", "TypeScript", "Tailwind CSS", "Redux", "API Integration"],
      liveUrl: "https://salon-appointment-system-lac.vercel.app/booking",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: 2,
      title: "Wallcraft - HD Wallpaper App",
      description:
        "High-quality wallpaper distribution platform featuring HD image downloads. Integrates with Pexabay API for a vast collection of stunning wallpapers.",
      longDescription:
        "A modern wallpaper application with advanced filtering, search capabilities, and high-quality image downloads. Optimized for performance with image lazy loading and caching.",
      image:
        "https://images.unsplash.com/photo-1634986676612-1fceb36a3c4a?w=1200&h=600&fit=crop",
      tech: ["React", "Tailwind CSS", "API Integration", "Image Optimization"],
      liveUrl: "https://wallcraft-beige.vercel.app/",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 3,
      title: "E-Commerce UI Platform",
      description:
        "Modern e-commerce interface with product listings, advanced filters, and shopping cart. Focused on performance optimization and seamless UX.",
      longDescription:
        "A fully responsive e-commerce platform featuring product discovery, filtering system, and smooth checkout experience. Built with performance as a priority.",
      image:
        "https://images.unsplash.com/photo-1460925895917-adf4ee868993?w=1200&h=600&fit=crop",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Performance Optimization",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      id: 4,
      title: "Chat Application UI",
      description:
        "Real-time chat interface with clean and responsive layout. Features message threading, typing indicators, and user presence.",
      longDescription:
        "A sophisticated chat application UI designed for real-time communication. Includes features like message history, user profiles, and responsive design across all devices.",
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=600&fit=crop",
      tech: [
        "React",
        "Framer Motion",
        "Tailwind CSS",
        "Real-time Updates",
        "Responsive Design",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com",
      featured: false,
    },
  ],

  experience: [
    {
      title: "Frontend Developer",
      company: "Tech Company",
      period: "2024 — Present",
      phase: "Production Engineering",
      duration: "1 Year",
      description:
        "Developed and maintained multiple production-grade applications with focus on performance and user experience.",
      achievements: [
        "Shipped multiple production React applications used by real customers.",
        "Built scalable component systems with TypeScript, Tailwind, and Shadcn UI.",
        "Implemented complex state flows with Redux Toolkit across feature modules.",
        "Worked within monorepo architecture, contributing to shared design tokens and utilities.",
      ],
    },
  ],

  social: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "twitter",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: "mail",
    },
  ],

  navigation: [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ],
};
