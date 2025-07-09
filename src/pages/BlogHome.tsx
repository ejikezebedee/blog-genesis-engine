import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

// Mock blog posts data - will be replaced with real data later
const mockPosts = [
  {
    id: 1,
    slug: "first-ai-generated-post",
    title: "Welcome to the Future of Automated Blogging",
    excerpt: "Discover how AI is revolutionizing content creation with automated blog generation that maintains quality while saving time.",
    content: "Full article content here...",
    publishedAt: "2024-01-15",
    readTime: "5 min",
    author: "AI Writer",
    tags: ["AI", "Automation", "Technology"]
  },
  {
    id: 2,
    slug: "content-generation-strategies",
    title: "Smart Content Generation Strategies for Modern Blogs",
    excerpt: "Learn the best practices for creating engaging, SEO-optimized content through intelligent automation systems.",
    content: "Full article content here...",
    publishedAt: "2024-01-14",
    readTime: "7 min",
    author: "AI Writer",
    tags: ["Content", "SEO", "Strategy"]
  },
  {
    id: 3,
    slug: "future-of-publishing",
    title: "The Future of Digital Publishing is Here",
    excerpt: "Explore how automated publishing platforms are changing the landscape of digital content creation and distribution.",
    content: "Full article content here...",
    publishedAt: "2024-01-13",
    readTime: "6 min",
    author: "AI Writer",
    tags: ["Publishing", "Digital", "Future"]
  }
];

const BlogHome = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Genesis Blog
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/admin" className="text-foreground/80 hover:text-foreground transition-colors">
              Admin
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            AI-Powered Blog Genesis
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover fresh insights and cutting-edge content generated automatically. 
            Welcome to the future of intelligent blogging.
          </p>
          <Button 
            size="lg" 
            className="font-semibold"
            onClick={() => {
              document.getElementById('latest-posts')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Explore Latest Posts
          </Button>
        </div>
      </section>

      {/* Blog Posts */}
      <section id="latest-posts" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="text-xl mb-2 hover:text-primary transition-colors">
                    <Link to={`/post/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <Link to={`/post/${post.slug}`}>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 px-4 mt-16">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-xl font-semibold mb-4">Genesis Blog</h3>
          <p className="text-muted-foreground mb-6">
            Powered by AI • Generated with Intelligence • Published Automatically
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/admin" className="hover:text-foreground transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogHome;