import type { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Chandrahas Maddineni",
  title: "Associate Software Engineer",
  email: "chandrahas.maddineni@gmail.com",
  linkedin: "https://www.linkedin.com/in/chandrahas-maddineni",
  github: "https://github.com/MChandrahas",
  about: "Associate Software Engineer with a solid foundation in backend development and hands-on experience in Python, C/C++, and Linux. I specialize in developing secure REST APIs, optimizing system performance using agile methodologies, and establishing robust CI/CD pipelines."
};

export const PROJECTS: Project[] = [
  {
    title: "DevMetrics Pro - GitHub Analytics Dashboard",
    description: "A full-stack web application that visualizes GitHub repository metrics to help developers track project activity. Integrated GitHub OAuth and REST API to fetch data, with a performant backend and an interactive dashboard using React and Recharts.",
    imageUrl: "https://source.unsplash.com/1200x800/?dashboard,analytics,code",
    tags: ["React", "Node.js", "PostgreSQL", "Redis", "Socket.io", "GitHub API", "Recharts", "Express.js"],
    sourceUrl: "https://github.com/MChandrahas",
  },
  {
    title: "CollabCanvas - Real-Time Collaborative Whiteboard",
    description: "A web-based drawing application where multiple users can collaborate on a shared canvas simultaneously. Built with Socket.io for real-time synchronization and the HTML5 Canvas API with Fabric.js for drawing tools.",
    imageUrl: "https://source.unsplash.com/1200x800/?whiteboard,collaboration,drawing",
    tags: ["React", "Node.js", "Socket.io", "HTML5 Canvas", "Fabric.js"],
    sourceUrl: "https://github.com/MChandrahas",
  },
];

export const SKILLS: Skill[] = [
  { name: "JavaScript", category: "Programming", icon: "javascript" },
  { name: "Python", category: "Programming", icon: "python" },
  { name: "Java", category: "Programming", icon: "java" },
  { name: "C++", category: "Programming", icon: "cplusplus" },
  { name: "SQL", category: "Programming", icon: "sql" },
  { name: "HTML5", category: "Programming", icon: "html5" },
  { name: "CSS3", category: "Programming", icon: "css3" },
  
  { name: "React", category: "Full-Stack", icon: "react" },
  { name: "Node.js", category: "Full-Stack", icon: "nodejs" },
  { name: "Express.js", category: "Full-Stack", icon: "express" },
  { name: "PostgreSQL", category: "Full-Stack", icon: "postgresql" },
  { name: "MongoDB", category: "Full-Stack", icon: "mongodb" },
  { name: "RESTful APIs", category: "Full-Stack" },
  { name: "JWT Authentication", category: "Full-Stack" },

  { name: "AWS", category: "Cloud & DevOps", icon: "aws" },
  { name: "Docker", category: "Cloud & DevOps", icon: "docker" },
  { name: "Jenkins", category: "Cloud & DevOps", icon: "jenkins" },
  { name: "Git", category: "Cloud & DevOps", icon: "git" },
  { name: "GitHub", category: "Cloud & DevOps", icon: "github" },
  { name: "CI/CD", category: "Cloud & DevOps" },
  { name: "Linux", category: "Cloud & DevOps", icon: "linux" },

  { name: "Jest", category: "Practices & Design", icon: "jest" },
  { name: "Agile / Scrum", category: "Practices & Design" },
  { name: "System Design", category: "Practices & Design" },
  { name: "Scalable Architecture", category: "Practices & Design" },
  { name: "Object-Oriented Design", category: "Practices & Design" },
];