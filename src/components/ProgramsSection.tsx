import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Laptop, Microscope, Music, Palette, Lightbulb } from "lucide-react";
import { useState } from "react";
import { EnquiryDialog } from "@/components/EnquiryDialog";

export const ProgramsSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const programs = [
    {
      icon: GraduationCap,
      title: "Academic Excellence Program",
      subjects: ["Mathematics", "Science", "English", "Social Studies"],
      description:
        "Comprehensive curriculum designed to build strong foundational knowledge with interactive learning methods.",
      highlights: ["NCERT Aligned", "Activity-Based Learning", "Regular Assessments"],
    },
    {
      icon: Laptop,
      title: "Digital Learning Lab",
      subjects: ["Coding", "Robotics", "AI Basics", "Digital Literacy"],
      description:
        "Prepare students for the future with hands-on technology education and computational thinking skills.",
      highlights: ["Project-Based Learning", "Industry Expert Sessions", "Certification Programs"],
    },
    {
      icon: Microscope,
      title: "STEM Innovation Hub",
      subjects: ["Science Experiments", "Math Labs", "Engineering Projects"],
      description:
        "Foster curiosity and innovation through practical experiments and real-world problem-solving.",
      highlights: ["Experiential Learning", "National Competitions", "Research Projects"],
    },
    {
      icon: Music,
      title: "Arts & Music Academy",
      subjects: ["Indian Classical", "Western Music", "Dance", "Drama"],
      description:
        "Nurture creativity and self-expression through comprehensive arts education programs.",
      highlights: ["Professional Training", "Annual Performances", "Talent Recognition"],
    },
    {
      icon: Palette,
      title: "Creative Arts Studio",
      subjects: ["Drawing", "Painting", "Craft", "Design Thinking"],
      description:
        "Develop artistic skills and creative thinking through structured art education.",
      highlights: ["Portfolio Development", "Art Exhibitions", "Competitions"],
    },
    {
      icon: Lightbulb,
      title: "Life Skills Program",
      subjects: ["Communication", "Leadership", "Critical Thinking", "Emotional Intelligence"],
      description:
        "Build essential life skills for personal growth and future career success.",
      highlights: ["Personality Development", "Public Speaking", "Team Building"],
    },
  ];

  return (
    <section className="py-10 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl sm:text-3xl font-bold mb-4">
            Our Comprehensive Learning Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Holistic education that goes beyond textbooks to develop well-rounded individuals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-soft transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-4">
                <program.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
              <p className="text-muted-foreground mb-4">{program.description}</p>
              
              <div className="mb-4">
                <p className="font-semibold text-sm text-primary mb-2">Includes:</p>
                <div className="flex flex-wrap gap-2">
                  {program.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-muted px-3 py-1 rounded-full"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="font-semibold text-sm mb-2">Key Highlights:</p>
                <ul className="space-y-1">
                  {program.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" onClick={() => setDialogOpen(true)}>
            Explore All Programs
          </Button>
        </div>
        
        <EnquiryDialog open={dialogOpen} onOpenChange={setDialogOpen} formType="general" />
      </div>
    </section>
  );
};
