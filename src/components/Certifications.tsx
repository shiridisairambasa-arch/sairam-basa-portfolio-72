import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    category: "Programming",
    color: "bg-blue-500"
  },
  {
    title: "Python and Pandas for Data Engineering",
    issuer: "Pragmatic AI Labs (edX)",
    category: "Data Engineering",
    color: "bg-green-500"
  },
  {
    title: "Introduction to SQL",
    issuer: "edX",
    category: "Database",
    color: "bg-purple-500"
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Simplilearn",
    category: "AI/ML",
    color: "bg-red-500"
  },
  {
    title: "Generative AI and LLMs on AWS",
    issuer: "Pragmatic AI Labs (edX)",
    category: "Cloud AI",
    color: "bg-orange-500"
  },
  {
    title: "ChatGPT & Advanced Prompt Engineering",
    issuer: "edX",
    category: "AI/ML",
    color: "bg-cyan-500"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "IBM (edX)",
    category: "AI/ML",
    color: "bg-indigo-500"
  },
  {
    title: "Introduction to Prompt Engineering",
    issuer: "IBM (edX)",
    category: "AI/ML",
    color: "bg-pink-500"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional certifications demonstrating continuous learning and expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-full ${cert.color} shadow-lg`}>
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="font-semibold text-lg mb-2 leading-tight">
                  {cert.title}
                </h3>
                
                <p className="text-primary font-medium mb-3">
                  {cert.issuer}
                </p>
                
                <Badge 
                  variant="secondary"
                  className="bg-primary/5 text-primary border border-primary/20"
                >
                  {cert.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Summary Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-muted-foreground">Professional Certifications</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-muted-foreground">AI/ML Specializations</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground">Cloud & Engineering</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;