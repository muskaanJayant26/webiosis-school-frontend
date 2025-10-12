import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { EnquireNowForm } from "./EnquireNowForm";

export const Header = ({ onEnquireClick }: { onEnquireClick: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20 sm:h-[100px]">
          {/* Logo */}
          <a
            href="/"
            className="text-4xl sm:text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent tracking-tight"
          >
            EduTransform
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {["PARENTS", "SCHOOLS", "TEACHERS", "ABOUT US"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              variant="accent"
              size="lg"
              className="text-lg px-8 py-3"
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
            {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border mt-2 rounded-2xl shadow-lg animate-fade-in">
            <nav className="flex flex-col items-center gap-4 py-6 px-6 text-center">
              {["PARENTS", "SCHOOLS", "TEACHERS", "ABOUT US"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "")}`}
                  className="text-2xl font-semibold text-foreground hover:text-primary transition-colors py-3 w-full rounded-md hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button
                variant="accent"
                className="w-full mt-4 text-xl py-6 font-semibold"
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
      </div>

      {/* Enquiry Form Dialog */}
      {dialogOpen && (
        <EnquireNowForm isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
      )}
    </header>
  );
};
