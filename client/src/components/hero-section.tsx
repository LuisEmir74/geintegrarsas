import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@assets/logo circular_1757320849366.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="inicio" className="hero-gradient text-primary-foreground py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img 
                src={logo} 
                alt="INTEGRAR S.A.S. Logo" 
                className="h-20 w-20 object-contain mr-4" 
                data-testid="hero-logo"
              />
              <div>
                <h2 className="text-2xl font-bold text-blue-100" data-testid="hero-company-name">
                  GRUPO EMPRESARIAL
                </h2>
                <h2 className="text-3xl font-bold text-white" data-testid="hero-brand-name">
                  INTEGRAR S.A.S.
                </h2>
              </div>
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl" data-testid="hero-title">
              Soluciones <span className="text-blue-200">modulares</span>, automatizadas y visuales
            </h1>
            <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl" data-testid="hero-description">
              Transformamos organizaciones mediante automatización de procesos, asesoría especializada en licitaciones e integración de inteligencia artificial.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <Button
                onClick={() => scrollToSection('contacto')}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors shadow-lg mr-4"
                data-testid="button-request-consultation"
              >
                Solicita Asesoría
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('servicios')}
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary transition-colors"
                data-testid="button-learn-more"
              >
                Conoce más
              </Button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Dashboard de automatización y análisis de datos" 
                className="w-full rounded-lg"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
