import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management",
      description:
        "Full-stack hospital management platform built with Spring Boot, React, and PostgreSQL. Includes JWT authentication, role-based access, patient and staff management, appointments, admissions, automated testing, and Docker deployment.",
      tech: [
        "Java 21",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "JPA / Hibernate",
        "Flyway",
        "React",
        "Docker",
        "JUnit",
        "Testcontainers",
        "Swagger / OpenAPI",
      ],
      Image: ["hospitalgestion.png"],
      github: "https://github.com/iwanehu/hospitalgestion",
      live: "https://164-132-187-235.sslip.io/login",
    },

    {
      title: "TaskTracker",
      description:
        "Full-stack task management app with JWT authentication, PostgreSQL persistence, task ownership, priorities, filtering, sorting, and Docker deployment behind Nginx.",
      tech: [
        "Spring Boot",
        "Spring Security",
        "JWT",
        "PostgreSQL",
        "JPA / Hibernate",
        "React",
        "Vite",
        "Docker",
        "Nginx",
      ],
      Image: ["tasktracker.png"],
      github: "https://github.com/iwanehu/task-tracker-backend",
      live: "https://tasks.164-132-187-235.sslip.io",
    },

    {
      title: "JavaChatRoom",
      description:
        "Real-time chat application built with Spring Boot, WebSocket, JWT authentication, React, and persistent multi-user communication.",
      tech: [
        "Spring Boot",
        "Spring WebSocket",
        "JWT",
        "React",
        "Vite",
        "Docker",
      ],
      Image: ["javachat-react.png"],
      github: "https://github.com/iwanehu/javachat",
      live: "https://java-chatroom.netlify.app/",
    },

    {
      title: "Crypto Dashboard",
      description:
        "Cryptocurrency dashboard built with Django that displays live market data using auto-refresh. It integrates Neon PostgreSQL and a modular backend architecture.",
      tech: [
        "Django 5",
        "Python 3",
        "Neon PostgreSQL",
        "HTML & CSS",
        "JavaScript",
        "Requests",
        "python-dotenv",
      ],
      Image: ["dashboard.png"],
      github: "https://github.com/iwanehu/Da",
      live: "https://da-v9zw.onrender.com/",
    },

    {
      title: "Pokedex",
      description:
        "Interactive Pokédex built with React and TypeScript using the PokeAPI to explore Pokémon data, abilities, stats, and related information.",
      tech: ["React", "TypeScript", "Vite", "PokeAPI", "Netlify"],
      Image: ["pokedexsnay.png"],
      github: "https://github.com/iwanehu/Pokedex",
      live: "https://pokedexsnay.netlify.app/",
    },

    {
      title: "MovieWebApp",
      description:
        "Movie discovery application built with React, TypeScript, and Vite for browsing and exploring movie content through a modern frontend interface.",
      tech: ["React", "TypeScript", "React Icons", "Vite"],
      Image: ["movieapp.png"],
      github: "https://github.com/iwanehu/MovieWebApp",
      live: "https://moviewebaapp.netlify.app/",
    },

    {
      title: "The Wild Oasis",
      description:
        "Reservation management dashboard for luxury cabins. It allows administrators to manage bookings, cabins, users, and application settings.",
      tech: [
        "React",
        "Next.js",
        "Supabase",
        "Tailwind CSS",
        "Heroicons",
      ],
      Image: ["wildoasis.png"],
      github: "https://github.com/iwanehu/The-wild-oasis-website",
      live: "https://the-wild-oasis-website-1jus.vercel.app/",
    },

    {
      title: "Instagram Replica",
      description:
        "Instagram-inspired social media interface built with React and TypeScript, focused on recreating core layout and interaction patterns.",
      tech: ["React", "TypeScript", "React Icons", "Vite"],
      Image: ["instagramrepli.png"],
      github: "https://github.com/iwanehu/instagramclone",
      live: "https://cloninssta.netlify.app/",
    },

    {
      title: "React Pizza",
      description:
        "Pizza ordering application built with React and Redux, featuring a fast order workflow, responsive UI, and geolocation support.",
      tech: ["React", "Redux", "Tailwind CSS"],
      Image: ["pizza.png"],
      github: "https://github.com/iwanehu/fast-pizza",
      live: "https://faz-pizza.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group h-full flex flex-col overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.Image[0]}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>

                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2 flex-1"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>

                  <Button
                    size="sm"
                    className="gap-2 flex-1"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
