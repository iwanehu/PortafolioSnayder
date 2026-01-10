import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [

{
      title: "MovieWebApp",
      description: "A web application based on React, TypeScript, and Vite for exploring and discovering movies ",
      tech: ["React", "TypeScript", "React icon", "Vite"],
      Image:["movieapp.png"],
      github: "https://github.com/iwanehu/MovieWebApp",
      live: "https://moviewebaapp.netlify.app/"
    },

    {
      title: "The-wild-oasis website",
      description: "It serves as a reservation management panel for luxury cabins. It allows administrators to manage bookings, cabins, users, and settings, offering a comprehensive tool to oversee cabin rental operations.",
      tech: ["React", "Next.js", "supabase","Tailwind CSS","Heroicon",],
      Image:["wildoasis.png"],
      github: "https://github.com/iwanehu/The-wild-oasis-website",
      live: "https://the-wild-oasis-website-1jus.vercel.app/"
    },
    {
      title: "React Pizza",
      description: "A React project for taking pizza orders quickly and efficiently. Open with Chrome for geolocation to work",
      tech: ["React", "tailwind css", "Redux"],
      Image:["pizza.png"],
      github: "https://github.com/iwanehu/fast-pizza",
      live: "https://faz-pizza.netlify.app/"
    },
    
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border">
             <div className="relative aspect-video overflow-hidden">
              <img src={project.Image} alt={project.title} className="w-full h-full object-cover" />
             </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="gap-2 flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" className="gap-2 flex-1" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Live
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
