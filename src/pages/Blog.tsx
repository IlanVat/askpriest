import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";

// Sample blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "Understanding Biblical Context: Why It Matters",
    excerpt: "Discover how understanding the historical and cultural context can transform your interpretation of scripture.",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Bible Study",
    slug: "understanding-biblical-context"
  },
  {
    id: 2,
    title: "Modern Faith Challenges and How to Navigate Them",
    excerpt: "A look at how believers can stay true to their faith while navigating complex social and ethical questions.",
    date: "June 10, 2023",
    readTime: "12 min read",
    category: "Faith Journey",
    slug: "modern-faith-challenges"
  },
  {
    id: 3,
    title: "Prayer Techniques for Busy Lives",
    excerpt: "Simple but effective ways to maintain a prayer life when your schedule seems impossible.",
    date: "July 22, 2023",
    readTime: "6 min read",
    category: "Prayer",
    slug: "prayer-techniques-busy-lives"
  },
  {
    id: 4,
    title: "The Role of Community in Spiritual Growth",
    excerpt: "Why fellowship with other believers is essential for developing a stronger faith.",
    date: "August 5, 2023",
    readTime: "10 min read",
    category: "Community",
    slug: "community-spiritual-growth"
  },
  {
    id: 5,
    title: "Finding Peace in Uncertain Times",
    excerpt: "Biblical wisdom for maintaining spiritual peace during periods of personal or global uncertainty.",
    date: "September 12, 2023",
    readTime: "9 min read",
    category: "Devotional",
    slug: "finding-peace-uncertain-times"
  },
  {
    id: 6,
    title: "Digital Discipleship: Using Technology to Grow Faith",
    excerpt: "How modern technology and AI can be leveraged as tools for spiritual development.",
    date: "October 30, 2023",
    readTime: "7 min read",
    category: "Technology",
    slug: "digital-discipleship-technology"
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Blog Header */}
        <div className="bg-gradient-to-b from-white to-primary-gold-light/20 py-16">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800">
                Spiritual Insights Blog
              </h1>
              <p className="text-gray-600 text-lg">
                Guidance for your faith journey, biblical interpretations, and answers to common spiritual questions.
              </p>
              
              {/* Search Input */}
              <div className="mt-8 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary-gold-dark"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="container px-4 mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                    <span className="mr-3">{post.date}</span>
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
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found matching your search.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
        
        {/* Newsletter Section */}
        <div className="bg-primary-gold-light/20 py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="font-serif text-3xl font-bold text-gray-800">
                Stay Updated on New Content
              </h2>
              <p className="text-gray-600">
                Subscribe to our newsletter to receive the latest articles, resources, and spiritual insights directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary-gold-dark"
                />
                <Button className="bg-primary-gold-dark hover:bg-primary-gold-dark/90 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
