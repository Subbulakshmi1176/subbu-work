import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Database, 
  Bot, 
  Smartphone, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive, fast, and modern websites using React, Next.js, and Tailwind CSS with a focus on user experience and performance.",
      icon: <Code2 className="h-8 w-8" />,
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "SEO Optimization",
        "Performance Optimization"
      ],
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Full-Stack Development",
      description: "Complete web application development with Prisma, MySQL, and secure authentication systems for robust, scalable solutions.",
      icon: <Database className="h-8 w-8" />,
      features: [
        "Backend API Development",
        "Database Design",
        "Authentication & Security",
        "Cloud Integration"
      ],
      color: "bg-green-500/10 border-green-500/20"
    },
    {
      title: "AI Integration",
      description: "Specialized in creating e-commerce platforms, portfolio websites, and AI-integrated applications with modern technologies.",
      icon: <Bot className="h-8 w-8" />,
      features: [
        "Machine Learning Models",
        "AI-Powered Features",
        "Data Analysis",
        "Intelligent Automation"
      ],
      color: "bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with product management, secure payments, and user-friendly shopping experiences.",
      icon: <Smartphone className="h-8 w-8" />,
      features: [
        "Product Management",
        "Secure Payments",
        "Inventory Tracking",
        "Order Management"
      ],
      color: "bg-orange-500/10 border-orange-500/20"
    },
    {
      title: "Security & Authentication",
      description: "Implementing robust security measures and authentication systems to protect user data and ensure application integrity.",
      icon: <Shield className="h-8 w-8" />,
      features: [
        "Secure Authentication",
        "Data Protection",
        "SSL Integration",
        "Security Audits"
      ],
      color: "bg-red-500/10 border-red-500/20"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements and creating a detailed project roadmap."
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Creating wireframes, designing interfaces, and developing the solution."
    },
    {
      step: "03",
      title: "Testing & Deployment",
      description: "Thorough testing, optimization, and smooth deployment to production."
    },
    {
      step: "04",
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to ensure optimal performance."
    }
  ];

  return (
    <section id="services" className="py-section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-4">What I Offer</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive development services to bring your digital ideas to life with modern technologies and best practices
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`shadow-soft border-border/50 hover:shadow-medium transition-all duration-300 hover:scale-105 group ${service.color}`}
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-subheading text-foreground mb-4">My Development Process</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to ensure your project is delivered on time, within budget, and exceeds expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-subheading text-foreground mb-4">Ready to Start Your Project?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together. I'm here to help bring your vision to life.
          </p>
          <Button variant="hero" size="lg">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;