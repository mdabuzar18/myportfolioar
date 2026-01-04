import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative bg-secondary/20" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm actively looking for new opportunities. Whether you have a question or just want 
            to say hello, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <a
                href="mailto:abuzarmd593@gmail.com"
                className="glass-card p-5 rounded-xl flex items-center gap-4 group hover:glow-box transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    abuzarmd593@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+917483496498"
                className="glass-card p-5 rounded-xl flex items-center gap-4 group hover:glow-box transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    +91 74834 96498
                  </p>
                </div>
              </a>

              <div className="glass-card p-5 rounded-xl flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Kanakapura, Bangalore South, Karnataka, India</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-8 rounded-xl glow-box"
            >
              <h3 className="font-heading text-xl font-semibold mb-6">Let's Connect</h3>
              
              <div className="space-y-4 mb-8">
                <a
                  href="https://linkedin.com/in/mohammed-abuzar-9186502a1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-primary/20 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="font-medium group-hover:text-primary transition-colors">
                    LinkedIn Profile
                  </span>
                </a>
                
                <a
                  href="https://github.com/mdabuzar18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-primary/20 transition-colors group"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="font-medium group-hover:text-primary transition-colors">
                    GitHub Profile
                  </span>
                </a>
              </div>

              <a
                href="mailto:abuzarmd593@gmail.com"
                className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
                Send Me a Message
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
