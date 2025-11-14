import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { Link } from "react-scroll";
import { useState, useEffect, useRef } from "react";

// Update this path to your new profile image
// Option 1: Use a local file - import it like: import profileImage from "@/assets/your-image.jpg";
// Option 2: Use a URL - set it directly: const profileImage = "https://your-image-url.com/image.jpg";
import profileImage from "@/assets/profile-placeholder.jpg";

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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 md:pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-3 md:space-y-4">
            {/* Name with fade-in and slide-up animation */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up-delayed"
              style={{
                animationDelay: "0.3s",
              }}
            >
              {name}
            </h1>

            {/* Titles with staggered fade-in and slide-up */}
            <p className="text-xl md:text-2xl text-muted-foreground flex flex-wrap gap-2">
              {titles.map((title, index) => (
                <span
                  key={index}
                  className="inline-block animate-fade-in-up-delayed"
                  style={{
                    animationDelay: `${1.2 + index * 0.2}s`,
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
              className="text-lg text-muted-foreground leading-relaxed animate-fade-in"
              style={{
                animationDelay: "2s",
              }}
            >
              Passionate about creating dynamic, responsive web applications. 
              Currently pursuing Master of Computer Applications with hands-on 
              experience in full-stack development and data analytics.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-4 pt-4 animate-fade-in-up-delayed"
              style={{
                animationDelay: "2.5s",
              }}
            >
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-2 border-orange-500 bg-transparent hover:bg-orange-500/10 text-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,88,12,0.6)] hover:shadow-orange-600/50"
                >
                  View My Work
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-500 bg-transparent hover:bg-orange-500/10 hover:border-[#ea580c] hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,88,12,0.6)] hover:shadow-orange-600/50"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Social icons and contact info with staggered slide-up */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-6 sm:pt-8">
              <div
                className="flex items-start sm:items-center gap-3 text-muted-foreground animate-slide-up-from-bottom"
                style={{
                  animationDelay: "3s",
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
                className="flex items-start sm:items-center gap-3 text-muted-foreground animate-slide-up-from-bottom"
                style={{
                  animationDelay: "3.2s",
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
                className="flex items-start sm:items-center gap-3 text-muted-foreground animate-slide-up-from-bottom"
                style={{
                  animationDelay: "3.4s",
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
                className="flex items-start sm:items-center gap-3 text-muted-foreground animate-slide-up-from-bottom"
                style={{
                  animationDelay: "3.6s",
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
