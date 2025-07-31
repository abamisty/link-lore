import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Entrepreneurship in Digital Age",
      excerpt: "Explore how digital transformation is reshaping the entrepreneurial landscape and creating new opportunities for innovative businesses.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Innovation",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Building Sustainable Business Models",
      excerpt: "Learn the key principles of creating business models that are both profitable and environmentally responsible.",
      author: "Prof. Michael Chen",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Sustainability",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Networking Strategies for New Entrepreneurs",
      excerpt: "Discover effective networking techniques that can help you build valuable connections and grow your business.",
      author: "Lisa Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Networking",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Funding Your Startup: A Complete Guide",
      excerpt: "A comprehensive overview of funding options available to startups, from bootstrapping to venture capital.",
      author: "James Wilson",
      date: "February 28, 2024",
      readTime: "12 min read",
      category: "Finance",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "The Psychology of Successful Leadership",
      excerpt: "Understanding the mental frameworks and psychological principles that drive effective leadership in business.",
      author: "Dr. Amanda Foster",
      date: "February 22, 2024",
      readTime: "7 min read",
      category: "Leadership",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Digital Marketing for Small Businesses",
      excerpt: "Essential digital marketing strategies that small businesses can implement to reach and engage their target audience.",
      author: "Mark Thompson",
      date: "February 18, 2024",
      readTime: "9 min read",
      category: "Marketing",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="content-container px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Latest Insights & Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, strategies, and insights from the world of entrepreneurship and business innovation.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-base line-clamp-3 mb-4">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="group/btn">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};