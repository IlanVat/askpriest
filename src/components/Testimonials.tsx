import { Card } from "@/components/ui/card";
import { MessageSquare, Shield, Lock, Heart } from "lucide-react";

const testimonials = [
  {
    quote: "AskPriest helped me understand Bible verses in ways I never imagined.",
    author: "Sarah M.",
    role: "Youth Group Leader",
  },
  {
    quote: "I found comfort and guidance through AskPriest during tough times.",
    author: "Michael R.",
    role: "Church Member",
  },
  {
    quote: "The biblical insights have deepened my understanding of scripture.",
    author: "David L.",
    role: "Bible Study Participant",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-primary-gold-light">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          What Our Community Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="p-6 bg-white">
              <MessageSquare className="h-8 w-8 text-primary-gold-dark mb-4" />
              <p className="text-lg font-serif italic mb-4">{testimonial.quote}</p>
              <div className="text-sm text-foreground/60">
                <p className="font-semibold">{testimonial.author}</p>
                <p>{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>

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