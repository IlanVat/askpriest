
import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

export const BlogPostNotFound: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="text-yellow-700">Post not found</p>
            <p className="mt-2">
              <Link to="/blog" className="text-blue-500 hover:underline">
                Browse all articles
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
