import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
          {/* Profile Image for About Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30 glow-box">
                <img
                  src={profilePhoto}
                  alt="Mohammed Abuzar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="font-heading text-2xl font-semibold mb-4">
              Passionate About Building{" "}
              <span className="text-primary">Digital Solutions</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a detail-oriented and highly motivated MCA student with strong 
              foundations in software development, data analysis, and web 
              technologies. I thrive on transforming complex problems into elegant, 
              user-friendly solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skilled in Python, Java, SQL, and full-stack web development, with hands-on 
              experience in Django, HTML, CSS, and GitHub. Adept at Agile 
              methodologies, problem-solving, and collaborating in team environments.
            </p>

            {/* Education Cards */}
            <div className="space-y-4">
              {/* MCA - Current */}
              <div className="glass-card p-5 rounded-xl glow-box">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-heading font-semibold">Master of Computer Applications (MCA)</h4>
                      <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        Pursuing
                      </span>
                    </div>
                    <p className="text-foreground">Dayananda Sagar Academy of Technology and Management</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        VTU University
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        2025 - 2027
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BCA - Completed */}
              <div className="glass-card p-5 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold mb-1">Bachelor of Computer Applications (BCA)</h4>
                    <p className="text-foreground">Bangalore University</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        2022 - 2025
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Karnataka, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
