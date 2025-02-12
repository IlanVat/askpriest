
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const examples = [
  {
    question: "Explain John 3:16 from a Catholic perspective",
    description: "Get insights into this foundational verse about God's love and salvation through Catholic theological understanding."
  },
  {
    question: "What does the Bible say about marriage and relationships?",
    description: "Explore biblical principles for building strong, faithful relationships."
  },
  {
    question: "How do I forgive someone who hurt me deeply?",
    description: "Find guidance on the Christian path to forgiveness and healing."
  },
  {
    question: "What is the Christian view on modern issues like mental health?",
    description: "Understand how faith and modern mental health perspectives work together."
  },
  {
    question: "How can I strengthen my prayer life?",
    description: "Discover practical ways to deepen your connection with God through prayer."
  },
  {
    question: "What does the Bible teach about finding purpose in life?",
    description: "Learn about God's plan for your life and how to discover your calling."
  },
];

export const Examples = () => {
  const sectionRef = useScrollAnimation();
  
  const handleClick = () => {
    window.open('https://www.askpriestai.com', '_blank');
  };

  return (
    <section ref={sectionRef} className="py-20 opacity-0">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Example Questions
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {examples.map((example, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="opacity-0 animate-scrollReveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-lg font-serif">
                  {example.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {example.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 text-center space-y-2">
            <Button 
              size="lg" 
              className="bg-primary-gold-dark hover:bg-primary-gold text-white"
              onClick={handleClick}
            >
              Find Your Answers Now
            </Button>
            <p className="text-sm text-foreground/60 flex items-center justify-center gap-2">
              <Shield className="h-5 w-5 md:h-4 md:w-4" />
              Get precise, faith-based answers, not random internet opinions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
