import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ImgurEmbed } from "./ImgurEmbed";

export const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.open('https://www.askpriestai.com', '_blank');
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-primary-gold-light via-primary-gold-light to-white">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn mt-8">
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
          Experience 24/7 spiritual guidance powered by the most advanced AI, offering biblical wisdom and compassionate answers to your faith questions.
        </p>
        <div className="flex justify-center pt-4">
          <Button 
            size="lg" 
            className="bg-primary-gold-dark hover:bg-primary-gold text-white"
            onClick={handleClick}
          >
            Start Your Faith Journey for Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="mt-12 w-full max-w-full overflow-hidden px-4">
        <div className="relative w-full max-w-[600px] mx-auto">
          <ImgurEmbed />
        </div>
      </div>
    </section>
  );
};