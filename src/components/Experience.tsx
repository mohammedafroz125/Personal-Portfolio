import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
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

  const timeline = [
    {
      type: "work",
      title: "Software Developer Intern",
      organization: "Ranazonai Technologies",
      location: "Remote",
      period: "Recent",
      description:
        "Designed and developed dynamic, responsive web pages using HTML, CSS, and JavaScript. Collaborated with developers and designers to implement clean, structured code.",
      highlights: [
        "Improved website layout, performance, and user experience",
        "Implemented responsive design principles",
        "Collaborated in an agile development environment",
      ],
    },
    {
      type: "education",
      title: "Master of Computer Applications (MCA)",
      organization: "MESCO Institute of Management and Computer Science",
      location: "Pursuing",
      period: "Expected 2026",
      description:
        "Currently pursuing advanced studies in computer applications with focus on software development and modern technologies.",
      highlights: [],
    },
    {
      type: "certification",
      title: "Full Stack Web Development",
      organization: "Tech Mindsparc Innovation",
      location: "Certification",
      period: "Nov 2024 - Feb 2025",
      description:
        "Gained practical knowledge of front-end & back-end web development using modern technologies.",
      highlights: [],
    },
    {
      type: "certification",
      title: "Data Analytics (Pursuing)",
      organization: "Shivasoft Tech Pvt. Ltd.",
      location: "Ongoing",
      period: "Current",
      description:
        "Learning Python, Power BI, SQL Server, Excel, and AI design tools for real-world data insights.",
      highlights: [],
    },
    {
      type: "education",
      title: "B.Sc (Computer Science)",
      organization: "Jagruti Degree & PG College",
      location: "Completed",
      period: "2024",
      description:
        "Completed undergraduate studies in Computer Science with strong foundation in programming and software development.",
      highlights: [],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-6 h-6" />;
      default:
        return <GraduationCap className="w-6 h-6" />;
    }
  };

  return (
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Experience & Education
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            My professional journey and academic background in software development and analytics.
          </p>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="md:ml-16">
                    <div className="absolute left-8 -translate-x-1/2 hidden md:block">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {getIcon(item.type)}
                      </div>
                    </div>

                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                          <p className="text-muted-foreground font-medium">
                            {item.organization} • {item.location}
                          </p>
                        </div>
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                          {item.period}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-4">{item.description}</p>

                      {item.highlights.length > 0 && (
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-primary mt-1">●</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
