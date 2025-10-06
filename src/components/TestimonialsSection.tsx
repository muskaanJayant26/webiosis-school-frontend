import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

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
  ];

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl sm:text-3xl lg:text-3xl font-bold mb-4">
            What School Leaders Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by educators across the nation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-secondary text-secondary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
