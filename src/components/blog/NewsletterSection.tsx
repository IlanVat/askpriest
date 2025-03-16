
import React from "react";
import { Button } from "@/components/ui/button";

export const NewsletterSection: React.FC = () => {
  return (
    <div className="bg-primary-gold-light/20 py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl font-bold text-gray-800">
            Get Spiritual Insights in Your Inbox
          </h2>
          <p className="text-gray-600">
            Subscribe to our newsletter for weekly articles, resources, and guidance on your faith journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary-gold-dark"
            />
            <Button 
              className="bg-primary-gold-dark hover:bg-primary-gold-dark/90 text-white"
              onClick={() => window.open('https://landing.askpriestai.com', '_blank')}
            >
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            By subscribing, you'll also receive updates about our AI-powered spiritual guidance tools.
          </p>
        </div>
      </div>
    </div>
  );
};
