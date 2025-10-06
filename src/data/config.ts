const config = {
  title: "AIshvarya | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Aishvarya, a full-stack developer specializing in modern web apps and AI-powered projects.",
    short:
      "Discover the portfolio of Aishvarya, a full-stack developer building impactful web apps.",
  },
  keywords: [
    "Aishvarya",
    "portfolio",
    "full-stack developer",
    "web development",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Framer Motion",
  ],
  author: "AIshvarya",
  email: "aish160502@gmail.com",
  phone: "+91 9306010966",
  site: "http://localhost:3000",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/aishvarya-dev-b02117350/",
    instagram: "https://www.instagram.com/aish.__.17/",
    facebook: "",
    github: "https://github.com/Aishvarya-Pec",
  },
};
export { config };
