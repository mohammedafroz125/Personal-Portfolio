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
    { value: "1", label: "Projects Completed" },
    { value: "1+", label: "Years Learning" },
    { value: "Multiple", label: "Technologies Mastered" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-accent/30"
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
              I'm a <span className="font-semibold text-foreground">passionate software developer and data analytics enthusiast</span> pursuing 
              my Master of Computer Applications at MESCO Institute. With a strong foundation in web development 
              and growing expertise in data analytics, I love building solutions that combine clean code with real-world impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise includes <span className="font-semibold text-foreground">HTML, CSS, JavaScript, Python, SQL Server, Power BI, and Excel</span>. 
              I'm currently expanding my skills in data analytics and AI design tools through my ongoing certification at Shivasoft Tech Pvt. Ltd.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a <span className="font-semibold text-foreground">software developer intern at Ranazonai Technologies</span>, 
              I've contributed to improving website performance, user experience, and implementing clean, structured code. 
              I thrive on fresh challenges and boundary-breaking projects—let's connect and create something amazing together!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
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
    </section>
  );
};

export default About;
