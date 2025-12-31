import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
         Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de sus visiones.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2" asChild>
            <a href="mailto:iwanehu@gmail.com">
              <Mail className="h-5 w-5" /> Email Me
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="https://github.com/iwanehu" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" /> GitHub
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="https://www.linkedin.com/in/snayder-marulanda/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
