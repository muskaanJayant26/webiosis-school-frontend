import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
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
      description: "Join educators from across the country to discuss innovative teaching methodologies and the future of education.",
      attendees: "500+",
    },
    {
      title: "Teacher Training Workshop",
      date: "April 5-6, 2025",
      location: "Delhi NCR",
      type: "Workshop",
      description: "Hands-on training for implementing NEP 2020 guidelines in your classroom.",
      attendees: "100+",
    },
    {
      title: "Student Leadership Program",
      date: "May 10, 2025",
      location: "Bangalore",
      type: "Program",
      description: "Empowering students with leadership skills and confidence building activities.",
      attendees: "200+",
    },
  ];

  const programs = [
    {
      title: "EduTransform Teacher Certification",
      duration: "6 Months",
      mode: "Hybrid",
      description: "Comprehensive certification program for teachers to master modern teaching techniques and technology integration.",
    },
    {
      title: "School Leadership Development",
      duration: "3 Months",
      mode: "Online",
      description: "Executive program for principals and administrators to lead educational transformation.",
    },
    {
      title: "Student Excellence Program",
      duration: "1 Year",
      mode: "On-Campus",
      description: "After-school program focused on holistic development including academics, sports, and arts.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header onEnquireClick={() => setEnquiryOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 sm:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Events & Programs
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
            Empowering educators and students through transformative events and comprehensive programs
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-6 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-foreground">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow bg-card">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">{event.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span className="text-lg">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-5 h-5" />
                    <span className="text-lg">{event.attendees} Expected</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-6">{event.description}</p>
                <Button 
                  variant="default" 
                  className="w-full text-lg py-6"
                  onClick={() => setEnquiryOpen(true)}
                >
                  Register Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-6 sm:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-foreground">
            Our Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow bg-card">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">{program.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg">Duration: {program.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">Mode: {program.mode}</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-6">{program.description}</p>
                <Button 
                  variant="default" 
                  className="w-full text-lg py-6"
                  onClick={() => setEnquiryOpen(true)}
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} formType="general" />
    </div>
  );
};

export default EventsPrograms;
