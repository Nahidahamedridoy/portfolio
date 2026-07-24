export const projects = [
  {
    id: "summer-cart",
    title: "Summer Cart",
    category: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    color: "#E0E7FF",
    repo: "https://github.com/Nahidahamedridoy/A8-SunCart",
    live: "https://a8-sun-cart.vercel.app/",
    description: "A modern e-commerce platform offering a seamless shopping experience with intuitive product discovery and secure checkout.",
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    overview: "Summer Cart is a fully responsive e-commerce web application designed to provide users with an engaging and effortless shopping experience. It features dynamic product listings, a robust cart system, and seamless user authentication.",
    features: [
      "Dynamic product catalog with advanced filtering and search",
      "Secure user authentication and authorization",
      "Interactive shopping cart with real-time total calculation",
      "Responsive design optimized for both mobile and desktop"
    ],
    challenges: "Handling state management for the shopping cart across different components while ensuring the UI remained perfectly synced with the backend database was a significant technical challenge.",
    futureImprovements: "Implement a fully functional payment gateway integration and add a comprehensive admin dashboard for inventory management."
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
    id: "english-janala",
    title: "English Janala",
    category: "Learning Platform",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
    color: "#FEE2E2",
    repo: "https://github.com/Nahidahamedridoy/English-Janala",
    live: "https://nahidahamedridoy.github.io/English-Janala/",
    description: "An interactive English learning platform designed to help users improve their vocabulary and grammar through structured lessons.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    overview: "English Janala is an accessible web-based educational tool tailored for learners who want to enhance their English language skills. It provides structured tutorials, interactive exercises, and a user-friendly interface.",
    features: [
      "Structured learning modules for different proficiency levels",
      "Interactive quizzes and vocabulary exercises",
      "Progress tracking for registered users",
      "Fully responsive and accessible UI design"
    ],
    challenges: "Designing an engaging and intuitive user interface that accommodates learners of all ages without overwhelming them with cognitive load.",
    futureImprovements: "Integrate spaced repetition algorithms for vocabulary practice and add audio pronunciation guides for challenging words."
  }
];
