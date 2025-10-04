import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import teacherImage from "@/assets/teacher-program.jpg";
import { Smartphone, Award, Users, BookOpen, Zap, Trophy, CheckCircle2 } from "lucide-react";

const Teachers = () => {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const features = [
    {
      icon: Smartphone,
      title: "Teacher App & Tablet",
      description:
        "Get a dedicated tablet loaded with all teaching resources, lesson plans, and assessment tools you need for effective teaching.",
    },
    {
      icon: BookOpen,
      title: "Ready-to-Use Lesson Plans",
      description:
        "Access comprehensive lesson plans with step-by-step teaching guides, making your preparation easier and more effective.",
    },
    {
      icon: Zap,
      title: "AI Assessment Builder",
      description:
        "Create customized assessments with our AI-powered Jasper tool. Choose topics and difficulty levels for optimal student learning.",
    },
    {
      icon: Award,
      title: "Professional Certifications",
      description:
        "Complete courses and earn recognized certifications that boost your career and teaching expertise.",
    },
    {
      icon: Users,
      title: "Expert Training & Support",
      description:
        "Regular in-person workshops and 24/7 access to our online academy for continuous professional development.",
    },
    {
      icon: Trophy,
      title: "Teaching Excellence Recognition",
      description:
        "Be part of a community that values and rewards teaching excellence with opportunities for growth.",
    },
  ];

  const benefits = [
    "Reduce lesson planning time by 50%",
    "Access to 10,000+ teaching resources",
    "Continuous professional development",
    "Peer learning community",
    "Career advancement opportunities",
    "Work-life balance with efficient tools",
  ];

  const training = [
    {
      title: "In-Person Workshops",
      description:
        "Regular hands-on training sessions conducted by academic experts to enhance your teaching skills.",
    },
    {
      title: "EduTransform Academy",
      description:
        "24/7 online learning platform with courses on pedagogy, technology integration, and subject expertise.",
    },
    {
      title: "Certification Programs",
      description:
        "Earn recognized certifications in modern teaching methodologies and educational technology.",
    },
    {
      title: "Personalized Feedback",
      description:
        "Get individualized feedback and mentoring from experienced educators to improve your practice.",
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
              Become a Super Teacher with EduTransform
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-primary-foreground/90">
              Join 60,000+ teachers who have transformed their teaching with our comprehensive support system
            </p>
            <Button variant="secondary" size="lg" onClick={scrollToForm}>
              Explore Teacher Benefits
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Teach Effectively
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-soft transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={teacherImage}
                alt="Teacher with technology"
                className="rounded-2xl shadow-glow w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Teachers Love EduTransform
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our comprehensive support system helps you focus on what matters most - inspiring and educating your students.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <Button variant="hero" size="lg" className="mt-8" onClick={scrollToForm}>
                Join Our Teaching Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Continuous Professional Development
            </h2>
            <p className="text-xl text-muted-foreground">
              Grow your skills and advance your career with our comprehensive training programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {training.map((program, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-soft transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  {program.title}
                </h3>
                <p className="text-muted-foreground">{program.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Teachers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Ms. Priya Sharma",
                role: "English Teacher, Mumbai",
                content:
                  "The teacher app has made my life so much easier. Lesson planning that used to take hours now takes minutes. I can focus more on my students!",
              },
              {
                name: "Mr. Rajesh Kumar",
                role: "Math Teacher, Delhi",
                content:
                  "The training programs are exceptional. I've learned so many new techniques that have made my teaching more effective and engaging.",
              },
              {
                name: "Mrs. Kavita Singh",
                role: "Science Teacher, Bangalore",
                content:
                  "The AI assessment builder is a game-changer. I can create customized tests that truly measure my students' understanding.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-all">
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Elevate Your Teaching Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join the EduTransform community and transform the way you teach
          </p>
          <Button variant="secondary" size="lg" onClick={scrollToForm}>
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teachers;
