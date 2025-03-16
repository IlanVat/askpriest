
import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

interface BlogPostErrorProps {
  error: string | null;
}

export const BlogPostError: React.FC<BlogPostErrorProps> = ({ error }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-700">Error: {error}</p>
            <p className="mt-2">
              <Link to="/blog" className="text-blue-500 hover:underline">
                Return to blog
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
