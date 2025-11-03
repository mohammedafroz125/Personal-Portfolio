import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";
import TwinEyes from "./TwinEyes";
import ThemeToggle from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
    
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b shadow-sm  bg-background/95 backdrop-blur-sm ${
        isScrolled ? "border-transparent" : "border-border/30"
      }`}
    >
  <div className="container mx-auto px-4 md:px-8 lg:px-20 py-2">
        <div className="flex items-center justify-between">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center cursor-pointer"
          >
            {/* Use favicon from public/ as brand image; replace the file if you want a custom image */}
            <img src="/favicon.ico" alt="brand" className="w-8 h-8" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-center text-md font-medium text-foreground/80 hover:text-primary cursor-pointer transition-colors"
                  activeClass="text-primary"
                  spy={true}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden sm:flex">
              <TwinEyes />
            </div>

            {/* Mobile menu trigger */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger aria-label="Open menu" className="p-2 rounded-md border border-border/50 hover:bg-accent/30">
                  <Menu className="w-5 h-5" />
                </SheetTrigger>
                <SheetContent side="right" className="pt-14 w-full max-w-xs">
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.to}>
                        <Link
                          to={item.to}
                          smooth={true}
                          duration={500}
                          offset={-80}
                          spy={true}
                          className="text-lg font-medium text-foreground/90 hover:text-primary cursor-pointer"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
