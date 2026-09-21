const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Software Developer focused on Java, Spring Boot, React, and PostgreSQL.
            I build full-stack applications with secure REST APIs, JWT
            authentication, relational databases, and modern frontend interfaces.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I have hands-on experience deploying applications to Linux VPS
            environments using Docker, Nginx, and HTTPS, as well as documenting
            APIs with Swagger/OpenAPI and managing database migrations with Flyway.
            I also work with Git, testing tools, and clean development practices
            to build maintainable and reliable software.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            I am currently looking for a Junior Backend or Full-Stack Developer
            opportunity where I can continue improving my skills in backend
            architecture, API design, testing, databases, and production
            deployment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
