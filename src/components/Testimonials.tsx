import { Card, CardContent } from "@/components/ui/card";
import { Play, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      quote: "The I²E program transformed my business idea into a successful startup. The mentorship and resources provided were invaluable in navigating the entrepreneurial journey.",
      image: "/lovable-uploads/1856b776-8593-4ba9-8e6a-81ddd938e29e.png",
      hasVideo: true
    },
    {
      name: "Michael Chen",
      role: "Tech Entrepreneur", 
      quote: "What sets I²E apart is their holistic approach to entrepreneurship education. They don't just teach business theory, they provide real-world experience and connections.",
      image: "/lovable-uploads/1856b776-8593-4ba9-8e6a-81ddd938e29e.png",
      hasVideo: true
    },
    {
      name: "Emma Rodriguez",
      role: "Social Enterprise Founder",
      quote: "The ESG principles integrated into their curriculum helped me build a business that's not only profitable but also makes a positive impact on society.",
      image: "/lovable-uploads/1856b776-8593-4ba9-8e6a-81ddd938e29e.png",
      hasVideo: true
    },
    {
      name: "David Thompson",
      role: "Serial Entrepreneur",
      quote: "I've attended many entrepreneurship programs, but I²E's combination of practical training, mentorship, and global perspective is unmatched.",
      image: "/lovable-uploads/1856b776-8593-4ba9-8e6a-81ddd938e29e.png",
      hasVideo: true
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-accent/30">
      <div className="content-container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Students Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from entrepreneurs who have transformed their ideas into successful 
            businesses through our comprehensive programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-6">
              {/* Video Thumbnail */}
              {testimonial.hasVideo && (
                <Card className="group cursor-pointer hover:shadow-elegant transition-all duration-300 overflow-hidden">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/40 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                </Card>
              )}

              {/* Testimonial */}
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/40"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Quote className="w-6 h-6 text-primary mb-3" />
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-primary">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to join our success stories?
          </p>
          <a 
            href="#contact" 
            className="text-primary hover:underline font-medium story-link"
          >
            Start your entrepreneurial journey today
          </a>
        </div>
      </div>
    </section>
  );
};