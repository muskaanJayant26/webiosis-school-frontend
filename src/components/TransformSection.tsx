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
    <section className="py-10 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
           Revolutionizing how schools 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> educate, connect, and inspire!
            </span>
         
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-6">
                <stakeholder.icon className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-6">{stakeholder.title}</h3>
              <ul className="space-y-3 text-left">
                {stakeholder.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">•</span>
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
