import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-primary-gold-light to-white">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
          Faith at Your Fingertips
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 font-serif">
          Meet AskPriest, Your Virtual Christian Guide
        </p>
        <p className="text-2xl font-serif text-foreground/90 italic">
          Seek Guidance. Find Peace. Strengthen Your Faith.
        </p>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          Experience 24/7 spiritual guidance powered by AI, offering biblical wisdom and compassionate answers to your faith questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" className="bg-primary-gold-dark hover:bg-primary-gold text-white">
            Ask Your First Question Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary-gold hover:bg-primary-gold/10">
            Learn More
          </Button>
        </div>
      </div>
      <div className="mt-12 w-full max-w-sm mx-auto bg-white rounded-lg shadow-xl p-6 animate-fadeIn">
        <img 
          src="/lovable-uploads/60a65b8d-ff39-4cdf-96fb-eb4a441c7e33.png" 
          alt="AskPriest Interface Preview" 
          className="w-full rounded-lg"
        />
      </div>
    </section>
  );
};