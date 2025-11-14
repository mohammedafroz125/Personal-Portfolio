import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";
import { Link } from "react-scroll";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const name = "Mohammed Afroz";
  const titles = [
    "Software Developer",
    "MCA Student",
    "Web Development Enthusiast"
  ];

  // Handle mouse move for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 md:pt-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            {/* Name with letter-by-letter animation */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {name.split("").map((letter, index) => (
                <span
                  key={index}
                  className="inline-block"
                  style={{
                    animation: `slide-in-left 0.5s ease-out ${index * 0.05}s forwards`,
                    opacity: 0,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>

            {/* Titles with staggered fade-in and slide-up */}
            <p className="text-xl md:text-2xl text-muted-foreground flex flex-wrap gap-2">
              {titles.map((title, index) => (
                <span
                  key={index}
                  className="inline-block"
                  style={{
                    animation: `fade-in-up-delayed 0.6s ease-out ${1.2 + index * 0.2}s forwards`,
                    opacity: 0,
                  }}
                >
                  {title}
                  {index < titles.length - 1 && (
                    <span className="mx-2">|</span>
                  )}
                </span>
              ))}
            </p>

            {/* Tagline with graceful fade-in */}
            <p
              className="text-lg text-muted-foreground leading-relaxed"
              style={{
                animation: `fade-in 1s ease-out 2s forwards`,
                opacity: 0,
              }}
            >
              Passionate about creating dynamic, responsive web applications. 
              Currently pursuing Master of Computer Applications with hands-on 
              experience in full-stack development and data analytics.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-4 pt-4"
              style={{
                animation: `fade-in-up-delayed 0.6s ease-out 2.5s forwards`,
                opacity: 0,
              }}
            >
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-2 border-orange-500 bg-transparent hover:bg-orange-500/10 text-foreground transition-all duration-300 animate-glow-pulse"
                >
                  View My Work
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground/40 hover:border-foreground/80 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Social icons and contact info with staggered slide-up */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-6 sm:pt-8">
              <div
                className="flex items-start sm:items-center gap-3 text-muted-foreground"
                style={{
                  animation: `slide-up-from-bottom 0.6s ease-out 3s forwards`,
                  opacity: 0,
                }}
              >
                <Github className="w-5 h-5" />
                <a
                  href="https://github.com/mohammedafroz125"
                  className="text-sm break-all hover:text-foreground transition-colors"
                >
                  github.com/mohammedafroz125
                </a>
              </div>
              <div
                className="flex items-start sm:items-center gap-3 text-muted-foreground"
                style={{
                  animation: `slide-up-from-bottom 0.6s ease-out 3.2s forwards`,
                  opacity: 0,
                }}
              >
                <Linkedin className="w-5 h-5" />
                <a
                  href="https://www.linkedin.com/in/mohammed-afroz-7a27b0245/"
                  className="text-sm break-all hover:text-foreground transition-colors"
                >
                  linkedin.com/in/mohammedafroz
                </a>
              </div>
              <div
                className="flex items-start sm:items-center gap-3 text-muted-foreground"
                style={{
                  animation: `slide-up-from-bottom 0.6s ease-out 3.4s forwards`,
                  opacity: 0,
                }}
              >
                <Mail className="w-5 h-5" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammedafroz45654@gmail.com"
                  className="text-sm break-all hover:text-foreground transition-colors"
                >
                  mohammedafroz45654@gmail.com
                </a>
              </div>
              <div
                className="flex items-start sm:items-center gap-3 text-muted-foreground"
                style={{
                  animation: `slide-up-from-bottom 0.6s ease-out 3.6s forwards`,
                  opacity: 0,
                }}
              >
                <Phone className="w-5 h-5" />
                <a
                  href="tel:+919502509455"
                  className="text-sm break-all hover:text-foreground transition-colors"
                >
                  +91 9502509455
                </a>
              </div>
            </div>
          </div>

          {/* Image with parallax, zoom, and rotation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative" ref={imageRef}>
              <div
                className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-accent animate-image-zoom-in"
                style={{
                  transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px) rotate(${-mousePosition.x * 0.05}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <img
                  src={profileImage}
                  alt="Mohammed Afroz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full -z-10 blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
