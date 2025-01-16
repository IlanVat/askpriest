import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 bg-primary-gold">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">
          Begin Your Spiritual Journey Today
        </h2>
        <p className="text-lg mb-4 max-w-2xl mx-auto">
          Join thousands of believers finding guidance, understanding, and spiritual growth through AskPriest.
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto font-semibold">
          Start with 5 free questions. No credit card required.
        </p>
        <Button 
          size="lg" 
          className="bg-primary-gold-dark hover:bg-primary-gold-dark/90 text-white"
          onClick={() => window.location.href = 'https://askpriestai.com'}
        >
          Start for Free. No Commitment Needed.
        </Button>
      </div>
    </section>
  );
};