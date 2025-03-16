
import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronLeft, Heading1, Heading2, Heading3, ListOrdered, Quote } from "lucide-react";
import { InlineCTA } from "./InlineCTA";
import { RelatedArticles } from "./RelatedArticles";

interface BlogPostContentProps {
  post: {
    title: string;
    date: string;
    content: string;
  };
}

// Custom components for ReactMarkdown to style different elements
const components = {
  h1: ({ node, ...props }: any) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-indigo-900 flex items-center" {...props}>
      <Heading1 className="inline-block mr-2 text-indigo-600" size={24} />
      {props.children}
    </h1>
  ),
  h2: ({ node, ...props }: any) => (
    <h2 className="text-2xl font-bold mt-6 mb-3 text-indigo-800 flex items-center" {...props}>
      <Heading2 className="inline-block mr-2 text-indigo-600" size={20} />
      {props.children}
    </h2>
  ),
  h3: ({ node, ...props }: any) => (
    <h3 className="text-xl font-bold mt-4 mb-2 text-indigo-700 flex items-center" {...props}>
      <Heading3 className="inline-block mr-2 text-indigo-600" size={18} />
      {props.children}
    </h3>
  ),
  ul: ({ node, ...props }: any) => (
    <ul className="list-disc pl-6 my-4 space-y-2" {...props} />
  ),
  ol: ({ node, ...props }: any) => (
    <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />
  ),
  li: ({ node, ...props }: any) => (
    <li className="mb-2 text-gray-800" {...props} />
  ),
  blockquote: ({ node, ...props }: any) => (
    <blockquote className="border-l-4 border-indigo-400 pl-4 my-4 py-2 bg-indigo-50 rounded-r text-gray-700 flex items-start" {...props}>
      <Quote className="inline-block mr-2 text-indigo-500 mt-1 flex-shrink-0" size={18} />
      <div>{props.children}</div>
    </blockquote>
  ),
  p: ({ node, ...props }: any) => (
    <p className="my-4 text-gray-800 leading-relaxed" {...props} />
  ),
  strong: ({ node, ...props }: any) => (
    <strong className="font-bold text-indigo-900" {...props} />
  ),
  a: ({ node, ...props }: any) => (
    <a className="text-indigo-600 hover:text-indigo-800 underline" {...props} />
  ),
};

export const BlogPostContent: React.FC<BlogPostContentProps> = ({ post }) => {
  return (
    <div className="container mx-auto mt-10 px-4 mb-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <Link to="/blog" className="text-indigo-600 hover:underline inline-flex items-center transition-colors">
            <ChevronLeft className="inline-block mr-1 w-4 h-4" />
            Back to Blog
          </Link>
        </div>
        
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-3 font-serif text-indigo-900">{post.title}</h1>
          <p className="text-gray-600 mb-8 pb-4 border-b border-gray-200">
            Published on: {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric'
            })}
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
            <div className="flex items-center mb-2">
              <ListOrdered className="text-indigo-600 mr-2" size={20} />
              <h3 className="text-lg font-semibold text-indigo-900">Contents</h3>
            </div>
            <div className="pl-6">
              {post.content.split('\n').filter(line => line.startsWith('## ')).map((line, index) => (
                <div key={index} className="py-1">
                  <a 
                    href={`#${line.replace('## ', '').toLowerCase().replace(/[^\w]+/g, '-')}`} 
                    className="text-indigo-600 hover:text-indigo-800 hover:underline"
                  >
                    {line.replace('## ', '')}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              components={components}
            >
              {post.content}
            </ReactMarkdown>
          </div>
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
