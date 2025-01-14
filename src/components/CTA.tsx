import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">
          Begin Your Spiritual Journey Today
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of believers finding guidance, understanding, and spiritual growth through AskPriest.
        </p>
        <Button size="lg" className="bg-primary-gold hover:bg-primary-gold/90 text-foreground">
          Start Free Trial
        </Button>
      </div>
    </section>
  );
};