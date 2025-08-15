import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-entrepreneurship.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden pt-24 md:pt-28 lg:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Entrepreneurship collaboration"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 content-container text-center px-6 py-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">I²E</span>
            <br />
            <span className="text-2xl md:text-4xl font-normal text-muted-foreground">
              International Institute of Entrepreneurship
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A compass to guide entrepreneurs on their path. We democratize access to the keys to success 
            in a world of opportunity, serving a more responsible and humane economy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group" onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Your Journey
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button variant="outline" size="xl" onClick={() => document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border hover:shadow-card transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Entrepreneurs Supported</p>
            </div>
            <div className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border hover:shadow-card transition-all duration-300">
              <h3 className="text-2xl font-bold text-secondary mb-2">50+</h3>
              <p className="text-muted-foreground">Training Programs</p>
            </div>
            <div className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border hover:shadow-card transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-2">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};