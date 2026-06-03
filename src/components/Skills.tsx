import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
  "HTML", "CSS", "JavaScript",
  "TypeScript", "React", "Vite",
  "Java", "Spring Boot", "Spring Security",
  "REST APIs", "JWT Authentication",
  "PostgreSQL", "JPA / Hibernate",
  "Docker",
  "Git",
  "Clean Architecture", "Backend Development", "Fullstack Development"
];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="px-6 py-3 text-base hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
