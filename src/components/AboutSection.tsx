import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Brain, 
  Globe, 
  Lightbulb, 
  GraduationCap, 
  Calendar 
} from "lucide-react";

const AboutSection = () => {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science (AI&DS)",
      institution: "Adhi College of Engineering and Technology, Kanchipuram",
      period: "2022 – 2026",
      status: "Current"
    },
    {
      degree: "Higher Secondary Education (Class 12)",
      institution: "St Joseph's girls hr sec school, Arni",
      period: "2020 – 2022",
      status: "Completed"
    },
    {
      degree: "Secondary Education (Class 10)",
      institution: "St Joseph's girls hr sec school, Arni",
      period: "2019 – 2020",
      status: "Completed"
    }
  ];

  const skillCategories = [
    {
      title: "Programming & Development",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Prisma", "MySQL"]
    },
    {
      title: "Artificial Intelligence & Data Science",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Machine Learning", "Deep Learning", "Data Analysis", "Gemini", "Hugging Face"]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["Full-Stack Development", "Authentication & Security", "Responsive UI/UX Design"]
    },
    {
      title: "Problem-Solving & Creative",
      icon: <Lightbulb className="h-6 w-6" />,
      skills: ["Data Structures & Algorithms", "LeetCode", "HackerRank", "Graphic Design", "Cloud Basics", "Communication"]
    }
  ];

  return (
    <section id="about" className="py-section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn more about my background, education, and the skills I've developed
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Bio */}
          <div className="space-y-8">
            <Card className="shadow-soft border-border/50">
              <CardContent className="p-8">
                <h3 className="text-subheading text-foreground mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  My Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Hi, I'm Subbu Lakshmi, a final-year Artificial Intelligence and Data Science student 
                  passionate about building impactful digital solutions. With expertise spanning full-stack 
                  development and machine learning, I transform complex ideas into interactive, user-friendly applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My goal is to grow as a full-stack web developer in an MNC, contribute to AI-driven innovations, 
                  and keep learning every single day. I believe in the power of technology to solve real-world 
                  problems and am committed to continuous learning and improvement.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="shadow-soft border-border/50">
              <CardContent className="p-8">
                <h3 className="text-subheading text-foreground mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-2"></div>
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <Badge variant={edu.status === "Current" ? "default" : "secondary"}>
                          {edu.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-1">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-subheading text-foreground mb-6">Skills & Expertise</h3>
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-soft border-border/50 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {category.icon}
                    </div>
                    <h4 className="font-semibold text-foreground">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
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
      </div>
    </section>
  );
};

export default AboutSection;