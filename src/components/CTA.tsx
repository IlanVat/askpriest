
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Lightbulb } from "lucide-react";
import { trackEvent } from "@/utils/analytics";

export const CTA = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    trackEvent('AskAnything');
    window.location.href = 'https://www.askpriestai.com/login_signup?screen=Signup';
  };

  return (
    <section className="py-20 bg-primary-gold w-full">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">
          Begin Your Spiritual Journey Today
        </h2>
        <p className="text-lg mb-4 max-w-2xl mx-auto">
          Join thousands of Christians who have found clarity, comfort, and confidence in their faith with AskPriestAI.
        </p>
        <p className="text-lg mb-4 max-w-2xl mx-auto font-semibold">
          Start with 10 free questions. No credit card required.
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          After your free questions, continue your journey for as low as $9.99/month or save up to 30% with an annual plan.
        </p>
        <Button 
          size="lg" 
          className="bg-primary-gold-dark hover:bg-primary-gold-dark/90 text-white"
          onClick={handleClick}
        >
          Ask Anything Now
        </Button>
        <p className="text-sm mt-4 flex items-center justify-center gap-2">
          <Lightbulb className="h-4 w-4 flex-shrink-0 mt-0.5" />
          Simple and intuitive—no learning curve!
        </p>
      </div>
    </section>
  );
};
