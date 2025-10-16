import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { EnquiryDialog } from "@/components/EnquiryDialog";

const EventsPrograms = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const upcomingEvents = [
    {
      title: "Annual Education Summit 2025",
      date: "March 15-17, 2025",
      location: "Mumbai, India",
      type: "Conference",
      description:
        "Join educators from across the country to discuss innovative teaching methodologies and the future of education.",
      attendees: "500+",
    },
    {
      title: "Teacher Training Workshop",
      date: "April 5-6, 2025",
      location: "Delhi NCR",
      type: "Workshop",
      description:
        "Hands-on training for implementing NEP 2020 guidelines in your classroom.",
      attendees: "100+",
    },
    {
      title: "Student Leadership Program",
      date: "May 10, 2025",
      location: "Bangalore",
      type: "Program",
      description:
        "Empowering students with leadership skills and confidence building activities.",
      attendees: "200+",
    },
  ];

  const programs = [
    {
      title: "EduTransform Teacher Certification",
      duration: "6 Months",
      mode: "Hybrid",
      description:
        "Comprehensive certification program for teachers to master modern teaching techniques and technology integration.",
    },
    {
      title: "School Leadership Development",
      duration: "3 Months",
      mode: "Online",
      description:
        "Executive program for principals and administrators to lead educational transformation.",
    },
    {
      title: "Student Excellence Program",
      duration: "1 Year",
      mode: "On-Campus",
      description:
        "After-school program focused on holistic development including academics, sports, and arts.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header onEnquireClick={() => setEnquiryOpen(true)} />

      {/* Breadcrumbs
      <nav className="pt-28 pb-4 px-6 text-sm text-muted-foreground">
        <div className="container mx-auto">
          <span className="hover:text-primary cursor-pointer transition">Home</span>
          <span className="mx-2">›</span>
          <span className="text-foreground font-semibold">Events & Programs</span>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto">
           <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-center">
            Events & Programs
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-primary-foreground/90">
            Empowering educators and students through transformative experiences
          </p>
          <div className="flex justify-center items-center gap-3 text-primary-foreground/90 font-semibold">
            <Star className="w-5 h-5" />
            <span>Inspiring growth through innovation and collaboration</span>
            <Star className="w-5 h-5" />
          </div>
          </div>
        </div>
      </section>

     <section className="py-16 px-6 sm:px-8">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
        Upcoming Events
      </h2>
      <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
        Stay ahead of the curve—join our upcoming conferences, workshops, and leadership events designed for teachers, students, and education leaders.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {upcomingEvents.map((event, index) => (
        <Card
          key={index}
          className="p-8 flex flex-col h-full hover:shadow-2xl transition-all border border-border/40"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              {event.type}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-foreground">{event.title}</h3>
          <h4 className="text-muted-foreground text-base mb-2 font-medium">
            Event Details
          </h4>
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Users className="w-5 h-5" />
              <span>{event.attendees} Expected</span>
            </div>
          </div>

          <h4 className="text-base font-semibold text-foreground mb-2">
            About this Event
          </h4>
          <p className="text-muted-foreground flex-grow">{event.description}</p>

          <Button
            variant="default"
            className="w-full text-lg py-6 mt-auto"
            onClick={() => setEnquiryOpen(true)}
          >
            Register Now
          </Button>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* Programs Section */}
<section className="py-16 px-6 sm:px-8 bg-muted/30">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
        Our Programs
      </h2>
      <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
        Explore professional certifications and learning journeys crafted to uplift teachers, leaders, and learners across the education spectrum.
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {programs.map((program, index) => (
        <Card
          key={index}
          className="p-8 flex flex-col h-full hover:shadow-2xl transition-all border border-border/40"
        >
          <h3 className="text-2xl font-bold mb-3 text-foreground">{program.title}</h3>
          <h4 className="text-muted-foreground text-base mb-2 font-medium">
            Program Overview
          </h4>
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span>Duration: {program.duration}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>Mode: {program.mode}</span>
            </div>
          </div>

          <p className="text-muted-foreground flex-grow">{program.description}</p>

          <Button
            variant="default"
            className="w-full text-lg py-6 mt-auto"
            onClick={() => setEnquiryOpen(true)}
          >
            Learn More
          </Button>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Why Attend / Learn Section */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Why Attend Our Events & Programs?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every session is designed to inspire innovation, foster collaboration, and drive impact in education.  
            Join us to connect with thought leaders, experience hands-on learning, and become part of a growing educational community.
          </p>
          <Button
            variant="default"
            size="lg"
            onClick={() => setEnquiryOpen(true)}
            className="text-lg px-10 py-6"
          >
            Enquire Now
          </Button>
        </div>
      </section>

      <Footer />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} formType="general" />
    </div>
  );
};

export default EventsPrograms;
