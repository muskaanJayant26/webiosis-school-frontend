import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import studentsImage from "@/assets/hero14.avif";
import { BookOpen, Home, Trophy } from "lucide-react";

export const ConfidenceSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Unmatched Curriculum",
      description:
        "International standard curriculum with specialized subject-specific programs that enable students to understand concepts better. Students learn not just from books, but through a combination of textbook-based learning, audio-visual-based learning & activity-based learning.",
    },
    {
      icon: Home,
      title: "At-Home Learning",
      description:
        "Learning of students should never stop! This is why we provide students access to the EduTransform Student App which connects at-home learning with in-school learning.",
    },
    {
      icon: Trophy,
      title: "National Exposure",
      description:
        "Students get an opportunity to showcase their skills on national platforms. This allows them to interact with students from other schools all across the country & network with them.",
    },
  ];

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
  <h2 className="text-3xl lg:text-4xl sm:text-3xl font-bold mb-4">
    We ensure every student in your school becomes
    <br />
    <span className="bg-gradient-hero bg-clip-text text-transparent">
      confident to succeed in life
    </span>
  </h2>
</div>


        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 lg:order-1">
            <img
              src={studentsImage}
              alt="Confident students"
              className="rounded-2xl shadow-glow w-full h-[500px] animate-fade-in"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
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

        <div className="text-center">
          <Button variant="hero" size="lg">
            I'm Interested
          </Button>
        </div>
      </div>
    </section>
  );
};
