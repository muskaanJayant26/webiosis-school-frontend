import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Heart, Zap, Globe, Users, TrendingUp } from "lucide-react";

const AboutUs = () => {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "To transform education in India by making world-class learning accessible to every student, regardless of their location or background.",
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description:
        "Every decision we make is centered around what's best for students and their holistic development.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Continuously developing cutting-edge solutions that combine pedagogy with technology for better learning outcomes.",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description:
        "Making quality education accessible to schools across urban and rural India, bridging the education gap.",
    },
  ];

  const milestones = [
    {
      year: "2012",
      title: "Foundation",
      description: "EduTransform was founded with a vision to revolutionize school education in India.",
    },
    {
      year: "2015",
      title: "1,000 Schools",
      description: "Reached our first major milestone of partnering with 1,000 schools.",
    },
    {
      year: "2018",
      title: "National Expansion",
      description: "Expanded operations to cover 400+ cities across India.",
    },
    {
      year: "2020",
      title: "Digital Revolution",
      description: "Launched comprehensive digital learning platform during the pandemic.",
    },
    {
      year: "2023",
      title: "8,500+ Schools",
      description: "Became India's leading school transformation platform with 3.6M+ students.",
    },
  ];

  const impact = [
    { number: "8,500+", label: "Partner Schools" },
    { number: "3.6M+", label: "Students Impacted" },
    { number: "60,000+", label: "Teachers Trained" },
    { number: "400+", label: "Cities Covered" },
  ];

  return (
    <div className="min-h-screen">
      <Header onEnquireClick={scrollToForm} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Transforming India, One School at a Time
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-primary-foreground/90">
              We're on a mission to revolutionize education and empower every student with the confidence to succeed
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <Card className="p-8 hover:shadow-soft transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To transform education in India by providing affordable, accessible, and excellent learning solutions that empower students to reach their full potential and build confidence for life.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-soft transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-accent-foreground" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be India's most trusted education partner, reaching every school and student with world-class curriculum, technology, and teaching methodologies that prepare them for the future.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-soft transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Impact Across India
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {impact.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              A decade of transforming education in India
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-soft transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate educators and innovators driving change
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. Sumeet Mehta",
                role: "Co-Founder & CEO",
                description: "Former IIT professor with 20+ years in education technology",
              },
              {
                name: "Ms. Neha Gupta",
                role: "Co-Founder & COO",
                description: "Education innovation expert and curriculum design specialist",
              },
              {
                name: "Mr. Arvind Sharma",
                role: "Chief Academic Officer",
                description: "Former principal with expertise in pedagogy and teacher training",
              },
            ].map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-soft transition-all">
                <div className="w-24 h-24 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join Us in Transforming Education
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Be part of India's education revolution. Partner with us to bring world-class learning to your school.
          </p>
          <Button variant="secondary" size="lg" onClick={scrollToForm}>
            Partner With Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
