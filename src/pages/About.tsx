import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Zap, 
  Calendar, 
  TrendingUp, 
  Shield, 
  Globe,
  ArrowLeft,
  Cpu,
  BarChart3,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Genesis Blog
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              About
            </Link>
            <Link to="/admin" className="text-foreground/80 hover:text-foreground transition-colors">
              Admin
            </Link>
          </nav>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            AI-Powered Content Generation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Genesis Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Genesis Blog represents the future of content creation, where artificial intelligence 
            meets human creativity to produce engaging, high-quality blog content automatically.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Bot className="w-6 h-6 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed">
            <p className="mb-4">
              We believe that technology should enhance human creativity, not replace it. Genesis Blog 
              is an experimental platform that demonstrates how AI can be used to automate the content 
              creation process while maintaining quality, relevance, and authenticity.
            </p>
            <p>
              Our goal is to show how intelligent automation can help content creators focus on 
              strategy, analysis, and higher-level creative decisions while ensuring consistent, 
              valuable content delivery.
            </p>
          </CardContent>
        </Card>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">How Genesis Blog Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>AI Content Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced AI algorithms analyze trends and generate high-quality, 
                  engaging blog content on relevant topics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Automated Publishing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Content is automatically scheduled and published according to 
                  optimized timing for maximum reader engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuous analysis of content performance helps refine 
                  the generation process for better reader engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Lightning Fast Generation</h3>
                  <p className="text-muted-foreground text-sm">
                    Generate complete blog posts in minutes, not hours.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">SEO Optimized</h3>
                  <p className="text-muted-foreground text-sm">
                    Built-in SEO optimization for better search visibility.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Quality Assurance</h3>
                  <p className="text-muted-foreground text-sm">
                    Multi-layered quality checks ensure content excellence.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Automated Scheduling</h3>
                  <p className="text-muted-foreground text-sm">
                    Smart scheduling based on audience engagement patterns.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Global Reach</h3>
                  <p className="text-muted-foreground text-sm">
                    Content optimized for international audiences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Audience Focused</h3>
                  <p className="text-muted-foreground text-sm">
                    Content tailored to specific audience preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Frontend Technologies</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>React with TypeScript</span>
                    <Badge variant="outline">Frontend</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Tailwind CSS</span>
                    <Badge variant="outline">Styling</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Shadcn/ui Components</span>
                    <Badge variant="outline">UI</Badge>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Backend & AI</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Natural Language Processing</span>
                    <Badge variant="outline">AI</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Content Management System</span>
                    <Badge variant="outline">Backend</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Automated Publishing</span>
                    <Badge variant="outline">Automation</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-muted-foreground mb-6">
            Discover how AI-powered content generation is changing the future of blogging.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/">
              <Button size="lg">
                Read Our Blog
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="outline" size="lg">
                View Admin Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;