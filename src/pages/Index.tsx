
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Examples } from "@/components/Examples";
import { CTA } from "@/components/CTA";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Privacy } from "@/components/Privacy";
import FAQ from "@/components/FAQ";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Examples />
      <FAQ />
      <Privacy />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Index;
