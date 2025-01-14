import { Book, Clock, MessageSquare } from "lucide-react";

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
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Why Choose AskPriest?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-primary-gold mb-4" />
              <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
              <p className="text-foreground/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};