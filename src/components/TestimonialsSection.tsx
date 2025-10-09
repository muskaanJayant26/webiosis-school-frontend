"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Principal, Delhi Public School",
      content:
        "EduTransform has completely revolutionized how we deliver education. Our students are more engaged, our teachers are more confident, and parents are extremely satisfied with the learning outcomes.",
      rating: 5,
    },
    {
      name: "Mrs. Priya Sharma",
      role: "School Owner, Bright Future Academy",
      content:
        "The comprehensive support system and innovative curriculum have helped us attract more students. The ROI has been exceptional, and our school's reputation has significantly improved.",
      rating: 5,
    },
    {
      name: "Mr. Anil Verma",
      role: "Director, Modern Education Centre",
      content:
        "What impressed me most is the continuous support and training provided to our teachers. The EduTransform team is always available to help, making the transition smooth and effective.",
      rating: 5,
    },
    {
      name: "Ms. Neha Saini",
      role: "Vice Principal, Greenfield International",
      content:
        "EduTransform has brought innovation to our classrooms. Students are excited to learn, and our teachers love the AI-powered tools that save their time.",
      rating: 5,
    },
    {
      name: "Mr. Rohit Bansal",
      role: "Trustee, Sunrise Global School",
      content:
        "Our school’s performance and parent satisfaction have improved drastically. EduTransform truly delivers what it promises.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
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
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-4">
            What School Leaders Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by educators across the nation
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
                    {[...Array(testimonial.rating)].map((_, i) => (
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
                      {testimonial.role}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-md transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-md transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
