import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Django Full Stack Developer",
    company: "Mevi Technologies",
    type: "Internship",
    responsibilities: [
      "Developed front-end components using HTML, CSS, and Python within the Django environment",
      "Implemented secure authentication and database-driven features",
    ],
  },
  {
    title: "Web Development & Analytics Intern",
    company: "Prodigy InfoTech",
    type: "Internship",
    responsibilities: [
      "Created responsive webpages and contributed to web analytics dashboards using Python-based frameworks",
      "Enhanced website performance and user engagement metrics",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-6 md:p-8 rounded-xl relative overflow-hidden group hover:glow-box transition-all duration-300"
            >
              {/* Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <h3 className="font-heading text-xl font-semibold">{exp.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium w-fit">
                      {exp.type}
                    </span>
                  </div>
                  
                  <p className="text-primary font-medium mb-4">{exp.company}</p>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
