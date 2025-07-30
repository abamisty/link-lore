import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export const Team = () => {
  const teamMembers = [
    { name: "Guy Audet", role: "CEO / NA Executive" },
    { name: "Isaac Abadeloseb", role: "MEA Executive" },
    { name: "Christine Tardif", role: "Senior Advisor" },
    { name: "Genevieve Maltais", role: "Program Director" },
    { name: "Lynn Sicotte", role: "Operations Manager" },
    { name: "Vincent Auclair", role: "Legal Expert" },
    { name: "Daniel Blanchette", role: "Business Consultant" },
    { name: "Florence Clavier", role: "Marketing Director" },
    { name: "Richard Khouzam", role: "Industry Expert" },
    { name: "Marc Caboll", role: "Teacher" },
    { name: "Noémi Cambrini Ouellet", role: "Teacher" },
    { name: "Isabelle Cholette", role: "Teacher" },
    { name: "Marie-Christine Cholette", role: "Teacher" },
    { name: "Charles Doucet", role: "Teacher" },
    { name: "Michel Lachapelle", role: "Teacher" },
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="content-container px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of entrepreneurs, educators, and industry experts brings decades 
            of experience to guide your entrepreneurial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <User className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Want to join our team?{" "}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Get in touch with us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};