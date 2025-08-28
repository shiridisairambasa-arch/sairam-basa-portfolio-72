import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send,
  Heart
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing AI/ML opportunities, collaborations, and innovative projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Currently seeking roles as an AI/ML Engineer Intern or Data Science Intern. 
                I'm passionate about applying my skills to solve real-world problems and contribute to innovative projects.
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <a 
                        href="mailto:basasai77167@gmail.com"
                        className="text-primary hover:underline"
                      >
                        basasai77167@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">Konaseema, Andhra Pradesh, India</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Interests */}
            <div className="pt-6">
              <h4 className="font-semibold mb-4 text-primary">Personal Interests</h4>
              <div className="space-y-2">
                <div className="flex items-center text-foreground/70">
                  <Heart className="h-4 w-4 text-primary mr-3" />
                  Programming & Software Development
                </div>
                <div className="flex items-center text-foreground/70">
                  <Heart className="h-4 w-4 text-primary mr-3" />
                  Mindfulness and Personal Well-being
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Actions */}
          <div className="space-y-6">
            <Card className="bg-gradient-hero border-0 shadow-glow text-white">
              <CardContent className="p-8 text-center">
                <Send className="h-12 w-12 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold mb-2">Ready to Collaborate?</h3>
                <p className="text-white/90 mb-6">
                  Let's discuss how we can work together on exciting AI/ML projects
                </p>
                <Button 
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  onClick={() => window.open('mailto:basasai77167@gmail.com')}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://linkedin.com/in/shiridi-sai-ram-basa"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Linkedin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Connect</div>
                  </CardContent>
                </Card>
              </a>
              
              <a 
                href="https://github.com/Basasai"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Github className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-muted-foreground">Code</div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Shiridi Sairam Basa. Built with passion for AI/ML innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;