import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  {
    quote: "As a new Christian, AskPriest has been an invaluable resource for learning.",
    author: "Emma K.",
    role: "New Believer",
  },
  {
    quote: "The spiritual guidance provided has strengthened my daily walk with God.",
    author: "James P.",
    role: "Church Elder",
  }
];

export const Testimonials = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-20 bg-primary-gold-light opacity-0">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          What Our Community Says
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 bg-white h-full">
                  <MessageSquare className="h-8 w-8 text-primary-gold-dark mb-4" />
                  <p className="text-lg font-serif italic mb-4">{testimonial.quote}</p>
                  <div className="text-sm text-foreground/60">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p>{testimonial.role}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};