import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 md:pt-28">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Mohammed Afroz
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Software Developer | MCA Student | Web Development Enthusiast
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about creating dynamic, responsive web applications. 
              Currently pursuing Master of Computer Applications with hands-on 
              experience in full-stack development and data analytics.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <Button size="lg" className="gap-2">
                  View My Work
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <Button size="lg" variant="outline">
                  Get In Touch
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Github className="w-5 h-5" />
                <a href="https://github.com/mohammedafroz125" className="text-sm">github.com/mohammedafroz125</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Linkedin className="w-5 h-5" />
                <a href="https://www.linkedin.com/in/mohammed-afroz-7a27b0245/" className="text-sm">linkedin.com/in/mohammedafroz</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammedafroz45654@gmail.com" className="text-sm">mohammedafroz45654gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <a href="tel:+919502509455" className="text-sm">+91 9502509455</a>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-accent">
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
