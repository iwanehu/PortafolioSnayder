import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillGroups = [
    {
      title: "Backend",
      skills: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "REST APIs",
        "JWT Authentication",
        "JPA / Hibernate",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "Vite",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Databases",
      skills: [
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "Nginx",
        "Linux",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Testing",
      skills: [
        "JUnit",
        "Mockito",
        "Testcontainers",
      ],
    },
    {
      title: "Engineering Practices",
      skills: [
        "Clean Architecture",
        "API Design",
        "Security Best Practices",
        "Database Migrations",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3 justify-center">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-5 py-2 text-sm md:text-base hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
