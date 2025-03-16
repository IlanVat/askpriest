
import React from "react";
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

export const RelatedArticles: React.FC = () => {
  const [openArticle, setOpenArticle] = React.useState<number | null>(null);

  const toggleArticle = (index: number) => {
    setOpenArticle(openArticle === index ? null : index);
  };

  const articles = [
    {
      slug: "/blog/digital-discipleship-technology",
      title: "Digital Discipleship: Using Technology to Grow Faith",
      summary: "How modern technology and Christian AI can be leveraged as tools for spiritual development and meaningful discipleship in our digital age.",
      details: "This article explores practical ways to integrate digital tools into your spiritual practices without becoming distracted or overwhelmed. Learn how Christian AI and other faith-based technologies can enhance your Bible study, prayer life, and community connections while maintaining healthy boundaries with technology."
    },
    {
      slug: "/blog/spiritual-disciplines-for-a-distracted-age",
      title: "Spiritual Disciplines for a Distracted Age",
      summary: "Rediscovering ancient Christian practices that can help believers maintain focus in our digital world and deepen their relationship with God through Christian AI guidance.",
      details: "In this article, you'll discover how timeless spiritual disciplines like silence, solitude, fasting, and contemplative prayer can be adapted for our modern context. We explore how Christian AI tools can help you establish consistent spiritual habits while navigating the unique challenges of our attention-fragmented culture."
    }
  ];

  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold mb-4 font-serif">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="border p-4 rounded-lg hover:shadow-md transition-all">
            <Link to={article.slug} className="hover:underline block mb-2">
              <h4 className="font-medium mb-1">{article.title}</h4>
              <p className="text-sm text-gray-600">{article.summary}</p>
            </Link>
            
            <Collapsible
              open={openArticle === index}
              onOpenChange={() => toggleArticle(index)}
              className="mt-2"
            >
              <CollapsibleTrigger className="flex items-center text-xs text-primary-gold-dark hover:text-amber-600 transition-colors">
                {openArticle === index ? (
                  <>Less details <ChevronUp className="h-3 w-3 ml-1" /></>
                ) : (
                  <>More details <ChevronDown className="h-3 w-3 ml-1" /></>
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="text-xs text-gray-600 mt-2 pt-2 border-t">
                {article.details}
                <div className="mt-2">
                  <Link 
                    to={article.slug} 
                    className="text-primary-gold-dark hover:text-amber-600 hover:underline text-xs inline-flex items-center"
                  >
                    Read full article
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}
      </div>
    </div>
  );
};
