import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, Code, Brain } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-primary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Available for opportunities
            </div>
            
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="relative">
                  <span className="text-primary">Subbulakshmi E</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full"></div>
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-normal">
                  a Final-Year{" "}
                </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">
                  AI & Data Science Student
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I specialize in building impactful digital solutions and transforming ideas into 
                interactive, user-friendly applications. Currently focused on full-stack development 
                with a passion for AI-driven innovations.
              </p>
            </div>

            {/* Enhanced buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                variant="hero"
                onClick={scrollToPortfolio}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              
              <Button variant="portfolio" size="lg" className="group">
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Download CV
              </Button>
            </div>

            {/* Enhanced Stats with modern cards */}
            <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:shadow-large transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity"></div>
                <div className="relative text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
              <div className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:shadow-large transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity"></div>
                <div className="relative text-center">
                  <div className="text-3xl font-bold text-primary mb-2">92%</div>
                  <div className="text-sm text-muted-foreground">ML Accuracy</div>
                </div>
              </div>
              <div className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:shadow-large transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity"></div>
                <div className="relative text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Main image container */}
              <div className="relative bg-card/80 backdrop-blur-sm p-6 rounded-full shadow-2xl border border-border/20">
                <img
                  src={profilePhoto}
                  alt="Subbulakshmi E - AI & Data Science Student"
                  className="w-80 h-80 rounded-full object-cover"
                />
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 group">
                <div className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-2xl text-sm font-semibold shadow-large animate-float hover:scale-110 transition-transform cursor-default">
                  <Brain className="w-4 h-4" />
                  AI & Data Science
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 group" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 bg-card border border-border/50 px-4 py-3 rounded-2xl text-sm font-semibold shadow-large animate-float hover:scale-110 transition-transform cursor-default">
                  <Code className="w-4 h-4 text-primary" />
                  Java Developer
                </div>
              </div>
              
              {/* Additional decorative element */}
              <div className="absolute top-1/2 -right-12 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-6 h-6 bg-gradient-primary rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;