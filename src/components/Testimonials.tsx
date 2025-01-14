import { Card } from "@/components/ui/card";
import { MessageSquare, Shield } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
        <div className="max-w-2xl mx-auto text-center p-6 bg-white rounded-lg shadow-sm">
          <Shield className="h-8 w-8 text-primary-gold-dark mx-auto mb-4" />
          <h3 className="text-xl font-serif mb-2">Your Privacy Matters</h3>
          <p className="text-foreground/60">
            Confidential and Secure – Your questions remain private. Experience AskPriest with 10 free questions, no credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};