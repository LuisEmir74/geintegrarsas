import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import IntegraBotSection from "@/components/integrabot-section";
import TeamSection from "@/components/team-section";
import ToolsSection from "@/components/tools-section";
import PortfolioSection from "@/components/portfolio-section";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import BotpressAssistant from "@/components/botpress-assistant";

export default function Home() {
  return (
    <div className="min-h-screen">
      <BotpressAssistant />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <IntegraBotSection />
        <TeamSection />
        <ToolsSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
