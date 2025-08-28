import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Brain, 
  Wrench, 
  Users, 
  Lightbulb 
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C", "SQL"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Libraries & Frameworks",
    icon: Brain,
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "TensorFlow", "OpenCV"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Jupyter Notebook", "VSCode", "Google Colab", "Streamlit"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Specialized Skills",
    icon: Lightbulb,
    skills: ["Prompt Engineering", "Generative AI"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Team Collaboration", "Problem Solving", "Adaptability", "Time Management", "Communication", "Critical Thinking"],
    color: "from-indigo-500 to-purple-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground">
            Technical proficiencies and soft skills developed through hands-on experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} shadow-glow mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className="bg-primary/5 text-primary border border-primary/20 hover:bg-primary/10 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Skills Highlight */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-hero border-0 shadow-glow text-white inline-block">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Core Expertise</h3>
              <p className="text-white/90">
                AI/ML Engineering • Computer Vision • Data Analysis • Neural Networks
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;