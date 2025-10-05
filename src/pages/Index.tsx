import { useRef } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ConfidenceSection } from "@/components/ConfidenceSection";
import { TeacherProgramSection } from "@/components/TeacherProgramSection";
import { SchoolUpgradeSection } from "@/components/SchoolUpgradeSection";
import { TransformSection } from "@/components/TransformSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header onEnquireClick={scrollToForm} />
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <StatsSection />
      <WhyChooseSection />
      <ConfidenceSection />
      <ProgramsSection />
      <TeacherProgramSection />
      <SchoolUpgradeSection />
      <TransformSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
