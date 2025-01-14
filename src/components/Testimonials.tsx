import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

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
    <section className="py-20 bg-primary-gold-light animate-scrollReveal">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          What Our Community Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.author} 
              className="p-6 bg-white animate-scrollReveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <MessageSquare className="h-8 w-8 text-primary-gold-dark mb-4" />
              <p className="text-lg font-serif italic mb-4">{testimonial.quote}</p>
              <div className="text-sm text-foreground/60">
                <p className="font-semibold">{testimonial.author}</p>
                <p>{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};