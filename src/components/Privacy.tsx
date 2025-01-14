import { Card } from "@/components/ui/card";
import { Lock, Heart, Shield } from "lucide-react";

export const Privacy = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-8">Your Privacy Matters to Us</h2>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
            AskPriest is built to ensure your questions remain private and confidential. We prioritize your trust and provide a safe space to seek faith-based guidance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Lock className="h-8 w-8 text-primary-gold-dark mx-auto mb-4" />
              <h3 className="font-serif text-lg mb-2">Confidential & Secure</h3>
              <p className="text-foreground/60">Your conversations stay private and protected</p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="h-8 w-8 text-primary-gold-dark mx-auto mb-4" />
              <h3 className="font-serif text-lg mb-2">Judgment-Free</h3>
              <p className="text-foreground/60">Ask anything without fear or hesitation</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-8 w-8 text-primary-gold-dark mx-auto mb-4" />
              <h3 className="font-serif text-lg mb-2">Trusted by Thousands</h3>
              <p className="text-foreground/60">Join our growing community of believers</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};