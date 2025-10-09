import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import teacherImage from "@/assets/hero15.png";
import { ChevronLeft, ChevronRight, Users, Award, Smartphone, Package, Zap } from "lucide-react";

export const TeacherProgramSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: Users,
      title: "In-person Teacher Training",
      description:
        "Our Academic Experts will conduct In-person workshops to train your teachers & solve any queries they may have in addition to personalized feedback sessions.",
    },
    {
      icon: Award,
      title: "EduTransform Academy",
      description:
        "24*7 Online Learning Academy for teachers to complete courses, get certified & upskill themselves",
    },
    {
      icon: Zap,
      title: "AI Assessment Builder - Jasper",
      description:
        "End-to-end integrated assessment system with remedials that lets your teachers create customized assessments with topic & rigour of their choice for optimal student learning",
    },
    {
      icon: Smartphone,
      title: "EduTransform Teacher App",
      description:
        "Each of your teachers gets a dedicated tablet with a Teacher App which comes loaded with everything that they need to teach effectively.",
    },
    {
      icon: Package,
      title: "School Activity Kit",
      description:
        "Each school gets a grade-specific kit with 100+ Teaching Learning Materials used to make teaching engaging.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="py-10 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-4">
            We empower your teachers with a{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              SUPER TEACHER PROGRAM
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-fade-in">
            <img
              src={teacherImage}
              alt="Super Teacher Program"
              className="rounded-2xl shadow-glow w-full h-auto"
            />
          </div>

          <div className="relative">
            {/* Desktop View - All Cards */}
            <div className="hidden md:grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Mobile View - Carousel */}
            <div className="md:hidden">
              <Card className="p-6 shadow-soft min-h-[280px]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    {(() => {
                      const IconComponent = features[currentSlide].icon;
                      return <IconComponent className="h-6 w-6 text-accent-foreground" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      {features[currentSlide].title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {features[currentSlide].description}
                    </p>
                  </div>
                </div>
              </Card>

              <div className="flex items-center justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex gap-2">
              {features.map((_, index) => {
                const isActive = index === currentSlide;
                return (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      isActive ? "bg-primary w-8" : "bg-muted"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                );
              })}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            I'm Interested
          </Button>
        </div>
      </div>
    </section>
  );
};
