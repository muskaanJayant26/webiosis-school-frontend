import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Laptop, Microscope, Music, Palette, Lightbulb } from "lucide-react";
import { useState } from "react";
import { EnquiryDialog } from "@/components/EnquiryDialog";
import { ProgramsEnquiryDialog } from "./ProgramsEnquiryDialogs";

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
    <section className="py-16 bg-gradient-subtle sm:py-10">
      <div className="container mx-auto px-6 sm:px-4 lg:px-8">
        <div className="text-center mb-16 sm:mb-12">
          <h2 className="text-5xl font-bold mb-6 sm:text-3xl lg:text-4xl sm:mb-4">
            Our Comprehensive Learning Programs
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed sm:text-xl">
            Holistic education that goes beyond textbooks to develop well-rounded individuals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-soft transition-all duration-300 animate-fade-in sm:p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 sm:w-16 sm:h-16 sm:mb-4">
                <program.icon className="h-10 w-10 text-accent-foreground sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4 sm:text-2xl sm:mb-3">{program.title}</h3>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed sm:text-base sm:mb-4">{program.description}</p>
              
              <div className="mb-6 sm:mb-4">
                <p className="font-semibold text-lg text-primary mb-3 sm:text-sm sm:mb-2">Includes:</p>
                <div className="flex flex-wrap gap-2">
                  {program.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="text-base bg-muted px-4 py-2 rounded-full sm:text-xs sm:px-3 sm:py-1"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6 sm:pt-4">
                <p className="font-semibold text-lg mb-3 sm:text-sm sm:mb-2">Key Highlights:</p>
                <ul className="space-y-2 sm:space-y-1">
                  {program.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-lg text-muted-foreground flex items-center gap-3 sm:text-sm sm:gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 sm:w-1.5 sm:h-1.5"></span>
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
        {
          dialogOpen && <ProgramsEnquiryDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)}  programs={programs}/>
        }
      
      </div>
    </section>
  );
};
