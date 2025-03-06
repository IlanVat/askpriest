
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, ChevronRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ImgurEmbed } from "./ImgurEmbed";
import { trackEvent } from "@/utils/analytics";

export const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    trackEvent('StartJourney');
    window.location.href = 'https://www.askpriestai.com/login_signup?screen=Signup';
  };
  
  return <section className="min-h-[92vh] flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-white to-primary-gold-light/20 text-gray-800">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-left animate-fadeIn order-1">
            <h1 className="md:text-6xl font-serif font-bold leading-tight text-4xl">
              <span className="text-gray-800">Navigate faith 
            </span>
              <br />
              <span className="text-gray-800">questions in seconds,</span>{" "}
              <span className="bg-amber-300 hover:bg-amber-200 inline-block py-0.5 px-2 rounded text-gray-800">not days</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              "Is this a sin?"<br />
              "How do I interpret this verse?"<br />
              No more random generic internet opinions.<br />
              Get instant personalized responses to any question on your mind from our advanced AI spiritual companion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={handleClick} className="bg-primary-gold-dark hover:bg-primary-gold-dark/90 font-medium text-slate-900 bg-amber-300 hover:bg-amber-200">
                Start Your Faith Journey
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex items-center text-sm text-gray-600">
                <Gift className="h-4 w-4 mr-2 text-primary-gold-dark" />
                <span>10 free questions, no credit card required</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-2 md:order-last flex flex-col justify-center">
            <div className="relative w-full max-w-[350px] rounded-lg overflow-hidden border border-primary-gold/30 shadow-[0_0_30px_rgba(218,165,32,0.15)]">
              <ImgurEmbed />
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-radial from-primary-gold/20 to-transparent"></div>
            
            <div className="flex items-center justify-center mt-4">
              <Heart className="h-5 w-5 text-primary-gold-dark mr-2" />
              <span className="text-sm text-gray-600">Made by believers, for believers.</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
