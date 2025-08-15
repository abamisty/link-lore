import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-background">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Training Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive programs designed to support entrepreneurs at every stage of their journey.
          </p>
        </div>

        {/* Featured Program */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-background/20 text-primary-foreground border-primary-foreground/20">
                Featured Program
              </Badge>
              <Badge variant="secondary" className="bg-background/20 text-primary-foreground border-primary-foreground/20">
                $2,500 Grant Available
              </Badge>
            </div>
            
            <h3 className="text-4xl font-bold mb-4">Boost Your Startup!</h3>
            <p className="text-xl mb-6 opacity-90 max-w-2xl">
              Turn your vision into a business. From concept validation to strategic development, 
              we guide you through every step of launching your startup.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">What We Offer:</h4>
                <ul className="space-y-2">
                  {[
                    "Concrete workshops to structure your project",
                    "Methodological and strategic framework",
                    "Personalized coaching with professionals",
                    "Access to network of experts",
                    "Solid business plan resources",
                    "Post-launch monitoring"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Added Value:</h4>
                <ul className="space-y-2">
                  {[
                    "Free website using AI tool SIFO",
                    "$2,500 scholarship for PitchBoom winner", 
                    "Annual Startup Camp event",
                    "Networking evenings",
                    "AI integration approach",
                    "Expert coaching sessions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-background text-primary hover:bg-background/90"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply for Program
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-background/10"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-background/10 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-background/5 rounded-full transform -translate-x-24 translate-y-24"></div>
        </div>

        {/* Other Programs */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-card border border-border hover:shadow-card transition-all duration-300">
            <h4 className="text-xl font-bold text-primary mb-4">Starting a Business</h4>
            <p className="text-muted-foreground mb-4">
              Comprehensive foundation course covering all aspects of business creation from ideation to launch.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">8 Weeks</Badge>
              <Badge variant="outline">Virtual</Badge>
              <Badge variant="outline">Certificate</Badge>
            </div>
            <Button variant="outline" className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              View Details
            </Button>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border hover:shadow-card transition-all duration-300">
            <h4 className="text-xl font-bold text-secondary mb-4">Sales Mastery</h4>
            <p className="text-muted-foreground mb-4">
              Advanced sales techniques and strategies to boost your business revenue and customer relationships.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">6 Weeks</Badge>
              <Badge variant="outline">Virtual</Badge>
              <Badge variant="outline">Certificate</Badge>
            </div>
            <Button variant="outline" className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              View Details
            </Button>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border hover:shadow-card transition-all duration-300">
            <h4 className="text-xl font-bold text-primary mb-4">Business English</h4>
            <p className="text-muted-foreground mb-4">
              Professional English communication skills tailored for international business and entrepreneurship.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">12 Weeks</Badge>
              <Badge variant="outline">Virtual</Badge>
              <Badge variant="outline">Certificate</Badge>
            </div>
            <Button variant="outline" className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              View Details
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your entrepreneurial vision into reality?
          </p>
          <Button variant="professional" size="xl" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Browse All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};
