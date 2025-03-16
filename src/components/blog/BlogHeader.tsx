import React from "react";
import { BlogPost } from "@/data/blog";

interface BlogHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  category: string;
  setCategory: (category: string) => void;
  categories: string[];
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  categories,
}) => {
  return (
    <div className="bg-gradient-to-b from-white to-primary-gold-light/20 py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800">
            Christian Insights Blog
          </h1>
          <p className="text-gray-600 text-lg">
            Practical spiritual guidance, biblical wisdom, and answers to your faith questions.
          </p>
          
          {/* Search Input */}
          <div className="mt-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-gold-dark"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <button
              onClick={() => setCategory("")}
              className={`px-3 py-1 rounded-full text-sm ${
                category === "" 
                  ? "bg-primary-gold-dark text-white" 
                  : "bg-white text-gray-600 border border-gray-300"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1 rounded-full text-sm ${
                  category === cat 
                    ? "bg-primary-gold-dark text-white" 
                    : "bg-white text-gray-600 border border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
