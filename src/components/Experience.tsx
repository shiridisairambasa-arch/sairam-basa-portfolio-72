import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const experiences = [
  {
    title: "AI Foundations Intern",
    company: "Microsoft",
    via: "via Edunet Foundation & AICTE",
    duration: "Apr 2025 – May 2025",
    type: "4-week internship",
    description: [
      "Completed a 4-week internship focused on AI fundamentals",
      "Worked with machine learning, neural networks, and data-driven solutions"
    ],
    skills: ["Machine Learning", "Neural Networks", "AI Fundamentals"]
  },
  {
    title: "AI-ML Intern",
    company: "AWS Academy",
    via: "via EduSkills & AICTE",
    duration: "Apr 2025 – Jun 2025",
    type: "10-week internship",
    description: [
      "Completed a 10-week internship using AWS Academy curriculum",
      "Gained practical exposure to AI/ML tools, cloud applications, and hands-on labs"
    ],
    skills: ["AWS", "Cloud Computing", "AI/ML Tools", "Hands-on Labs"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Hands-on experience through AI/ML internships and practical projects
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                      <div className="text-lg font-medium text-primary mb-1">
                        {exp.company}
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        {exp.via}
                      </div>
                      <Badge variant="secondary" className="mb-2">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-foreground/80 flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="border-primary/20 text-primary hover:bg-primary/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;