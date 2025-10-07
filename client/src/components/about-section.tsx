import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Handshake, Lightbulb, Puzzle } from "lucide-react";

import vision from "@assets/vision.jpg";

export default function AboutSection() {
  const values = [
    {
      icon: Handshake,
      title: "Ética Profesional",
      description: "Transparencia y honestidad en cada proyecto que desarrollamos."
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Soluciones creativas y tecnología de vanguardia."
    },
    {
      icon: Puzzle,
      title: "Modularidad",
      description: "Soluciones flexibles adaptables a cada organización."
    }
  ];

  return (
    <section id="quienes-somos" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="fade-in">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl" data-testid="text-about-title">
              Quiénes Somos
            </h2>
            <p className="mt-3 text-lg text-muted-foreground" data-testid="text-about-description">Fundado en Cali el 4 de noviembre de 2016, el Grupo Empresarial Integrar S.A.S. es una sociedad comercial especializada en consultoría empresarial integral. Desde sus inicios, ha acompañado a organizaciones públicas y privadas en la estructuración documental, el fortalecimiento de modelos de negocio y la participación estratégica en procesos de licitación. Durante los últimos años, la empresa ha incorporado herramientas de inteligencia artificial para optimizar procesos, facilitar la toma de decisiones y enriquecer la educación técnica. A través de soluciones visuales, modulares y automatizadas, Integrar se consolida como un aliado confiable para instituciones que buscan innovación, agilidad y compromiso social.</p>
            
            <div className="mt-8 space-y-6">
              <Card className="bg-card shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2 flex items-center" data-testid="text-mission-title">
                    <Target className="text-primary mr-2 h-5 w-5" />
                    Misión
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-mission-content">Diseñar, asesorar y sistematizar soluciones empresariales e institucionales que integren eficiencia operativa, excelencia visual y automatización inteligente. INTEGRAR acompaña a sus clientes en procesos de estructuración documental, participación en licitaciones públicas y privadas, y fortalecimiento de sus modelos de negocio, mediante mentoría estratégica, transferencia de conocimiento y herramientas basadas en IA.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2 flex items-center" data-testid="text-vision-title">
                    <Eye className="text-primary mr-2 h-5 w-5" />
                    Visión
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-vision-content">Consolidarnos como un ecosistema empresarial de referencia en Latinoamérica, que transforma la gestión institucional mediante soluciones visuales, modulares y automatizadas. INTEGRAR impulsa la articulación público–privada, la participación estratégica en licitaciones y la aplicación ética de inteligencia artificial, generando impacto sostenible en organizaciones, territorios y comunidades.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <img 
              src={vision} 
              alt="Visión empresarial - Brújula apuntando hacia el futuro" 
              className="rounded-lg shadow-lg"
              data-testid="img-about-vision"
            />
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8" data-testid="text-values-title">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center shadow-sm hover-lift">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-2xl text-primary-foreground h-8 w-8" />
                    </div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2" data-testid={`text-value-${index + 1}-title`}>
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground" data-testid={`text-value-${index + 1}-description`}>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
