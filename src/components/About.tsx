const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Ingeniero Informático enfocado en el desarrollo de software robusto, optimización de procesos y la creación de productos digitales que impulsan el éxito tecnológico.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
           Cuando no estoy programando, me puedes encontrar explorando nuevas tecnologías, contribuyendo al código abierto o compartiendo conocimientos con la comunidad de desarrolladores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
