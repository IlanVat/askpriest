import { ChevronRight } from "lucide-react";
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<{ title: string; date: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
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
        setError(`Failed to load post: ${e.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="container mx-auto mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto mt-10">Error: {error}</div>;
  }

  if (!post) {
    return <div className="container mx-auto mt-10">Post not found</div>;
  }

  return (
    <div className="container mx-auto mt-10 px-4 max-w-3xl">
      <div className="mb-4">
        <Link to="/blog" className="text-blue-500 hover:underline">
          <ChevronRight className="inline-block mr-1 w-4 h-4 transform rotate-180" />
          Back to Blog
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">Published on: {new Date(post.date).toLocaleDateString()}</p>
      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
      <div className="mt-8">
        <Button onClick={() => window.location.href = 'https://www.askpriestai.com/login_signup?screen=Signup'}
          className="bg-primary-gold-dark hover:bg-primary-gold-dark/90">
          Get Started
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default BlogPost;
