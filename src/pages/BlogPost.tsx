import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from "@/components/Header";
import { BlogPostSkeleton } from "@/components/blog/BlogPostSkeleton";
import { BlogPostError } from "@/components/blog/BlogPostError";
import { BlogPostNotFound } from "@/components/blog/BlogPostNotFound";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { BlogSEO } from "@/components/blog/BlogSEO";
import { getMockPosts } from "@/utils/blogPostUtils";
import { blogPosts } from "@/data/blog";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<{ title: string; date: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        // First, try to fetch from real API
        const response = await fetch(`https://www.askpriestai.com/api/blog/${slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPost({
          title: data.title,
          date: data.date,
          content: data.content,
        });
      } catch (e: any) {
        // If real API fails, use local mock data as fallback
        console.log("Falling back to local data");
        
        // First check in our static blog posts
        const staticPost = blogPosts.find(p => p.slug === slug);
        if (staticPost) {
          // For static posts, generate mock content based on the post info
          const mockContent = generateMockContent(staticPost);
          setPost({
            title: staticPost.title,
            date: staticPost.date,
            content: mockContent
          });
        } else {
          // If not in static posts, try the mock posts
          const mockPosts = getMockPosts();
          const mockPost = mockPosts.find(p => p.slug === slug);
          
          if (mockPost) {
            setPost({
              title: mockPost.title,
              date: mockPost.date,
              content: mockPost.content
            });
          } else {
            setError(`Post not found`);
          }
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Generate mock content for static blog posts
  const generateMockContent = (post: typeof blogPosts[0]) => {
    return `
## Introduction

${post.excerpt}

## Main Points

This is a sample article about ${post.title.toLowerCase()}. The keywords for this article include ${post.keywords}.

## Christian Perspective

From a Christian perspective, this topic relates to several important theological concepts.

## Scripture References

The Bible provides guidance on this topic in several passages.

## Practical Application

Here are some ways to apply these principles in your daily life.

## Conclusion

Thank you for reading this article about ${post.title.toLowerCase()}.
    `;
  };

  // SEO metadata setup
  let seoTitle = "Blog Post | AskPriestAI";
  let seoDescription = "Christian insights and spiritual guidance from AskPriestAI.";
  let seoUrl = `https://www.askpriestai.com/blog/${slug}`;
  
  if (post) {
    seoTitle = `${post.title} | AskPriestAI Blog`;
    // Generate description from the first 150 characters of content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.content.substring(0, 300);
    seoDescription = tempDiv.textContent?.substring(0, 150) + "..." || seoDescription;
  }

  if (loading) {
    return (
      <>
        <BlogSEO 
          title="Loading Article | AskPriestAI Blog" 
          description="Please wait while we load this article for you."
          url={seoUrl}
          today={today}
        />
        <BlogPostSkeleton />
      </>
    );
  }

  if (error) {
    return (
      <>
        <BlogSEO 
          title="Error | AskPriestAI Blog" 
          description="We encountered an error loading this article."
          url={seoUrl}
          today={today}
        />
        <BlogPostError error={error} />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <BlogSEO 
          title="Post Not Found | AskPriestAI Blog" 
          description="The article you're looking for could not be found."
          url={seoUrl}
          today={today}
        />
        <BlogPostNotFound />
      </>
    );
  }

  return (
    <>
      <BlogSEO 
        title={seoTitle} 
        description={seoDescription}
        url={seoUrl}
        today={today}
      />
      <Header />
      <BlogPostContent post={post} />
    </>
  );
};

export default BlogPost;
