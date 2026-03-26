import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { getWhatsappNavbarLink } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#history" },
    { name: "Planos", href: "#prices" },
    { name: "Avaliações", href: "#testimonials" },
    { name: "Localização", href: "#location" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          {/* <Dumbbell className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" /> */}
          <span className="font-display font-black text-2xl tracking-tighter uppercase">
            Light<span className="text-primary">Fitness</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={getWhatsappNavbarLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-none font-display font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary hover:border-primary/90 transition-all"
            data-testid="button-nav-join"
          >
            Matricule-se
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-display font-bold uppercase tracking-wide py-2 border-b border-border/50 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={getWhatsappNavbarLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 w-full rounded-none font-display font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
            data-testid="button-mobile-join"
          >
            Matricule-se
          </a>
        </div>
      )}
    </nav>
  );
}
