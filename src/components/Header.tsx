import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, GraduationCap, FileText, Newspaper } from "lucide-react";
import { EnquireNowForm } from "./EnquireNowForm";

export const Header = ({ onEnquireClick }: { onEnquireClick: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Main Navigation (scrolls away) */}
      <div className="bg-primary">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-end h-12 sm:h-14 gap-6 sm:gap-10">
            <nav className="hidden md:flex items-center gap-6 sm:gap-10">
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

      {/* Bottom Bar - Logo and Secondary Navigation (sticky) */}
      <div className="sticky top-0 z-50 bg-card border-b border-border shadow-soft">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <a
              href="/"
              className="text-3xl sm:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent tracking-tight"
            >
              EduTransform
            </a>

            {/* Desktop Secondary Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
              <a
                href="#events"
                className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group"
              >
                <Calendar className="w-6 h-6" />
                <span className="text-sm font-medium">Events & Programs</span>
              </a>
              <a
                href="#nep"
                className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group"
              >
                <GraduationCap className="w-6 h-6" />
                <span className="text-sm font-medium">NEP 2020</span>
              </a>
              <a
                href="#resources"
                className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group"
              >
                <FileText className="w-6 h-6" />
                <span className="text-sm font-medium">Resources</span>
              </a>
              <a
                href="#times"
                className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group"
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
              className="lg:hidden p-3 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border shadow-lg animate-fade-in sticky top-[80px] sm:top-[96px] z-40">
          <nav className="flex flex-col items-center gap-4 py-6 px-6">
            {["PARENTS", "SCHOOLS", "TEACHERS", "ABOUT US"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="text-xl font-semibold text-foreground hover:text-primary transition-colors py-3 w-full rounded-md hover:bg-muted text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="w-full border-t border-border my-2"></div>
            <a
              href="#events"
              className="flex items-center gap-3 text-foreground hover:text-primary py-3 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="w-5 h-5" />
              <span className="text-lg font-medium">Events & Programs</span>
            </a>
            <a
              href="#nep"
              className="flex items-center gap-3 text-foreground hover:text-primary py-3 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <GraduationCap className="w-5 h-5" />
              <span className="text-lg font-medium">NEP 2020</span>
            </a>
            <a
              href="#resources"
              className="flex items-center gap-3 text-foreground hover:text-primary py-3 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText className="w-5 h-5" />
              <span className="text-lg font-medium">Resources</span>
            </a>
            <a
              href="#times"
              className="flex items-center gap-3 text-foreground hover:text-primary py-3 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Newspaper className="w-5 h-5" />
              <span className="text-lg font-medium">The School Times</span>
            </a>
            <Button
              variant="default"
              className="w-full mt-4 text-lg py-6 font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full"
              onClick={() => {
                setDialogOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              ENQUIRE NOW
            </Button>
          </nav>
        </div>
      )}

      {/* Enquiry Form Dialog */}
      {dialogOpen && (
        <EnquireNowForm isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
      )}
    </>
  );
};
