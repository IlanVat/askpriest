import { MessageSquare, HelpCircle, Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is AskPriest?",
      answer: "AskPriest is an AI-powered virtual priest designed to provide compassionate, scripture-based answers to your faith-related questions. As your Christian advice online companion, whether you're seeking Bible questions answered, guidance on life decisions, biblical understanding, or spiritual growth, AskPriest is here to help you navigate your faith journey with faith-based AI guidance.",
      icon: HelpCircle,
    },
    {
      question: "How does AskPriest work?",
      answer: "AskPriest uses advanced AI trained on biblical texts, church teachings, and theological insights to provide thoughtful, personalized responses. As your virtual priest companion, simply type your question, and AskPriest will offer an answer rooted in Christian values and scripture, providing reliable Christian advice online.",
      icon: Info,
    },
    {
      question: "How many questions can I ask for free?",
      answer: "New users can ask up to 5 questions per month for free. After that, continue your spiritual journey for $9.99/month or save up to 30% with an annual plan. There's no credit card required to start with the free questions.",
      icon: Info,
    },
    {
      question: "Is AskPriest affiliated with a specific denomination?",
      answer: "No, AskPriest is non-denominational. Our virtual priest service draws from core Christian teachings shared across many traditions, including Protestant, Catholic, and Orthodox churches. The responses aim to be respectful of all Christian denominations while providing Bible questions answered accurately.",
      icon: MessageSquare,
    },
    {
      question: "Is my data and privacy protected?",
      answer: "Yes. Your questions are completely private and confidential. AskPriest does not store personal information or share your questions with anyone.",
      icon: HelpCircle,
    },
    {
      question: "What kind of questions can I ask?",
      answer: "You can ask AskPriest about anything related to your faith journey. This includes Bible verses, life guidance, moral questions, church practices, and more. For example:\n\n• \"What does the Bible say about forgiveness?\"\n• \"How can I overcome anxiety through faith?\"\n• \"What is the Christian view on relationships?\"",
      icon: MessageSquare,
    },
    {
      question: "Is AskPriest a replacement for a real priest or pastor?",
      answer: "No, AskPriest is not a replacement for real-life clergy or church community. It is a tool designed to provide faith-based guidance and support for those seeking answers in their spiritual journey.",
      icon: HelpCircle,
    },
    {
      question: "How accurate are the answers?",
      answer: "The AI provides answers based on scripture, church teachings, and theology. While it strives to offer thoughtful and accurate responses, it is important to interpret its advice through personal prayer and reflection. For more complex spiritual matters, we encourage users to seek guidance from a trusted clergy member.",
      icon: MessageSquare,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about AskPriest - Your Virtual Christian Guide
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-primary-gold rounded-lg px-4"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <faq.icon className="h-5 w-5 text-primary-gold-dark flex-shrink-0" />
                  <span className="font-serif text-lg text-gray-900">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 whitespace-pre-line pl-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;