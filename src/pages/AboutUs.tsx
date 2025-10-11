import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Heart, Zap, Globe, Users, TrendingUp, Award, BookOpen } from "lucide-react";

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
      <section className="py-5 mt-5 bg-background">
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
   <section className=" bg-gradient-subtle">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Our Core Values
      </h2>
      <p className="text-xl text-muted-foreground">
        The principles that guide everything we do
      </p>
    </div>

    {/* Values Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => (
        <Card
          key={index}
          className="p-6 bg-white rounded-lg text-center transition-transform duration-300 transform hover:-translate-y-3 hover:scale-105 hover:shadow-xl"
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
   <section className="py-10 mt-5 bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl sm:text-3xl font-bold mb-4">
        Our Impact Across India
      </h2>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {impact.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-soft hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Optional icon container */}
          {stat.icon && (
            <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
              <stat.icon className="h-8 w-8 text-primary-foreground" />
            </div>
          )}

          <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            {stat.number}
          </div>
          <div className="text-sm sm:text-base text-muted-foreground font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Journey Timeline */}
      <section className="py-10 bg-gradient-subtle">
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
      <section className="py-10 bg-background">
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

      {/* Awards & Recognition */}
      <section className="py-10 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-muted-foreground">
              Honored for excellence in education innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                year: "2024",
                award: "EdTech Company of the Year",
                organization: "National Education Awards",
              },
              {
                year: "2023",
                award: "Innovation in Learning",
                organization: "Ministry of Education",
              },
              {
                year: "2022",
                award: "Best Teacher Training Program",
                organization: "Indian Education Summit",
              },
              {
                year: "2021",
                award: "Technology Excellence Award",
                organization: "EdTech India",
              },
            ].map((award, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-soft transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{award.year}</div>
                <h3 className="font-bold mb-2">{award.award}</h3>
                <p className="text-sm text-muted-foreground">{award.organization}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-10 bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Our Approach to Education Transformation
        </h2>
        <p className="text-xl text-muted-foreground">
          A comprehensive methodology that delivers consistent results
        </p>
      </div>

      {/* Approach Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Research-Backed",
            description:
              "Our curriculum and methods are based on extensive educational research and proven pedagogical frameworks.",
            icon: BookOpen,
          },
          {
            title: "Technology-Enabled",
            description:
              "Leveraging cutting-edge technology to enhance learning while maintaining the human touch in education.",
            icon: Zap,
          },
          {
            title: "Locally Relevant",
            description:
              "While maintaining international standards, we ensure content is culturally relevant and contextual to India.",
            icon: Globe,
          },
        ].map((approach, index) => (
          <Card
            key={index}
            className="p-6 bg-white rounded-lg text-center transition-transform duration-300 transform hover:-translate-y-3 hover:scale-105 hover:shadow-xl"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
              <approach.icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3">{approach.title}</h3>
            <p className="text-muted-foreground">{approach.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Social Impact */}
      <section className="py-10 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Creating Social Impact
              </h2>
              <p className="text-xl text-muted-foreground">
                Beyond business, we're committed to transforming lives
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-soft transition-all">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Rural Education Initiative
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We've partnered with 2,000+ schools in rural and semi-urban areas, bringing quality education to underserved communities. Our subsidized programs ensure that every child, regardless of location, has access to world-class learning resources.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-gradient-subtle rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">2,000+</div>
                    <p className="text-sm text-muted-foreground">Rural Schools</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-subtle rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">500K+</div>
                    <p className="text-sm text-muted-foreground">Rural Students</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-soft transition-all">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Teacher Scholarship Program
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We provide free training and certifications to teachers from economically disadvantaged schools. Our scholarship program has trained 10,000+ teachers at no cost, empowering them with skills to transform their classrooms.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-gradient-subtle rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">10,000+</div>
                    <p className="text-sm text-muted-foreground">Scholarship Recipients</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-subtle rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">₹5Cr+</div>
                    <p className="text-sm text-muted-foreground">Investment in CSR</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              By 2030, we aim to impact 10 million students across 20,000 schools, making quality education accessible to every child in India. We're investing in AI-powered personalized learning, immersive VR/AR experiences, and expanding our reach to international markets.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { goal: "20,000", label: "Partner Schools" },
                { goal: "10M", label: "Students Impacted" },
                { goal: "500+", label: "Cities Covered" },
              ].map((vision, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-hero text-primary-foreground animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold mb-2">{vision.goal}</div>
                  <p className="text-primary-foreground/90">{vision.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    
      

      <Footer />
    </div>
  );
};

export default AboutUs;
