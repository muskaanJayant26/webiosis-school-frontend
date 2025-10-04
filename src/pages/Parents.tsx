import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import studentsImage from "@/assets/students-confidence.jpg";
import { BookOpen, Smartphone, Trophy, Star, CheckCircle2 } from "lucide-react";

const Parents = () => {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const features = [
    {
      icon: BookOpen,
      title: "Unmatched Curriculum",
      description:
        "Your child learns through a combination of textbook-based, audio-visual, and activity-based learning methods that make education engaging and effective.",
    },
    {
      icon: Smartphone,
      title: "Student Learning App",
      description:
        "Track your child's progress, access learning materials, and stay connected with teachers through our comprehensive student app.",
    },
    {
      icon: Trophy,
      title: "National Exposure",
      description:
        "Your child gets opportunities to participate in national-level competitions and events, building confidence and networking skills.",
    },
    {
      icon: Star,
      title: "Holistic Development",
      description:
        "Focus on overall personality development including academics, sports, arts, and life skills for well-rounded growth.",
    },
  ];

  const benefits = [
    "Regular progress reports and parent-teacher meetings",
    "Access to learning resources 24/7",
    "Personalized learning paths for each student",
    "Safe and engaging learning environment",
    "Expert teachers trained in modern pedagogy",
    "Affordable fee structure with excellent value",
  ];

  return (
    <div className="min-h-screen">
      <Header onEnquireClick={scrollToForm} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Give Your Child The Best Education
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-primary-foreground/90">
              Empower your child's future with world-class learning experiences that build confidence and competence
            </p>
            <Button variant="secondary" size="lg" onClick={scrollToForm}>
              Find EduTransform Schools Near You
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Parents Choose{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                EduTransform Schools
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-soft transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
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
                src={studentsImage}
                alt="Happy students learning"
                className="rounded-2xl shadow-glow w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                What You Get as a Parent
              </h2>
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
                Enroll Your Child Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Parents Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Mrs. Anjali Mehta",
                child: "Parent of Class 6 Student",
                content:
                  "My daughter's confidence has improved tremendously. The teachers are supportive, and the curriculum is engaging. Best decision we made!",
              },
              {
                name: "Mr. Suresh Patel",
                child: "Parent of Class 4 Student",
                content:
                  "The student app keeps me updated on my son's progress. I can see what he's learning and help him at home. Very transparent system.",
              },
              {
                name: "Mrs. Deepa Singh",
                child: "Parent of Class 8 Student",
                content:
                  "The holistic approach to education is fantastic. My child is not just academically strong but also participates in competitions.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.child}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Parents;
