import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-glow"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Srijit Bhattacharya</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack Developer & Computer Science Student
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Crafting elegant solutions with modern web technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-foreground hover:bg-primary/10"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
