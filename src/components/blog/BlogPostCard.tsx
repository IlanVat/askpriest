import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "@/data/blog";

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/blog/${post.slug}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="text-sm text-primary-gold-dark font-medium mb-1">
          {post.category}
        </div>
        <CardTitle 
          className="font-serif text-xl font-semibold line-clamp-2 cursor-pointer hover:text-primary-gold-dark transition-colors"
          onClick={handleNavigate}
        >
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-start items-center pt-0">
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
      </CardFooter>
    </Card>
  );
};
