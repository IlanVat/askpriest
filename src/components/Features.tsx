import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    emoji: "🙌",
    title: "Personalized & Instant Answers",
    description: "Tired of generic Google results? AskPriestAI understands your unique questions and provides faithful, Bible-based answers within seconds.",
  },
  {
    emoji: "🕊️",
    title: "A Safe, Judgment-Free Space",
    description: "Ask anything-big or small-with complete privacy. No need to approach a priest in person if you're hesitant.",
  },
  {
    emoji: "⏳",
    title: "Always Available, Anytime",
    description: "Busy schedule? No worries. Whether it's a late-night faith question or a Sunday morning doubt, AskPriestAI is here for you—24/7.",
  },
  {
    emoji: "📖",
    title: "Rooted in Christian Teachings",
    description: "Unlike other AI chatbots, AskPriestAI is dedicated to Christianity only. No distractions. No conflicting viewpoints. Just pure Christian wisdom for your spiritual journey.",
  },
];

export const Features = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-20 bg-primary-gold-light opacity-0">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Why AskPriestAI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow opacity-0 animate-scrollReveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{feature.emoji}</span>
                <div>
                  <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
