import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about building intelligent systems and solving real-world problems through AI/ML
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/80">
              Motivated and detail-oriented B.Tech student specializing in Artificial Intelligence and Machine Learning. 
              I'm proficient in Python, computer vision, and data analysis with hands-on experience gained through AI/ML internships.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm passionate about building intelligent systems and solving real-world problems using data-driven approaches. 
              Currently seeking opportunities as an AI/ML Engineer Intern or Data Science Intern to apply my skills in practical projects.
            </p>
            <div className="pt-4">
              <div className="text-sm text-muted-foreground mb-2">Based in</div>
              <div className="text-lg font-medium">Konaseema, Andhra Pradesh, India</div>
            </div>
          </div>
          
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-muted-foreground">Current Studies</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-primary">
                  B.Tech in Artificial Intelligence and Machine Learning
                </h4>
                <p className="text-muted-foreground">
                  Srinivasa Institute of Engineering and Technology
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <span className="font-medium">2022 - 2026</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;