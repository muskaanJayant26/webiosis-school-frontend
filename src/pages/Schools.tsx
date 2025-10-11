import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import teacherImage from "@/assets/hero20.png";
import infrastructureImage from "@/assets/hero18.png";
import { TrendingUp, Users, Award, Database, Zap, Building2, CheckCircle2 } from "lucide-react";

const Schools = () => {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Enrollment",
      description:
        "Schools partnering with us see an average 30% increase in student enrollment within the first year.",
    },
    {
      icon: Users,
      title: "Higher Retention",
      description:
        "Improved student satisfaction leads to better retention rates and positive word-of-mouth marketing.",
    },
    {
      icon: Award,
      title: "Better Results",
      description:
        "Our curriculum and teaching methodology consistently deliver superior academic outcomes.",
    },
    {
      icon: Database,
      title: "Complete ERP System",
      description:
        "Manage admissions, attendance, fees, and academics all from one comprehensive platform.",
    },
    {
      icon: Zap,
      title: "Modern Infrastructure",
      description:
        "Smart TVs, tablets, and digital learning tools that make your school stand out.",
    },
    {
      icon: Building2,
      title: "Brand Recognition",
      description:
        "Association with EduTransform enhances your school's reputation and market position.",
    },
  ];

  const packages = [
    {
      title: "Complete Curriculum",
      features: [
        "Subject-specific programs for all grades",
        "Activity-based learning materials",
        "Audio-visual content library",
        "Regular curriculum updates",
        "Assessment and evaluation tools",
      ],
    },
    {
      title: "Teacher Empowerment",
      features: [
        "Regular training workshops",
        "Teacher tablets with teaching app",
        "24/7 online academy access",
        "Certification programs",
        "Ongoing support from experts",
      ],
    },
    {
      title: "School Infrastructure",
      features: [
        "Smart TVs for classrooms",
        "School activity kits",
        "Academic ERP system",
        "Digital library access",
        "Learning management system",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header onEnquireClick={scrollToForm} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your School Into a Leading Educational Institution
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-primary-foreground/90">
              Join 8,500+ schools that have revolutionized their education delivery with EduTransform
            </p>
            <Button variant="secondary" size="lg" onClick={scrollToForm}>
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
  <section className="py-10 bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Why 8,500+ Schools Trust{" "}
        <span className="bg-gradient-hero bg-clip-text text-transparent">
          EduTransform
        </span>
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <Card
          key={index}
          className="p-8 h-full flex flex-col items-start justify-start text-center hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 rounded-2xl animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="w-14 h-14 rounded-lg bg-gradient-hero flex items-center justify-center mb-5 mx-auto">
            <benefit.icon className="h-7 w-7 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-center w-full">
            {benefit.title}
          </h3>
          <p className="text-lg text-muted-foreground text-center w-full leading-relaxed">
            {benefit.description}
          </p>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* What You Get */}
    <section className="py-10 bg-gradient-subtle">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Complete School Transformation Package
      </h2>
      <p className="text-xl text-muted-foreground">
        Everything your school needs to deliver world-class education
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {packages.map((pkg, index) => (
        <Card
          key={index}
          className="p-8 h-full flex flex-col justify-start hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03] transform transition-all duration-300 rounded-2xl animate-slide-up bg-white"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <h3 className="text-2xl font-bold mb-6 text-primary text-center">
            {pkg.title}
          </h3>
          <ul className="space-y-4 text-lg text-muted-foreground">
            {pkg.features.map((feature, fIndex) => (
              <li key={fIndex} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Images Section */}
   <section className="py-10 bg-background">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Teacher Empowerment Section */}
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
      {/* Text Content */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Empower Your Teachers
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Our comprehensive teacher training program ensures your educators are equipped with the latest pedagogical methods and technology tools to deliver exceptional learning experiences.
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Regular in-person training workshops",
            "24/7 online academy for continuous learning",
            "Dedicated tablets with teaching resources",
            "Certification programs for career growth",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground">
          Through hands-on learning and expert mentorship, we help teachers
          evolve into digital-age educators who inspire creativity and curiosity
          in every student. Our platform continuously updates with the latest
          teaching methodologies and AI-powered learning strategies.
        </p>
      </div>

      {/* Image + Extra Content */}
      <div className="animate-fade-in text-center">
        <img
          src={teacherImage}
          alt="Teacher training"
          className="rounded-2xl shadow-glow w-full h-auto mb-4"
        />
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Empower educators to thrive in a digital classroom environment. Each
          training session combines innovation, collaboration, and continuous
          improvement to elevate teaching standards across your institution.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <div className="bg-primary/10 px-4 py-2 rounded-xl text-sm font-medium">
            Interactive Workshops
          </div>
          <div className="bg-primary/10 px-4 py-2 rounded-xl text-sm font-medium">
            AI-Assisted Learning
          </div>
        </div>
      </div>
    </div>

    {/* Infrastructure Upgrade Section */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Image + Description */}
      <div className="order-2 lg:order-1 animate-fade-in text-center">
        <img
          src={infrastructureImage}
          alt="Modern infrastructure"
          className="rounded-2xl shadow-glow w-full h-auto mb-4"
        />
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Redefine your school’s infrastructure with cutting-edge digital tools,
          fostering a smarter and more connected learning ecosystem.
        </p>
        <div className="mt-4 flex justify-center gap-4 flex-wrap">
          <div className="bg-primary/10 px-4 py-2 rounded-xl text-sm font-medium">
            Smart Classrooms
          </div>
          <div className="bg-primary/10 px-4 py-2 rounded-xl text-sm font-medium">
            Seamless ERP Integration
          </div>
          <div className="bg-primary/10 px-4 py-2 rounded-xl text-sm font-medium">
            Digital Transformation
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="order-1 lg:order-2">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Upgrade Your Infrastructure
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Transform your classrooms into modern learning spaces with smart TVs,
          digital tools, and comprehensive ERP systems that streamline all
          school operations.
        </p>
        <ul className="space-y-3 mb-8">
          {[
            "Smart TVs for every classroom",
            "Complete academic ERP system",
            "Digital learning management",
            "Activity kits and learning materials",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground">
          Every upgrade is designed to maximize engagement, automate workflows,
          and enhance learning outcomes. With advanced monitoring tools and
          analytics, you gain full control over academic and administrative
          performance.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-10 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join thousands of schools that have already revolutionized their education delivery. Schedule a demo today!
          </p>
          <Button variant="secondary" size="lg" onClick={scrollToForm}>
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Proven Results Across India
            </h2>
            <p className="text-xl text-muted-foreground">
              Real data from our partner schools showing measurable improvements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            {[
              { metric: "30%", label: "Increase in Student Enrollment", icon: TrendingUp },
              { metric: "85%", label: "Parent Satisfaction Rate", icon: Users },
              { metric: "40%", label: "Improvement in Academic Results", icon: Award },
              { metric: "95%", label: "Teacher Retention Rate", icon: Users },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-glow transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-subtle">
              <h3 className="text-2xl font-bold mb-6 text-center">
                What School Principals Say
              </h3>
              <div className="space-y-6">
                {[
                  {
                    quote:
                      "Within one year of partnering with EduTransform, we saw a 45% increase in admissions. Parents specifically choose us because of the quality curriculum and technology integration.",
                    principal: "Dr. Ramesh Gupta",
                    school: "Green Valley School, Mumbai",
                  },
                  {
                    quote:
                      "The ERP system has streamlined all our operations. What used to take our staff days now takes minutes. The efficiency gains are remarkable.",
                    principal: "Mrs. Sunita Malhotra",
                    school: "Sunrise Academy, Delhi",
                  },
                  {
                    quote:
                      "The teacher training program transformed our faculty. Teachers are more confident, students are more engaged, and our academic results have never been better.",
                    principal: "Mr. Anil Reddy",
                    school: "Krishna Public School, Hyderabad",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-primary pl-6 py-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <p className="text-muted-foreground italic mb-3">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-bold">{testimonial.principal}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
    <section className="py-10 bg-gradient-subtle">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Simple Implementation Process
      </h2>
      <p className="text-xl text-muted-foreground">
        From partnership to transformation in just 4-6 weeks
      </p>
    </div>

    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            step: "1",
            title: "Discovery Call",
            description:
              "Understand your school's needs and customize the solution",
            duration: "Week 1",
          },
          {
            step: "2",
            title: "Infrastructure Setup",
            description:
              "Install smart TVs, tablets, and configure ERP systems",
            duration: "Week 2-3",
          },
          {
            step: "3",
            title: "Teacher Training",
            description:
              "Comprehensive training workshops for all teachers",
            duration: "Week 3-4",
          },
          {
            step: "4",
            title: "Go Live",
            description: "Launch with full support and ongoing assistance",
            duration: "Week 5-6",
          },
        ].map((phase, index) => (
          <Card
            key={index}
            className="p-8 h-full flex flex-col justify-start relative rounded-2xl bg-white 
                       hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl transform transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute -top-5 left-6">
              <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-glow">
                {phase.step}
              </div>
            </div>

            <div className="mt-10">
              <p className="text-sm text-primary font-semibold mb-3">
                {phase.duration}
              </p>
              <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {phase.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Case Studies */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Real Transformation Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              How schools across India achieved remarkable success
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                school: "St. Mary's School, Bangalore",
                challenge: "Declining enrollment and outdated teaching methods",
                solution: "Complete curriculum upgrade with teacher training and smart classrooms",
                results: [
                  "50% increase in admissions",
                  "Top performer in district exams",
                  "100% teacher retention",
                ],
              },
              {
                school: "Vidya Mandir, Pune",
                challenge: "Poor parent engagement and manual administrative processes",
                solution: "Implemented ERP system and student app for parent connectivity",
                results: [
                  "90% parent app adoption",
                  "60% reduction in admin time",
                  "Highest parent satisfaction scores",
                ],
              },
              {
                school: "Excel Academy, Jaipur",
                challenge: "Low student confidence and limited extracurricular activities",
                solution: "Holistic curriculum with STEM labs, arts programs, and life skills",
                results: [
                  "Students won 15 national competitions",
                  "40% improvement in test scores",
                  "Featured in local media as model school",
                ],
              },
            ].map((study, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-glow transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{study.school}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Challenge:</p>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Solution:</p>
                    <p className="text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Results:</p>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-10 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join thousands of schools that have already revolutionized their education delivery. Schedule a demo today!
          </p>
          <Button variant="secondary" size="lg" onClick={scrollToForm}>
            Get Started Now
          </Button>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Schools;
