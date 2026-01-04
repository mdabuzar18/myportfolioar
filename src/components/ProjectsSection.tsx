import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, FileText, CreditCard, ShoppingCart, Monitor } from "lucide-react";

const projects = [
  {
    title: "Buddy - Desktop Assistant",
    description: "A fully functional desktop assistant application built entirely in Java using Java Swing. Features task automation and an intuitive GUI for seamless user interaction.",
    icon: Monitor,
    tags: ["Java", "Java Swing", "Desktop App", "GUI"],
  },
  {
    title: "Notes App",
    description: "A responsive note management system with CRUD operations, enabling professionals and students to organize tasks, assignments, and study material.",
    icon: FileText,
    tags: ["Full Stack", "CRUD", "Responsive"],
  },
  {
    title: "Credit Card Application System",
    description: "A secure web application to streamline credit card applications with real-time tracking using unique identifiers.",
    icon: CreditCard,
    tags: ["Security", "Real-time", "Database"],
  },
  {
    title: "E-Commerce Website",
    description: "A scalable and visually appealing online shopping platform, improving UI/UX and backend data handling.",
    icon: ShoppingCart,
    tags: ["E-Commerce", "UI/UX", "Scalable"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative bg-secondary/20" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`glass-card rounded-xl overflow-hidden group hover:glow-box transition-all duration-300 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Project Header */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors cursor-pointer" />
                </div>
                
                <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
