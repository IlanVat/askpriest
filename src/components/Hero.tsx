
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Cross, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ImgurEmbed } from "./ImgurEmbed";
import { trackEvent } from "@/utils/analytics";

export const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    trackEvent('StartJourney');
    window.location.href = 'https://www.askpriestai.com/login_signup?screen=Signup';
  };

  return (
    <section className="min-h-[92vh] flex flex-col items-center justify-center px-4 py-16 bg-[#1A1F2C] text-white">
      <div className="max-w-7xl w-full mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary-gold-light/30">
            <Cross className="h-4 w-4 text-primary-gold" />
            <span className="text-sm text-primary-gold-light">Faith Companion</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-left animate-fadeIn">
            <div className="inline-flex items-center mb-4">
              <div className="flex items-center border border-primary-gold-light/40 rounded-full px-3 py-1">
                <span className="text-xs text-primary-gold-light mr-2">Trusted by thousands</span>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="w-5 h-5 rounded-full bg-primary-gold-dark/60 border border-[#1A1F2C]"></div>
                  ))}
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              <span className="text-white">Christ-centered</span>
              <br />
              <span className="text-white">guidance</span>{" "}
              <span className="bg-primary-gold text-[#1A1F2C] px-2 py-1 rounded">not waiting</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl">
              The AI-powered priest assistant that provides tailored Christian answers whenever you need them, 24/7. Get started with 10 free questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary-gold hover:bg-primary-gold-dark text-[#1A1F2C] font-medium"
                onClick={handleClick}
              >
                Start Your Faith Journey
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex items-center text-sm text-gray-300">
                <Gift className="h-4 w-4 mr-2 text-primary-gold-light" />
                <span>10 free questions, no credit card</span>
              </div>
            </div>
            
            <div className="flex items-center pt-6">
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-primary-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-300">4.9/5 from over 500 users</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-first md:order-last flex justify-center">
            <div className="relative w-full max-w-[350px] rounded-lg overflow-hidden border border-primary-gold-light/30 shadow-[0_0_30px_rgba(218,165,32,0.15)]">
              <ImgurEmbed />
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-radial from-primary-gold-dark/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
