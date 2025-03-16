
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="text-sm text-primary-gold-dark font-medium mb-1">
          {post.category}
        </div>
        <CardTitle className="font-serif text-xl font-semibold line-clamp-2">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-0">
        <div className="flex items-center text-sm text-gray-500">
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
          variant="ghost" 
          size="sm" 
          className="text-primary-gold-dark hover:text-primary-gold-dark/80"
          onClick={() => navigate(`/blog/${post.slug}`)}
        >
          Read More
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};
