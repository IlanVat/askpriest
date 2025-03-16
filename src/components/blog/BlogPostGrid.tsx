import React from "react";
import { Button } from "@/components/ui/button";
import { BlogPostCard } from "./BlogPostCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { BlogPost } from "@/data/blog";

interface BlogPostGridProps {
  posts: BlogPost[];
  searchTerm: string;
  category: string;
  setSearchTerm: (term: string) => void;
  setCategory: (category: string) => void;
}

export const BlogPostGrid: React.FC<BlogPostGridProps> = ({ 
  posts, 
  searchTerm, 
  category, 
  setSearchTerm, 
  setCategory
}) => {
  return (
    <div className="container px-4 mx-auto py-10">
      <h2 className="text-2xl font-serif font-bold mb-6">
        {searchTerm || category ? "Search Results" : "Latest Articles"}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          // Skip the first post if it's the featured post and we're not searching/filtering
          (searchTerm || category || index > 0) && (
            <BlogPostCard key={post.id} post={post} />
          )
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No articles found matching your search.</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => {
              setSearchTerm("");
              setCategory("");
            }}
          >
            Clear Search
          </Button>
        </div>
      )}
      
      {/* Pagination */}
      {!searchTerm && category === "" && posts.length > 0 && (
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};
