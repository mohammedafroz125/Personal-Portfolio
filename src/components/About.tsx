import { useEffect, useRef, useState } from "react";

const About = () => {
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

  const stats = [
    { value: "Live Projects", label: "Web applications deployed and accessible online." },
    { value: "Practical Experience", label: "Frontend development, backend integration, and deployment." },
    { value: "Technology Skills", label: "Modern tools and technologies across web development." },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About Me
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="font-semibold text-foreground">Software Engineer</span> building reliable, responsive web applications.
              I work across frontend and backend development, with a focus on user-friendly experiences, maintainable code, and production readiness.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My toolkit includes <span className="font-semibold text-foreground">React, JavaScript, TypeScript, Node.js, Express, REST APIs, and SQL</span>,
              supported by MongoDB, Supabase, Git, and VPS deployment workflows.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I bring practical experience with responsive UI/UX development, authentication, CRUD operations, technical troubleshooting,
              SEO basics, and AI-assisted development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At <span className="font-semibold text-foreground">Ranazonai Technologies</span>, I contribute to company and client web projects,
              including frontend development, backend integration, enhancements, competitor research, and production deployments.
            </p>
          </div>

          <div className="mt-16 w-full">
            <div className="flex justify-center items-center w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto justify-items-center items-center w-full">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-lg bg-card shadow-sm"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
