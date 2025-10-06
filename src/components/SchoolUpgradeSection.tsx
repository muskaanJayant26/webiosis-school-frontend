import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import infrastructureImage from "@/assets/school-infrastructure.jpg";
import { Database, Monitor } from "lucide-react";

export const SchoolUpgradeSection = () => {
  const features = [
    {
      icon: Database,
      title: "Nucleus: Academic ERP",
      description:
        "Real-Time Academic Management of your school at your fingertips",
    },
    {
      icon: Monitor,
      title: "Learning Infrastructure",
      description:
        "Smart TVs for all classrooms, Teacher Tablets & School Activity Kits to support the multi-modal learning environment",
    },
  ];

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl sm:text-3xl lg:text-3xl font-bold mb-4">
            We support you through a{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              School Upgrade Pack
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 lg:order-1 space-y-6">
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
          <div className="order-1 lg:order-2 animate-fade-in">
            <img
              src={infrastructureImage}
              alt="School Infrastructure"
              className="rounded-2xl shadow-glow w-full h-auto"
            />
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
