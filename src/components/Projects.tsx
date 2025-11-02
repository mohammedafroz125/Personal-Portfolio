import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
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

  const project = {
    title: "StyledByNazima",
    subtitle: "Clothing Brand Website",
    description:
      "A static responsive website designed for a premium ethnic wear brand. Built with elegant typography, modern layouts, and professional design principles.",
    features: [
      "Responsive design across all devices",
      "Clean UI with proper spacing",
      "Modern color themes and typography",
      "Multiple sections: Home, Shop, Lookbook, About, Reviews, Contact",
    ],
    technologies: ["HTML", "CSS", "Responsive Design", "Web Design"],
  };

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A showcase of my work in web development, demonstrating clean code and user-focused design.
          </p>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-primary font-medium">{project.subtitle}</p>
                  </div>
                  <Link
                    to="/projects/styledbynazima"
                    aria-label="Open StyledByNazima project"
                    className="text-primary hover:opacity-80 transition-opacity"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </Link>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1">●</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 flex justify-end">
                  <Link
                    to="/projects/styledbynazima"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
