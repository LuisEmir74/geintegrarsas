import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cloud, Database, Smartphone, RotateCcw, Puzzle, UserCheck } from "lucide-react";

export default function ToolsSection() {
  const technologies = [
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      description: "Machine Learning, NLP, Deep Learning"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "AWS, Azure, Google Cloud"
    },
    {
      icon: Database,
      title: "Big Data",
      description: "Analytics, Data Mining, Visualization"
    },
    {
      icon: Smartphone,
      title: "Desarrollo Móvil",
      description: "Apps nativas, PWA, Híbridas"
    }
  ];

  const methodologies = [
    {
      icon: RotateCcw,
      title: "Metodologías Ágiles",
      description: "Scrum, Kanban y DevOps para entregas iterativas y mejora continua."
    },
    {
      icon: Puzzle,
      title: "Diseño Modular",
      description: "Arquitectura de componentes reutilizables y escalables."
    },
    {
      icon: UserCheck,
      title: "Design Thinking",
      description: "Enfoque centrado en el usuario para soluciones innovadoras."
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Análisis",
      description: "Evaluamos necesidades y objetivos organizacionales"
    },
    {
      number: 2,
      title: "Diseño",
      description: "Creamos soluciones modulares personalizadas"
    },
    {
      number: 3,
      title: "Implementación",
      description: "Ejecutamos con metodologías ágiles"
    },
    {
      number: 4,
      title: "Optimización",
      description: "Monitoreamos y mejoramos continuamente"
    }
  ];

  return (
    <section id="herramientas" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl" data-testid="text-tools-title">
            Herramientas y Metodologías
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-tools-description">
            Utilizamos tecnologías de vanguardia y metodologías ágiles para garantizar resultados excepcionales
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8" data-testid="text-technologies-title">Tecnologías</h3>
            <div className="grid grid-cols-2 gap-6">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <Card key={index} className="text-center shadow-sm hover-lift">
                    <CardContent className="p-6">
                      <Icon className="text-3xl text-primary mb-3 h-12 w-12 mx-auto" />
                      <h4 className="font-semibold text-card-foreground mb-2" data-testid={`text-tech-${index + 1}-title`}>
                        {tech.title}
                      </h4>
                      <p className="text-sm text-muted-foreground" data-testid={`text-tech-${index + 1}-description`}>
                        {tech.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8" data-testid="text-methodologies-title">Metodologías</h3>
            <div className="space-y-6">
              {methodologies.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                          <Icon className="text-primary-foreground h-5 w-5" />
                        </div>
                        <h4 className="text-lg font-semibold text-card-foreground" data-testid={`text-method-${index + 1}-title`}>
                          {method.title}
                        </h4>
                      </div>
                      <p className="text-muted-foreground" data-testid={`text-method-${index + 1}-description`}>
                        {method.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Process Flow */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8" data-testid="text-process-title">Nuestro Proceso</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground" data-testid={`text-step-${index + 1}-number`}>
                    {step.number}
                  </span>
                </div>
                <h4 className="font-semibold text-card-foreground mb-2" data-testid={`text-step-${index + 1}-title`}>
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground" data-testid={`text-step-${index + 1}-description`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
