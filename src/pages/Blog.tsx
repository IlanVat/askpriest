
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Helmet } from "react-helmet";

// Real blog data with current dates - sorted by date from newest to oldest
const blogPosts = [
  {
    id: 7,
    title: "Understanding the Beatitudes: Christ's Path to True Happiness",
    excerpt: "An in-depth exploration of Jesus' Beatitudes and how these counterintuitive principles offer a roadmap to genuine fulfillment.",
    date: "2025-03-16",
    readTime: "11 min read",
    category: "Bible Study",
    slug: "understanding-the-beatitudes",
    keywords: "beatitudes, sermon on the mount, jesus teachings, christian happiness, biblical promises"
  },
  {
    id: 6,
    title: "Digital Discipleship: Using Technology to Grow Faith",
    excerpt: "How modern technology and AI can be leveraged as tools for spiritual development without compromising authentic faith practice.",
    date: "2025-03-14",
    readTime: "7 min read",
    category: "Technology",
    slug: "digital-discipleship-technology",
    keywords: "christian technology, digital faith, AI spiritual tools, online church, faith apps"
  },
  {
    id: 8,
    title: "Spiritual Disciplines for a Distracted Age",
    excerpt: "Rediscovering ancient Christian practices that can help believers maintain focus in our attention-fragmented modern world.",
    date: "2025-03-12",
    readTime: "9 min read",
    category: "Spiritual Growth",
    slug: "spiritual-disciplines-for-a-distracted-age",
    keywords: "spiritual disciplines, christian focus, meditation, contemplative prayer, christian habits"
  },
  {
    id: 3,
    title: "Prayer Techniques for Busy Lives",
    excerpt: "Simple but effective ways to maintain a prayer life when your schedule seems impossible. Practical methods for spiritual connection.",
    date: "2025-03-10",
    readTime: "6 min read",
    category: "Prayer",
    slug: "prayer-techniques-busy-lives",
    keywords: "prayer methods, busy christian, prayer life, spiritual disciplines, christian prayer"
  },
  {
    id: 5,
    title: "Finding Peace in Uncertain Times",
    excerpt: "Biblical wisdom for maintaining spiritual peace during periods of personal or global uncertainty. Practical guidance for anxious hearts.",
    date: "2025-03-05",
    readTime: "9 min read",
    category: "Devotional",
    slug: "finding-peace-uncertain-times",
    keywords: "christian peace, anxiety, biblical peace, uncertain times, spiritual peace"
  },
  {
    id: 9,
    title: "Faith and Mental Health: A Christian Perspective",
    excerpt: "How biblical wisdom and modern psychology can work together to support mental wellbeing while honoring spiritual truth.",
    date: "2025-03-01",
    readTime: "10 min read",
    category: "Wellbeing",
    slug: "faith-and-mental-health",
    keywords: "christian mental health, faith and psychology, biblical counseling, christian therapy, emotional wellbeing"
  },
  {
    id: 1,
    title: "Understanding Biblical Context: Why It Matters",
    excerpt: "Discover how understanding the historical and cultural context can transform your interpretation of scripture and deepen your faith journey.",
    date: "2025-02-28",
    readTime: "8 min read",
    category: "Bible Study",
    slug: "understanding-biblical-context",
    keywords: "biblical interpretation, scripture context, biblical history, hermeneutics, bible study methods"
  },
  {
    id: 4,
    title: "The Role of Community in Spiritual Growth",
    excerpt: "Why fellowship with other believers is essential for developing a stronger faith and maintaining spiritual health in an isolated world.",
    date: "2025-02-05",
    readTime: "10 min read",
    category: "Community",
    slug: "community-spiritual-growth",
    keywords: "christian community, church fellowship, spiritual growth, faith community, christian relationships"
  },
  {
    id: 2,
    title: "Modern Faith Challenges and How to Navigate Them",
    excerpt: "A look at how believers can stay true to their faith while navigating complex social and ethical questions in today's rapidly changing world.",
    date: "2025-01-15",
    readTime: "12 min read",
    category: "Faith Journey",
    slug: "modern-faith-challenges",
    keywords: "christian challenges, faith questions, modern christianity, secular society, christian ethics"
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  
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
      <Helmet>
        <title>Christian Insights Blog | Biblical Wisdom and Spiritual Growth | AskPriestAI</title>
        <meta name="description" content="Explore Christian articles on faith, prayer, biblical wisdom, and spiritual growth. Get expert insights on modern faith challenges and practical spiritual guidance." />
        <meta name="keywords" content="christian blog, bible study, prayer guides, spiritual growth, faith journey, christian community, biblical wisdom" />
        <meta property="og:title" content="Christian Insights Blog | AskPriestAI" />
        <meta property="og:description" content="Explore Christian articles on faith, prayer, biblical wisdom, and spiritual growth. Get expert insights on modern faith challenges and practical spiritual guidance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.askpriestai.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Christian Insights Blog | AskPriestAI" />
        <meta name="twitter:description" content="Explore Christian articles on faith, prayer, biblical wisdom, and spiritual growth." />
        <link rel="canonical" href="https://www.askpriestai.com/blog" />
        <meta name="date" content={today} />
      </Helmet>
    
      <Header />
      <div className="min-h-screen bg-background">
        {/* Blog Header */}
        <div className="bg-gradient-to-b from-white to-primary-gold-light/20 py-16">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800">
                Christian Insights Blog
              </h1>
              <p className="text-gray-600 text-lg">
                Practical spiritual guidance, biblical wisdom, and answers to your faith questions.
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

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <button
                  onClick={() => setCategory("")}
                  className={`px-3 py-1 rounded-full text-sm ${
                    category === "" 
                      ? "bg-primary-gold-dark text-white" 
                      : "bg-white text-gray-600 border border-gray-300"
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      category === cat 
                        ? "bg-primary-gold-dark text-white" 
                        : "bg-white text-gray-600 border border-gray-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Post */}
        {filteredPosts.length > 0 && !searchTerm && category === "" && (
          <div className="container px-4 mx-auto py-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden md:flex">
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="text-sm text-primary-gold-dark font-medium mb-2">
                  {filteredPosts[0].category}
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                  {filteredPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {filteredPosts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-3">{new Date(filteredPosts[0].date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{filteredPosts[0].readTime}</span>
                </div>
                <Button 
                  onClick={() => navigate(`/blog/${filteredPosts[0].slug}`)}
                  className="bg-primary-gold-dark hover:bg-primary-gold-dark/90"
                >
                  Read Article
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-6">
                <div className="text-center">
                  <p className="text-lg font-semibold mb-2">Latest Article</p>
                  <p className="text-sm text-gray-600">Published on March 16, 2025</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Blog Posts Grid */}
        <div className="container px-4 mx-auto py-10">
          <h2 className="text-2xl font-serif font-bold mb-6">
            {searchTerm || category ? "Search Results" : "Latest Articles"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              // Skip the first post if it's the featured post and we're not searching/filtering
              (searchTerm || category || index > 0) && (
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
              )
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
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
          {!searchTerm && category === "" && filteredPosts.length > 0 && (
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
        
        {/* Newsletter Section */}
        <div className="bg-primary-gold-light/20 py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="font-serif text-3xl font-bold text-gray-800">
                Get Spiritual Insights in Your Inbox
              </h2>
              <p className="text-gray-600">
                Subscribe to our newsletter for weekly articles, resources, and guidance on your faith journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary-gold-dark"
                />
                <Button 
                  className="bg-primary-gold-dark hover:bg-primary-gold-dark/90 text-white"
                  onClick={() => window.open('https://landing.askpriestai.com', '_blank')}
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                By subscribing, you'll also receive updates about our AI-powered spiritual guidance tools.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-white py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">
                Have Faith Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                AskPriestAI provides instant, biblically-grounded answers to your spiritual questions, 24/7.
              </p>
              <Button 
                size="lg"
                className="bg-primary-gold-dark hover:bg-primary-gold-dark/90"
                onClick={() => window.location.href = 'https://landing.askpriestai.com'}
              >
                Ask Your Question Now
                <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
              <p className="mt-4 text-sm text-gray-500">
                Start with 10 free questions. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
