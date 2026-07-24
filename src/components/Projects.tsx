import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronLeft, ChevronRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import matchaImage from "@/assets/Matcha_Mixologist.png";
import nazimaImage from "@/assets/Styledbynazima.png";
import placeholderImage from "@/assets/Filemyrti.png";
import rtiPdfManagerImage from "@/assets/rti-pdf-manager.jpg";
import shreeBalajiImage from "@/assets/shree-balaji-hub.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  github?: string;
  external: boolean;
  image: string;
  statusTags?: string[];
}

const projects: Project[] = [
  {
    title: "RTI PDF Manager",
    description:
      "A production-ready RTI PDF management system that streamlines RTI document processing with advanced PDF editing, project management, QR-based mobile uploads, offline support, and optimized PDF generation for faster workflows.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "IndexedDB",
      "Node.js",
      "Express",
      "PDF-lib",
      "Vercel",
    ],
    url: "https://pdffilemyrti.vercel.app/",
    external: true,
    image: rtiPdfManagerImage,
    statusTags: ["Live Project", "Production", "Full Stack Web App"],
  },
  {
    title: "Shree Balaji Hub ERP",
    description:
      "A complete business management ERP system developed for a distributor business. The application streamlines customer management, supplier management, product catalog, inventory tracking, stock management, order processing, invoice generation, delivery management, reporting, authentication, and dashboard analytics through a modern admin interface.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "REST API",
      "Mongoose",
    ],
    url: "https://shreebalajihub.vercel.app/",
    external: true,
    image: shreeBalajiImage,
    statusTags: ["Live Project", "Production", "Full Stack ERP"],
  },
  {
    title: "FileMyRTI – Jammu & Kashmir",
    description:
      "Live RTI portal with scalable, multi-state structure, custom application forms, and high-performance serverless deployment.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Responsive Design",
      "VPS Deployment",
    ],
    url: "https://rtionlinejammukashmir.filemyrti.com",
    external: true,
    image: placeholderImage,
    statusTags: ["Live Project", "Production", "Web App"],
  },
  {
    title: "Matcha Mixologist",
    description:
      "Premium matcha storefront featuring aesthetic glassmorphic UI components, smooth dark-mode support, and responsive layouts.",
    technologies: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    url: "https://whisked-calm-craft.vercel.app/",
    external: true,
    image: matchaImage,
    statusTags: ["Live Project", "Production", "Web App"],
  },
  {
    title: "StyledByNazima",
    description:
      "Modern fashion brand website with elegant typography, responsive layouts, and a seamless multi-page user experience.",
    technologies: [
      "HTML",
      "CSS",
      "Responsive Design",
      "Web Design",
      "Tailwind CSS",
    ],
    url: "https://nazima-brand-elevation.vercel.app/",
    external: false,
    image: nazimaImage,
    statusTags: ["Frontend", "Web App"],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Autoplay every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Calculate circular offset relative to active card
  const getOffset = (index: number) => {
    const total = projects.length;
    let diff = (index - currentIndex) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen md:h-screen md:max-h-screen py-4 md:py-8 flex flex-col justify-between overflow-hidden relative select-none bg-background/50 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="container mx-auto px-6 text-center z-10 shrink-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
          Featured Projects
        </h2>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
          Explore my interactive 3D showcase. Drag, swipe, or use arrow keys to navigate.
        </p>
      </div>

      {/* 3D Carousel Area */}
      <div
        className="flex-1 relative w-full max-w-6xl mx-auto flex items-center justify-center py-2 my-auto overflow-visible"
        style={{ perspective: "1200px" }}
      >
        <div className="relative w-full h-[440px] sm:h-[465px] flex items-center justify-center">
          {projects.map((project, index) => {
            const offset = getOffset(index);
            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isVisible = Math.abs(offset) <= 1;

            // Compute cinematic 3D transformation values
            let translateX = "0%";
            let scale = 1;
            let rotateY = 0;
            let opacity = 1;
            let zIndex = 30;
            let filterBlur = "blur(0px)";

            if (isLeft) {
              translateX = "-65%";
              scale = 0.85;
              rotateY = 15;
              opacity = 0.65;
              zIndex = 20;
              filterBlur = "blur(1px)";
            } else if (isRight) {
              translateX = "65%";
              scale = 0.85;
              rotateY = -15;
              opacity = 0.65;
              zIndex = 20;
              filterBlur = "blur(1px)";
            } else if (!isCenter) {
              translateX = offset < 0 ? "-130%" : "130%";
              scale = 0.7;
              rotateY = offset < 0 ? 30 : -30;
              opacity = 0;
              zIndex = 10;
              filterBlur = "blur(4px)";
            }

            const statusTags =
              project.statusTags ||
              (project.external
                ? ["Live Project", "Production", "Web App"]
                : ["Frontend", "Web App"]);

            return (
              <motion.div
                key={project.title}
                initial={false}
                animate={{
                  x: translateX,
                  scale: scale,
                  rotateY: rotateY,
                  opacity: opacity,
                  filter: filterBlur,
                }}
                transition={{
                  type: "spring",
                  mass: 0.8,
                  stiffness: 150,
                  damping: 22,
                }}
                onClick={() => {
                  if (isLeft) handlePrev();
                  if (isRight) handleNext();
                }}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -40 || info.velocity.x < -300) handleNext();
                  if (info.offset.x > 40 || info.velocity.x > 300) handlePrev();
                }}
                style={{
                  zIndex: zIndex,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  pointerEvents: isVisible ? "auto" : "none",
                }}
                className={`absolute top-0 w-[88vw] sm:w-[410px] lg:w-[440px] h-[440px] sm:h-[465px] cursor-pointer touch-none transform-gpu will-change-transform ${
                  !isCenter ? "hover:opacity-85 transition-opacity" : ""
                }`}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full group tint-card flex flex-col border border-border/80 bg-card/95 backdrop-blur-md">
                  {/* 1. Project Preview Image */}
                  <div className="aspect-video w-full overflow-hidden shrink-0 relative">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1 justify-between pb-5">
                    {/* 2. Title & 3. Description */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground line-clamp-1">
                          {project.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground shrink-0">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                          {statusTags[0] || "Live Project"}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* 4. View Project & GitHub Buttons (Immediately Below Description) */}
                    <div className="flex items-center gap-2.5 pt-0.5">
                      {project.external ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md border border-primary text-xs sm:text-sm font-medium text-primary hover:bg-primary/10 transition-all hover:-translate-y-[1px]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Project
                          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </a>
                      ) : (
                        <Link
                          to={project.url}
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md border border-primary text-xs sm:text-sm font-medium text-primary/90 hover:text-primary hover:bg-primary/10 transition-all hover:-translate-y-[1px]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Project
                          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-3.5 h-3.5" />
                          GitHub
                        </a>
                      )}
                    </div>

                    {/* 5. Inline Tech Stack Badges (At Bottom Below Buttons) */}
                    <div className="pt-2 flex items-center gap-1.5 flex-wrap border-t border-border/40">
                      {project.technologies.slice(0, 4).map((tech, techIdx) => (
                        <Badge
                          key={techIdx}
                          variant="secondary"
                          className="rounded-full px-2.5 py-0.5 text-[10px] sm:text-xs font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge
                          variant="outline"
                          className="rounded-full px-2 py-0.5 text-[10px] text-muted-foreground"
                        >
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Navigation Arrow Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous project"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-background/80 hover:bg-background border border-border text-foreground shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next project"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-background/80 hover:bg-background border border-border text-foreground shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Pagination Dot Indicators */}
      <div className="flex items-center justify-center gap-2 z-10 shrink-0 pt-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to project ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 bg-primary shadow-sm"
                : "w-2.5 bg-primary/30 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
