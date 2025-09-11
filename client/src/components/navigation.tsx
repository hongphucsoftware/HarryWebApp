import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div
              className="cursor-pointer"
              onClick={() => scrollToSection("hero")}
              data-testid="logo-home"
            >
              <Logo variant="nav" size="md" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-faq"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-pricing"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => window.location.href = '/joinwaitlist'}
              className="hidden sm:inline-flex"
              data-testid="button-join-waitlist"
            >
              Join Waitlist
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-foreground hover:bg-accent"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground w-full text-left"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground w-full text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground w-full text-left"
                data-testid="mobile-nav-faq"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground w-full text-left"
                data-testid="mobile-nav-pricing"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground w-full text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => window.location.href = '/joinwaitlist'}
                  className="w-full"
                  data-testid="mobile-button-join-waitlist"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
