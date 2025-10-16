import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, BookOpen, GraduationCap, Users, Target } from "lucide-react";
import { useState } from "react";
import { EnquiryDialog } from "@/components/EnquiryDialog";

const NEP2020 = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const keyPillars = [
    {
      icon: BookOpen,
      title: "Holistic Education",
      description: "Focus on cognitive, social, emotional, and physical development of students through an integrated curriculum.",
    },
    {
      icon: GraduationCap,
      title: "Flexible Learning",
      description: "Multiple entry and exit points with credit transfer mechanisms to ensure no learner is left behind.",
    },
    {
      icon: Users,
      title: "Teacher Training",
      description: "Continuous professional development for teachers with modern pedagogical approaches and technology integration.",
    },
    {
      icon: Target,
      title: "Assessment Reform",
      description: "Shift from rote learning to competency-based evaluation focusing on critical thinking and problem-solving.",
    },
  ];

  const implementationSteps = [
    "Curriculum restructuring aligned with NEP 2020 guidelines",
    "Teacher training and capacity building programs",
    "Infrastructure development for technology-enabled learning",
    "Assessment framework redesign focusing on competencies",
    "Parent and community engagement initiatives",
    "Regular monitoring and quality assurance mechanisms",
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header onEnquireClick={() => setEnquiryOpen(true)} />
      
      {/* Hero Section */}
     <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto ">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            National Education Policy 2020
          </h1>
           <p className="text-xl sm:text-2xl mb-8 text-primary-foreground/90">
            Transforming India's education system for the 21st century with EduTransform's comprehensive NEP implementation framework
          </p>
        </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-10 px-6 sm:px-8">
        <div className="container mx-auto">
          <Card className="p-8 sm:p-12 bg-card">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">What is NEP 2020?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6">
              The National Education Policy 2020 is a comprehensive framework for transforming India's education system. 
              It aims to make education more holistic, flexible, multidisciplinary, and aligned with the needs of the 21st century.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground">
              EduTransform helps schools seamlessly implement NEP 2020 guidelines through our proven methodologies, 
              teacher training programs, and technology-enabled learning solutions.
            </p>
          </Card>
        </div>
      </section>

      {/* Key Pillars */}
      <section className="py-10 px-6 sm:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-foreground">
            Key Pillars of NEP 2020
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyPillars.map((pillar, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow bg-card">
                <pillar.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">{pillar.title}</h3>
                <p className="text-lg text-muted-foreground">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-10 px-6 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-foreground">
            Our NEP Implementation Approach
          </h2>
          <Card className="p-8 sm:p-12 bg-card">
            <div className="grid gap-6">
              {implementationSteps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-lg sm:text-xl text-foreground">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-6 sm:px-8 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your School with NEP 2020?
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Get expert guidance and support for implementing NEP 2020 in your school
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-xl px-12 py-8 font-bold"
            onClick={() => setEnquiryOpen(true)}
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>

      <Footer />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} formType="school" />
    </div>
  );
};

export default NEP2020;
