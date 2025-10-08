import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "For Schools",
      links: [
        "Why EduTransform",
        "Curriculum",
        "Teacher Training",
        "School ERP",
        "Pricing",
      ],
    },
    {
      title: "For Parents",
      links: [
        "Student App",
        "Learning Programs",
        "Success Stories",
        "FAQs",
      ],
    },
    {
      title: "For Teachers",
      links: [
        "Teacher App",
        "Training Academy",
        "Certifications",
        "Resources",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Contact",
        "Privacy Policy",
        "Terms of Service",
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo Section */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">EduTransform</h3>
            <p className="text-primary-foreground/80 mb-4">
              Transforming India, One School at a Time with Cutting Edge Digital
              Learning Solutions
            </p>
            <div className="flex gap-4">
  {socialLinks.map((social, index) => (
    <div
      className="rounded-full flex items-center justify-center 
                 transition-transform duration-300 hover:scale-110"
    >
      <social.icon className="h-5 w-5" />
    </div>
  ))}
</div>

          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-white hover:text-white transition-all inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-center"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-4 text-center">
          <p className="text-primary-foreground/80">
            © 2025 EduTransform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
