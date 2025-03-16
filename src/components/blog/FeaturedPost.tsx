import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "@/data/blog";

interface FeaturedPostProps {
  post: BlogPost;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className="container px-4 mx-auto py-10">
      <div className="bg-white rounded-lg shadow-md overflow-hidden md:flex">
        <div className="md:w-2/3 p-6 md:p-8">
          <div className="text-sm text-primary-gold-dark font-medium mb-2">
            {post.category}
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-3">{new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
          <Button 
            onClick={() => navigate(`/blog/${post.slug}`)}
            className="bg-primary-gold-dark hover:bg-primary-gold-dark/90"
          >
            Read Article
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-6">
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Latest Article</p>
            <p className="text-sm text-gray-600">Published on March 16, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};
