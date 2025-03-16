
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const CallToAction: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">
            Have Faith Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            AskPriestAI provides instant, biblically-grounded answers to your spiritual questions, 24/7.
          </p>
          <Button 
            size="lg"
            className="bg-primary-gold-dark hover:bg-primary-gold-dark/90"
            onClick={() => window.location.href = 'https://landing.askpriestai.com'}
          >
            Ask Your Question Now
            <ChevronRight className="ml-1 h-5 w-5" />
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Start with 10 free questions. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
};
