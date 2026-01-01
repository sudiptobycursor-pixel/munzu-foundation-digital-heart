import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.programs, path: "/programs" },
    { name: t.nav.projects, path: "/projects" },
    { name: t.nav.gallery, path: "/gallery" },
    { name: t.nav.news, path: "/news" },
    { name: t.nav.contact, path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-custom shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span
              className={`font-serif text-xl font-bold transition-colors duration-300 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {language === "bn" ? "মুনজু ফাউন্ডেশন" : "Munzu Foundation"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? scrolled
                      ? "text-primary bg-primary/10"
                      : "text-white bg-white/20"
                    : scrolled
                    ? "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                scrolled
                  ? "bg-secondary text-foreground hover:bg-primary/10"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Globe className="w-4 h-4" />
              {language === "en" ? "বাং" : "EN"}
            </button>

            <Link to="/volunteer">
              <Button
                variant={scrolled ? "outline" : "heroOutline"}
                size="sm"
              >
                {t.nav.volunteer}
              </Button>
            </Link>
            <Link to="/donate">
              <Button variant="hero" size="sm">
                {t.nav.donateNow}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 px-2 py-1 rounded-full font-medium text-xs ${
                scrolled
                  ? "bg-secondary text-foreground"
                  : "bg-white/10 text-white"
              }`}
            >
              <Globe className="w-3 h-3" />
              {language === "en" ? "বাং" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-card rounded-2xl p-4 shadow-xl space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              <Link to="/volunteer" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  {t.nav.volunteer}
                </Button>
              </Link>
              <Link to="/donate" onClick={() => setIsOpen(false)}>
                <Button variant="hero" className="w-full">
                  {t.nav.donateNow}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
