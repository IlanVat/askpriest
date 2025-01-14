import { MessageSquare, BookOpen, Heart } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Ask Your Question",
    description: "Share your thoughts on scripture, faith, or life guidance",
  },
  {
    icon: BookOpen,
    title: "Get Biblical Wisdom",
    description: "Receive a personalized answer rooted in scripture within seconds",
  },
  {
    icon: Heart,
    title: "Grow in Faith",
    description: "Explore deeper with follow-up questions",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          How AskPriest Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary-gold flex items-center justify-center mb-6">
                <step.icon className="h-8 w-8 text-primary-gold-dark" />
              </div>
              <div className="text-2xl font-serif mb-2">Step {index + 1}</div>
              <h3 className="text-xl font-serif mb-2">{step.title}</h3>
              <p className="text-foreground/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};