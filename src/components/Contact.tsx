import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mohammedafroz45654@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=mohammedafroz45654@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9502509455",
      href: "tel:+919502509455",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Telangana, India",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-accent/30"
    >
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Let's Work Together
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Feel free to reach out through any of the channels below.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.label}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </Card>
              ))}
            </div>

            <Card className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
              <div className="flex justify-center gap-4 mb-6">
                <a
                  href="https://github.com/mohammedafroz125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-afroz-7a27b0245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="text-xl font-bold mb-3">Ready to Start a Project?</h4>
                <p className="text-muted-foreground mb-6">
                  Whether you have a specific project in mind or just want to discuss possibilities, I'd love to hear from you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" asChild>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammedafroz45654@gmail.com">Send Email</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a
                      href="https://www.linkedin.com/in/mohammed-afroz-7a27b0245/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn Message
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
