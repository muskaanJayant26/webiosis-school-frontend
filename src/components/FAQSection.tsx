import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What makes EduTransform different from other education providers?",
      answer:
        "EduTransform offers a complete transformation package including curriculum, teacher training, technology infrastructure, and ongoing support. We don't just provide materials - we partner with schools for their complete educational journey with proven results across 8,500+ schools.",
    },
    {
      question: "How does the teacher training program work?",
      answer:
        "Our teacher training combines in-person workshops with 24/7 online academy access. Teachers receive dedicated tablets with teaching resources, regular upskilling sessions, and certification programs. We've trained over 60,000 teachers who report significant improvements in teaching effectiveness.",
    },
    {
      question: "What technology infrastructure do schools receive?",
      answer:
        "Schools get smart TVs for classrooms, teacher tablets, student learning app access, comprehensive ERP system for management, digital library, assessment tools, and ongoing technical support. All hardware and software are included in the partnership package.",
    },
    {
      question: "How quickly can we implement EduTransform in our school?",
      answer:
        "Implementation typically takes 4-6 weeks. This includes infrastructure setup, teacher training, curriculum integration, and system configuration. We provide dedicated support throughout the onboarding process to ensure smooth transition.",
    },
    {
      question: "What kind of results can we expect?",
      answer:
        "Partner schools typically see 30% increase in enrollment within the first year, improved student retention rates, better academic performance, enhanced parent satisfaction, and significant improvements in overall school reputation. We provide regular performance reports.",
    },
    {
      question: "Is the curriculum aligned with NCERT and state boards?",
      answer:
        "Yes, our curriculum is fully aligned with NCERT guidelines and NEP 2020 recommendations. We also customize content to meet specific state board requirements while maintaining national standards of excellence.",
    },
    {
      question: "What support do parents get?",
      answer:
        "Parents get access to our student learning app to track progress, view learning materials, communicate with teachers, and receive regular updates. We also conduct parent orientation sessions and provide resources for home learning support.",
    },
    {
      question: "What is the investment required?",
      answer:
        "Investment varies based on school size and requirements. We offer flexible payment plans and packages tailored to different school needs. Schedule a demo to discuss specific pricing for your school's requirements.",
    },
  ];

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about partnering with EduTransform
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 hover:shadow-soft transition-all"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
