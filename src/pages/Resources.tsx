import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Video, BookOpen, Users, TrendingUp } from "lucide-react";
import { useState } from "react";
import { EnquiryDialog } from "@/components/EnquiryDialog";

const Resources = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const resourceCategories = [
    {
      icon: FileText,
      title: "Research Papers",
      count: "50+",
      description: "In-depth research on modern teaching methodologies and educational trends",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      count: "100+",
      description: "Step-by-step guides for teachers and administrators",
    },
    {
      icon: BookOpen,
      title: "E-Books",
      count: "30+",
      description: "Comprehensive guides on educational transformation",
    },
    {
      icon: Users,
      title: "Case Studies",
      count: "25+",
      description: "Success stories from schools across India",
    },
  ];

  const featuredResources = [
    {
      type: "E-Book",
      title: "Complete Guide to NEP 2020 Implementation",
      description: "A comprehensive 200-page guide covering every aspect of implementing NEP 2020 in your school.",
      downloads: "2,500+",
    },
    {
      type: "Video Series",
      title: "Modern Teaching Methodologies Masterclass",
      description: "10-hour video series featuring expert educators sharing innovative teaching techniques.",
      downloads: "1,800+",
    },
    {
      type: "Research Paper",
      title: "Impact of Technology on Student Learning Outcomes",
      description: "Detailed research analysis with data from 100+ schools across multiple states.",
      downloads: "3,200+",
    },
    {
      type: "Case Study",
      title: "Transforming Rural Education: Success Stories",
      description: "Real-world examples of educational transformation in rural schools.",
      downloads: "1,500+",
    },
  ];

  const webinars = [
    {
      title: "Building Student Confidence in the Digital Age",
      date: "Every Tuesday",
      time: "5:00 PM IST",
    },
    {
      title: "Effective Classroom Management Techniques",
      date: "Every Thursday",
      time: "4:00 PM IST",
    },
    {
      title: "Parent-Teacher Collaboration Best Practices",
      date: "Every Saturday",
      time: "11:00 AM IST",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header onEnquireClick={() => setEnquiryOpen(true)} />
      
      {/* Hero Section */}
    <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
           <div className="max-w-4xl mx-auto text-center animate-slide-up">
         <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Educational Resources
          </h1>
        <p className="text-xl sm:text-2xl mb-8 text-primary-foreground/90">
            Access our comprehensive library of resources to enhance teaching and learning
          </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-10 px-6 sm:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow bg-card">
                <category.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{category.count}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{category.title}</h3>
                <p className="text-lg text-muted-foreground">{category.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-10 px-6 sm:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-foreground">
            Featured Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow bg-card">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">{resource.title}</h3>
                <p className="text-lg text-muted-foreground mb-4">{resource.description}</p>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-lg">{resource.downloads} Downloads</span>
                </div>
                <Button 
                  variant="default" 
                  className="w-full text-lg py-6"
                  onClick={() => setEnquiryOpen(true)}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-10 px-6 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-foreground">
            Free Weekly Webinars
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow bg-card">
                <h3 className="text-2xl font-bold mb-4 text-foreground">{webinar.title}</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold">Day:</span> {webinar.date}
                  </p>
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold">Time:</span> {webinar.time}
                  </p>
                </div>
                <Button 
                  variant="default" 
                  className="w-full text-lg py-6"
                  onClick={() => setEnquiryOpen(true)}
                >
                  Register Free
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} formType="general" />
    </div>
  );
};

export default Resources;
