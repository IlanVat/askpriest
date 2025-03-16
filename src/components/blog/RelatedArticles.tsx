
import React from "react";
import { Link } from "react-router-dom";

export const RelatedArticles: React.FC = () => {
  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold mb-4 font-serif">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 rounded-lg hover:shadow-md transition-all">
          <Link to="/blog/digital-discipleship-technology" className="hover:underline">
            <h4 className="font-medium mb-1">Digital Discipleship: Using Technology to Grow Faith</h4>
            <p className="text-sm text-gray-600">How modern technology and Christian AI can be leveraged as tools for spiritual development and meaningful discipleship in our digital age.</p>
          </Link>
        </div>
        <div className="border p-4 rounded-lg hover:shadow-md transition-all">
          <Link to="/blog/spiritual-disciplines-for-a-distracted-age" className="hover:underline">
            <h4 className="font-medium mb-1">Spiritual Disciplines for a Distracted Age</h4>
            <p className="text-sm text-gray-600">Rediscovering ancient Christian practices that can help believers maintain focus in our digital world and deepen their relationship with God through Christian AI guidance.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
