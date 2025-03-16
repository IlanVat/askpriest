
import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { InlineCTA } from "./InlineCTA";
import { RelatedArticles } from "./RelatedArticles";
import { TableOfContents } from "./TableOfContents";
import { BlogContent } from "./BlogContent";
import { extractHeadings, completeUnfinishedSections } from "./ContentHelper";

interface BlogPostContentProps {
  post: {
    title: string;
    date: string;
    content: string;
  };
}

export const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  // Complete specific unfinished sections in the content, passing the post title
  const completedContent = completeUnfinishedSections(post.content, post.title);
  
  // Extract headings for table of contents
  const headings = extractHeadings(completedContent);

  return (
    <div className="container mx-auto mt-10 px-4 mb-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <Link to="/blog" className="text-primary-gold-dark hover:underline inline-flex items-center transition-colors">
            <ChevronLeft className="inline-block mr-1 w-4 h-4" />
            Back to Blog
          </Link>
        </div>
        
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-3 font-serif text-black">{post.title}</h1>
          <p className="text-gray-600 mb-8 pb-4 border-b border-gray-200">
            Published on: {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric'
            })}
          </p>
          
          <TableOfContents headings={headings} />
          
          <BlogContent content={completedContent} />
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
