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
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "HTML5", "CSS3", "SQL", "TypeScript"],
    },
    {
      title: "Frameworks & Web Development",
      skills: [
        "Flask",
        "Full-Stack Development",
        "REST APIs",
        "Web Scraping",
        "React.js",
        "Node.js",
        "Express.js",
        "Responsive Web Design",
      ],
    },
    {
      title: "Data Analytics & Tools",
      skills: [
        "Data Analytics",
        "Data Extraction",
        "Relational Databases",
        "MongoDB",
        "MySQL",
        "Supabase",
        "SQL Queries",
      ],
    },
    {
      title: "Developer Tools & Version Control",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Linux/Terminal basics",
        "npm",
        "Vite",
        "Debugging",
        "Technical Troubleshooting",
      ],
    },
    {
      title: "Deployment, Security & AI Tools",
      skills: [
        "Hostinger VPS",
        "Vercel",
        "SSL Certificates",
        "Authentication & Authorization",
        "AI-Assisted Development",
        "SEO Basics",
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-section-2">
      <div className="container mx-auto w-full px-4 sm:px-6">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-5 sm:p-6 hover:shadow-lg transition-shadow tint-card"
              >
                <h3 className="text-xl font-bold mb-4 text-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="py-2 px-3 bg-accent rounded-md text-sm font-medium"
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
