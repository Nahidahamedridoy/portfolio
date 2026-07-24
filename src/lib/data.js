export const projects = [
  {
    id: "rent-nest",
    title: "Rent Nest",
    category: "Property Rental Platform",
    image: "/projects/rentnest.jpg",
    color: "#DCFCE7",
    repo: "https://github.com/Nahidahamedridoy/A10-Rent-Nest-Client",
    live: "https://a10-rent-nest.vercel.app",
    description:
      "A modern full-stack property rental platform where tenants can discover rental properties, owners can manage listings, and administrators oversee the entire system through dedicated dashboards.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "JWT",
      "Stripe"
    ],
    overview:
      "Rent Nest is a MERN-based rental platform designed to simplify property management and booking. It provides separate dashboards for tenants, property owners, and administrators, along with secure authentication, online payments, and responsive user experience.",

    features: [
      "Role-based dashboards (Admin, Owner & Tenant)",
      "Secure authentication with Firebase and JWT",
      "Property listing and management",
      "Stripe payment integration",
      "Wishlist/Favorite properties",
      "Booking management system",
      "Admin property approval and user management",
      "Fully responsive design"
    ],

    challenges:
      "Implementing role-based authorization, integrating secure Stripe payments, protecting APIs with JWT, and managing multiple dashboards while maintaining a consistent user experience.",

    futureImprovements:
      "Add real-time messaging between tenants and owners, property reviews and ratings, Google Maps integration, advanced property filtering, email notifications, and analytics dashboard."
  },
  {
    id: "dragon-news",
    title: "Dragon News",
    category: "News Portal",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    color: "#DCFCE7",
    repo: "https://github.com/Nahidahamedridoy/Dragon-News",
    live: "https://dragon-news-ochre-beta.vercel.app/category/01",
    description: "A dynamic news portal that aggregates and categorizes news articles, featuring a clean layout and fast loading times.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    overview: "Dragon News is a comprehensive news aggregation platform that delivers the latest updates across various categories. Built with modern web technologies, it focuses on performance, accessibility, and a seamless reading experience.",
    features: [
      "Categorized news feeds with real-time updates",
      "User authentication for saving favorite articles",
      "Server-side rendering for improved SEO and performance",
      "Clean, distraction-free reading interface"
    ],
    challenges: "Implementing efficient server-side rendering for dynamic news routes while keeping the initial page load time extremely low required careful data fetching optimization.",
    futureImprovements: "Add a personalized news feed based on user preferences and implement a comment system for active reader engagement."
  },
  {
    id: "skill-hub",
    title: "SkillHub",
    category: "E-Learning Platform",
    image: "/projects/skillhub.jpg", // Replace with your project image
    color: "#DBEAFE",
    repo: "https://github.com/Nahidahamedridoy/skillhub-client",
    live: "https://your-skillhub-live-link.vercel.app",
    description:
      "A modern full-stack e-learning platform that enables users to explore courses, manage learning, and enjoy a secure, fast, and responsive experience built with Next.js and modern web technologies.",
    techStack: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Tailwind CSS v4",
      "HeroUI",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth"
    ],
    overview:
      "SkillHub is a modern full-stack learning platform built to provide a seamless educational experience. It features secure authentication with Better Auth, role-based access, course management, responsive design, and a clean, scalable architecture powered by Next.js and TypeScript.",
    features: [
      "Secure authentication with Better Auth",
      "Role-based access control",
      "Responsive and modern user interface",
      "Browse and explore courses",
      "Protected routes and secure user sessions",
      "Reusable component architecture",
      "Fast and optimized performance",
      "Clean dashboard experience"
    ],
    challenges:
      "Implementing secure authentication with Better Auth, building reusable and scalable components, managing role-based permissions, and maintaining a consistent responsive UI across different devices.",
    futureImprovements:
      "Add course enrollment, online payments, video streaming, progress tracking, certificates, instructor dashboard, advanced search & filtering, notifications, and AI-powered course recommendations."
  }
];
