
import React from "react";
import { Link } from "react-router-dom";

export const RelatedArticles: React.FC = () => {
  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold mb-4 font-serif">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg hover:shadow-md transition-all">
          <Link to="/blog/prayer-techniques-busy-lives" className="hover:underline">
            <h4 className="font-medium mb-1">Prayer Techniques for Busy Lives</h4>
            <p className="text-sm text-gray-600">Simple but effective ways to maintain a prayer life when your schedule seems impossible.</p>
          </Link>
        </div>
        <div className="border p-4 rounded-lg hover:shadow-md transition-all">
          <Link to="/blog/finding-peace-uncertain-times" className="hover:underline">
            <h4 className="font-medium mb-1">Finding Peace in Uncertain Times</h4>
            <p className="text-sm text-gray-600">Biblical wisdom for maintaining spiritual peace during periods of personal or global uncertainty.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
