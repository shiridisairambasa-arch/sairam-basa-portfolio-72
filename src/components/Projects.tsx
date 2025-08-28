import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink, Gamepad2, Mic } from "lucide-react";

const projects = [
  {
    title: "Hand Gesture Game Controller",
    description: "Built a computer vision system that allows users to control games using hand gestures captured via webcam. The system maps specific hand gestures to keyboard actions, enabling touchless gameplay for an enhanced gaming experience.",
    icon: Gamepad2,
    technologies: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    features: [
      "Real-time hand gesture recognition",
      "Gesture-to-keyboard mapping",
      "Touchless game control",
      "Computer vision integration"
    ],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "AI-Powered Voice Assistant Web App",
    description: "Developed a comprehensive voice assistant web application with real-time speech recognition and natural language processing capabilities. Users can interact naturally through voice commands for queries and automation tasks.",
    icon: Mic,
    technologies: ["Python", "Streamlit", "Whisper", "pyttsx3", "SpeechRecognition", "OpenAI/TinyLlama"],
    features: [
      "Real-time speech recognition",
      "Natural language processing",
      "Voice-based interaction",
      "Query automation"
    ],
    gradient: "from-green-500 to-teal-600"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Innovative AI/ML projects showcasing practical applications and technical expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${project.gradient} shadow-glow`}>
                    <project.icon className="h-8 w-8 text-white" />
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10"
                  >
                    <Code className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-foreground/70 flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="border-primary/20 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;