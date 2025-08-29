import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-hero text-foreground mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-primary font-bold">Subbulakshmi E</span>
              <br />
              a Final-Year{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI & Data Science Student
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I specialize in building impactful digital solutions and transforming ideas into 
              interactive, user-friendly applications. Currently focused on full-stack development 
              with a passion for AI-driven innovations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                onClick={scrollToPortfolio}
                className="group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="portfolio" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">92%</div>
                <div className="text-sm text-muted-foreground">ML Model Accuracy</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-float"></div>
              <div className="relative bg-white p-4 rounded-full shadow-large">
                <img
                  src={profilePhoto}
                  alt="Subbulakshmi E - Full Stack Developer"
                  className="w-80 h-80 rounded-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-medium animate-float">
                AI & Data Science
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white border border-border px-4 py-2 rounded-full text-sm font-semibold shadow-medium animate-float" style={{ animationDelay: '1s' }}>
                Full Stack Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;