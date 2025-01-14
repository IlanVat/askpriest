import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const examples = [
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
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Example Questions
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {examples.map((example, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-serif">
                  {example.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {example.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};