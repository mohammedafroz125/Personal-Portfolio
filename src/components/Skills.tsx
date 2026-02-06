import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Deployment & Hosting",
      skills: ["Hostinger VPS", "Domain & DNS", "Vite (Build Tool)", "Git & GitHub"],
    },
    {
      title: "Databases & Data Analytics",
      skills: ["SQL Server", "Power BI", "Excel"],
    },
    {
      title: "AI-Assisted Development",
      skills: ["AI Design Tools"],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-section-2">
      <div className="container mx-auto px-6 w-full ">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & Technologies
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies that I use to build scalable, efficient solutions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow tint-card"
              >
                <h3 className="text-xl font-bold mb-4 text-center">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-center py-2 px-4 bg-accent rounded-md text-sm font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
