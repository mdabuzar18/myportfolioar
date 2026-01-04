import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-pulse-glow" />
              
              {/* Border Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-float" />
              
              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 glow-box">
                <img
                  src={profilePhoto}
                  alt="Mohammed Abuzar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-primary/60 animate-pulse animation-delay-200" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-primary font-medium mb-4 tracking-wider uppercase text-sm"
            >
              Full Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Mohammed{" "}
              <span className="text-gradient glow-text">Abuzar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed"
            >
              MCA student passionate about crafting scalable, secure, 
              and user-friendly web solutions with Python, Django, and Java.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="https://github.com/mdabuzar18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:bg-primary/20 transition-colors group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/mohammed-abuzar-9186502a1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:bg-primary/20 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:abuzarmd593@gmail.com"
                className="p-3 rounded-full glass-card hover:bg-primary/20 transition-colors group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="#about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors"
            >
              <span className="text-sm font-medium">Explore My Work</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl animate-pulse-glow" />
      <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl animate-float" />
    </section>
  );
};

export default HeroSection;
