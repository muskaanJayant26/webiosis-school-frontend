import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import { useState } from "react";
import { EnquiryDialog } from "@/components/EnquiryDialog";

const SchoolTimes = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const featuredArticle = {
    title: "The Future of Education: How AI is Transforming Indian Classrooms",
    excerpt: "Artificial Intelligence is revolutionizing the way students learn and teachers teach. Discover how schools across India are leveraging AI to create personalized learning experiences.",
    author: "Dr. Priya Sharma",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Technology",
  };

  const articles = [
    {
      title: "NEP 2020: Success Stories from Rural Schools",
      excerpt: "How small schools in rural India are successfully implementing NEP 2020 guidelines and transforming student outcomes.",
      author: "Rajesh Kumar",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Policy",
    },
    {
      title: "Building Resilient Students: Mental Health in Schools",
      excerpt: "Expert insights on creating supportive environments that prioritize student mental health and well-being.",
      author: "Dr. Anjali Mehta",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Wellness",
    },
    {
      title: "Innovative Teaching Methods: Project-Based Learning",
      excerpt: "A comprehensive guide to implementing project-based learning in your classroom for better student engagement.",
      author: "Vikram Singh",
      date: "January 8, 2025",
      readTime: "5 min read",
      category: "Teaching",
    },
    {
      title: "Parent-Teacher Partnership: Keys to Student Success",
      excerpt: "Research-backed strategies for building strong partnerships between parents and teachers.",
      author: "Meera Reddy",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Community",
    },
    {
      title: "STEM Education: Preparing Students for Tomorrow",
      excerpt: "How schools are integrating STEM education to prepare students for careers of the future.",
      author: "Dr. Arjun Patel",
      date: "January 3, 2025",
      readTime: "8 min read",
      category: "STEM",
    },
    {
      title: "Assessment Beyond Marks: Holistic Evaluation Methods",
      excerpt: "Moving beyond traditional testing to evaluate student learning comprehensively.",
      author: "Kavita Sharma",
      date: "December 30, 2024",
      readTime: "7 min read",
      category: "Assessment",
    },
  ];

  const categories = [
    "All Articles",
    "Technology",
    "Policy",
    "Teaching",
    "Wellness",
    "STEM",
    "Community",
    "Assessment",
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header onEnquireClick={() => setEnquiryOpen(true)} />
      
      {/* Hero Section */}
     <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
              <div className="max-w-4xl mx-auto text-center animate-slide-up">
         <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            The School Times
          </h1>
         <p className="text-xl sm:text-2xl mb-8 text-primary-foreground/90">
            Insights, stories, and best practices from the world of education
          </p>
        </div>
        </div>
      </section>

      {/* Categories
      <section className="py-8 px-6 sm:px-8 sticky top-[80px] sm:top-[96px] z-40 bg-background/95 backdrop-blur-sm border-y border-border">
        <div className="container mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="whitespace-nowrap text-base px-6 py-3"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Featured Article */}
      <section className="py-10 px-6 sm:px-8">
        <div className="container mx-auto">
          <Card className="p-8 sm:p-12 bg-card hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {featuredArticle.title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">
              {featuredArticle.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="text-base sm:text-lg">{featuredArticle.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-base sm:text-lg">{featuredArticle.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-base sm:text-lg">{featuredArticle.readTime}</span>
              </div>
            </div>
            <Button variant="default" size="lg" className="text-lg px-8 py-6">
              Read Full Article
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-10 px-6 sm:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-foreground">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow bg-card flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground flex-grow">
                  {article.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">{article.excerpt}</p>
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">{article.readTime}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-lg py-6">
                  Read More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-10 px-6 sm:px-8 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Subscribe to The School Times
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get the latest articles and insights delivered to your inbox every week
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-xl px-12 py-8 font-bold"
            onClick={() => setEnquiryOpen(true)}
          >
            Subscribe Now
          </Button>
        </div>
      </section>

      <Footer />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} formType="general" />
    </div>
  );
};

export default SchoolTimes;
