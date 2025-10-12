import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import infrastructureImage from "@/assets/hero16.png";
import { Database, Monitor } from "lucide-react";
import React, { useState } from "react";
import { SchoolUpgradeEnquiryDialog } from "./SchoolUpgradeEnquiryDialog";
export const SchoolUpgradeSection = () => {
  const features = [
    {
      icon: Database,
      title: "Nucleus: Academic ERP",
      description:
        "Centralized platform to manage academics, attendance, grades, and communication with ease.",
    },
    {
      icon: Monitor,
      title: "Smart Learning Infrastructure",
      description:
        "Classrooms equipped with Smart TVs, Teacher Tablets & Activity Kits for interactive learning.",
    },
    {
      icon: Database,
      title: "Teacher Training & Support",
      description:
        "Professional development programs to help teachers leverage technology effectively.",
    },
    {
      icon: Monitor,
      title: "Parental Engagement Tools",
      description:
        "Real-time updates, progress reports, and notifications to keep parents informed.",
    },
    {
      icon: Database,
      title: "Enhanced Student Experience",
      description:
        "Engage students with multi-modal learning activities and modern classroom tools.",
    },
    {
      icon: Monitor,
      title: "Data-Driven Insights",
      description:
        "Track student performance and school operations with actionable analytics.",
    },
  ];
 const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <section className="py-16 bg-background sm:py-14">
      <div className="container mx-auto px-6 sm:px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-slide-up sm:mb-12">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight sm:text-3xl lg:text-4xl sm:mb-4">
            Transform Your School with Our{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Complete Upgrade Pack
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed sm:text-xl">
            Modernize your school with technology, streamlined management, and enhanced learning 
            experiences for students, teachers, and parents.
          </p>
        </div>

        {/* Features + Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 lg:order-1 space-y-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 animate-slide-up sm:p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-5 sm:gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0 sm:w-12 sm:h-12">
                    <feature.icon className="h-8 w-8 text-primary-foreground sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-3 sm:text-xl sm:mb-2">{feature.title}</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed sm:text-base">{feature.description}</p>
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

        {/* Call to Action */}
        
           <div className="text-center">
        <Button variant="hero" size="lg" onClick={() => setDialogOpen(true)}>
          I'm Interested
        </Button>
      </div>

      <SchoolUpgradeEnquiryDialog
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
        </div>
    
    </section>
  );
};
