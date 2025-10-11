import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { EnquiryDialog } from "@/components/EnquiryDialog";

export const Header = ({ onEnquireClick }: { onEnquireClick: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl lg:text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              EduTransform
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/parents" className="text-foreground hover:text-primary font-medium transition-colors">
              PARENTS
            </a>
            <a href="/schools" className="text-foreground hover:text-primary font-medium transition-colors">
              SCHOOLS
            </a>
            <a href="/teachers" className="text-foreground hover:text-primary font-medium transition-colors">
              TEACHERS
            </a>
            <a href="/about" className="text-foreground hover:text-primary font-medium transition-colors">
              ABOUT US
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="accent" size="lg" onClick={() => setDialogOpen(true)}>
              ENQUIRE NOW
            </Button>
          </div>
          
          <EnquiryDialog open={dialogOpen} onOpenChange={setDialogOpen} formType="general" />

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a
                href="/parents"
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                PARENTS
              </a>
              <a
                href="/schools"
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                SCHOOLS
              </a>
              <a
                href="/teachers"
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                TEACHERS
              </a>
              <a
                href="/about"
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT US
              </a>
              <Button variant="accent" className="w-full" onClick={() => { setDialogOpen(true); setMobileMenuOpen(false); }}>
                ENQUIRE NOW
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
