import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Tendencias de Automatización en 2024",
      excerpt: "Descubre las principales tendencias que están transformando los procesos empresariales este año...",
      category: "Automatización",
      date: "15 Dic 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Equipo analizando datos y tendencias de automatización"
    },
    {
      id: 2,
      title: "Implementación Exitosa de IA en PYMES",
      excerpt: "Guía práctica para pequeñas y medianas empresas que desean integrar inteligencia artificial...",
      category: "IA",
      date: "10 Dic 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Visualización de red neuronal de inteligencia artificial"
    },
    {
      id: 3,
      title: "Cambios en la Ley de Contratación Pública",
      excerpt: "Análisis de las nuevas regulaciones y su impacto en los procesos licitatorios en Colombia...",
      category: "Licitaciones",
      date: "5 Dic 2024",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Documentos legales y edificio gubernamental para contratación pública"
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert("¡Gracias por suscribirte! Te mantendremos informado con nuestras últimas noticias y recursos.");
  };

  return (
    <section id="blog" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl" data-testid="text-blog-title">
            Blog y Recursos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-blog-description">
            Mantente al día con las últimas tendencias en automatización, IA y transformación digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="shadow-lg overflow-hidden hover-lift">
              <img 
                src={post.image} 
                alt={post.alt}
                className="w-full h-48 object-cover"
                data-testid={`img-blog-${post.id}`}
              />
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span data-testid={`text-blog-${post.id}-date`}>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span data-testid={`text-blog-${post.id}-category`}>{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  <button className="hover:text-primary transition-colors text-left" data-testid={`link-blog-${post.id}`}>
                    {post.title}
                  </button>
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-blog-${post.id}-excerpt`}>
                  {post.excerpt}
                </p>
                <button className="text-primary font-medium hover:underline" data-testid={`button-read-more-${post.id}`}>
                  Leer más
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Newsletter Subscription */}
        <Card className="mt-16 shadow-lg">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-card-foreground mb-4" data-testid="text-newsletter-title">
              Suscríbete a Nuestro Boletín
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="text-newsletter-description">
              Recibe las últimas noticias y recursos directamente en tu correo
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                required
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-blue-700 transition-colors" data-testid="button-newsletter-subscribe">
                Suscribirse
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
