import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Plus, 
  BarChart3, 
  Calendar, 
  Settings, 
  User,
  Eye,
  Edit3,
  Trash2,
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for admin dashboard
const dashboardStats = {
  totalPosts: 24,
  publishedPosts: 21,
  draftPosts: 3,
  totalViews: 12450,
  monthlyViews: 3200,
  weeklyViews: 850
};

const recentPosts = [
  {
    id: 1,
    title: "Welcome to the Future of Automated Blogging",
    status: "published",
    publishedAt: "2024-01-15",
    views: 1240,
    slug: "first-ai-generated-post"
  },
  {
    id: 2,
    title: "Smart Content Generation Strategies for Modern Blogs",
    status: "published", 
    publishedAt: "2024-01-14",
    views: 890,
    slug: "content-generation-strategies"
  },
  {
    id: 3,
    title: "The Future of Digital Publishing is Here",
    status: "published",
    publishedAt: "2024-01-13", 
    views: 750,
    slug: "future-of-publishing"
  },
  {
    id: 4,
    title: "AI-Powered Content Marketing Revolution",
    status: "draft",
    publishedAt: null,
    views: 0,
    slug: "ai-content-marketing"
  }
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-bold text-primary">
              Genesis Blog
            </Link>
            <Badge variant="secondary">Admin Panel</Badge>
          </div>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              View Site
            </Link>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Admin
            </Button>
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Logout
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your automated blog and monitor content performance
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Button className="h-auto p-4 flex-col gap-2" size="lg">
            <Plus className="w-6 h-6" />
            Generate New Post
          </Button>
          <Button variant="outline" className="h-auto p-4 flex-col gap-2" size="lg">
            <Settings className="w-6 h-6" />
            Content Settings
          </Button>
          <Button variant="outline" className="h-auto p-4 flex-col gap-2" size="lg">
            <Calendar className="w-6 h-6" />
            Schedule Posts
          </Button>
          <Button variant="outline" className="h-auto p-4 flex-col gap-2" size="lg">
            <BarChart3 className="w-6 h-6" />
            Analytics
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalPosts}</div>
              <p className="text-xs text-muted-foreground">
                {dashboardStats.publishedPosts} published, {dashboardStats.draftPosts} drafts
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +{dashboardStats.monthlyViews} this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weekly Views</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.weeklyViews}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Generation</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2h 30m</div>
              <p className="text-xs text-muted-foreground">
                Daily auto-generation
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Posts Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Recent Posts
            </CardTitle>
            <CardDescription>
              Manage your published and draft blog posts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium">{post.title}</h3>
                      <Badge 
                        variant={post.status === 'published' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {post.status === 'published' ? (
                          <>
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Published
                          </>
                        ) : (
                          <>
                            <Clock className="w-3 h-3 mr-1" />
                            Draft
                          </>
                        )}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {post.publishedAt && (
                        <span>Published: {new Date(post.publishedAt).toLocaleDateString()}</span>
                      )}
                      <span>Views: {post.views}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {post.status === 'published' && (
                      <Link to={`/post/${post.slug}`}>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                    <Button variant="ghost" size="sm">
                      <Edit3 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">AI Content Generator: Active</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Auto-Publisher: Online</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Next Generation: Scheduled</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;