import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-gradient">Snayder</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
           Ingeniero informatico
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <a href="#projects"> 
            <Button size="lg" className="gap-2">
              View My Work <ArrowDown className="h-4 w-4" />
            </Button>
            </a>
            <a href="#contact">
              
            <Button size="lg" variant="outline" className="gap-2">
              <Mail className="h-4 w-4" /> Contact Me
            </Button>
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com/iwanehu" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/snayder-marulanda/" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:snaydermarulanda@gmail.com"
               className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about">

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
      </a>
    </section>
  );
};

export default Hero;
