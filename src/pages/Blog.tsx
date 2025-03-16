
import { useState } from "react";
import { Header } from "@/components/Header";
import { blogPosts } from "@/data/blog";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { BlogPostGrid } from "@/components/blog/BlogPostGrid";
import { NewsletterSection } from "@/components/blog/NewsletterSection";
import { CallToAction } from "@/components/blog/CallToAction";
import { BlogSEO } from "@/components/blog/BlogSEO";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  
  const filteredPosts = blogPosts.filter(post => 
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (category === "" || post.category === category)
  );

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Get current date for SEO
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <BlogSEO today={today} />
      <Header />
      <div className="min-h-screen bg-background">
        <BlogHeader 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
        
        {/* Featured Post */}
        {filteredPosts.length > 0 && !searchTerm && category === "" && (
          <FeaturedPost post={filteredPosts[0]} />
        )}
        
        {/* Blog Posts Grid */}
        <BlogPostGrid 
          posts={filteredPosts}
          searchTerm={searchTerm}
          category={category}
          setSearchTerm={setSearchTerm}
          setCategory={setCategory}
        />
        
        {/* Newsletter Section */}
        <NewsletterSection />
        
        {/* Call to Action */}
        <CallToAction />
      </div>
    </>
  );
};

export default Blog;
