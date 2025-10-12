import { Card } from "@/components/ui/card";
import { Users, GraduationCap, Building2 } from "lucide-react";

export const TransformSection = () => {
  const stakeholders = [
    {
      icon: Users,
      title: "Students",
      features: [
        "Engaging, Skill-Based Curriculum",
        "Personalized At-Home Learning Support",
        "Gamified Assessments & AI Progress Tracker",
        "National-Level Competitions & Events",
        "Confidence & Leadership Development Programs",
      ],
    },
    {
      icon: GraduationCap,
      title: "Teachers",
      features: [
        "EduTransform Teacher App for Smart Planning",
        "Comprehensive Activity & Resource Kits",
        "In-Person & Online Training Programs",
        "EduTransform Academy for Continuous Growth",
        "AI Tool 'Jasper' for Instant Assessment Creation",
      ],
    },
    {
      icon: Building2,
      title: "Schools",
      features: [
        "Nucleus: Smart Academic ERP for Daily Operations",
        "Digital Classrooms & Modern Learning Infrastructure",
        "School Branding & Parent Engagement Support",
        "Data-Driven Insights for Smarter Decision-Making",
        "Seamless Integration with EduTransform Ecosystem",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-subtle sm:py-10">
      <div className="container mx-auto px-6 sm:px-4 lg:px-8">
        <div className="text-center mb-16 animate-slide-up max-w-5xl mx-auto sm:mb-12">
          <h2 className="text-5xl font-bold mb-8 leading-tight sm:text-3xl lg:text-4xl sm:mb-6">
           Revolutionizing how schools 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> educate, connect, and inspire!
            </span>
         
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-6">
          {stakeholders.map((stakeholder, index) => (
            <Card
              key={index}
              className="p-10 text-center hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 animate-slide-up sm:p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-8 sm:w-20 sm:h-20 sm:mb-6">
                <stakeholder.icon className="h-12 w-12 text-primary-foreground sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-3xl font-bold mb-8 sm:text-2xl sm:mb-6">{stakeholder.title}</h3>
              <ul className="space-y-4 text-left sm:space-y-3">
                {stakeholder.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-3 text-xl text-muted-foreground sm:text-base sm:gap-2"
                  >
                    <span className="text-primary mt-1 text-xl sm:text-base">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
