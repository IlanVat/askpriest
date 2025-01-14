import { Card } from "@/components/ui/card";
import { Lock, Heart, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Privacy = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-20 bg-white opacity-0">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-8">Your Privacy Matters to Us</h2>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
            AskPriest is built to ensure your questions remain private and confidential. We prioritize your trust and provide a safe space to seek faith-based guidance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Confidential & Secure",
                description: "Your conversations stay private and protected"
              },
              {
                icon: Heart,
                title: "Judgment-Free",
                description: "Ask anything without fear or hesitation"
              },
              {
                icon: Shield,
                title: "Trusted by Thousands",
                description: "Join our growing community of believers"
              }
            ].map((item, index) => (
              <Card 
                key={item.title} 
                className="p-6 text-center opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <item.icon className="h-8 w-8 text-primary-gold-dark mx-auto mb-4" />
                <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                <p className="text-foreground/60">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};