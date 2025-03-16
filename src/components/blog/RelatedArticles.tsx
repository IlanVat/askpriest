
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts, BlogPost } from "@/data/blog";

export const RelatedArticles: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (!slug) return;

    // Find the current post
    const currentPost = blogPosts.find(post => post.slug === slug);
    
    if (!currentPost) return;

    // Get the current post's category and keywords
    const currentCategory = currentPost.category;
    const currentKeywords = currentPost.keywords.split(', ');
    
    // Find related posts based on category and keyword matches
    let related = blogPosts
      .filter(post => post.slug !== slug) // Exclude current post
      .map(post => {
        // Calculate relevance score
        let score = 0;
        
        // Category match is a strong indicator of relevance
        if (post.category === currentCategory) {
          score += 5;
        }
        
        // Count keyword matches
        const postKeywords = post.keywords.split(', ');
        const keywordMatches = postKeywords.filter(keyword => 
          currentKeywords.includes(keyword)
        ).length;
        
        score += keywordMatches * 2;
        
        return { post, score };
      })
      .filter(item => item.score > 0) // Only include posts with some relevance
      .sort((a, b) => b.score - a.score) // Sort by relevance score
      .slice(0, 2) // Take top 2 most relevant posts
      .map(item => item.post);
    
    // If we don't have at least 2 related posts based on category/keywords,
    // fill with recent posts from the same category
    if (related.length < 2) {
      const sameCategoryPosts = blogPosts
        .filter(post => 
          post.slug !== slug && 
          post.category === currentCategory &&
          !related.find(r => r.slug === post.slug)
        )
        .slice(0, 2 - related.length);
      
      related = [...related, ...sameCategoryPosts];
    }
    
    // If we still don't have 2 posts, add recent posts
    if (related.length < 2) {
      const recentPosts = blogPosts
        .filter(post => 
          post.slug !== slug && 
          !related.find(r => r.slug === post.slug)
        )
        .slice(0, 2 - related.length);
      
      related = [...related, ...recentPosts];
    }
    
    setRelatedPosts(related.slice(0, 2));
  }, [slug]);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold mb-4 font-serif">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatedPosts.map((post) => (
          <div key={post.slug} className="border p-4 rounded-lg hover:shadow-md transition-all">
            <Link to={`/blog/${post.slug}`} className="hover:underline">
              <h4 className="font-medium mb-1">{post.title}</h4>
              <p className="text-sm text-gray-600">{post.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
