import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>
      
      {/* Profile Photo Section */}
      <div className="relative z-10 flex justify-center pt-20 pb-8">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-hero rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <img 
            src="/lovable-uploads/a44746dd-b7d3-495f-8633-df432ab346a7.png" 
            alt="Shiridi Sairam Basa - AI/ML Engineer"
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/20 shadow-glow hover:shadow-elegant transition-all duration-500 transform group-hover:scale-105"
          />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
          SHIRIDI SAIRAM BASA
        </h1>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          AI/ML Engineer • Data Science Enthusiast
        </div>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Motivated B.Tech student specializing in Artificial Intelligence and Machine Learning. 
          Building intelligent systems and solving real-world problems using data-driven approaches.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="default" 
            size="lg"
            className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a 
            href="mailto:basasai77167@gmail.com"
            className="p-3 rounded-full bg-card border border-border hover:shadow-card hover:scale-110 transition-bounce"
          >
            <Mail className="h-6 w-6 text-primary" />
          </a>
          <a 
            href="https://linkedin.com/in/shiridi-sai-ram-basa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:shadow-card hover:scale-110 transition-bounce"
          >
            <Linkedin className="h-6 w-6 text-primary" />
          </a>
          <a 
            href="https://github.com/Basasai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:shadow-card hover:scale-110 transition-bounce"
          >
            <Github className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;