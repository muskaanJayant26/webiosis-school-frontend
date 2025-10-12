import { Card } from "@/components/ui/card";
import { BookOpen, Trophy, Users, Zap, Award, TrendingUp } from "lucide-react";

export const WhyChooseSection = () => {
  const reasons = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description:
        "NEP 2020 aligned curriculum with activity-based, textbook-based, and audio-visual learning methods for holistic development.",
    },
    {
      icon: Trophy,
      title: "Proven Track Record",
      description:
        "8,500+ partner schools and 3.6M+ students have experienced dramatic improvements in learning outcomes and confidence.",
    },
    {
      icon: Users,
      title: "Expert Teacher Training",
      description:
        "60,000+ teachers trained through in-person workshops and our 24/7 online academy with continuous professional development.",
    },
    {
      icon: Zap,
      title: "Modern Technology",
      description:
        "Smart TVs, tablets, AI-powered assessment tools, and comprehensive ERP systems for seamless school management.",
    },
    {
      icon: Award,
      title: "National Recognition",
      description:
        "Award-winning programs recognized by education authorities and featured in leading national and international publications.",
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description:
        "Schools see 30% increase in enrollment, improved retention rates, and significant improvements in student academic performance.",
    },
  ];

  return (
    <section className="py-16 bg-background sm:py-10">
      <div className="container mx-auto px-6 sm:px-4 lg:px-8">
        <div className="text-center mb-16 sm:mb-12">
          <h2 className="text-5xl font-bold mb-6 sm:text-3xl lg:text-4xl sm:mb-4">
            Why Choose{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              EduTransform
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed sm:text-xl">
            India's most trusted education transformation partner with a proven track record of excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-glow transition-all duration-300 animate-slide-up sm:p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 sm:w-14 sm:h-14 sm:mb-4">
                <reason.icon className="h-10 w-10 text-primary-foreground sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-3xl font-bold mb-4 sm:text-xl sm:mb-3">{reason.title}</h3>
              <p className="text-xl text-muted-foreground leading-relaxed sm:text-base">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
