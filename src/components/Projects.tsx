import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import matchaImage from "@/assets/Matcha_Mixologist.png";
import nazimaImage from "@/assets/Styledbynazima.png";
import placeholderImage from "@/assets/Filemyrti.png";

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

  const projects = [
    {
      title: "Matcha Mixologist",
      description: "Premium matcha storefront with clean UI and responsive design.",
      technologies: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
      url: "https://whisked-calm-craft.vercel.app/",
      external: true,
      image: matchaImage,
    },
    {
      title: "StyledByNazima",
      description: "Fashion brand landing page with modern layout and typography.",
      technologies: ["HTML", "CSS", "Responsive Design", "Web Design", "Tailwind CSS"],
      url: "/projects/styledbynazima",
      external: false,
      image: nazimaImage,
    },
    {
      title: "FileMyRTI – Jammu & Kashmir",
      description: "Live RTI portal with scalable, multi-state structure and fast performance.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Responsive Design", "VPS Deployment", "Domain & DNS"],
      url: "https://rtionlinejammukashmir.filemyrti.com",
      external: true,
      image: placeholderImage,
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 max-w-6xl mx-auto">
            {projects.map((project, projectIndex) => (
              <Card
                key={projectIndex}
                className="overflow-hidden hover:shadow-xl transition-shadow h-full group tint-card"
              >
                <div className="flex flex-col h-full">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      {project.external ? (
                        <>
                          <span className="flex items-center gap-1">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Live Project
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Production
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Web App
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="flex items-center gap-1">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Frontend
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Web App
                          </span>
                        </>
                      )}
                    </div>

                    <div className="rounded-xl bg-secondary/50 border border-border p-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="rounded-full px-2.5 py-1 text-xs transition-all hover:shadow-sm hover:-translate-y-[1px]"
                        >
                        {tech}
                      </Badge>
                    ))}
                    </div>

                    <div className="mt-auto flex justify-end">
                    {project.external ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-primary text-primary hover:bg-primary/10 transition-all hover:-translate-y-[1px]"
                      >
                          View Live
                          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <Link
                        to={project.url}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-primary text-primary/80 hover:text-primary hover:bg-primary/10 transition-all hover:-translate-y-[1px]"
                      >
                          View Project
                          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
