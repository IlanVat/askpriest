import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Examples } from "@/components/Examples";
import { CTA } from "@/components/CTA";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Privacy } from "@/components/Privacy";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <Features />
      <Privacy />
      <Examples />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Index;