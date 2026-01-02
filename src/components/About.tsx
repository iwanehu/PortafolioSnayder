const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
           Computer Engineer focused on developing robust software, optimizing processes, and creating digital products that drive technological success.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
          When I'm not programming, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
