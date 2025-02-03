import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const CTA = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.open('https://www.askpriestai.com', '_blank');
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
          Start with 5 free questions. No credit card required.
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          After your free questions, continue your journey for as low as $9.99/month or save up to 30% with an annual plan.
        </p>
        <Button 
          size="lg" 
          className="bg-primary-gold-dark hover:bg-primary-gold-dark/90 text-white"
          onClick={handleClick}
        >
          Start for Free. No Commitment Needed.
        </Button>
      </div>
    </section>
  );
};