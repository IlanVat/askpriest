import { Card } from "@/components/ui/card";

const examples = [
  "How do I know God's purpose for my life?",
  "Why is the resurrection of Jesus central to the Christian faith?",
  "How do I prepare my heart for communion?",
  "What are some Bible verses to inspire hope and faith?",
  "What does the Bible say about dealing with anxiety and fear?",
];

export const Examples = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          Example Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {examples.map((example) => (
            <Card key={example} className="p-4 hover:bg-primary/5 cursor-pointer transition-colors">
              <p className="text-lg font-serif">{example}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};