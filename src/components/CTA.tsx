import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const CTA = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.open('https://www.askpriestai.com', '_blank');
  };

  return (
    <section className="py-20 bg-primary-gold">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">
          Faith Is Just a Question Away
        </h2>
        <p className="text-lg mb-4 max-w-2xl mx-auto">
          Join thousands of Christians who have found clarity, comfort, and confidence in their faith with AskPriestAI.
        </p>
        <p className="text-lg mb-4 max-w-2xl mx-auto">
          🔹 Start with 5 FREE questions now.
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto font-medium">
          👇 Sign Up & Ask Your First Question 👇
        </p>
        <Button 
          size="lg" 
          className="bg-primary-gold-dark hover:bg-primary-gold-dark/90 text-white"
          onClick={handleClick}
        >
          Sign Up Now
        </Button>
      </div>
    </section>
  );
};