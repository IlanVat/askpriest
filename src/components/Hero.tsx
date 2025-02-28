
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, ChevronRight } from "lucide-react";
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
              Get instant personalized responses to any question on your mind from our AI spiritual companion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={handleClick} className="bg-primary-gold-dark hover:bg-primary-gold-dark/90 font-medium text-slate-900 bg-amber-300 hover:bg-amber-200">
                Start Your Faith Journey
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex items-center text-sm text-gray-600">
                <Gift className="h-4 w-4 mr-2 text-primary-gold-dark" />
                <span>10 free questions, no credit card</span>
              </div>
            </div>
            
            <div className="flex items-center pt-6">
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(star => <svg key={star} className="w-4 h-4 text-primary-gold-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>)}
                </div>
                <span className="ml-2 text-sm text-gray-600">4.9/5 from over 500 users</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-2 md:order-last flex justify-center">
            <div className="relative w-full max-w-[350px] rounded-lg overflow-hidden border border-primary-gold/30 shadow-[0_0_30px_rgba(218,165,32,0.15)]">
              <ImgurEmbed />
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-radial from-primary-gold/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>;
};
