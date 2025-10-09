import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import studentsImage from "@/assets/students-confidence.jpg";
import { BookOpen, Smartphone, Trophy, CheckCircle2 } from "lucide-react";
"use client";
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Parents = () => {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const testimonials = [
    {
      name: "Mr. & Mrs. Verma",
      location: "Pune",
      content:
        "Our twin daughters were struggling with math. The personalized attention and innovative teaching methods at EduTransform have made them confident learners. They actually enjoy studying now!",
    },
    {
      name: "Mrs. Radhika Nair",
      location: "Chennai",
      content:
        "The student app is a game-changer. I can see what my son is learning, track his assignments, and even help him with homework using the video lessons. Complete transparency!",
    },
    {
      name: "Mr. Karthik Reddy",
      location: "Hyderabad",
      content:
        "My daughter participated in a national science competition through EduTransform and won second place. The exposure and confidence she gained is priceless.",
    },
    {
      name: "Mrs. Lakshmi Iyer",
      location: "Bangalore",
      content:
        "The holistic approach is what attracted us. My son is not just academically strong but also participates in music, sports, and leadership programs. Truly well-rounded development.",
    },
  ];


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

   const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 5000); // auto-slide every 5 seconds
    return () => resetTimeout();
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      <Header onEnquireClick={scrollToForm} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-6">
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
      <section className="py-10 bg-background">
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
      <section className="py-10 bg-gradient-subtle">
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

      {/* Testimonials
      <section className="py-10 bg-background">
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
      </section> */}

      {/* Learning Features */}
      <section className="py-10 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How Your Child Learns Better
            </h2>
            <p className="text-xl text-muted-foreground">
              Multi-dimensional learning approach for deeper understanding
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Textbook-Based Learning",
                description:
                  "Strong foundation with NCERT-aligned textbooks and comprehensive study materials for conceptual clarity.",
                percentage: "40%",
              },
              {
                title: "Audio-Visual Content",
                description:
                  "Engaging videos, animations, and interactive content that make learning fun and memorable.",
                percentage: "30%",
              },
              {
                title: "Activity-Based Learning",
                description:
                  "Hands-on experiments, projects, and practical activities for experiential learning and skill development.",
                percentage: "30%",
              },
            ].map((method, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-glow transition-all">
                <div className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                  {method.percentage}
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-muted-foreground">{method.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student App Features */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Student Learning App Features
              </h2>
              <p className="text-xl text-muted-foreground">
                Empower your child's learning journey with our comprehensive mobile app
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Video Lessons",
                  description: "Access thousands of engaging video lessons anytime, anywhere",
                },
                {
                  title: "Practice Tests",
                  description: "Regular assessments to track progress and identify areas for improvement",
                },
                {
                  title: "Homework Help",
                  description: "Step-by-step solutions and explanations for all homework questions",
                },
                {
                  title: "Live Doubt Solving",
                  description: "Connect with teachers for real-time doubt clarification",
                },
                {
                  title: "Progress Reports",
                  description: "Detailed analytics and insights on your child's learning journey",
                },
                {
                  title: "Parent Dashboard",
                  description: "Monitor attendance, assignments, and academic performance",
                },
                {
                  title: "Learning Games",
                  description: "Gamified learning activities that make education fun",
                },
                {
                  title: "Offline Access",
                  description: "Download content for learning without internet connectivity",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="p-5 hover:shadow-soft transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h3 className="font-bold mb-2 text-primary">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Support */}
      <section className="py-10 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Your Child's Safety & Well-being is Our Priority
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Safe Learning Environment",
                  points: [
                    "CCTV monitored premises",
                    "Background-verified staff",
                    "Strict safety protocols",
                    "Emergency response systems",
                  ],
                },
                {
                  title: "Mental & Emotional Support",
                  points: [
                    "Professional counselors available",
                    "Anti-bullying programs",
                    "Stress management workshops",
                    "Parent counseling sessions",
                  ],
                },
                {
                  title: "Health & Hygiene",
                  points: [
                    "Regular health checkups",
                    "Nutritious meal programs",
                    "Clean and sanitized facilities",
                    "First aid trained staff",
                  ],
                },
                {
                  title: "Continuous Communication",
                  points: [
                    "Regular parent-teacher meetings",
                    "24/7 app notifications",
                    "Emergency contact system",
                    "Monthly progress reports",
                  ],
                },
              ].map((section, index) => (
                <Card key={index} className="p-6 hover:shadow-soft transition-all">
                  <h3 className="text-xl font-bold mb-4 text-primary">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Success Stories From Parents
          </h2>
          <p className="text-xl text-muted-foreground">
            Real experiences from families who chose EduTransform
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full px-4">
                <Card className="p-8 text-center shadow-md hover:shadow-lg transition-all duration-500 bg-card/95 backdrop-blur-sm">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic text-lg leading-relaxed">
                    “{testimonial.content}”
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-foreground text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Left Green Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 z-10 hover:scale-110 transition-transform"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-8 w-8 text-green-500 hover:text-green-600" />
          </button>

          {/* Right Green Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 z-10 hover:scale-110 transition-transform"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-8 w-8 text-green-500 hover:text-green-600" />
          </button>
        </div>
      </div>
    </section>


      <Footer />
    </div>
  );
};

export default Parents;
