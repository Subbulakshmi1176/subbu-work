import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, ShoppingCart, Bot, Video } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Parkinson's Disease Detection",
      description: "Machine learning model for voice-based disease detection with 92%+ accuracy using advanced signal processing and ML algorithms.",
      longDescription: "Developed an innovative machine learning solution that analyzes voice patterns to detect early signs of Parkinson's disease. The model uses advanced signal processing techniques and achieved over 92% accuracy in clinical testing scenarios.",
      icon: <Brain className="h-8 w-8" />,
      technologies: ["Python", "Machine Learning", "Signal Processing", "TensorFlow", "Data Analysis"],
      category: "AI/ML",
      github: "#",
      live: "#",
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Glowing – E-commerce Website",
      description: "Full-stack e-commerce platform with product listings, secure authentication, and modern UI built with React and Next.js.",
      longDescription: "A comprehensive e-commerce solution featuring user authentication, product management, shopping cart functionality, and secure payment integration. Built with modern web technologies for optimal performance.",
      icon: <ShoppingCart className="h-8 w-8" />,
      technologies: ["React.js", "Next.js", "Prisma", "MySQL", "Tailwind CSS", "Clerk Auth"],
      category: "Full-Stack",
      github: "#",
      live: "#",
      color: "bg-green-500/10 border-green-500/20"
    },
    {
      title: "AI Career Coach (Sensai)",
      description: "AI-powered application for personalized career guidance using Gemini AI with intelligent recommendation algorithms.",
      longDescription: "An intelligent career coaching platform that provides personalized career advice, skill assessments, and development roadmaps using advanced AI algorithms and natural language processing.",
      icon: <Bot className="h-8 w-8" />,
      technologies: ["JavaScript", "Gemini AI", "React.js", "NLP", "Hugging Face"],
      category: "AI/ML",
      github: "#",
      live: "#",
      color: "bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "YouTube Summary Generator",
      description: "AI tool using NLP to summarize long YouTube videos, extracting key insights and saving time for content consumers.",
      longDescription: "A powerful tool that leverages natural language processing to automatically generate concise summaries of YouTube videos, helping users quickly understand content without watching entire videos.",
      icon: <Video className="h-8 w-8" />,
      technologies: ["Python", "NLP", "YouTube API", "OpenAI", "Streamlit"],
      category: "AI/ML",
      github: "#",
      live: "#",
      color: "bg-red-500/10 border-red-500/20"
    }
  ];

  const categories = ["All", "AI/ML", "Full-Stack", "Web Development"];

  return (
    <section id="portfolio" className="py-section bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-4">My Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my recent projects showcasing skills in AI, machine learning, and full-stack development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="hover:scale-105 transition-transform"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`shadow-soft border-border/50 hover:shadow-large transition-all duration-300 hover:scale-105 group ${project.color}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 hover:border-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="default" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in working together or learning more about my projects?
          </p>
          <Button variant="hero" size="lg">
            View All Projects on GitHub
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;