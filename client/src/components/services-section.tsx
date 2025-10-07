import { Card, CardContent } from "@/components/ui/card";
import { Gavel, ServerCog, Building, Bot, Group, TrendingUp } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Gavel,
      title: "Asesoría en Licitaciones",
      description: "Acompañamiento especializado en procesos de contratación pública y privada, desde la estructuración hasta la adjudicación.",
      features: [
        "Análisis de términos de referencia",
        "Estructuración de propuestas",
        "Seguimiento de procesos"
      ]
    },
    {
      icon: ServerCog,
      title: "Automatización de Procesos",
      description: "Optimización y automatización de procesos operativos para mejorar la eficiencia y reducir costos organizacionales.",
      features: [
        "Mapeo de procesos actuales",
        "Implementación de automatización",
        "Monitoreo y optimización continua"
      ]
    },
    {
      icon: Building,
      title: "Consultoría Institucional",
      description: "Fortalecimiento de capacidades institucionales y diseño de estrategias organizacionales personalizadas.",
      features: [
        "Diagnóstico organizacional",
        "Diseño de estrategias",
        "Implementación y seguimiento"
      ]
    },
    {
      icon: Bot,
      title: "Integración de IA",
      description: "Implementación de soluciones de inteligencia artificial para automatizar tareas y mejorar la toma de decisiones.",
      features: [
        "Chatbots inteligentes",
        "Análisis predictivo",
        "Procesamiento de lenguaje natural"
      ]
    },
    {
      icon: Group,
      title: "Diseño Modular",
      description: "Desarrollo de soluciones modulares flexibles que se adaptan a las necesidades específicas de cada organización.",
      features: [
        "Arquitectura escalable",
        "Componentes reutilizables",
        "Integración personalizada"
      ]
    },
    {
      icon: TrendingUp,
      title: "Análisis y Reportes",
      description: "Generación de informes automatizados y análisis de datos para la toma de decisiones estratégicas.",
      features: [
        "Dashboards interactivos",
        "Reportes automatizados",
        "Métricas de rendimiento"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl" data-testid="text-services-title">
            Servicios Estratégicos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
            Ofrecemos soluciones integrales para potenciar el crecimiento y la eficiencia de tu organización
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="shadow-lg hover-lift border border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-xl text-primary-foreground h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3" data-testid={`text-service-${index + 1}-title`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid={`text-service-${index + 1}-description`}>
                    {service.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} data-testid={`text-service-${index + 1}-feature-${featureIndex + 1}`}>
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
