import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { BookingForm } from "./BookingForm";
import trainingIcon from "@/assets/training-icon.png";
import coachingIcon from "@/assets/coaching-icon.png";
import networkingIcon from "@/assets/networking-icon.png";

export const Services = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const services = [
    {
      icon: trainingIcon,
      title: "Training Programs",
      description: "Practical training led by field experts covering management, marketing, finance, leadership, and innovation.",
      features: ["100% virtual", "Certification available", "Expert-led sessions", "Flexible scheduling"],
      color: "primary"
    },
    {
      icon: coachingIcon,
      title: "Specialized Coaching",
      description: "Individual or small group support to help you propel your projects forward and maximize your impact.",
      features: ["Confidential sessions", "Regular follow-up", "Results-focused", "Executive coaching"],
      color: "secondary"
    },
    {
      icon: networkingIcon,
      title: "Events & Networking",
      description: "Dynamic events to encourage meetings, exchanges, and enriching collaborations between entrepreneurs.",
      features: ["Workshops & conferences", "Targeted networking", "Business opportunities", "Partnership building"],
      color: "primary"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-subtle">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All our services are centered around the needs of entrepreneurs. We support them 
            at every stage of their journey with tailored and flexible solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-background border border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="inline-block p-4 rounded-full bg-gradient-primary mb-4">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-12 h-12 filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">Tailor-made Solutions</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Do you have a specific issue or specific goals? We design unique training courses 
              based on your requirements, the reality of your business, and the profile of your teams.
            </p>
            <ul className="space-y-3">
              {[
                "Preliminary needs analysis",
                "Development of training plans", 
                "Personalized content, immediately applicable",
                "Interactive methodology promoting autonomy",
                "Implementation Support"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
            <h4 className="text-2xl font-bold text-primary mb-4">Professional Training Consultation</h4>
            <p className="text-muted-foreground mb-6">
              Need expert advice to structure your training offering or develop your team's skills? 
              We'll help you implement effective solutions that align with your vision and challenges.
            </p>
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger asChild>
                <Button variant="professional" size="lg">
                  Schedule Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <BookingForm onClose={() => setIsBookingOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};