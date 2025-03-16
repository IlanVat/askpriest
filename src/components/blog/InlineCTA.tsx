
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
export const InlineCTA: React.FC = () => {
  return <div className="bg-primary-gold-light/20 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-3 font-serif">Continue Your Spiritual Journey</h3>
      <p className="mb-4">Have questions about your faith? Need guidance on your spiritual journey? AskPriestAI provides instant, biblically-grounded answers to your deepest questions.</p>
      <Button onClick={() => window.location.href = 'https://landing.askpriestai.com'} className="bg-primary-gold">
        Ask Your Questions Now
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>;
};
