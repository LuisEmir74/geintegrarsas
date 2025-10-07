import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      category: "licitaciones",
      title: "Modernización Sistema Educativo",
      description: "Asesoría completa para licitación de $2.5M en tecnología educativa.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=600",
      alt: "Proyecto de licitación pública - edificio gubernamental"
    },
    {
      id: 2,
      category: "automatizacion",
      title: "Automatización Manufacturera",
      description: "Reducción del 40% en tiempos de proceso mediante automatización.",
      image: "https://images.unsplash.com/photo-1565191999001-551c187427bb?auto=format&fit=crop&w=800&h=600",
      alt: "Automatización industrial - robots en línea de producción"
    },
    {
      id: 3,
      category: "ia",
      title: "Análisis Predictivo",
      description: "Sistema de IA para predicción de demanda con 95% de precisión.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
      alt: "Dashboard de inteligencia artificial con análisis de datos"
    },
    {
      id: 4,
      category: "licitaciones",
      title: "Equipamiento Hospitalario",
      description: "Asesoría en licitación de equipos médicos por $5M.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=600",
      alt: "Hospital moderno - proyecto de licitación en salud"
    },
    {
      id: 5,
      category: "automatizacion",
      title: "Workflow Digital",
      description: "Automatización completa de procesos administrativos.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600",
      alt: "Interfaz de automatización de procesos digitales"
    },
    {
      id: 6,
      category: "ia",
      title: "Asistente Virtual",
      description: "Chatbot inteligente con procesamiento de lenguaje natural.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&h=600",
      alt: "Interfaz de chatbot mostrando conversación con IA"
    }
  ];

  const filters = [
    { id: "all", label: "Todos" },
    { id: "licitaciones", label: "Licitaciones" },
    { id: "automatizacion", label: "Automatización" },
    { id: "ia", label: "IA" }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "licitaciones":
        return "bg-blue-100 text-primary";
      case "automatizacion":
        return "bg-green-100 text-green-700";
      case "ia":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "licitaciones":
        return "Licitaciones";
      case "automatizacion":
        return "Automatización";
      case "ia":
        return "IA";
      default:
        return category;
    }
  };

  return (
    <section id="portafolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl" data-testid="text-portfolio-title">
            Portafolio Visual
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-portfolio-description">
            Explora algunos de nuestros proyectos más exitosos y las soluciones implementadas
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter.id 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
              data-testid={`filter-${filter.id}`}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="shadow-lg overflow-hidden hover-lift">
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-48 object-cover"
                data-testid={`img-portfolio-${item.id}`}
              />
              <CardContent className="p-6">
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${getCategoryColor(item.category)}`} data-testid={`tag-portfolio-${item.id}`}>
                  {getCategoryLabel(item.category)}
                </span>
                <h3 className="text-lg font-semibold text-card-foreground mb-2" data-testid={`text-portfolio-${item.id}-title`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-portfolio-${item.id}-description`}>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
