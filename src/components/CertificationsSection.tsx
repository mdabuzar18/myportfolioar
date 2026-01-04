import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Code, Database, Palette, Server, Globe } from "lucide-react";

const certifications = [
  { name: "Cybersecurity Analyst Job Simulation", issuer: "Tata Group (Forage)", icon: Shield },
  { name: "AI Engineer Certification", issuer: "United Latino Students Association", icon: Server },
  { name: "Full Stack Developer", issuer: "United Latino Students Association", icon: Code },
  { name: "Data Analyst", issuer: "United Latino Students Association", icon: Database },
  { name: "Frontend Development", issuer: "United Latino Students Association", icon: Palette },
  { name: "DevOps Engineer", issuer: "United Latino Students Association", icon: Globe },
  { name: "Deloitte Data Analytics Simulation", issuer: "Forage", icon: Database },
  { name: "Mastercard Cybersecurity Simulation", issuer: "Forage", icon: Shield },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card p-4 rounded-xl text-center group hover:glow-box transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <cert.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-medium text-sm mb-1 line-clamp-2">{cert.name}</h4>
              <p className="text-muted-foreground text-xs">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
