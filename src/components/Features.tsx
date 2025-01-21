import { Book, Clock, MessageSquare } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Book,
    title: "Biblical Wisdom",
    description: "Get answers rooted in scripture and church teachings",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access spiritual guidance whenever you need it",
  },
  {
    icon: MessageSquare,
    title: "Compassionate Guidance",
    description: "Receive non-judgmental, understanding responses",
  },
];

export const Features = () => {
  const sectionRef = useScrollAnimation();
  
  const handleClick = () => {
    window.open('https://www.askpriestai.com', '_blank');
  };

  return (
    <section ref={sectionRef} className="py-20 bg-primary-gold-light opacity-0">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Why Choose AskPriest?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow opacity-0 animate-scrollReveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <feature.icon className="h-12 w-12 text-primary-gold-dark mb-4" />
              <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
              <p className="text-foreground/60">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-primary-gold-dark hover:bg-primary-gold text-white"
            onClick={handleClick}
          >
            Experience Divine Guidance Now
          </Button>
        </div>
      </div>
    </section>
  );
};