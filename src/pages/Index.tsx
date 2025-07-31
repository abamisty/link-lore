import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Identity } from "@/components/Identity";
import { Approach } from "@/components/Approach";
import { Services } from "@/components/Services";
import { Programs } from "@/components/Programs";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Identity />
        <Approach />
        <Services />
        <Programs />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
