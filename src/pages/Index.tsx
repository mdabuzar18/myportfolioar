import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mohammed Abuzar | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Mohammed Abuzar - Detail-oriented Full Stack Developer specializing in Python, Django, and modern web technologies. View my projects and experience."
        />
        <meta
          name="keywords"
          content="Mohammed Abuzar, Full Stack Developer, Python Developer, Django Developer, Web Developer, Portfolio"
        />
        <meta property="og:title" content="Mohammed Abuzar | Full Stack Developer" />
        <meta
          property="og:description"
          content="Full Stack Developer specializing in Python, Django, and modern web technologies."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mohammedabuzar.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
