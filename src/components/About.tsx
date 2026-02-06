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
    { value: "Live Projects", label: "Production-ready web applications deployed publicly" },
    { value: "Hands-on Experience", label: "Frontend development, deployment, and real-world use cases" },
    { value: "Multiple Technologies", label: "Modern tools across web development and data analytics" },
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
              I'm a <span className="font-semibold text-foreground">Junior Web Developer</span> pursuing my Master of Computer Applications.
              I specialize in building clean, responsive user interfaces and deploying production-ready websites with a focus on scalability and performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Core technologies: <span className="font-semibold text-foreground">HTML, CSS, JavaScript, React, TypeScript</span>, with basic database management using <span className="font-semibold text-foreground">SQL Server</span>.
              I also work with modern tooling for deployments and version control to ensure reliable releases.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing a Data Analytics certification covering <span className="font-semibold text-foreground">Python, Power BI, and Excel</span>,
              and leveraging <span className="font-semibold text-foreground">AI-assisted design tools</span> to speed up ideation and UI polish—without over-claiming full automation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a <span className="font-semibold text-foreground">Junior Web Developer Intern at Ranazonai Technologies</span>,
              I focused on responsive layouts, UI/UX improvements, and frontend performance—shipping updates that improved usability and load times.
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
