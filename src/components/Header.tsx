import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, GraduationCap, FileText, Newspaper } from "lucide-react";
import { EnquireNowForm } from "./EnquireNowForm";

export const Header = ({ onEnquireClick }: { onEnquireClick: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary hidden sm:block">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-end h-12 sm:h-14 gap-6 sm:gap-10">
            <nav className="flex items-center gap-6 sm:gap-10">
              {["PARENTS", "SCHOOLS", "TEACHERS", "ABOUT US"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "")}`}
                  className="text-sm sm:text-base font-semibold text-primary-foreground hover:opacity-80 transition-opacity"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-soft">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <a
              href="/"
              className="text-3xl sm:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent tracking-tight"
            >
              EduTransform
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
              <a
                href="/events"
                className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors"
              >
                <Calendar className="w-6 h-6" />
                <span className="text-sm font-medium">Events & Programs</span>
              </a>
              <a
                href="/nep"
                className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors"
              >
                <GraduationCap className="w-6 h-6" />
                <span className="text-sm font-medium">NEP 2020</span>
              </a>
              <a
                href="/resources"
                className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors"
              >
                <FileText className="w-6 h-6" />
                <span className="text-sm font-medium">Resources</span>
              </a>
              <a
                href="/times"
                className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors"
              >
                <Newspaper className="w-6 h-6" />
                <span className="text-sm font-medium">The School Times</span>
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                variant="default"
                size="lg"
                className="text-base px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold rounded-full"
                onClick={() => setDialogOpen(true)}
              >
                ENQUIRE NOW
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 text-foreground focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu (Slide-down) */}
      <div
        className={`lg:hidden bg-background border-b border-border shadow-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 py-6 px-6">
          {/* Top Links */}
          {["PARENTS", "SCHOOLS", "TEACHERS", "ABOUT US"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(" ", "")}`}
              className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-3 w-full text-center rounded-md hover:bg-muted"
              onClick={closeMobileMenu}
            >
              {item}
            </a>
          ))}

          <div className="w-full border-t border-border my-2"></div>

          {/* Secondary Links */}
          <a
            href="/events"
            className="flex items-center gap-3 text-foreground hover:text-primary py-3 w-full justify-center"
            onClick={closeMobileMenu}
          >
            <Calendar className="w-5 h-5" />
            <span className="text-lg font-medium">Events & Programs</span>
          </a>
          <a
            href="/nep"
            className="flex items-center gap-3 text-foreground hover:text-primary py-3 w-full justify-center"
            onClick={closeMobileMenu}
          >
            <GraduationCap className="w-5 h-5" />
            <span className="text-lg font-medium">NEP 2020</span>
          </a>
          <a
            href="/resources"
            className="flex items-center gap-3 text-foreground hover:text-primary py-3 w-full justify-center"
            onClick={closeMobileMenu}
          >
            <FileText className="w-5 h-5" />
            <span className="text-lg font-medium">Resources</span>
          </a>
          <a
            href="/times"
            className="flex items-center gap-3 text-foreground hover:text-primary py-3 w-full justify-center"
            onClick={closeMobileMenu}
          >
            <Newspaper className="w-5 h-5" />
            <span className="text-lg font-medium">The School Times</span>
          </a>

          {/* CTA */}
          <Button
            variant="default"
            className="w-full mt-4 text-lg py-6 font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full"
            onClick={() => {
              setDialogOpen(true);
              closeMobileMenu();
            }}
          >
            ENQUIRE NOW
          </Button>
        </nav>
      </div>

      {/* Enquiry Dialog */}
      {dialogOpen && (
        <EnquireNowForm isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
      )}
    </>
  );
};
