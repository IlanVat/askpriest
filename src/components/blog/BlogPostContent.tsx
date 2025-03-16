
import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronRight } from "lucide-react";
import { InlineCTA } from "./InlineCTA";
import { RelatedArticles } from "./RelatedArticles";

interface BlogPostContentProps {
  post: {
    title: string;
    date: string;
    content: string;
  };
}

export const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  return (
    <div className="container mx-auto mt-10 px-4 mb-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <Link to="/blog" className="text-blue-500 hover:underline inline-flex items-center">
            <ChevronRight className="inline-block mr-1 w-4 h-4 transform rotate-180" />
            Back to Blog
          </Link>
        </div>
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold mb-2 font-serif">{post.title}</h1>
          <p className="text-gray-600 mb-6">Published on: {new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
          })}</p>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </article>
        
        {/* Call to Action Section */}
        <div className="mt-12 border-t pt-8">
          <InlineCTA />
        </div>
        
        {/* Related Articles */}
        <RelatedArticles />
      </div>
    </div>
  );
};
