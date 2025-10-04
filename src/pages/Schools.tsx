import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import teacherImage from "@/assets/teacher-program.jpg";
import infrastructureImage from "@/assets/school-infrastructure.jpg";
import { TrendingUp, Users, Award, Database, Zap, Building2, CheckCircle2 } from "lucide-react";

const Schools = () => {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Enrollment",
      description:
        "Schools partnering with us see an average 30% increase in student enrollment within the first year.",
    },
    {
      icon: Users,
      title: "Higher Retention",
      description:
        "Improved student satisfaction leads to better retention rates and positive word-of-mouth marketing.",
    },
    {
      icon: Award,
      title: "Better Results",
      description:
        "Our curriculum and teaching methodology consistently deliver superior academic outcomes.",
    },
    {
      icon: Database,
      title: "Complete ERP System",
      description:
        "Manage admissions, attendance, fees, and academics all from one comprehensive platform.",
    },
    {
      icon: Zap,
      title: "Modern Infrastructure",
      description:
        "Smart TVs, tablets, and digital learning tools that make your school stand out.",
    },
    {
      icon: Building2,
      title: "Brand Recognition",
      description:
        "Association with EduTransform enhances your school's reputation and market position.",
    },
  ];

  const packages = [
    {
      title: "Complete Curriculum",
      features: [
        "Subject-specific programs for all grades",
        "Activity-based learning materials",
        "Audio-visual content library",
        "Regular curriculum updates",
        "Assessment and evaluation tools",
      ],
    },
    {
      title: "Teacher Empowerment",
      features: [
        "Regular training workshops",
        "Teacher tablets with teaching app",
        "24/7 online academy access",
        "Certification programs",
        "Ongoing support from experts",
      ],
    },
    {
      title: "School Infrastructure",
      features: [
        "Smart TVs for classrooms",
        "School activity kits",
        "Academic ERP system",
        "Digital library access",
        "Learning management system",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header onEnquireClick={scrollToForm} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your School Into a Leading Educational Institution
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-primary-foreground/90">
              Join 8,500+ schools that have revolutionized their education delivery with EduTransform
            </p>
            <Button variant="secondary" size="lg" onClick={scrollToForm}>
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why 8,500+ Schools Trust{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                EduTransform
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-soft transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Complete School Transformation Package
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything your school needs to deliver world-class education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">{pkg.title}</h3>
                <ul className="space-y-3">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Empower Your Teachers
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our comprehensive teacher training program ensures your educators are equipped with the latest pedagogical methods and technology tools to deliver exceptional learning experiences.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Regular in-person training workshops",
                  "24/7 online academy for continuous learning",
                  "Dedicated tablets with teaching resources",
                  "Certification programs for career growth",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in">
              <img
                src={teacherImage}
                alt="Teacher training"
                className="rounded-2xl shadow-glow w-full h-auto"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img
                src={infrastructureImage}
                alt="Modern infrastructure"
                className="rounded-2xl shadow-glow w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Upgrade Your Infrastructure
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Transform your classrooms into modern learning spaces with smart TVs, digital tools, and comprehensive ERP systems that streamline all school operations.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Smart TVs for every classroom",
                  "Complete academic ERP system",
                  "Digital learning management",
                  "Activity kits and learning materials",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join thousands of schools that have already revolutionized their education delivery. Schedule a demo today!
          </p>
          <Button variant="secondary" size="lg" onClick={scrollToForm}>
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schools;
